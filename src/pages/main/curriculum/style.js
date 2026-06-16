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
  width: 650px;
  margin-bottom: 25px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;  /* ← 추가 */
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


/* ── Info Box ── */

export const InfoBox = styled.div`
  width: 920px;
  height: 355px;
  border-radius: 50px;
  border: solid 1px ${theme.PALETTE.primary.main};
  margin-bottom: 150px;
  padding-top: 30px;
  padding-left: 66px;
  padding-right: 66px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const InfoSubTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.medium};
  margin-bottom: 14px;
`;
export const InfoSub = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.medium};
  margin-bottom: 10px;
  align-self: flex-start;
  padding-left: 512px;
  display: flex;
  align-items: center;
  gap : 6px;
`;

export const ClickIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const InfoTitle = styled.span`
  margin-bottom: 10px;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.primary};
`;

export const InfoTitleCurriculum = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
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

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: auto;
`;

export const PrimaryBtn = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 40px;
  background-color: ${theme.PALETTE.primary.main};
  border: 2px solid ${theme.PALETTE.primary.main}; 
  color : ${theme.PALETTE.white};
  font-weight: ${theme.FONT_WEIGHT.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;  

  &:hover {
    background-color: ${theme.PALETTE.white};
    color : ${theme.PALETTE.primary.main};
  }

  &::after {
    content: '→';
    font-size: 16px;
    max-width: 0;
    font-weight: ${theme.FONT_WEIGHT.bold};
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.5s ease;
    color: transparent;
    margin-left: 5px;
  }

  &:hover::after {
    max-width: 30px;
    color: ${theme.PALETTE.primary.main};
  }
`;

export const PrimaryBtnLabel = styled.button`
  color: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease;  
  pointer-events: none; 

  ${PrimaryBtn}:hover & {
    color: ${theme.PALETTE.primary.main};
  }
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  padding: 20px 24px 20px 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
`;

export const ModalStepCount = styled.span`
  font-size: 13px;
  color: #aaa;
`;

export const ModalItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bbb;
  }
`;

export const ModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #fff;
  border-radius: 10px;
  font-size: 14px;
`;

export const ModalItemNum = styled.span`
  color: ${({ $color }) => $color};
  font-weight: 700;
  font-size: 13px;
  min-width: 28px;
`;

export const StepLineWrap = styled.div`
  flex: 1;
  height: 5px;
  background: ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 99px;
  overflow: hidden;
  margin-top: 30px;
`;

export const StepLineFill = styled.div`
  height: 100%;
  width: ${({ $fill }) => ($fill ? "100%" : "0%")};
  background: ${({ theme }) => theme.PALETTE.primary.main};
  border-radius: 99px;
  transition: width 0.4s cubic-bezier(.4, 0, .2, 1);
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  margin-bottom: 10px;
  max-height: 300px;
  overflow-y: auto;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.GRAYSCALE[1]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  opacity: 0;
  animation: fadeUp 0.3s ease forwards;
  animation-delay: ${({ $delay }) => $delay}ms;

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export const ItemNum = styled.span`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.PALETTE.primary.main};
  min-width: 20px;
`;

export const StepTooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: #555;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #fff;
  }

  ${StepItem}:hover & {
    opacity: 1;
  }
`;