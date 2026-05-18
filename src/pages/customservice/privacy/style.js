import styled from "styled-components";
import { PRIMARY } from "../style";
import theme from "../../../styles/theme";

/* ── TOC ── */

export const PrivacyWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TocTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #888;
  margin-bottom: 12px;
`;

export const TocGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const TocItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: default;
  background: #f5f5f7;
  border: 1.5px solid transparent;
  transition: all 0.2s ease;
`;

export const TocNumber = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${PRIMARY};
  color: #fff;
  font-size: 11px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const TocLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #333;
`;

/* ── Section ── */

export const Section = styled.div``;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
  padding-bottom: 12px;
  border-bottom: 1.5px solid #f0f0f5;
`;

export const SectionSub = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.8;
  margin: 0 0 4px;
`;

/* ── Table ── */

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
`;

export const Th = styled.th`
  padding: 10px 16px;
  background: ${PRIMARY};
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;

export const Td = styled.td`
  padding: 10px 16px;
  font-size: 13px;
  color: ${({ $color }) => $color || "#333"};
  text-align: center;
  border-bottom: 1px solid #f0f0f5;
`;

/* ── Hero ── */

export const HeroCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
`;

export const HeroIllust = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eef0ff 0%, #dde1ff 100%);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
