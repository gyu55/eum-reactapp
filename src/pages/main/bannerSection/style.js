import styled from "styled-components";
import theme from "../../../styles/theme";

export const BannerWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 15vh;
  min-height: 200px;
`;

export const HeadlineText = styled.div`
  font-size: ${theme.FONT_SIZE.h1};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h1};
  text-align: center;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 3.33vh;
`;

export const SubtitleText = styled.div`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  line-height: ${theme.FONT_LINE.h7};
  text-align: center;
  padding-top: 3.33vh;
  padding-bottom: 5.93vh;
`;

export const BlobLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  will-change: transform;
  isolation: isolate;
`;

export const BlobGreen = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -80px;
  top: 500px;
  width: 320px;
  height: 320px;
  background-color: #a8f0d8;
  filter: blur(60px);
  opacity: 0.25;
`;

export const BlobBlue = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -80px;
  top: 10px;
  width: 416px;
  height: 416px;
  background-color: #7eb8ff;
  filter: blur(60px);
  opacity: 0.3;
`;

export const BlobOrange = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 40vw;
  top: 10px;
  width: 283px;
  height: 283px;
  background-color: #ffbf80;
  filter: blur(60px);
  opacity: 0.3;
`;

export const BlobYellow = styled.div`
  position: absolute;
  border-radius: 50%;
  right: 35vw;
  top: 500px;
  width: 288px;
  height: 288px;
  background-color: #ffd96b;
  filter: blur(60px);
  opacity: 0.25;
`;

export const BlobPurple = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 400px;
  right: -80px;
  width: 384px;
  height: 384px;
  background-color: #c4a8ff;
  filter: blur(60px);
  opacity: 0.3;
`;

export const BlobPink = styled.div`
  position: absolute;
  border-radius: 50%;
  right: 5vw;
  top: 50px;
  width: 288px;
  height: 288px;
  background-color: #fbc8ff;
  filter: blur(60px);
  opacity: 0.25;
`;

export const BtnChapter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.33vh;
  margin-bottom: 23.15vh;
`;

export const StartBtn = styled.button`
  background-color: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h8};
  text-align: center;
  padding: 20px 50px;
  border-radius: 50px;
  height: 60px;
  width: 200px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const FloatingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const FloatingItem = styled.div`
  position: absolute;
  left: ${({ $x }) => $x}%;
  bottom: ${({ $y }) => $y}%;
  will-change: transform;
  animation: floatUp ${({ $duration }) => $duration}s ease-in forwards;
  z-index: -1;
`;

export const ProfileImg = styled.img`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 12px;
  object-fit: cover;
`;

export const LeftFrills = styled.div`
  position: absolute;
  right: calc(200px + 14px);
  top: calc(30px - 4px);
  height: 8px;
  border-radius: 4px;
  background: ${theme.PALETTE.primary.main};
  width: 0;
  visibility: hidden;

  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    height: 8px;
    width: 0;
    border-radius: 4px;
    background: ${theme.PALETTE.primary.main};
    visibility: hidden;
    left: 15px;
  }
  &::before { 
    bottom: 45px; 
    transform: rotate(34deg); 
  }
  &::after { 
    top: 45px; 
    transform: rotate(-34deg); 
  }

  .active & {
    visibility: visible;
    animation: appear-left 0.38s ease-out forwards;
  }
  .active &::before {
    visibility: visible;
    animation: appear-up 0.38s ease-out forwards;
  }
  .active &::after {
    visibility: visible;
    animation: appear-down 0.38s ease-out forwards;
  }

  @keyframes appear-left {
    0%   { width: 38px; transform: none; }
    100% { width: 8px;  transform: translateX(-80px); }
  }
  @keyframes appear-up {
    0%   { width: 38px; }
    100% { width: 8px; bottom: 69px; }
  }
  @keyframes appear-down {
    0%   { width: 38px; }
    100% { width: 8px; top: 69px; }
  }
`;

export const RightFrills = styled.div`
  position: absolute;
  left: calc(200px + 14px);
  top: calc(30px - 4px);
  height: 8px;
  border-radius: 4px;
  background: ${theme.PALETTE.primary.main};
  width: 0;
  visibility: hidden;

  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    height: 8px;
    width: 0;
    border-radius: 4px;
    background: ${theme.PALETTE.primary.main};
    visibility: hidden;
    right: 15px;
  }
  &::before { 
    bottom: 45px; 
    transform: rotate(-34deg); 
  }
  &::after  { 
    top: 45px; 
    transform: rotate(34deg); 
  }

  .active & {
    visibility: visible;
    animation: appear-right 0.38s ease-out forwards;
  }
  .active &::before {
    visibility: visible;
    animation: appear-up 0.38s ease-out forwards;
  }
  .active &::after {
    visibility: visible;
    animation: appear-down 0.38s ease-out forwards;
  }

  @keyframes appear-right {
    0%   { width: 38px; transform: none; }
    100% { width: 8px;  transform: translateX(80px); }
  }
  @keyframes appear-up {
    0%   { width: 38px; }
    100% { width: 8px; bottom: 69px; }
  }
  @keyframes appear-down {
    0%   { width: 38px; }
    100% { width: 8px; top: 69px; }
  }
`;

export const BtnInner = styled.div`
  position: relative;
  display: inline-block;
`;

export const PrimaryText = styled.span`
  color: ${theme.TEXT_COLOR.primary};
`;