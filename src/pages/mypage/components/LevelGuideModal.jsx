import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, FONT_WEIGHT } = theme;

/* 모달 배경 */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 24, 39, 0.25);
`;

/* 모달 박스 */
const LevelModalBox = styled.div`
  width: 534px;
  height: 270px;
  padding: 18px 28px 16px;
  box-sizing: border-box;

  background: ${PALETTE.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.12);
`;

/* 상단 영역 */
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 제목 */
const ModalTitle = styled.h3`
  margin: 0;

  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 닫기 버튼 */
const ModalCloseButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[7]};
`;

/* 구분선 */
const ModalDivider = styled.div`
  height: 1px;
  margin-top: 10px;

  background: #e5e7eb;
`;

/* 본문 영역 */
const LevelModalContent = styled.div`
  padding-top: 8px;
`;

/* 섹션 제목 */
const LevelGuideHeader = styled.div`
  display: flex;
  gap: 196px;
  margin-bottom: 18px;

  span {
    font-size: 12px;
    font-weight: ${FONT_WEIGHT.bold};
    color: #6b7280;
  }
`;

/* 카드 묶음 */
const LevelGuideCards = styled.div`
  display: flex;
  gap: 28px;
`;

/* 안내 카드 */
const LevelGuideCard = styled.div`
  width: 224px;
  height: 108px;
  padding: 16px 18px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};
`;

/* 카드 행 */
const LevelGuideRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 14px;
  }
`;

/* 카드 라벨 */
const LevelGuideLabel = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #111827;
`;

/* EXP 텍스트 */
const LevelGuideValue = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 안내 문구 박스 */
const LevelNoticeBox = styled.div`
  width: 478px;
  height: 30px;
  margin-top: 19px;
  padding: 0 12px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-radius: 8px;
  background: #fed7aa;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #92400e;
`;

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