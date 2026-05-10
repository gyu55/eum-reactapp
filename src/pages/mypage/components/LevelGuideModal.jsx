import React from "react";

import {
  ModalOverlay,
  LevelModalBox,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalDivider,
  LevelModalContent,
  LevelGuideHeader,
  LevelGuideCards,
  LevelGuideCard,
  LevelGuideRow,
  LevelGuideLabel,
  LevelGuideValue,
  LevelNoticeBox,
} from "./style";

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
    <ModalOverlay onClick={onClose}>
      <LevelModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>레벨 안내</ModalTitle>
          <ModalCloseButton type="button" onClick={onClose}>
            ×
          </ModalCloseButton>
        </ModalHeader>

        <ModalDivider />

        <LevelModalContent>
          <LevelGuideHeader>
            <span>레벨업 기준</span>
            <span>경험치 획득 방법</span>
          </LevelGuideHeader>

          <LevelGuideCards>
            <LevelGuideCard>
              {levelUpData.map((item) => (
                <LevelGuideRow key={item.label}>
                  <LevelGuideLabel>{item.label}</LevelGuideLabel>
                  <LevelGuideValue>{item.value}</LevelGuideValue>
                </LevelGuideRow>
              ))}
            </LevelGuideCard>

            <LevelGuideCard>
              {expData.map((item) => (
                <LevelGuideRow key={item.label}>
                  <LevelGuideLabel>{item.label}</LevelGuideLabel>
                  <LevelGuideValue>{item.value}</LevelGuideValue>
                </LevelGuideRow>
              ))}
            </LevelGuideCard>
          </LevelGuideCards>

          <LevelNoticeBox>
            ※ 게시글/댓글 작성 경험치는 일일 최대 3회까지만 반영됩니다.
          </LevelNoticeBox>
        </LevelModalContent>
      </LevelModalBox>
    </ModalOverlay>
  );
};

export default LevelGuideModal;