import styled from "styled-components";
import theme from "../../../../styles/theme";

const PROFILE_GRADIENT = `linear-gradient(169.69deg, ${theme.PALETTE.primary.main} 0%, #6478FD 100%)`;
const WHITE_20 = "rgba(255, 255, 255, 0.2)";
const WHITE_40 = "rgba(255, 255, 255, 0.4)";
const WHITE_85 = "rgba(255, 255, 255, 0.85)";

export const ProfileBar = styled.div`
  background: ${PROFILE_GRADIENT};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const AvatarImg = styled.img`
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 20px;
  object-fit: cover;
  pointer-events: none;
`;

export const UserInfoRow = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`;

export const Nickname = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.56px;
  line-height: normal;
`;

export const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoTag = styled.div`
  padding: 4px 16px;
  border-radius: 100px;
  border: 1px solid ${WHITE_40};
  background: ${WHITE_20};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.24px;
  line-height: 20px;
  white-space: nowrap;
`;

export const Bio = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${WHITE_85};
  letter-spacing: -0.28px;
  line-height: 22px;
`;

export const JoinInfo = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${WHITE_85};
  letter-spacing: -0.24px;
  line-height: 20px;
`;

export const FollowButton = styled.button`
  flex-shrink: 0;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${WHITE_40};
  background: ${WHITE_20};
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.28px;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`;
