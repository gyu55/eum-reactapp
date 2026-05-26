import styled, { keyframes } from "styled-components";

const starRing = keyframes`
  from, 20% { opacity: 1; r: 8px; stroke-width: 16px; transform: scale(0); animation-timing-function: ease-in; }
  35%        { opacity: 0.5; r: 8px; stroke-width: 16px; transform: scale(1); animation-timing-function: ease-out; }
  50%, to    { opacity: 0; r: 16px; stroke-width: 0; transform: scale(1); }
`;

const starFill = keyframes`
  from, 40% { transform: scale(0); animation-timing-function: ease-out; }
  60%        { transform: scale(1.05); animation-timing-function: ease-in-out; }
  80%        { transform: scale(0.97); }
  to         { transform: scale(1); }
`;

const starStroke = keyframes`
  from    { transform: scale(1); }
  20%, to { transform: scale(0); }
`;

const starLine = keyframes`
  from, 40% { stroke-dasharray: 1 23; stroke-dashoffset: 1; animation-timing-function: ease-out; }
  60%, to   { stroke-dasharray: 12 13; stroke-dashoffset: -13; }
`;

export const StarWrap = styled.span`
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  overflow: visible;

  svg {
    overflow: visible;
    display: block;
  }

  .star-ring {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: ${({ $delay }) => ($delay > 0 ? `${($delay - 1) * 0.05}s` : "0s")};
    animation-name: ${({ $animating }) => ($animating ? starRing : "none")};
    stroke: #f5a623;
    fill: none;
    stroke-width: 16px;
    transform: scale(0);
    transform-origin: 21px 20px;
    opacity: 0;
  }
  .star-fill {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: ${({ $delay }) => ($delay > 0 ? `${($delay - 1) * 0.05}s` : "0s")};
    animation-name: ${({ $animating }) => ($animating ? starFill : "none")};
    transform-origin: 21px 20px;
  }
  .star-stroke {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: ${({ $delay }) => ($delay > 0 ? `${($delay - 1) * 0.05}s` : "0s")};
    animation-name: ${({ $animating }) => ($animating ? starStroke : "none")};
    transform: scale(1);
    transform-origin: 21px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 4px;
  overflow: visible;
`;

export const RatingText = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #f5a623;
  text-align: center;
`;