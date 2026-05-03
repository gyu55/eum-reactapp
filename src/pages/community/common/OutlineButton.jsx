import React from "react";
import styled from "styled-components";
import { fonts, radius } from "../constants";

const Btn = styled.button`
  background: ${({ $bgColor }) => $bgColor || "#ffffff"};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: ${radius.sm};
  width: 100%;
  padding: ${({ $padding }) => $padding || "8px 16px"};
  cursor: pointer;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${({ $textColor }) => $textColor};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.8;
  }
`;

const OutlineButton = ({
  borderColor,
  bgColor,
  textColor,
  padding,
  onClick,
  children,
}) => (
  <Btn
    $borderColor={borderColor}
    $bgColor={bgColor}
    $textColor={textColor}
    $padding={padding}
    onClick={onClick}
  >
    {children}
  </Btn>
);

export default OutlineButton;
