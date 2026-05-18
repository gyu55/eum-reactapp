import styled from "styled-components";
import { Link } from "react-router-dom";

const PRIMARY = "#4359fc";
const BLACK = "#1a1a1a";
const TEXT_GREY = "#666";
const LIGHT_GREY = "#f7f7fb";
const LINE = "#d9d9d9";

export const SearchPage = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background: #fff;
    color: ${BLACK};
    font-family: Pretendard, sans-serif;
  `,

  SearchSection: styled.section`
    width: 1200px;
    margin: 0 auto;
    padding: 312px 0 190px;
  `,

  CardSection: styled.section`
    width: 1200px;
    margin: 0 auto;
    padding: 312px 0 190px;
  `,

  SearchForm: styled.form`
    width: 680px;
    height: 43px;
    display: flex;
    align-items: center;
    margin: 0 auto 13px;
    padding: 0 7px 0 23px;
    border: 1px solid ${LINE};
    border-radius: 10px;
    background: #fff;
    box-sizing: border-box;
  `,

  SearchInput: styled.input`
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${BLACK};
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.32px;
  `,

  SearchButton: styled.button`
    width: 50px;
    height: 30px;
    border: 0;
    border-radius: 8px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.28px;
    cursor: pointer;
  `,

  ResultCount: styled.p`
    width: 680px;
    margin: 0 auto;
    color: #999;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.28px;

    strong {
      color: ${PRIMARY};
      font-weight: 700;
    }
  `,

  StatusText: styled.p`
    width: 920px;
    margin: 24px auto 0;
    color: ${TEXT_GREY};
    font-size: 14px;
    text-align: center;
  `,

  ResultList: styled.div`
    width: 1200px;
    display: grid;
    gap: 16px;
    margin-top: 180px;
  `,

  ResultItem: styled.article`
    position: relative;
    height: ${({ $featured }) => ($featured ? "146px" : "90px")};
    display: grid;
    grid-template-columns: ${({ $featured }) => ($featured ? "120px 1fr 240px" : "80px 1fr 240px")};
    gap: ${({ $featured }) => ($featured ? "32px" : "24px")};
    align-items: center;
    padding: ${({ $featured }) => ($featured ? "21px 32px" : "14px 24px")};
    border: 1px solid ${LINE};
    border-left: ${({ $featured }) => ($featured ? `5px solid ${PRIMARY}` : `5px solid #bdbdbd`)};
    border-radius: 0 12px 12px 0;
    background: #fff;
    box-sizing: border-box;
  `,

  ImageSlot: styled.div`
    width: ${({ $featured }) => ($featured ? "100px" : "64px")};
    height: ${({ $featured }) => ($featured ? "100px" : "64px")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ $featured }) => ($featured ? "10px" : "8px")};
    background: ${({ $featured }) => ($featured ? "#eef1ff" : LIGHT_GREY)};
    color: #aaa;
    font-size: 10px;
    text-align: center;
  `,

  ResultText: styled.div`
    min-width: 0;
  `,

  ResultTitle: styled.h2`
    margin: 0 0 ${({ $featured }) => ($featured ? "14px" : "6px")};
    color: ${BLACK};
    font-size: ${({ $featured }) => ($featured ? "20px" : "16px")};
    font-weight: 700;
    line-height: ${({ $featured }) => ($featured ? "1" : "24px")};
    letter-spacing: ${({ $featured }) => ($featured ? "-0.4px" : "-0.32px")};
  `,

  ResultDesc: styled.p`
    max-width: ${({ $featured }) => ($featured ? "520px" : "420px")};
    margin: 0;
    color: ${TEXT_GREY};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
  `,

  ResultActions: styled.div`
    display: grid;
    justify-items: end;
    gap: 14px;

    button,
    a {
      border: 0;
      background: transparent;
      color: ${PRIMARY};
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.24px;
      text-decoration: none;
      cursor: pointer;
    }

    .cardButton {
      color: ${TEXT_GREY};
    }

    a {
      justify-self: end;
    }
  `,

  CardArea: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 440px 680px;
    gap: 46px;
    align-items: start;
    margin: 170px auto 0;
  `,

  CardPager: styled.div`
    position: absolute;
    top: -44px;
    right: 46px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      margin-right: 8px;
      color: ${TEXT_GREY};
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.28px;
    }

    button {
      width: 30px;
      height: 26px;
      border: 0;
      border-radius: 7px;
      background: ${({ disabled }) => (disabled ? "#ededf2" : PRIMARY)};
      color: ${({ disabled }) => (disabled ? TEXT_GREY : "#fff")};
      font-size: 18px;
      line-height: 1;
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  `,

  CardVisual: styled.div`
    position: relative;
    width: 440px;
    height: 611px;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    background: #ffe417;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed #ff4b4b;
      border-bottom: 0;
      border-radius: 0;
      pointer-events: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  `,

  CardNumber: styled.span`
    position: absolute;
    top: -9px;
    left: -12px;
    z-index: 1;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ff4b4b;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  `,

  EmptyVisual: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    line-height: 22px;
    text-align: center;

    span {
      margin-bottom: 10px;
      font-size: 28px;
    }

    p {
      margin: 0;
    }
  `,

  CardDetail: styled.div`
    width: 680px;
    min-height: 565px;
    padding: 31px 27px 28px;
    border: 1px solid ${LINE};
    border-radius: 15px;
    background: #fff;
    box-sizing: border-box;
  `,

  DetailBlock: styled.div`
    position: relative;
    margin-bottom: 18px;
    padding-left: 38px;
  `,

  StepBadge: styled.span`
    position: absolute;
    left: 0;
    top: -2px;
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${PRIMARY};
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
  `,

  DetailTitle: styled.h2`
    margin: 0 0 14px;
    color: ${BLACK};
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.28px;
  `,

  MotionGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  `,

  MotionCard: styled.div`
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${LINE};
    border-radius: 8px;
    background: #fff;

    span {
      font-size: 28px;
      line-height: 1;
    }

    p {
      margin: 8px 0 0;
      color: ${BLACK};
      font-size: 12px;
      font-weight: 100;
      line-height: 1;
    }
  `,

  VideoButton: styled.button`
    width: 100%;
    height: 30px;
    margin-top: 12px;
    border: 0;
    border-radius: 10px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
    cursor: pointer;
  `,

  InfoBox: styled.div`
    width: 100%;
    min-height: 48px;
    padding: 12px 17px;
    border-radius: 8px;
    background: ${LIGHT_GREY};
    box-sizing: border-box;

    strong {
      color: ${PRIMARY};
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.32px;
    }

    span {
      color: ${TEXT_GREY};
      font-size: 14px;
      font-weight: 400;
    }

    p {
      margin: 4px 0 0;
      color: ${TEXT_GREY};
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  `,

  SourceBox: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 48px 1fr 82px;
    gap: 16px;
    align-items: center;
    padding: 12px 15px;
    border-radius: 8px;
    background: ${LIGHT_GREY};
    box-sizing: border-box;

    strong {
      color: ${BLACK};
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.28px;
    }

    p {
      margin: 5px 0 0;
      color: ${BLACK};
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.24px;
    }

    button {
      width: 76px;
      height: 30px;
      border: 0;
      border-radius: 8px;
      background: ${PRIMARY};
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.24px;
      cursor: pointer;
    }
  `,

  QRSlot: styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #fff;
    color: #aaa;
    font-size: 8px;
    text-align: center;
  `,

  StartLink: styled(Link)`
    display: block;
    width: fit-content;
    margin: 42px auto 0;
    color: ${BLACK};
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.4px;
    text-decoration: none;
  `,
};
