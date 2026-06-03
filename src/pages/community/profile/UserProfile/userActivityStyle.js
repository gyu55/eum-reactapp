import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Card = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 24px 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 312px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  margin: 0;
  width: 100%;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: normal;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.GRAYSCALE[8]};
  flex-shrink: 0;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 118px);
  gap: 12px;
`;

export const StatItem = styled.div`
  background: ${theme.GRAYSCALE[10]};
  border-radius: 12px;
  padding: 9px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatValue = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  letter-spacing: -0.4px;
  line-height: normal;
`;

export const StatLabel = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  letter-spacing: -0.24px;
  line-height: 20px;
  white-space: nowrap;
`;
