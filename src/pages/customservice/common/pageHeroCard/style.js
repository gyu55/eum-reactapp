import styled from "styled-components";
import { PRIMARY, GRAY, TEXT_BLACK } from "../../style";

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
  font-size: 14px;
  font-weight: 700;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${TEXT_BLACK};
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 14px;
  color: ${GRAY};
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