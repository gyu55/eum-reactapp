// 학습 공통 스타일: study 최상위 레이아웃 스타일
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const floatIcon = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate3d(0, -28px, 0) rotate(7deg) scale(1.1);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
`;

const twinkleIcon = keyframes`
  0%, 100% {
    opacity: 0.55;
    filter: drop-shadow(0 8px 18px rgba(67, 89, 252, 0.1));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 14px 26px rgba(67, 89, 252, 0.22));
  }
`;

const heroWave = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  35% {
    transform: translateY(-10px) rotate(-6deg) scale(1.08);
  }
  70% {
    transform: translateY(-4px) rotate(5deg) scale(1.04);
  }
`;

const searchButtonPop = keyframes`
  0% {
    transform: translateY(-2px) scale(1);
  }
  45% {
    transform: translateY(-2px) scale(0.96);
  }
  100% {
    transform: translateY(-2px) scale(1);
  }
`;

export const StudyPage = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  background: ${({ theme }) => theme.PALETTE.white};
  font-family: Pretendard, sans-serif;
`;

export const StudyInner = styled.div`
  width: min(1320px, calc(100% - 48px));
  margin: 0 auto;
`;

export const HomeWrap = styled(StudyPage)`
  --inner: 1320px;
  overflow: hidden;
`;

export const Banner = styled.section`
  position: relative;
  min-height: 650px;
`;

export const BannerIcon = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  span {
    position: absolute;
    display: block;
    line-height: 1;
    opacity: 0.86;
    will-change: transform, opacity;
    animation:
      ${floatIcon} 7.2s ease-in-out infinite,
      ${twinkleIcon} 5.4s ease-in-out infinite;
  }

  .icon1 { top: 80px; left: 19%; font-size: 45px; animation-delay: 0s, 0.2s; }
  .icon2 { top: 180px; left: 25%; font-size: 36px; animation-delay: -1.2s, -0.4s; }
  .icon3 { top: 320px; left: 34%; font-size: 30px; animation-delay: -2.1s, -1s; }
  .icon4 { top: 350px; left: 25%; font-size: 20px; animation-delay: -0.6s, -1.6s; }
  .icon5 { top: 450px; left: 18%; font-size: 38px; animation-delay: -2.8s, -0.8s; }
  .icon6 { top: 80px; right: 19%; font-size: 48px; animation-delay: -1.6s, -1.3s; }
  .icon7 { top: 190px; right: 26%; font-size: 32px; animation-delay: -0.8s, -2s; }
  .icon8 { top: 310px; right: 33%; font-size: 19px; animation-delay: -2.4s, -0.6s; }
  .icon9 { top: 390px; right: 24%; font-size: 23px; animation-delay: -1s, -1.8s; }
  .icon10 { top: 460px; right: 15%; font-size: 38px; animation-delay: -3.2s, -1.1s; }

`;

export const BannerContent = styled.div`
  position: relative;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .heroIcons {
    margin: 0 0 18px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    line-height: 1;
    animation: ${heroWave} 3.8s ease-in-out infinite;
    transform-origin: center bottom;
    will-change: transform;
  }

  h1 {
    margin: 0 0 28px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h2};
    line-height: ${({ theme }) => theme.FONT_LINE.h2};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p:not(.heroIcons) {
    width: 330px;
    margin: 0 0 70px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    line-height: ${({ theme }) => theme.FONT_LINE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }

`;

export const HeroExperienceLink = styled(Link)`
  position: relative;
  display: inline-block;
  width: 190px;
  height: 52px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: 52px;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  appearance: none;

  .circle {
    position: relative;
    display: block;
    width: 52px;
    height: 52px;
    margin: 0;
    border-radius: 999px;
    background: #4359FC;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }

  .icon {
    position: absolute;
    inset-block: 0;
    margin: auto;
    background: #fff;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }

  .arrow {
    left: 14px;
    width: 18px;
    height: 2px;
    background: transparent;
  }

  .arrow::before {
    position: absolute;
    top: -5px;
    right: 1px;
    width: 11px;
    height: 11px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    content: "";
    transform: rotate(45deg);
  }

  .buttonText {
    position: absolute;
    inset: 0;
    padding-left: 68px;
    color: #282936;
    text-align: center;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }

  &:hover .circle,
  &:focus-visible .circle {
    width: 110%;
  }

  &:hover .arrow,
  &:focus-visible .arrow {
    background: #fff;
    transform: translateX(16px);
  }

  &:hover .buttonText,
  &:focus-visible .buttonText {
    color: #fff;
  }

  &:focus-visible {
    border-radius: 999px;
    outline: 3px solid rgba(67, 89, 252, 0.28);
    outline-offset: 94px;
  }
`;

export const CategoryBand = styled.section`
  padding: 115px 0;
  background: #f7f7fb;
`;

export const CategoryGrid = styled.div`
  width: min(var(--inner), calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
`;

const toneColor = {
  green: "#129d1b",
  blue: "#4359fc",
  yellow: "#ffcb38",
  red: "#f14141",
  purple: "#b63fde",
};

export const CategoryCard = styled.button`
  position: relative;
  min-height: ${({ $large }) => ($large ? "342px" : "241px")};
  grid-column: span ${({ $large }) => ($large ? 3 : 2)};
  padding: ${({ $large }) => ($large ? "79px 80px" : "52px 50px")};
  overflow: hidden;
  border: 0;
  border-radius: 24px;
  background: ${({ theme }) => theme.PALETTE.white};
  box-shadow: 0 18px 45px rgba(32, 44, 98, 0.06);
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  .badge {
    display: inline-flex;
    margin-bottom: ${({ $large }) => ($large ? "28px" : "20px")};
    padding: ${({ $large }) => ($large ? "7px 19px" : "6px 16px")};
    border-radius: 999px;
    background: ${({ $tone }) => toneColor[$tone] || "#4359fc"};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  strong {
    display: block;
    margin-bottom: ${({ $large }) => ($large ? "22px" : "14px")};
    color: #1a1a1a;
    font-size: ${({ theme, $large }) => ($large ? theme.FONT_SIZE.h5 : theme.FONT_SIZE.h8)};
    line-height: ${({ theme, $large }) => ($large ? theme.FONT_LINE.h5 : theme.FONT_LINE.h8)};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  p {
    margin: 0 0 ${({ $large }) => ($large ? "70px" : "32px")};
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  }

  .go {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  img {
    position: absolute;
    right: ${({ $large }) => ($large ? "82px" : "52px")};
    top: ${({ $large }) => ($large ? "73px" : "51px")};
    width: ${({ $large }) => ($large ? "200px" : "105px")};
    height: ${({ $large }) => ($large ? "209px" : "110px")};
    padding: ${({ $large }) => ($large ? "10px" : "13px")};
    border-radius: ${({ $large }) => ($large ? "50%" : "45px")};
    background: #f7f7fb;
    object-fit: contain;
    box-sizing: border-box;
    transition:
      transform 0.25s ease,
      background-color 0.25s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(32, 44, 98, 0.12);
  }

  &:hover img,
  &:focus-visible img {
    transform: translateY(-5px) scale(1.06);
    background: ${({ $tone }) => `${toneColor[$tone] || "#4359fc"}14`};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.PALETTE.primary.main};
    outline-offset: 4px;
  }
`;

export const SearchArea = styled.section`
  width: min(var(--inner), calc(100% - 48px));
  margin: 0 auto;
  padding: 245px 0;
  text-align: center;

  h2 {
    margin: 0 0 50px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  .categories {
    display: flex;
    justify-content: center;
    gap: 36px;
    margin: 30px 0 64px;
    color: #555;
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};

    span {
      min-height: 34px;
      display: inline-flex;
      align-items: center;
      padding: 0 14px;
      border-radius: 999px;
      cursor: default;
      transition:
        color 0.2s ease,
        background-color 0.2s ease,
        transform 0.2s ease;
    }

    span:hover {
      color: ${({ theme }) => theme.PALETTE.primary.main};
      background: rgba(67, 89, 252, 0.08);
      transform: translateY(-2px);
    }
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: min(940px, 100%);
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 0 auto;

  input {
    flex: 1;
    min-width: 0;
    height: 64px;
    padding: 0 28px 0 70px;
    border: 0;
    border-radius: 999px;
    outline: 0;
    background: #f6f4f3;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    box-shadow: inset 0 0 0 1px rgba(26, 26, 26, 0.02);
    transition:
      background-color 0.24s ease,
      box-shadow 0.24s ease;
  }

  input::placeholder {
    color: #777;
  }

  button {
    width: 102px;
    height: 64px;
    flex: 0 0 102px;
    border: 1.5px solid #dedede;
    border-radius: 20px;
    background: ${({ theme }) => theme.PALETTE.white};
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    transition:
      border-color 0.24s ease,
      background-color 0.24s ease,
      color 0.24s ease,
      transform 0.24s ease,
      box-shadow 0.24s ease;
  }

  &:focus-within {
    svg {
      color: ${({ theme }) => theme.PALETTE.primary.main};
    }

    input {
      background: ${({ theme }) => theme.PALETTE.white};
      box-shadow:
        inset 0 0 0 2px rgba(67, 89, 252, 0.2),
        0 18px 38px rgba(67, 89, 252, 0.11);
    }
  }

  button:hover,
  button:active,
  button:focus-visible {
    border-color: ${({ theme }) => theme.PALETTE.primary.main};
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(67, 89, 252, 0.24);
  }

  button:active {
    animation: ${searchButtonPop} 0.34s ease;
  }

  button:focus-visible {
    outline: 3px solid rgba(67, 89, 252, 0.25);
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;

    input,
    button {
      width: 100%;
    }

    button {
      flex-basis: 58px;
      height: 58px;
      border-radius: 18px;
    }
  }
`;

export const SearchIcon = styled.svg`
    position: absolute;
    left: 30px;
    top: 50%;
    width: 24px;
    height: 24px;
    color: #8d8d8d;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: translateY(-50%);
    pointer-events: none;
    transition: color 0.24s ease;
    z-index: 1;
`;

export const WordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 72px;
  margin-bottom: 86px;
`;

export const WordItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 18px 10px;
  border-radius: 18px;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  span {
    height: 50px;
    font-size: 42px;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  strong {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(67, 89, 252, 0.05);
  }

  &:hover span {
    transform: scale(1.12);
  }
`;

export const ActionLink = styled(Link)`
  display: inline-flex;
  color: #666;
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: none;
`;

export const VideoArea = styled.section`
  width: min(var(--inner), calc(100% - 48px));
  margin: 0 auto;
  padding-bottom: 245px;
  text-align: center;

  h2 {
    margin: 0 0 22px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

    span {
      color: ${({ theme }) => theme.PALETTE.primary.main};
    }
  }

  .desc {
    margin: 0 0 70px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }
`;

export const VideoTabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;

  button {
    height: 36px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 0 18px;
    border: 1px solid ${({ theme, $active }) => ($active ? theme.PALETTE.primary.main : theme.GRAYSCALE[3])};
    border-radius: 10px;
    background: ${({ $active }) => ($active ? "rgba(67, 89, 252, 0.08)" : "transparent")};
    color: ${({ theme, $active }) => ($active ? theme.PALETTE.primary.main : "#1a1a1a")};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    transition:
      border-color 0.2s ease,
      color 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  button:hover,
  button:focus-visible {
    color: ${({ theme }) => theme.PALETTE.primary.main};
    border-color: ${({ theme }) => theme.PALETTE.primary.main};
    box-shadow: 0 10px 22px rgba(67, 89, 252, 0.1);
    transform: translateY(-2px);
  }

  button:focus-visible {
    outline: 3px solid rgba(67, 89, 252, 0.22);
    outline-offset: 3px;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

export const VideoEmpty = styled.div`
  min-height: 338px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  margin-bottom: 70px;
  background: transparent;

  strong {
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  span {
    color: #777;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  }
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 59px;
  margin-bottom: 70px;
`;

export const VideoCard = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 20px;
  background: #f2f2f2;
  text-align: left;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(32, 44, 98, 0.06);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  div {
    min-height: 120px;
    padding: 30px 18px 12px;
    background: ${({ theme }) => theme.PALETTE.white};
  }

  span {
    display: block;
    margin-bottom: 8px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  strong {
    display: block;
    min-height: 34px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    line-height: ${({ theme }) => theme.FONT_LINE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }

  p {
    margin: 12px 0 0;
    color: #666;
    font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  }

  figure {
    position: relative;
    height: 218px;
    margin: 0;
    overflow: hidden;
    color: ${({ theme }) => theme.GRAYSCALE[7]};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  }

  figure img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.28s ease;
  }

  .play {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 58px;
    height: 58px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(67, 89, 252, 0.9);
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: 20px;
    transform: translate(-50%, -50%);
    box-shadow: 0 14px 30px rgba(32, 44, 98, 0.22);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(32, 44, 98, 0.12);
  }

  &:hover figure img,
  &:focus-visible figure img {
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.PALETTE.primary.main};
    outline-offset: 4px;
  }
`;
