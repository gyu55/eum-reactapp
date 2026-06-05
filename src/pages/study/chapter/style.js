// 오!퀴즈 스타일
import styled from "styled-components";
import { Link } from "react-router-dom";

const popIn = `
  @keyframes badgeModalPopIn {
    0% {
      opacity: 0;
      transform: translateY(18px) scale(0.92);
    }
    70% {
      opacity: 1;
      transform: translateY(-4px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const badgePop = `
  @keyframes badgeIconPop {
    0% {
      transform: scale(0.4) rotate(-18deg);
      opacity: 0;
    }
    60% {
      transform: scale(1.18) rotate(8deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
  }
`;

export const ChapterWrap = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 48px 0 150px;
  background: #f7f7fb;
  font-family: Pretendard, sans-serif;
`;

export const ChapterReadyWrap = styled(ChapterWrap)`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 80px);
  padding: 24px 0;
  box-sizing: border-box;
`;

export const ChapterHero = styled.header`
  width: min(900px, calc(100% - 48px));
  margin: 0 auto 56px;
  text-align: center;

  span {
    display: inline-flex;
    margin-bottom: 22px;
    padding: 8px 20px;
    border-radius: 999px;
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  h1 {
    margin: 0 0 22px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h3};
    line-height: ${({ theme }) => theme.FONT_LINE.h3};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    width: min(560px, 100%);
    margin: 0 auto;
    color: #555;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    line-height: ${({ theme }) => theme.FONT_LINE.h9};
  }
`;

export const ChapterSummary = styled.div`
  width: min(820px, calc(100% - 48px));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 0 auto 44px;

  div {
    padding: 24px 20px;
    border-radius: 18px;
    background: ${({ theme }) => theme.PALETTE.white};
    text-align: center;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  span {
    color: #777;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  }
`;

export const ChapterGrid = styled.div`
  width: min(1180px, calc(100% - 48px));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin: 0 auto;
`;

const toneMap = {
  yellow: "#ffcb38",
  red: "#f14141",
  purple: "#b63fde",
};

export const ChapterCard = styled.button`
  min-height: 430px;
  padding: 38px 34px 32px;
  border: 0;
  border-radius: 24px;
  background: ${({ theme }) => theme.PALETTE.white};
  text-align: left;
  cursor: pointer;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 54px rgba(0, 0, 0, 0.1);
  }

  .badge {
    display: inline-flex;
    margin-bottom: 30px;
    padding: 7px 17px;
    border-radius: 999px;
    background: ${({ $tone }) => toneMap[$tone] || "#4359fc"};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  img {
    width: 112px;
    height: 112px;
    display: block;
    margin: 0 auto 32px;
    padding: 18px;
    border-radius: 36px;
    background: #f7f7fb;
    object-fit: contain;
    box-sizing: border-box;
  }

  strong {
    display: block;
    margin-bottom: 14px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    line-height: ${({ theme }) => theme.FONT_LINE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    min-height: 52px;
    margin: 0 0 24px;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }
`;

export const ChapterMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;

  span {
    height: 28px;
    display: inline-flex;
    align-items: center;
    padding: 0 11px;
    border-radius: 999px;
    background: #f0f5ff;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ChapterProgress = styled.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: #ececf2;

  span {
    display: block;
    width: ${({ $progress }) => `${$progress || 0}%`};
    height: 100%;
    border-radius: inherit;
    background: ${({ theme }) => theme.PALETTE.primary.main};
  }
`;

export const ChapterReadyCard = styled.article`
  width: min(520px, calc(100% - 48px));
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 58px 48px;
  border-radius: 28px;
  background: ${({ theme }) => theme.PALETTE.white};
  text-align: center;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.08);

  > span {
    display: inline-flex;
    margin-bottom: 26px;
    padding: 7px 17px;
    border-radius: 999px;
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  img {
    width: 120px;
    height: 120px;
    padding: 18px;
    border-radius: 36px;
    background: #f7f7fb;
    object-fit: contain;
    box-sizing: border-box;
  }

  h1 {
    margin: 32px 0 14px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    line-height: ${({ theme }) => theme.FONT_LINE.h5};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0 0 28px;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }

  button {
    width: 100%;
    height: 54px;
    margin-top: 30px;
    border-radius: 15px;
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ChapterQuestionHeader = styled.header`
  width: 720px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  column-gap: 18px;
  margin: 0 auto 28px;

  button {
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  span {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  strong {
    color: #22c55e;
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  em {
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-style: normal;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ChapterQuestionCard = styled.article`
  width: 720px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  padding: 42px;
  border-radius: 28px;
  background: ${({ theme }) => theme.PALETTE.white};
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.08);

  > h1 {
    margin: 0;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-align: center;
  }

  > button {
    height: 50px;
    border-radius: 14px;
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ChapterQuestionInfo = styled.div`
  span {
    display: inline-flex;
    margin-bottom: 16px;
    padding: 7px 14px;
    border-radius: 999px;
    background: #f0f5ff;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  h1 {
    margin: 0;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ChapterOptionList = styled.div`
  display: grid;
  gap: 14px;
`;

export const ChapterBottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid #e6e6e6;

  button {
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

    &:first-child {
      color: #c0c0c0;
    }
  }
`;

export const ChapterResultWrap = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  padding: 128px 0 520px;
  background: ${({ theme }) => theme.PALETTE.white};
`;

export const ChapterResultContent = styled.div`
  width: min(600px, calc(100% - 48px));
  margin: 0 auto;
  text-align: center;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.35 : 1)};
`;

export const ResultCelebrate = styled.p`
  margin: 0 0 14px;
  font-size: 52px;
  line-height: 1;
`;

export const ResultTitle = styled.h1`
  margin: 0 0 42px;
  color: #1a1a1a;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ResultAccuracy = styled.strong`
  display: block;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: 60px;
  line-height: 1;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ResultSubText = styled.p`
  margin: 0 0 42px;
  color: #666;
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
`;

export const ResultStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 430px;
  max-width: 100%;
  margin: 0 auto 74px;

  div {
    display: grid;
    justify-items: center;
    gap: 8px;
  }

  strong {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  span {
    font-size: 22px;
    line-height: 1;
  }

  small {
    color: #999;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }
`;

export const ResultWrongBox = styled.article`
  width: 520px;
  max-width: 100%;
  min-height: 88px;
  margin: 0 auto 52px;
  padding: 17px 20px;
  border: 1px solid #fca5a5;
  border-radius: 10px;
  text-align: left;

  strong {
    display: block;
    margin-bottom: 12px;
    color: #ef4444;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0;
    color: #a6a6a6;
    font-size: 13px;
    line-height: 18px;
  }

  em {
    color: #22c55e;
    font-style: normal;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ResultLine = styled.div`
  width: 660px;
  max-width: 100%;
  height: 1px;
  margin: 0 auto 36px;
  background: #e6e6e6;
`;

export const ResultTextActions = styled.div`
  width: 560px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ResultTextAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  color: #666;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: 1.35px;
  text-decoration: none;
`;

export const BadgeModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 150px;
  background: rgba(26, 26, 46, 0.34);
`;

export const FireworkCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const BadgeModal = styled.section`
  ${popIn}
  position: relative;
  z-index: 1;
  width: 340px;
  padding: 48px 34px 28px;
  border-radius: 14px;
  background: ${({ theme }) => theme.PALETTE.white};
  text-align: center;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
  animation: badgeModalPopIn 0.42s ease-out both;

  h2 {
    margin: 12px 0 10px;
    color: #0014a9;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  .badgeName {
    margin: 0 0 10px;
    color: #aaa;
    font-size: 12px;
  }

  .badgeDesc {
    margin: 0 0 24px;
    color: #666;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const BadgeIcon = styled.div`
  ${badgePop}
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-size: 40px;
  animation: badgeIconPop 0.55s 0.12s ease-out both;
`;

export const BadgeLabel = styled.span`
  display: inline-flex;
  margin-bottom: 4px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #fff7d6;
  color: #b07800;
  font-size: 10px;
`;

export const BadgeModalStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 190px;
  margin: 0 auto 24px;

  div + div {
    border-left: 1px solid #ececec;
  }

  strong {
    display: block;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  span {
    color: #bbb;
    font-size: 10px;
  }
`;

export const NextBadgeBox = styled.div`
  display: grid;
  grid-template-columns: 94px 1fr 32px;
  align-items: center;
  gap: 12px;
  padding: 15px 0 20px;
  margin-bottom: 18px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: left;

  span {
    display: block;
    margin-bottom: 6px;
    color: #ccc;
    font-size: 10px;
  }

  strong {
    color: #444;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  em {
    color: #bbb;
    font-size: 10px;
    font-style: normal;
  }
`;

export const NextBadgeProgress = styled.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: #efefef;

  span {
    display: block;
    width: 33%;
    height: 100%;
    background: ${({ theme }) => theme.PALETTE.primary.main};
  }
`;

export const BadgeModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;

  button,
  a {
    color: #666;
    font-size: 11px;
    text-decoration: none;
  }
`;
