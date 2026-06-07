import React, { useState } from "react";
import { REVIEW_TAGS } from "./constants";
import * as S from "./style.js";
import StarRating from "./starRating";

const ReviewScreen = ({ onBack, onClose }) => {
  const [rating, setRating]           = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [text, setText]               = useState("");
  const [submitted, setSubmitted]     = useState(false);
  const [error, setError]             = useState(null);
  const [loading, setLoading]         = useState(false);

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:10000/api/review", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reviewRating: rating,
          reviewTags: selectedTags,
          reviewContent: text,
        }),
      });
      if (res.status === 401) { setError("로그인이 필요합니다."); return; }
      if (!res.ok) { setError("후기 등록에 실패했어요. 다시 시도해주세요."); return; }
      setSubmitted(true);
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      console.error("후기 등록 에러:", err);
      setError("네트워크 오류가 발생했어요. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <S.EmptyMsg>후기가 등록되었습니다 🎉</S.EmptyMsg>;

  return (
    <>
      <S.Header>
        <S.BackBtn onClick={onBack}>←</S.BackBtn>
        <S.Title>수업 후기 작성</S.Title>
      </S.Header>
      <S.ReviewBody>
        <S.SectionLabel>수업은 어떠셨나요?</S.SectionLabel>
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
        {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
        <S.SubmitBtn onClick={handleSubmit} disabled={loading}>
          {loading ? "등록 중..." : "후기 등록하기"}
        </S.SubmitBtn>
      </S.ReviewBody>
    </>
  );
};

export default ReviewScreen;