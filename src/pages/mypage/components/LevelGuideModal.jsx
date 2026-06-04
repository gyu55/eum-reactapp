import React from "react";

import S from "./style";

const levelUpData = [
  { label: "Lv.1 → Lv.2", value: "100 EXP" },
  { label: "Lv.2 → Lv.3", value: "120 EXP" },
  { label: "Lv.3 → Lv.4", value: "140 EXP" },
];

const expData = [
  { label: "출석체크", value: "+40 EXP" },
  { label: "게시글/댓글", value: "+5 EXP" },
  { label: "학습", value: "+20 EXP" },
];

const LevelGuideModal = ({ onClose }) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.LevelModalBox onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>레벨 안내</S.ModalTitle>
          <S.ModalCloseButton type="button" onClick={onClose}>
            ×
          </S.ModalCloseButton>
        </S.ModalHeader>

        <S.ModalDivider />

        <S.LevelModalContent>
          <S.LevelGuideHeader>
            <span>레벨업 기준</span>
            <span>경험치 획득 방법</span>
          </S.LevelGuideHeader>

          <S.LevelGuideCards>
            <S.LevelGuideCard>
              {levelUpData.map((item) => (
                <S.LevelGuideRow key={item.label}>
                  <S.LevelGuideLabel>{item.label}</S.LevelGuideLabel>
                  <S.LevelGuideValue>{item.value}</S.LevelGuideValue>
                </S.LevelGuideRow>
              ))}
            </S.LevelGuideCard>

            <S.LevelGuideCard>
              {expData.map((item) => (
                <S.LevelGuideRow key={item.label}>
                  <S.LevelGuideLabel>{item.label}</S.LevelGuideLabel>
                  <S.LevelGuideValue>{item.value}</S.LevelGuideValue>
                </S.LevelGuideRow>
              ))}
            </S.LevelGuideCard>
          </S.LevelGuideCards>

          <S.LevelNoticeBox>
            ※ 게시글/댓글 작성 경험치는 일일 최대 3회까지만 반영됩니다.
          </S.LevelNoticeBox>
        </S.LevelModalContent>
      </S.LevelModalBox>
    </S.ModalOverlay>
  );
};

export default LevelGuideModal;