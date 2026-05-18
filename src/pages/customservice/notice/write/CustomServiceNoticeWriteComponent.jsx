import React, { useState } from "react";
import * as S from "./style";

const CATEGORIES = ["공지", "업데이트", "이벤트"];

const CustomServiceNoticeWriteComponent = ({ onSubmit, onCancel, initialData }) => {
  const [category, setCategory] = useState(initialData?.category || "공지");
  const [pinned, setPinned]     = useState(initialData?.pinned || false);
  const [title, setTitle]       = useState(initialData?.title || "");
  const [content, setContent]   = useState(initialData?.content || "");

  const handleSubmit = () => {
    if (!title.trim()) return alert("제목을 입력해주세요.");
    if (!content.trim()) return alert("내용을 입력해주세요.");
    onSubmit({ category, pinned, title, content });
  };

  return (
    <S.WriteWrap>
      {/* 분류 */}
      <div>
        <S.WriteLabel as="span">
          분류 <S.WriteRequired>*</S.WriteRequired>
        </S.WriteLabel>
        <S.WriteCategoryRow>
          {CATEGORIES.map((cat) => (
            <S.WriteCategoryBtn
              key={cat}
              $active={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </S.WriteCategoryBtn>
          ))}
        </S.WriteCategoryRow>
      </div>

      {/* 고정글 여부 */}
      <S.PinnedRow>
        <S.PinnedCheckbox
          type="checkbox"
          id="pinned"
          checked={pinned}
          onChange={(e) => setPinned(e.target.checked)}
        />
        <S.PinnedLabel htmlFor="pinned">상단 고정글로 설정</S.PinnedLabel>
      </S.PinnedRow>

      {/* 제목 */}
      <div>
        <S.WriteLabel>
          제목 <S.WriteRequired>*</S.WriteRequired>
        </S.WriteLabel>
        <S.WriteInput
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 내용 */}
      <div>
        <S.WriteLabel>
          내용 <S.WriteRequired>*</S.WriteRequired>
        </S.WriteLabel>
        <S.WriteTextarea
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* 버튼 */}
      <S.WriteBtnRow>
        <S.CancelBtn onClick={onCancel}>취소</S.CancelBtn>
        <S.ConfirmBtn onClick={handleSubmit}>등록하기</S.ConfirmBtn>
      </S.WriteBtnRow>
    </S.WriteWrap>
  );
};

export default CustomServiceNoticeWriteComponent;
