import { OrbitControls } from '@react-three/drei'
import { useRef, useEffect, useMemo, forwardRef, useImperativeHandle, useState } from 'react'
import { useLoader, Canvas, useFrame } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { clone as skeletonClone } from 'three/examples/jsm/utils/SkeletonUtils'

useLoader.preload(FBXLoader, '/Amy.fbx')

const POSE_BONES = ['LeftArm', 'RightArm', 'LeftForeArm', 'RightForeArm']

function getXY(frame, idx) {
  return { x: frame[idx * 3], y: frame[idx * 3 + 1] }
}

function keypointsToBoneRotations(frames) {
  return frames.map((frame) => {
    const rShoulder = getXY(frame, 2)
    const rElbow    = getXY(frame, 3)
    const rWrist    = getXY(frame, 4)
    const lShoulder = getXY(frame, 5)
    const lElbow    = getXY(frame, 6)
    const lWrist    = getXY(frame, 7)

    const rValid     = rShoulder.x !== 0 && rElbow.x !== 0
    const lValid     = lShoulder.x !== 0 && lElbow.x !== 0
    const rForeValid = rElbow.x !== 0 && rWrist.x !== 0
    const lForeValid = lElbow.x !== 0 && lWrist.x !== 0

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

    // norm을 좌표 스케일(700~900)에 맞춰 크게 → clamp 한계에 안 박힘
    const norm = 350

    // ── 위팔 (어깨 → 팔꿈치) ──
    const rDy = rValid ? (rElbow.y - rShoulder.y) : 0
    const rDx = rValid ? (rElbow.x - rShoulder.x) : 0
    const lDy = lValid ? (lElbow.y - lShoulder.y) : 0
    const lDx = lValid ? (lElbow.x - lShoulder.x) : 0

    const rArmX = rValid ? clamp(-rDy / norm, -1.4, 1.4) : 0
    const lArmX = lValid ? clamp(-lDy / norm, -1.4, 1.4) : 0
    const rArmZ = rValid ? clamp(rDx / norm, -1.8, 0.3) : 0
    const lArmZ = lValid ? clamp(-lDx / norm, -0.3, 1.8) : 0

    // ── 아래팔 (팔꿈치 → 손목) : 단어 구분의 핵심 ──
    const rForeDy = rForeValid ? (rWrist.y - rElbow.y) : 0
    const rForeDx = rForeValid ? (rWrist.x - rElbow.x) : 0
    const lForeDy = lForeValid ? (lWrist.y - lElbow.y) : 0
    const lForeDx = lForeValid ? (lWrist.x - lElbow.x) : 0

    // 아래팔은 norm을 더 작게(=민감하게) → 손목 움직임이 크게 반영됨
    const foreNorm = 200
    const rForeX = rForeValid ? clamp(rForeDy / foreNorm, -1.8, 1.8) : 0   // -rForeDy → rForeDy
    const lForeX = lForeValid ? clamp(lForeDy / foreNorm, -1.8, 1.8) : 0
    const rForeZ = rForeValid ? clamp(rForeDx / foreNorm, -1.8, 1.8) : 0
    const lForeZ = lForeValid ? clamp(-lForeDx / foreNorm, -1.8, 1.8) : 0

    // Y축(비틀기)도 손목 가로 위치로 살짝 넣어 입체감 ↑
    const rForeY = rForeValid ? clamp(rForeDx / 400, -0.8, 0.8) : 0
    const lForeY = lForeValid ? clamp(-lForeDx / 400, -0.8, 0.8) : 0

    return {
      RightArm:     { x: rArmX,  y: 0,       z: rArmZ  },
      LeftArm:      { x: lArmX,  y: 0,       z: lArmZ  },
      RightForeArm: { x: rForeX, y: rForeY,  z: rForeZ },
      LeftForeArm:  { x: lForeX, y: lForeY,  z: lForeZ },
    }
  })
}

// T포즈 = POSE_BONES 회전 전부 0
const T_POSE = {
  LeftArm:      { x: 1, y: 0, z: 0 },   // 0.7 → 0.95 더 내림
  RightArm:     { x: 1, y: 0, z: 0 },
  LeftForeArm:  { x: 0.1,  y: 0, z: 0 },   // 아래팔은 거의 폄
  RightForeArm: { x: 0.1,  y: 0, z: 0 },
}

function applyRotationImmediate(bones, rotations) {
  POSE_BONES.forEach((name) => {
    const bone = bones[name]
    const r = rotations[name]
    if (!bone || !r) return
    bone.rotation.x = r.x
    bone.rotation.y = r.y
    bone.rotation.z = r.z
  })
}

// ── AvatarInner ──────────────────────────────────────────────────
const AvatarInner = forwardRef(function AvatarInner({ keypointsFrames, onPlayEnd, withControls }, ref) {
  const fbxRaw = useLoader(FBXLoader, '/Amy.fbx')
  const fbx = useMemo(() => skeletonClone(fbxRaw), [fbxRaw])

  const bonesRef = useRef({})
  const readyRef = useRef(false)
  const stateRef = useRef({
    target: T_POSE,    // 시작 = T포즈
    speed: 0.2,
    frameIdx: 0,
    playing: false,
    boneFrames: null,
    fps: 10,
    lastFrameTime: 0,
  })

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isBone) {
        const name = child.name.replace(/^mixamorig[_:]?/, '')
        bonesRef.current[name] = child
      }
    })
    // 마운트 시 T포즈로 명시적 초기화
    applyRotationImmediate(bonesRef.current, T_POSE)
    readyRef.current = true

    // keypoints 있으면 T포즈 잠깐 보여준 뒤 재생 (1500ms)
    if (keypointsFrames && keypointsFrames.length > 0) {
      const timer = setTimeout(() => startPlay(keypointsFrames), 1500)
      return () => clearTimeout(timer)
    }
  }, [fbx])

  function startPlay(frames) {
    const wrists = frames.map(f => getXY(f, 4))
    const xs = wrists.map(w => w.x)
    const ys = wrists.map(w => w.y)
    console.log('프레임수:', frames.length)
    console.log('손목 X 범위:', Math.min(...xs).toFixed(0), '~', Math.max(...xs).toFixed(0))
    console.log('손목 Y 범위:', Math.min(...ys).toFixed(0), '~', Math.max(...ys).toFixed(0))
    console.log('첫프레임 손목:', getXY(frames[0], 4))
    console.log('끝프레임 손목:', getXY(frames[frames.length-1], 4))
    console.log('frame[0] 전체:', frames[0])
    console.log('frame[0] 길이:', frames[0].length)

    const boneFrames = keypointsToBoneRotations(frames)
    const s = stateRef.current
    s.boneFrames = boneFrames
    s.frameIdx = 0
    s.playing = true
    s.target = boneFrames[0]
    s.speed = 0.15
    s.fps = 10
    s.lastFrameTime = performance.now()
  }

  useEffect(() => {
    if (!readyRef.current) return
    if (!keypointsFrames || keypointsFrames.length === 0) return
    // T포즈로 리셋 후 잠깐 뒤 재생
    applyRotationImmediate(bonesRef.current, T_POSE)
    stateRef.current.target = T_POSE
    stateRef.current.playing = false
    const timer = setTimeout(() => startPlay(keypointsFrames), 300)
    return () => clearTimeout(timer)
  }, [keypointsFrames])

  useImperativeHandle(ref, () => ({
    playKeypoints: (frames) => { if (frames?.length) startPlay(frames) },
  }), [])

  useFrame(() => {
    const s = stateRef.current
    const bones = bonesRef.current
    const { target, speed } = s

    if (target) {
      POSE_BONES.forEach((name) => {
        const bone = bones[name]
        const t = target[name]
        if (!bone || !t) return
        bone.rotation.x += (t.x - bone.rotation.x) * speed
        bone.rotation.y += (t.y - bone.rotation.y) * speed
        bone.rotation.z += (t.z - bone.rotation.z) * speed
      })
    }

    if (!s.playing || !s.boneFrames) return

    const now = performance.now()
    const frameDuration = 1000 / s.fps
    if (now - s.lastFrameTime < frameDuration) return
    s.lastFrameTime = now

    const next = s.frameIdx + 1
    if (next < s.boneFrames.length) {
      s.frameIdx = next
      s.target = s.boneFrames[next]
    } else {
      // 애니메이션 끝 → T포즈로 부드럽게 복귀
      s.playing = false
      s.boneFrames = null
      s.target = T_POSE   // null 대신 T포즈 타겟
      s.speed = 0.1
    }
  })

  return (
    <>
      <primitive object={fbx} scale={0.01} position={[0, -1, 0]} />
      {withControls && <OrbitControls />}
    </>
  )
})

// ── SignAvatar ───────────────────────────────────────────────────
const SignAvatar = forwardRef(({ autoPlay = false, keypoints = null, onEnd }, ref) => {
  const avatarRef = useRef(null)
  const canvasRef = useRef(null)
  const [fbxReady, setFbxReady] = useState(false)

  useImperativeHandle(ref, () => ({
    playKeypoints: (frames) => avatarRef.current?.playKeypoints(frames),
  }), [])

  useEffect(() => {
    let cancelled = false
    new FBXLoader().loadAsync('/Amy.fbx')
      .then(() => { if (!cancelled) setFbxReady(true) })
      .catch(() => { if (!cancelled) setFbxReady(true) })
    return () => { cancelled = true }
  }, [])

  // WebGL Context Lost 복구
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const handleLost = (e) => {
      e.preventDefault()
      console.warn('WebGL Context Lost - 복구 시도')
    }
    canvas.addEventListener('webglcontextlost', handleLost, false)
    return () => canvas.removeEventListener('webglcontextlost', handleLost)
  }, [fbxReady])

  const size = autoPlay
    ? { width: '200px', height: '400px' }
    : { width: '400px', height: '600px' }

  const cameraPos = autoPlay ? [0, -0.5, 4] : [0, 1, 3]

  if (!fbxReady) {
    return <div style={{ ...size, background: 'transparent' }} />
  }

  return (
    <div style={size}>
      <Canvas
        ref={canvasRef}
        camera={{ position: cameraPos, fov: 50 }}
        frameloop="always"
        gl={{ powerPreference: 'low-power', preserveDrawingBuffer: false }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={0.5} />
        <AvatarInner
          ref={avatarRef}
          keypointsFrames={keypoints}
          onPlayEnd={onEnd}
          withControls={!autoPlay}
        />
      </Canvas>
    </div>
  )
})

export default SignAvatar
