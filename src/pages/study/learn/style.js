import styled from "styled-components";
import theme from "../../../styles/theme";
import createGlobalStyle from "styled-components";

// 학습 화면_style

// 크기
const fontSize = (key) => ({theme}) => theme.FONT_SIZE[key];
// 굵기
const fontWeight = (key) => ({theme}) => theme.FONT_WEIGHT[key];
// 행간
const lineHeight = (key) => ({theme}) => theme.FONT_LINE[key];
// 색
const textColor = (key) => ({theme}) => theme.PALETTE[key];



// 전체
export const LearnWrap = styled.section`
  --inner: 1320px;

  width: 100%;
  overflow: hidden;
  position: relative;
`;


// 퀴즈 문제

export const QuizPages = styled.section`

  width: 100%;
  min-height: 100vh;
  padding: 150px 0 180px;
  box-sizing: border-box;
  background: #fff;

  .quizInner {
    width: 660px;
    margin: 0 auto;
  }

  .quizTop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 18px;
  }

  .quizCategory {
    margin: 0;

    color: #4359fc;
    font-size: 16px;
    font-weight: 900;
  }

  .quizCount {
    margin: 0;

    color: #666;
    font-size: 15px;
    font-weight: 700;
  }

  .progressBar {
    width: 100%;
    height: 8px;
    margin-bottom: 48px;

    background: #f0f0f0;
    border-radius: 999px;
    overflow: hidden;
  }

  .progressFill {
    width: 20%;
    height: 100%;

    background: #4359fc;
    border-radius: 999px;
  }

  .questionBox {
    margin-bottom: 54px;
    text-align: center;
  }

  .questionTitle {
    margin: 0 0 32px;

    color: #1a1a1a;
    font-size: 28px;
    font-weight: 900;
  }

  .imageBox {
    width: 100%;
    height: 160px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f8f9ff;
    border: 1.5px dashed #a7b5ff;
    border-radius: 14px;

    color: #999;
    font-size: 16px;
    font-weight: 700;
  }

  .answerList {
    display: grid;
    gap: 16px;

    margin-bottom: 54px;
  }

  .answerItem {
    width: 100%;
    height: 58px;
    padding: 0 26px;

    display: flex;
    align-items: center;
    gap: 22px;

    background: #fff;
    border: 1.5px solid #e6e6e6;
    border-radius: 14px;

    cursor: pointer;
  }

  .answerItem:hover {
    border-color: #4359fc;
    background: #f8f9ff;
  }

  .answerAlpha {
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 900;
  }

  .answerText {
    color: #1a1a1a;
    font-size: 17px;
    font-weight: 700;
  }

  .quizBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .prevBtn,
  .nextBtn {
    width: 148px;
    height: 48px;

    border: 0;
    border-radius: 14px;

    font-size: 15px;
    font-weight: 900;
    cursor: pointer;
  }

  .prevBtn {
    background: #f7f7fb;
    color: #666;
  }

  .nextBtn {
    background: #4359fc;
    color: #fff;
  }



`;
