import React, { useState } from "react";
import * as S from "./style.js";

const TYPE_LABEL = {
  INQUIRY_ANSWER:  "답변",
  NOTICE:          "공지",
  LEARNING:        "학습",
  COMMUNITY_REPLY: "댓",
  COMMUNITY_LIKE:  "좋아요",
};

const formatTime = (dateStr) => {
  if (!dateStr) return "";
  const diff = Math.floor((new Date() - new Date(dateStr)) / 1000 / 60);
  if (diff < 1)    return "방금 전";
  if (diff < 60)   return `${diff}분 전`;
  if (diff < 1440) return `${Math.floor(diff / 60)}시간 전`;
  return `${Math.floor(diff / 1440)}일 전`;
};

const NotificationItem = ({ n, onReadOne, onItemClick }) => {
  const [hovered, setHovered]   = useState(false);
  const [removing, setRemoving] = useState(false);

  const handleRead = (e) => {
    e.stopPropagation();
    setRemoving(true);
    setTimeout(() => onReadOne(n.id), 300);
  };

  return (
    <S.NotificationItem
      $removing={removing}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onItemClick(n)}
    >
      <S.IconWrap>
        <S.IconBox>{TYPE_LABEL[n.notificationType] ?? n.notificationType}</S.IconBox>
      </S.IconWrap>
      <S.NotifContent>
        <S.NotifTitle>{n.notificationName}</S.NotifTitle>
        <S.NotifDesc>{n.notificationContent}</S.NotifDesc>
      </S.NotifContent>
      {hovered ? (
        <S.ReadBtn onClick={handleRead}>✓</S.ReadBtn>
      ) : (
        <S.NotifTime>{formatTime(n.notificationCreateAt)}</S.NotifTime>
      )}
    </S.NotificationItem>
  );
};

export default NotificationItem;