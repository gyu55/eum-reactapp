import React from "react";
import styled from "styled-components";
import { flexCenterRow, h11Bold } from "../../../../../styles/common";
import theme from "../../../../../styles/theme";

import boldSolidFull from "../../../assets/postWrite/bold-solid-full.svg";
import italicSolidFull from "../../../assets/postWrite/italic-solid-full.svg";
import alignCenterSolidFull from "../../../assets/postWrite/align-center-solid-full.svg";
import alignJustifySolidFull from "../../../assets/postWrite/align-justify-solid-full.svg";
import alignRightSolidFull from "../../../assets/postWrite/align-right-solid-full.svg";
import imageRegularFull from "../../../assets/postWrite/image-regular-full.svg";
import strikethroughSolidFull from "../../../assets/postWrite/strikethrough-solid-full.svg";
import underlineSolidFull from "../../../assets/postWrite/underline-solid-full.svg";

// 툴바 스타일 정의
const ToolbarRow = styled.div`
  ${flexCenterRow}
  gap: 30px;
`;

const Toolbar = styled.div`
  background: ${theme.GRAYSCALE[10]};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToolbarIcon = styled.button`
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const ToolbarDivider = styled.div`
  width: 1px;
  height: 20px;
  background: ${theme.GRAYSCALE[8]};
  flex-shrink: 0;
`;

// 음성 입력 버튼
const VoiceBtn = styled.button`
  ${h11Bold}
  padding: 5px 30px;
  border-radius: 10px;
  border: none;
  background: ${theme.PALETTE.secondary.main};
  color: ${theme.PALETTE.white};
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const prevent = (e) => e.preventDefault();

const ToolBar = ({ editor }) => {
  return (
    <div>
      <ToolbarRow>
        <Toolbar>
          <ToolbarIcon
            $active={editor?.isActive("bold")}
            onMouseDown={prevent}
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            <img src={boldSolidFull} alt="굵게" />
          </ToolbarIcon>
          <ToolbarIcon
            $active={editor?.isActive("italic")}
            onMouseDown={prevent}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <img src={italicSolidFull} alt="기울임" />
          </ToolbarIcon>
          <ToolbarIcon
            $active={editor?.isActive("underline")}
            onMouseDown={prevent}
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
          >
            <img src={underlineSolidFull} alt="밑줄" />
          </ToolbarIcon>
          <ToolbarIcon
            $active={editor?.isActive("strike")}
            onMouseDown={prevent}
            onClick={() => editor?.chain().focus().toggleStrike().run()}
          >
            <img src={strikethroughSolidFull} alt="취소선" />
          </ToolbarIcon>
          <ToolbarDivider />
          <ToolbarIcon style={{ transform: "scaleY(-1) rotate(180deg)" }}>
            <img src={alignRightSolidFull} alt="왼쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={alignCenterSolidFull} alt="가운데 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={alignRightSolidFull} alt="오른쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={alignJustifySolidFull} alt="양쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={imageRegularFull} alt="이미지 삽입" />
          </ToolbarIcon>
        </Toolbar>
        <VoiceBtn>음성 입력</VoiceBtn>
      </ToolbarRow>
    </div>
  );
};

export default ToolBar;
