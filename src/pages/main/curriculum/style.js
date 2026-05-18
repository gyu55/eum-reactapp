import styled from "styled-components";
import theme from "../../../styles/theme";

const curriculumGray = "#E0E0EF";
const textGray = "#888888";

/* ── Section ── */

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
`;

export const SectionTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  align-self: flex-start;
  padding-left: 370px;
  margin-bottom: 71px;
`;

/* ── Steps ── */

export const StepRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 670px;
  margin-bottom: 25px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StepCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $active }) => ($active ? theme.PALETTE.primary.main : curriculumGray)};
  width: 61px;
  height: 61px;
  border-radius: 50%;
  color: ${({ $active }) => ($active ? theme.PALETTE.white : textGray)};
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.medium};
`;

export const StepLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.medium};
  color: ${({ $active }) => ($active ? theme.PALETTE.primary.main : textGray)};
`;

export const StepCount = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${textGray};
`;

export const StepLine = styled.div`
  flex: 1;
  height: 5px;
  background-color: ${curriculumGray};
  margin-top: 28px;
`;

/* ── Info Box ── */

export const InfoBox = styled.div`
  width: 1096px;
  height: 355px;
  border-radius: 50px;
  border: solid 1px ${theme.PALETTE.primary.main};
  margin-bottom: 150px;
  padding-top: 35px;
  padding-left: 66px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const InfoSubTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.medium};
  margin-bottom: 14px;
`;

export const InfoTitle = styled.span`
  margin-bottom: 10px;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.primary};
`;

export const InfoMeta = styled.span`
  margin-bottom: 5px;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
`;

export const TagRow = styled.div`
  display: flex;
  gap: 9px;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.medium};
  color: ${theme.GRAYSCALE[7]};
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 20px;
  align-self: center;
  margin-top: auto;
`;

export const PrimaryBtn = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 40px;
  background-color: ${theme.PALETTE.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrimaryBtnLabel = styled.button`
  color: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  background: none;
  border: none;
  cursor: pointer;
`;

export const OutlineBtn = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 40px;
  border: solid 1px ${theme.PALETTE.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OutlineBtnLabel = styled.button`
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.medium};
  background: none;
  border: none;
  cursor: pointer;
`;

/* ── Modal ── */

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 36px 40px;
  width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #1a1a2e;
`;

export const ModalCloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #aaa;
`;

export const ModalTabRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const ModalTabBtn = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background: ${({ $active }) => ($active ? theme.PALETTE.primary.main : "#f2f3f8")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const ModalContent = styled.div`
  background: #f8f9ff;
  border-radius: 16px;
  padding: 20px 24px;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const ModalStepCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const ModalStepLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
`;

export const ModalStepCount = styled.span`
  font-size: 13px;
  color: #aaa;
`;

export const ModalItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #fff;
  border-radius: 10px;
  font-size: 14px;
  color: #333;
`;

export const ModalItemNum = styled.span`
  color: ${({ $color }) => $color};
  font-weight: 700;
  font-size: 13px;
  min-width: 28px;
`;
