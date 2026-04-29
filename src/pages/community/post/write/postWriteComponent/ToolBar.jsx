import React from "react";
import styled from "styled-components";
import { flexCenterRow, h11Bold } from "../../../../../styles/common";
import theme from "../../../../../styles/theme";

const iconBold =
  "https://www.figma.com/api/mcp/asset/b673a673-27cf-4dfe-a1f3-9547544fb882";
const iconItalic =
  "https://www.figma.com/api/mcp/asset/37d859a9-fdc3-4dd0-993f-0b2a01c18965";
const iconUnderline =
  "https://www.figma.com/api/mcp/asset/0e4c0f60-257a-4f90-9c5c-b496b37e862c";
const iconStrikethrough =
  "https://www.figma.com/api/mcp/asset/25dba53c-3520-462a-b912-a03c100db925";
const iconAlignLeft =
  "https://www.figma.com/api/mcp/asset/6fa6c454-ca3c-4224-bb60-9ce2bb723a19";
const iconAlignCenter =
  "https://www.figma.com/api/mcp/asset/534159b6-e6dc-4df4-9a76-c2c1d81ae21d";
const iconAlignRight =
  "https://www.figma.com/api/mcp/asset/a335476f-0c24-492c-b324-77cdae8023e3";
const iconAlignJustify =
  "https://www.figma.com/api/mcp/asset/1fc7a056-5959-442b-9994-7355a46bd30b";
const iconImage =
  "https://www.figma.com/api/mcp/asset/f150920e-4461-445e-9832-5b2e2b511a06";
const iconUpload =
  "https://www.figma.com/api/mcp/asset/66deb0b8-9f0e-48ef-945b-0aec781f7f86";
const iconSaveNotice =
  "https://www.figma.com/api/mcp/asset/8cb6e2d2-bd5f-4c73-a458-90a2d56008bc";

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

const ToolBar = () => {
  return (
    <div>
      <ToolbarRow>
        <Toolbar>
          <ToolbarIcon>
            <img src={iconBold} alt="굵게" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconItalic} alt="기울임" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconUnderline} alt="밑줄" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconStrikethrough} alt="취소선" />
          </ToolbarIcon>
          <ToolbarDivider />
          <ToolbarIcon style={{ transform: "scaleY(-1) rotate(180deg)" }}>
            <img src={iconAlignLeft} alt="왼쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconAlignCenter} alt="가운데 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconAlignRight} alt="오른쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconAlignJustify} alt="양쪽 정렬" />
          </ToolbarIcon>
          <ToolbarIcon>
            <img src={iconImage} alt="이미지 삽입" />
          </ToolbarIcon>
        </Toolbar>
        <VoiceBtn>음성 입력</VoiceBtn>
      </ToolbarRow>
    </div>
  );
};

export default ToolBar;
