import React, { useState } from "react";
import { TABS, REVIEW_TAGS } from "./constants";
import * as S from "./style.js";
import StarRating from "./starRating"; // ← 추가

/* ── 개별 알림 아이템 ── */
const NotificationItem = ({ n, onReadOne, onItemClick }) => {
  const [hovered, setHovered] = useState(false);
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
        <S.IconBox $bg={n.color} $color={n.textColor}>{n.type}</S.IconBox>
        {n.badge && <S.Badge>{n.badge}</S.Badge>}
      </S.IconWrap>
      <S.NotifContent>
        <S.NotifTitle>{n.title}</S.NotifTitle>
        <S.NotifDesc>{n.desc}</S.NotifDesc>
      </S.NotifContent>
      {hovered ? (
        <S.ReadBtn onClick={handleRead}>✓</S.ReadBtn>
      ) : (
        <S.NotifTime>{n.time}</S.NotifTime>
      )}
    </S.NotificationItem>
  );
};

/* ── 후기 작성 화면 ── */
const ReviewScreen = ({ onBack, onClose }) => {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  if (submitted) {
    return <S.EmptyMsg>후기가 등록되었습니다 🎉</S.EmptyMsg>;
  }

  return (
    <>
      <S.Header>
        <S.BackBtn onClick={onBack}>←</S.BackBtn>
        <S.Title>수업 후기 작성</S.Title>
      </S.Header>
      <S.ReviewBody>
        <S.SectionLabel>수업은 어떠셨나요?</S.SectionLabel>

        {/* StarRating 컴포넌트 사용 */}
        <StarRating rating={rating} onChange={setRating} />

        <S.SectionLabel>어떤 점이 좋았나요? (복수 선택)</S.SectionLabel>
        <S.TagRow>
          {REVIEW_TAGS.map((tag) => (
            <S.Tag key={tag} $selected={selectedTags.includes(tag)} onClick={() => toggleTag(tag)}>
              {tag}
            </S.Tag>
          ))}
        </S.TagRow>
        <S.SectionLabel>자세한 후기를 남겨주세요</S.SectionLabel>
        <S.ReviewTextarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="수업에 대한 솔직한 후기를 남겨주세요."
        />
        <S.SubmitBtn onClick={handleSubmit}>후기 등록하기</S.SubmitBtn>
      </S.ReviewBody>
    </>
  );
};

/* ── 메인 컴포넌트 ── */
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
    if (n.action === "review") setShowReview(true);
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
            <S.TabRow>
              {TABS.map((tab) => (
                <S.TabBtn key={tab} $active={activeTab === tab} onClick={() => onTabChange(tab)}>
                  {tab}
                </S.TabBtn>
              ))}
            </S.TabRow>
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