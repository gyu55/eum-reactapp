import styled from "styled-components";
import theme from "../../../styles/theme";
import { PALETTE_EXT, RADIUS, SHADOW } from "../constants";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Card = styled.div`
  background: ${PALETTE.white};
  border-radius: ${RADIUS.card};
  box-shadow: ${SHADOW.card};
  padding: 36px 40px 32px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: ${FONT_SIZE.h8};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
  margin: 0;
  line-height: 28px;
`;

export const InfoBox = styled.div`
  background: #fff5f5;
  border: 1px solid ${PALETTE.red};
  border-radius: ${RADIUS.input};
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLabel = styled.p`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.red};
  margin: 0;
`;

export const InfoList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoItem = styled.li`
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  line-height: 22px;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const CancelButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: ${RADIUS.button};
  border: 2px solid ${GRAYSCALE[8]};
  background: ${PALETTE.white};
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${GRAYSCALE[9]};
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: ${RADIUS.button};
  border: none;
  background: ${PALETTE.red};
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${PALETTE_EXT.redHover};
  }
`;
