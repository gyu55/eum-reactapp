// 공통 컴포넌트 스타일: study에서 재사용하는 작은 UI 스타일
import styled from "styled-components";

export const ReadyWrap = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px;
  background: ${({ theme }) => theme.PALETTE.white};
  font-family: Pretendard, sans-serif;
`;

export const ReadyCard = styled.div`
  width: min(520px, 100%);
  padding: 48px 40px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[1]};
  border-radius: 20px;
  text-align: center;
  background: ${({ theme }) => theme.PALETTE.white};
`;

export const ReadyBadge = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ReadyTitle = styled.h1`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ReadyDesc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
`;

export const QuizShellWrap = styled.section`
  width: min(960px, calc(100% - 48px));
  margin: 0 auto;
  padding: 90px 0 140px;
  font-family: Pretendard, sans-serif;
`;

export const QuizProgressBar = styled.div`
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.GRAYSCALE[1]};

  span {
    display: block;
    width: ${({ $percent }) => `${$percent}%`};
    height: 100%;
    border-radius: inherit;
    background: ${({ theme }) => theme.PALETTE.primary.main};
  }
`;

export const QuizOptionButton = styled.button`
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 16px;
  background: ${({ theme }) => theme.PALETTE.white};
  color: #1a1a1a;
  text-align: left;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  strong {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 34px;
    border-radius: 50%;
    background: ${({ theme }) => theme.GRAYSCALE[1]};
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    transition: background 0.2s ease, color 0.2s ease;
  }

  span {
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }

  &[data-selected="true"] {
    border-color: ${({ theme }) => theme.PALETTE.primary.main};
    background: #f0f5ff;
  }

  &[data-selected="true"] strong {
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
  }

  &[data-status="correct"] {
    border-color: #58cc02;
    background: #ecffd9;
  }

  &[data-status="correct"] strong {
    background: #58cc02;
    color: ${({ theme }) => theme.PALETTE.white};
  }

  &[data-status="wrong"] {
    border-color: #f14141;
    background: #ffe8e8;
  }

  &[data-status="wrong"] strong {
    background: #f14141;
    color: ${({ theme }) => theme.PALETTE.white};
  }
`;

export const QuizFeedbackBox = styled.aside`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  gap: 22px;
  padding: 28px 32px;
  border-radius: 18px;
  background: ${({ "data-status": status }) => (status === "correct" ? "#dcffd0" : "#ffe3e3")};

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }
`;

export const QuizFeedbackIcon = styled.div`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 30px;
`;

export const QuizFeedbackText = styled.div`
  min-width: 0;

  strong {
    display: block;
    margin-bottom: 10px;
    color: ${({ "data-status": status }) => (status === "correct" ? "#22a900" : "#f14141")};
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0;
    color: #4a4a4a;
    font-size: 15px;
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }

  .descriptionWrap {
    margin-top: 12px;
  }

  .descriptionLabel {
    display: block;
    margin-bottom: 6px;
    color: #f14141;
    font-size: 15px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  .description {
    color: #5f5f5f;
  }
`;

export const QuizFeedbackActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    min-width: 132px;
    height: 46px;
    padding: 0 22px;
    border-radius: 12px;
    background: ${({ "data-status": status, theme }) =>
      status === "correct" ? "#58cc02" : theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

export const QuizResult = styled.article`
  padding: 36px;
  border-radius: 24px;
  background: ${({ theme }) => theme.PALETTE.white};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);

  h2 {
    margin: 0 0 22px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 10px 0 0;
    color: #555;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  }
`;

export const SectionTitle = styled.header`
  text-align: center;

  h2 {
    margin: 0 0 14px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
  }
`;

export const StatusMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
`;
