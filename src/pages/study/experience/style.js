import styled from "styled-components";
import theme from "../../../styles/theme";
import createGlobalStyle from "styled-components";

// 비회원 체험학습 화면_style

// 크기
const fontSize = (key) => ({theme}) => theme.FONT_SIZE[key];
// 굵기
const fontWeight = (key) => ({theme}) => theme.FONT_WEIGHT[key];
// 행간
const lineHeight = (key) => ({theme}) => theme.FONT_LINE[key];
// 색
const textColor = (key) => ({theme}) => theme.PALETTE[key];



// 전체
export const NonUser = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 0 180px;
  background: #fff;
  box-sizing: border-box;

  .chapterInner {
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
  }

  .chapterHeader {
    margin-bottom: 54px;
    text-align: center;
  }

  .subTitle {
    margin: 0 0 18px;
    color: #4359fc;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0;
  }

  .chapterHeader h1 {
    margin: 0 0 16px;
    color: #1a1a1a;
    font-size: 42px;
    font-weight: 900;
  }

  .chapterHeader .desc {
    margin: 0;
    color: #666;
    font-size: 16px;
    font-weight: 600;
  }

  .learnTrialList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 60px;
  }

  .quizCard {
    height: 260px;
    padding: 38px 30px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #fff;
    border: 1.5px solid #e6e6e6;
    border-radius: 22px;

    text-decoration: none;
    transition: 0.2s;
  }

  .quizCard:hover {
    transform: translateY(-6px);
    border-color: #4359fc;
    box-shadow: 0 18px 40px rgba(67, 89, 252, 0.12);
  }


  .quizTitle {
    margin: 0 0 12px;
    color: #1a1a1a;
    font-size: 22px;
    font-weight: 900;
  }

  .quizDesc {
    margin: 0;
    color: #777;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
  }

  .quizStartButton {
    width: 176px;
    height: 48px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #4359fc;
    border-radius: 14px;

    color: #fff;
    font-size: 15px;
    font-weight: 900;
    text-decoration: none;
  }
`;


// ================================================================

// 퀴즈 문제

export const QuizPage = styled.section`

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