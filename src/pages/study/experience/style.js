// 체험학습 스타일
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ExperienceWrap = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 110px 0 150px;
  background: #f7f7fb;
  font-family: Pretendard, sans-serif;
`;

export const ExperienceHero = styled.header`
  width: min(920px, calc(100% - 48px));
  margin: 0 auto 72px;
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
    margin: 0 0 24px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h3};
    line-height: ${({ theme }) => theme.FONT_LINE.h3};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    width: min(520px, 100%);
    margin: 0 auto;
    color: #555;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    line-height: ${({ theme }) => theme.FONT_LINE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }
`;

export const ExperienceGrid = styled.div`
  width: min(1180px, calc(100% - 48px));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin: 0 auto 56px;
`;

const toneMap = {
  yellow: "#ffcb38",
  red: "#f14141",
  purple: "#b63fde",
};

export const ExperienceCard = styled.button`
  min-height: 420px;
  padding: 42px 36px 36px;
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
    margin-bottom: 34px;
    padding: 7px 17px;
    border-radius: 999px;
    background: ${({ $tone }) => toneMap[$tone] || "#4359fc"};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  img {
    width: 116px;
    height: 116px;
    display: block;
    margin: 0 auto 36px;
    padding: 18px;
    border-radius: 36px;
    background: #f7f7fb;
    object-fit: contain;
    box-sizing: border-box;
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    line-height: ${({ theme }) => theme.FONT_LINE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    min-height: 52px;
    margin: 0 0 34px;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }

  em {
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-style: normal;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const ExperienceNotice = styled.aside`
  width: min(720px, calc(100% - 48px));
  margin: 0 auto;
  padding: 28px 34px;
  border-radius: 18px;
  background: ${({ theme }) => theme.PALETTE.white};
  text-align: center;

  strong {
    display: block;
    margin-bottom: 10px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }
`;

export const ExperienceQuizHeader = styled.header`
  width: 640px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 44px 1fr auto auto;
  align-items: center;
  column-gap: 16px;
  margin: 0 auto 22px;

  button {
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  }

  span {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
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

export const ExperienceQuizPage = styled.div`
  position: relative;
  width: 100%;
  min-height: 980px;
  padding: 42px 0 100px;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.35 : 1)};
`;

export const ExperienceQuizPanel = styled.article`
  width: 640px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 0 44px;
  border-bottom: 1px solid #e6e6e6;
`;

export const QuestionInfo = styled.div`
  margin-top: 54px;

  h2 {
    margin: 0;
    color: #1a1a1a;
    font-size: 19px;
    line-height: 1;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const GestureBox = styled.div`
  width: 360px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 42px auto 40px;
  border: 1px dashed #129d1b;
  border-radius: 12px;
  font-size: 88px;
  line-height: 1;
`;

export const OptionList = styled.div`
  display: grid;
  gap: 28px;
  margin-bottom: 70px;
`;

export const TextOptionButton = styled.button`
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  width: 260px;
  color: ${({ $selected, $correct }) => ($selected && $correct ? "#129d1b" : "#1a1a1a")};
  text-align: left;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ $selected }) => ($selected ? 700 : 500)};

  strong,
  span {
    line-height: 24px;
  }
`;

export const QuizBottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  border-top: 1px solid #e6e6e6;

  button {
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    letter-spacing: 0.3px;

    &:first-child {
      color: #c0c0c0;
    }
  }
`;

export const AuthPromptOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 24px;
  background: rgba(26, 26, 46, 0.34);
`;

export const AuthPromptModal = styled.section`
  position: relative;
  width: 420px;
  max-width: 100%;
  padding: 30px 38px 22px;
  border-radius: 18px;
  background: ${({ theme }) => theme.PALETTE.white};
  text-align: center;
  box-shadow: 0 26px 80px rgba(0, 0, 0, 0.18);

  h2 {
    margin: 10px 0 4px;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }

  .summary {
    margin: 0 0 16px;
    color: #aaa;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 22px;
  color: #c9c9c9;
  font-size: 18px;
`;

export const CheckIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 5px solid ${({ theme }) => theme.PALETTE.primary.main};
  border-radius: 50%;
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ResultStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 192px;
  margin: 0 auto 22px;

  div + div {
    border-left: 1px solid #ececec;
  }

  strong {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  span {
    color: #bbb;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }
`;

export const NextStepList = styled.div`
  padding: 14px 0 0;
  border-top: 1px solid #eee;
  text-align: left;

  span,
  small {
    display: block;
    color: #ccc;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }

  p {
    margin: 9px 0 3px;
    color: #333;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }
`;

export const MemberBenefits = styled.ul`
  padding: 14px 0 0;
  margin: 14px 0 14px;
  border-top: 1px solid #eee;
  list-style: none;
  text-align: left;

  > span {
    display: block;
    margin-bottom: 10px;
    color: #ccc;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }

  li {
    display: grid;
    grid-template-columns: 28px 1fr;
    column-gap: 10px;
    margin-bottom: 8px;

    &::before {
      content: "✓";
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #f0fbf0;
      color: #22c55e;
      font-size: 12px;
    }
  }

  strong {
    display: block;
    grid-column: 2;
    color: ${({ theme }) => theme.PALETTE.primary.main};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  small {
    display: block;
    grid-column: 2;
    margin-top: 2px;
    color: #aaa;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }
`;

export const EmailSignupLink = styled(Link)`
  width: 100%;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  text-decoration: none;
`;

export const SocialDivider = styled.p`
  position: relative;
  margin: 16px 0 10px;
  color: #9ca3af;
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 78px;
    height: 1px;
    background: #e5e7eb;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const socialColors = {
  kakao: {
    bg: "#fee500",
    color: "#000",
  },
  naver: {
    bg: "#03c75a",
    color: "#fff",
  },
  google: {
    bg: "#fff",
    color: "#000",
  },
};

export const SocialButton = styled(Link)`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9px;
  border: ${({ $provider }) => ($provider === "google" ? "1px solid #e0e0e0" : 0)};
  border-radius: 10px;
  background: ${({ $provider }) => socialColors[$provider]?.bg || "#fff"};
  color: ${({ $provider }) => socialColors[$provider]?.color || "#000"};
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  text-decoration: none;
`;
