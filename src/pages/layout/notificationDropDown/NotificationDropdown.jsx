import React, { useState } from "react";
import { TABS } from "./constants";
import * as S from "./style.js";
import NotificationItem from "./NotificationItem";
import ReviewScreen from "./ReviewScreen.jsx";

const NotificationDropdown = ({
  notifications,
  activeTab,
  onTabChange,
  onClose,
  onReadAll,
  onReadOne,
}) => {
  const [showReview, setShowReview] = useState(false);

  const handleItemClick = (n) => {
  if (n.notificationType === "REVIEW") {
    setShowReview(true);   // ← 리뷰 타입이면 작성 화면으로
    return;
  }
  if (n.notificationUrl) window.location.href = n.notificationUrl;
};

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.DropdownWrap>
        {showReview ? (
          <ReviewScreen onBack={() => setShowReview(false)} onClose={onClose} />
        ) : (
          <>
            <S.Header>
              <S.Title>알림</S.Title>
              {notifications.length > 0 && (
                <S.ReadAllBtn onClick={onReadAll}>모두 읽음</S.ReadAllBtn>
              )}
            </S.Header>
            <S.NotificationList>
              {notifications.length === 0 ? (
                <S.EmptyMsg>새로운 알림이 없습니다.</S.EmptyMsg>
              ) : (
                notifications.map((n) => (
                  <NotificationItem
                    key={n.id}
                    n={n}
                    onReadOne={onReadOne}
                    onItemClick={handleItemClick}
                  />
                ))
              )}
            </S.NotificationList>
          </>
        )}
      </S.DropdownWrap>
    </>
  );
};

export default NotificationDropdown;