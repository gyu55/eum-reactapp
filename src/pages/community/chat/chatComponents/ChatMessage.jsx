import React, { useState, useEffect,useRef } from "react";
import * as S from "./chatMessageStyle";
import defaultProfile from "../../assets/chat/chat_default_profile.svg";
import SignAvatar from "../../../../components/SignAvatar";

const IMAGE_BASE_URL = "http://localhost:10000";

// 수어 단어로 keypoints를 fetch해서 아바타 재생
const SignAvatarByWord = React.memo(({ word }) => {
  const [keypoints, setKeypoints] = useState(null)
  const [visible, setVisible] = useState(false)   // 👈 화면에 보이는지
  const wrapRef = useRef(null)                      // 👈 감지용 ref

  // keypoints fetch (기존 그대로)
  useEffect(() => {
    console.log('수어 단어 fetch:', word)
    let cancelled = false
    fetch(`/api/sign/translate?text=${encodeURIComponent(word)}`)
      .then(res => res.json())
      .then(json => {
        if (cancelled) return
        if (json.success && !json.data?.error && json.data?.keypoints?.length) {
          setKeypoints(json.data.keypoints)
        }
      })
      .catch(err => console.error('수어 keypoints fetch 실패:', err))
    return () => { cancelled = true }
  }, [word])

  // 👇 화면에 보이는지 감지
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }   // 10% 보이면 visible
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapRef} style={{ width: 200, height: 400 }}>
      {keypoints && visible
        ? <SignAvatar autoPlay keypoints={keypoints} />
        : null /* 안 보이거나 로딩 중엔 Canvas 없음 → 빈 공간 유지 */
      }
    </div>
  )
}, (prev, next) => prev.word === next.word)

const ChatMessage = ({
  isMine = false,
  message = "메세지 메세지",
  time = "14:02",
  username = "ㅇㅇ",
  profileImage = null,
  chatType = "텍스트",
  userId = null,
  userExp = 0,
  onProfileClick = null,
}) => {
  const handleProfileClick = () => {
    if (onProfileClick && !isMine) {
      onProfileClick({ id: userId, userProfile: profileImage, userNickname: username, userExp });
    }
  };

  // 수어 타입: 아바타(위) + 말풍선(아래)
  if (chatType === "수어") {
    return (
      <S.MessageRow $isMine={isMine}>
        {!isMine && (
          profileImage ? (
            <S.ProfileImage
              src={profileImage}
              alt={username}
              onError={(e) => { e.target.src = defaultProfile }}
              onClick={handleProfileClick}
              style={{ cursor: onProfileClick ? "pointer" : "default" }}
            />
          ) : (
            <S.ProfilePlaceholder
              onClick={handleProfileClick}
              style={{ cursor: onProfileClick ? "pointer" : "default" }}
            />
          )
        )}
        <S.MessageArea style={{ alignItems: isMine ? 'flex-end' : 'flex-start' }}>
          {!isMine && <S.Username>{username}</S.Username>}
          <SignAvatarByWord word={message} />
          <S.BubbleRow>
            {isMine && <S.TimeText>{time}</S.TimeText>}
            <S.Bubble $isMine={isMine}>
              <S.MessageText $isMine={isMine}>🤟 {message}</S.MessageText>
            </S.Bubble>
            {!isMine && <S.TimeText>{time}</S.TimeText>}
          </S.BubbleRow>
        </S.MessageArea>
      </S.MessageRow>
    )
  }

  const bubbleContent = chatType === "IMAGE" ? (
    <S.ChatImg src={`${IMAGE_BASE_URL}${message}`} alt="이미지" />
  ) : (
    <S.Bubble $isMine={isMine}>
      <S.MessageText $isMine={isMine}>{message}</S.MessageText>
    </S.Bubble>
  );

  if (isMine) {
    return (
      <S.MessageRow $isMine={true}>
        <S.BubbleRow>
          <S.TimeText>{time}</S.TimeText>
          {bubbleContent}
        </S.BubbleRow>
      </S.MessageRow>
    );
  }

  return (
    <S.MessageRow $isMine={false}>
      {profileImage ? (
        <S.ProfileImage
          src={profileImage}
          alt={username}
          onError={(e) => { e.target.src = defaultProfile }}
          onClick={handleProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        />
      ) : (
        <S.ProfilePlaceholder
          onClick={handleProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        />
      )}
      <S.MessageArea>
        <S.Username>{username}</S.Username>
        <S.BubbleRow>
          {bubbleContent}
          <S.TimeText>{time}</S.TimeText>
        </S.BubbleRow>
      </S.MessageArea>
    </S.MessageRow>
  );
};

export default React.memo(ChatMessage)
