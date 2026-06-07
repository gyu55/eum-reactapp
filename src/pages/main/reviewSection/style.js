import styled from "styled-components";

export const ReviewCard = styled.div`
  width: 380px;
  height: 220px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  text-align: left;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ReviewCardGrid = styled.div`
  width: 100%;
  min-height: 220px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  text-align: left;
  overflow: hidden;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 2px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ReviewText = styled.p`
  font-size: 15px;
  color: #222;
  line-height: 1.65;
  margin: 0;
  flex: 1;
  white-space: pre-line;
  text-align: left;
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: #ede9f5;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProfileName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #222;
`;

export const ProfileSub = styled.span`
  font-size: 12px;
  color: #888;
`;

export const SectionWrap = styled.div`
  width: 100%;
  background-color: #f0eff5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #111;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

/* ── Review Card ── */


export const PageWrap = styled.div`
  width: 100%;
  background-color: #f0eff5;
  min-height: 100vh;
`;

export const PageInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
`;


export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SliderWrap = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const CardViewport = styled.div`
  width: calc(380px * 3 + 24px * 2);
  overflow: hidden;
`;

export const CardTrack = styled.div`
  display: flex;
  gap: 24px;
  transform: translateX(-${({ $offset }) => $offset}px);
  transition: ${({ $animated }) => $animated 
    ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
    : "none"};   /* ← 이게 빠져있으면 점프가 보임 */
`;

export const ArrowBtn = styled.button`
  width: 44px;
  height: 220px;                       /* ← 카드 높이 직접 지정 */
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 22px;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.25s ease, background 0.25s ease;

  &:hover:not(:disabled) {
    color: rgba(255, 255, 255, 0.85);
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const MoreButton = styled.button`
  margin-top: 32px;
  padding: 12px 32px;
  border-radius: 24px;
  border: 1.5px solid #7b5ea7;
  background: #fff;
  color: #7b5ea7;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #7b5ea7;
    color: #fff;
  }
`;