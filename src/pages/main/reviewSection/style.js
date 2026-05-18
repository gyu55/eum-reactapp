import styled from "styled-components";
import theme from "../../../styles/theme";

const backGroundGray = "#F7F7FB";
const textGray = "#888888";

/* ── Section ── */

export const SectionWrap = styled.div`
  width: 100%;
  background-color: ${backGroundGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.span`
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

export const SubTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.light};
  color: ${textGray};
  margin-top: 16px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

/* ── Review Card ── */

export const ReviewCard = styled.div`
  width: 340px;
  background-color: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 2px;
`;

export const ReviewText = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  white-space: pre-line;
  line-height: 1.7;
  color: ${theme.PALETTE.black};
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 12px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

export const ProfileSub = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${textGray};
`;
