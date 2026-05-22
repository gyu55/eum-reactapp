// 폭죽 캔버스 컴포넌트: 뱃지 획득 모달 뒤 전체 화면 축하 효과 넣음
import { useEffect, useRef } from "react";
import * as S from "../style";

const colors = ["#4359fc", "#22c55e", "#ffcb38", "#f14141", "#b63fde", "#ffffff"];

const FireworkCanvas = () => {
  const canvasRef = useRef(null);

  // 캔버스 크기를 화면 크기 정의
  const resizeCanvas = (canvas) => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    return ratio;
  };

  // 폭죽 파티클 넣음
  const createBurst = (x, y) => {
    const particles = [];
    const particleCount = 70;

    for (let i = 0; i < particleCount; i += 1) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = 1.5 + Math.random() * 4.2;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        size: 1.2 + Math.random() * 2.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    return particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let ratio = resizeCanvas(canvas);
    let frameId;
    let tick = 0;
    let particles = [];
    let burstsLeft = 9;

    // 새 폭죽을 화면 상단 영역에 추가
    const addFirework = () => {
      const x = (window.innerWidth * (0.22 + Math.random() * 0.56)) * ratio;
      const y = (window.innerHeight * (0.16 + Math.random() * 0.34)) * ratio;
      particles = particles.concat(createBurst(x, y));
      burstsLeft -= 1;
    };

    // 폭죽 애니메이션
    const draw = () => {
      tick += 1;
      context.globalCompositeOperation = "source-over";
      context.fillStyle = "rgba(0, 0, 0, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = "lighter";

      if (burstsLeft > 0 && tick % 18 === 1) {
        addFirework();
      }

      particles = particles
        .map((particle) => ({
          ...particle,
          x: particle.x + particle.vx * ratio,
          y: particle.y + particle.vy * ratio,
          vy: particle.vy + 0.035,
          vx: particle.vx * 0.992,
          alpha: particle.alpha - 0.012,
        }))
        .filter((particle) => particle.alpha > 0);

      particles.forEach((particle) => {
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * ratio, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      ratio = resizeCanvas(canvas);
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <S.FireworkCanvas ref={canvasRef} aria-hidden="true" />;
};

export default FireworkCanvas;
