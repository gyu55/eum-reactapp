import styled from "styled-components";
import { Link } from "react-router-dom";
import { StudyWrap } from "../style";

const PRIMARY = "#4359fc";
const BLACK = "#1a1a1a";
const GREY = "#666";

export const ExperiencePage = StudyWrap;

export const NonUser = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background: #fff;
    padding: 120px 0 170px;
    font-family: Pretendard, sans-serif;
  `,

  Inner: styled.div`
    width: 1200px;
    margin: 0 auto;
  `,

  SectionTitle: styled.h2`
    margin: 0 0 32px;
    color: ${BLACK};
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.56px;
  `,

  StatusText: styled.p`
    margin: -16px 0 28px;
    color: ${GREY};
    font-size: 14px;
    line-height: 22px;
  `,

  CardGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 375px);
    gap: 36px 45px;
  `,

  CardLink: styled(Link)`
    display: block;
    width: 375px;
    height: 286px;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 16px;
    background: #fff;
    color: inherit;
    text-decoration: none;
  `,

  Thumbnail: styled.div`
    height: 164px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $bg }) => $bg};
  `,

  Emoji: styled.span`
    font-size: 68px;
    line-height: 1;
  `,

  CardBody: styled.div`
    padding: 28px 22px 0;
  `,

  Level: styled.div`
    margin-bottom: 8px;
    color: #ffc72c;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
  `,

  CardTitle: styled.h3`
    margin: 0;
    color: ${BLACK};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.32px;
  `,

  CardDesc: styled.p`
    margin: 6px 0 0;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.24px;
  `,

  QuizLink: styled(Link)`
    display: block;
    width: fit-content;
    margin: 50px auto 0;
    color: ${GREY};
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.4px;
    text-decoration: none;
  `,
};

export const QuizPage = {
  Page: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 110px 0 150px;
    background: #fff;
    font-family: Pretendard, sans-serif;
  `,

  Shell: styled.div`
    width: 660px;
    margin: 0 auto;
  `,

  LessonTitle: styled.h2`
    margin: 0 0 12px 50px;
    color: ${BLACK};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `,

  Top: styled.div`
    display: grid;
    grid-template-columns: 28px 1fr auto auto auto;
    gap: 16px;
    align-items: center;
    margin-bottom: 70px;
  `,

  Back: styled(Link)`
    color: ${BLACK};
    font-size: 22px;
    text-decoration: none;
  `,

  Progress: styled.div`
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #eef0ff;

    span {
      display: block;
      width: ${({ $value }) => $value || "45%"};
      height: 100%;
      border-radius: inherit;
      background: ${PRIMARY};
    }
  `,

  Count: styled.span`
    color: ${GREY};
    font-size: 14px;
    font-weight: 700;
  `,

  Exp: styled.span`
    color: ${PRIMARY};
    font-size: 14px;
    font-weight: 700;
  `,

  Heart: styled.span`
    color: #ff5c75;
    font-size: 14px;
    font-weight: 700;
  `,

  Divider: styled.div`
    height: 1px;
    margin-bottom: 36px;
    background: #ececf3;
  `,

  Question: styled.h1`
    margin: 0 0 34px;
    color: ${BLACK};
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
  `,

  ImageSlot: styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 42px;
    border-radius: 20px;
    background: #f7f7fb;
    font-size: 88px;
  `,

  Options: styled.div`
    display: grid;
    gap: 20px;
  `,

  Option: styled.button`
    min-height: 58px;
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: center;
    border: 1px solid
      ${({ $active, $correct, $wrong }) => {
        if ($correct) return "#23c16b";
        if ($wrong) return "#ff5c75";
        if ($active) return PRIMARY;
        return "#ececf3";
      }};
    border-radius: 16px;
    background: ${({ $active, $correct, $wrong }) => {
      if ($correct) return "#effaf4";
      if ($wrong) return "#fff0f3";
      if ($active) return "#eef2ff";
      return "#fff";
    }};
    color: ${BLACK};
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    cursor: pointer;

    &:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
  `,

  OptionKey: styled.span`
    color: ${PRIMARY};
    text-align: center;
  `,

  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    padding-top: 28px;
    border-top: 1px solid #ececf3;
  `,

  Feedback: styled.div`
    margin-top: 66px;
    color: ${({ $status }) => ($status === "correct" ? PRIMARY : "#ff5c75")};
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.56px;
  `,

  GhostButton: styled.button`
    border: 0;
    background: transparent;
    color: ${GREY};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,

  PrimaryButton: styled.button`
    min-width: 160px;
    height: 48px;
    border: 0;
    border-radius: 14px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,

  Message: styled.p`
    margin: 0 0 24px;
    color: ${GREY};
    font-size: 14px;
    text-align: center;
  `,

  Result: styled.div`
    width: 660px;
    margin: 0 auto;
    padding: 72px 80px;
    border-radius: 28px;
    background: #fff;
    box-shadow: 0 0 0 1px #f2f2f2;
    text-align: center;
  `,

  CompleteCard: styled.div`
    width: 520px;
    margin: 0 auto;
    padding: 64px 48px 54px;
    border-radius: 28px;
    background: #fff;
    box-shadow: 0 0 0 1px #f2f2f2, 0 20px 60px rgba(67, 89, 252, 0.08);
    text-align: center;
  `,

  ResultIcon: styled.div`
    font-size: 64px;
    line-height: 1;
  `,

  ResultTitle: styled.h1`
    margin: 24px 0 8px;
    font-size: 28px;
    font-weight: 700;
  `,

  ResultText: styled.p`
    margin: 0;
    color: ${GREY};
    font-size: 14px;
  `,

  Stats: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 40px 0;
  `,

  Stat: styled.div`
    padding: 20px;
    border-radius: 16px;
    background: #f7f7fb;

    strong {
      display: block;
      margin-bottom: 4px;
      color: ${PRIMARY};
      font-size: 24px;
    }

    span {
      color: ${GREY};
      font-size: 12px;
    }
  `,

  ResultActions: styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
  `,

  LinkButton: styled(Link)`
    min-width: 160px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${({ $primary }) => ($primary ? PRIMARY : "#f7f7fb")};
    color: ${({ $primary }) => ($primary ? "#fff" : BLACK)};
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  `,

  NextBox: styled.div`
    margin-top: 32px;
    border-top: 1px solid #ececf3;
    border-bottom: 1px solid #ececf3;
    text-align: left;
  `,

  BoxLabel: styled.p`
    margin: 16px 0 14px;
    color: ${GREY};
    font-size: 12px;
    font-weight: 700;
  `,

  NextItem: styled.div`
    padding: 0 0 14px;

    & + & {
      padding-top: 14px;
      border-top: 1px solid #ececf3;
    }

    strong {
      display: block;
      color: ${BLACK};
      font-size: 14px;
      font-weight: 700;
    }

    span {
      display: block;
      margin-top: 4px;
      color: ${GREY};
      font-size: 12px;
    }
  `,

  BenefitBox: styled.div`
    margin-top: 18px;
    text-align: left;
  `,

  BenefitItem: styled.div`
    display: grid;
    grid-template-columns: 26px 1fr;
    gap: 14px;
    align-items: start;
    margin-top: 16px;

    > span {
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #eef2ff;
      color: ${PRIMARY};
      font-size: 14px;
      font-weight: 700;
    }

    strong {
      display: block;
      color: ${BLACK};
      font-size: 14px;
      font-weight: 700;
    }

    p {
      margin: 6px 0 0;
      color: ${GREY};
      font-size: 12px;
      line-height: 1.55;
    }
  `,

  SignupTitle: styled.h2`
    margin: 34px 0 6px;
    color: ${BLACK};
    font-size: 18px;
    font-weight: 700;
  `,

  SignupDesc: styled.p`
    margin: 0 0 22px;
    color: ${GREY};
    font-size: 12px;
  `,

  AuthButton: styled(Link)`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 12px;
    background: ${({ $primary }) => ($primary ? PRIMARY : "#f7f7fb")};
    color: ${({ $primary }) => ($primary ? "#fff" : BLACK)};
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  `,
};
