// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import theme from "../styles/theme";

import styled, { css } from "styled-components";
import theme from "../../../../../styles/theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  flexBetweenColumn,
  flexCenterColumn,
  flexCenterRow,
  h10Bold,
  h10Regular,
  h11Bold,
  h11Regular,
  h9Bold,
} from "../../../../../styles/common";
import { flexBetweenTopRow, flexStartColumn } from "../../communityStyle";

/* ── 에셋 URL ── */
const logoSignImg =
  "https://www.figma.com/api/mcp/asset/157266aa-f512-4fae-90d0-469e5ccd849d";
const youtubeLogoImg =
  "https://www.figma.com/api/mcp/asset/4a0a2f06-4130-4d40-ac3f-9daee51ce634";
const naverLogoImg =
  "https://www.figma.com/api/mcp/asset/81257a45-6f8a-40e5-83ed-2f65444f1c4c";
const instagramLogoImg =
  "https://www.figma.com/api/mcp/asset/a2762428-0e3e-447d-a6e7-6afa60cf4e22";

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

const CATEGORIES = [
  "전체",
  "자유게시판",
  "학습 질문",
  "학습 인증",
  "수어 영상",
  "취업·진로",
];

/* ══ Page ══ */
const Page = styled.div`
  background: ${theme.GRAYSCALE[10]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* ══ Header ══ */
const Header = styled.header`
  background: ${theme.PALETTE.white};
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 300px;
  border-bottom: 1px solid ${theme.GRAYSCALE[8]};
  position: sticky;
  top: 0;
  z-index: 50;
  box-sizing: border-box;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const LogoSign = styled.img`
  height: 28px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h8};
  color: ${theme.PALETTE.primary.main};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 49px;
`;

const NavItem = styled.a`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.PALETTE.primary.dark};
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: ${theme.PALETTE.primary.main};
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderBtn = styled.button`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  letter-spacing: -0.28px;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ $variant }) =>
    $variant === "filled" ? theme.PALETTE.primary.main : theme.PALETTE.white};
  color: ${({ $variant }) =>
    $variant === "filled" ? theme.PALETTE.white : theme.PALETTE.primary.main};
  border: 2px solid ${theme.PALETTE.primary.main};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

/* ══ Content Area ══ */
// 해당 영역은 좌측에는 메인, 우측에는 사이드 레이아웃이 있는 구조
const ContentArea = styled.main`
  flex: 1;
  padding: 24px 300px 60px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  box-sizing: border-box;
`;

/* ══ Left Block ══ */
const LeftBlock = styled.div`
  width: 984px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
`;

/* ── 액션 버튼 그룹 (취소/임시저장/등록하기) ── */
const ActionButtons = styled.div`
  ${flexCenterRow}
  gap: 12px;
`;

// 버튼 스타일
const ActionBtn = styled.button`
  ${h11Bold}
  padding: 8px 30px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;

  background: ${({ $type }) => {
    if ($type === "submit") return theme.PALETTE.primary.main;
    return theme.PALETTE.white;
  }};
  color: ${({ $type }) => {
    if ($type === "submit") return theme.PALETTE.white;
    if ($type === "draft") return theme.PALETTE.primary.main;
    return theme.GRAYSCALE[9];
  }};
  border: 1px solid
    ${({ $type }) =>
      $type === "draft" ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};

  &:hover {
    opacity: 0.85;
  }
`;

/* ── 작성 카드 ── */
const WriteCard = styled.div`
  width: 100%;
  ${flexCenterColumn}
`;

// 이음 커뮤니티에 새 글을 작성합니다. 라는 제목
const CardHeader = styled.div`
  background: ${theme.PALETTE.primary.main};
  padding: 16px 36px;
  border-radius: 20px 20px 0 0;
  width: 100%;

  p {
    margin: 0;
    ${h10Regular}
    color: ${theme.PALETTE.white};
    white-space: nowrap;
  }
`;

// 게시글을 작성하는 부분
const CardBody = styled.div`
  background: ${theme.PALETTE.white};
  padding: 32px;
  border-radius: 0 0 20px 20px;
  ${flexBetweenColumn}
  width: 100%;
  gap: 32px;
`;

/* ── 공통: 항목 행 레이아웃 ── */
const FieldRow = styled.div`
  ${flexBetweenTopRow}
  width: 100%;
`;

/* ── 항목 이름 레이블 ── */
const FieldLabel = styled.div`
  ${flexCenterRow}
  gap: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  /* min-width: 56px; */
`;

const LabelText = styled.span`
  ${h10Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

const RequiredMark = styled.span`
  ${h11Bold}
  color: ${theme.PALETTE.primary.main};
`;

// 각 필드 오른쪽 영역 고정 너비
const leftAreaWidth = css`
  width: 848px;
`;

/* ── 텍스트 입력 필드 ── */
const InputField = styled.input`
  /* flex: 1; */
  min-width: 0;
  height: 49px;
  ${leftAreaWidth}
  padding: 0 24px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  line-height: 22px;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

/* ── 카테고리 ── */
const CategoryCol = styled.div`
  ${leftAreaWidth}
  ${flexStartColumn}
  gap: 8px;
`;

const CategoryHint = styled.p`
  margin: 0;
  ${h11Regular}
  color: ${theme.GRAYSCALE[9]};
`;

const CategoryPills = styled.div`
  ${flexCenterRow}
  gap: 8px;
  flex-wrap: wrap;
`;

const CategoryPill = styled.button`
  height: 36px;
  padding: 0 24px;
  border-radius: 100px;
  ${h9Bold}
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;

  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.PALETTE.white};
  color: ${({ $active }) =>
    $active ? theme.PALETTE.white : theme.TEXT_COLOR.basic};
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};

  &:hover {
    background: ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.PALETTE.primary.extraLight};
    border-color: ${theme.PALETTE.primary.main};
    color: ${({ $active }) =>
      $active ? theme.PALETTE.white : theme.PALETTE.primary.main};
  }
`;

/* ── 본문 입력 영역 ── */
const BodyCol = styled.div`
  ${leftAreaWidth}
  ${flexStartColumn}
  gap: 8px;
`;

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

const TextArea = styled.textarea`
  width: 100%;
  height: 360px;
  padding: 16px 24px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  ${h10Regular}
  color: ${theme.TEXT_COLOR.basic};
  resize: vertical;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
    white-space: nowrap;
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

/* ── 첨부파일 ── */
const FileDropZone = styled.div`
  ${leftAreaWidth}
  min-width: 0;
  height: 180px;
  background: ${theme.GRAYSCALE[10]};
  border: 2px dashed ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

const UploadIcon = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;

const FileDropTitle = styled.p`
  margin: 0;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  letter-spacing: -0.28px;
  color: ${theme.GRAYSCALE[9]};
  text-align: center;
`;

const FileDropSub = styled.p`
  margin: 0;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.GRAYSCALE[9]};
  text-align: center;
`;

const FileButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

const FileBtn = styled.button`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 20px;
  letter-spacing: -0.24px;
  padding: 8px 30px;
  border-radius: 10px;
  border: 1px solid ${theme.GRAYSCALE[8]};
  background: ${theme.PALETTE.white};
  color: ${theme.GRAYSCALE[9]};
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
    color: ${theme.PALETTE.primary.main};
  }
`;

/* ── 태그 입력 ── */
const TagCol = styled.div`
  /* flex: 1; */
  ${leftAreaWidth}
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TagHint = styled.p`
  margin: 0;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.GRAYSCALE[9]};
`;

const TagInputField = styled.input`
  width: 100%;
  height: 49px;
  padding: 0 24px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  line-height: 22px;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

/* ══ Right Block ══ */
const RightBlock = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
`;

/* ── 사이드 카드 공통 ── */
const SideCard = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(67, 89, 252, 0.12);
`;

const SideCardTitle = styled.p`
  margin: 0;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
`;

const SideDivider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
  width: 100%;
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const NoticeItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const NumberBadge = styled.div`
  width: 20px;
  height: 20px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  span {
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-size: ${theme.FONT_SIZE.h11};
    line-height: normal;
    color: ${theme.PALETTE.white};
    text-align: center;
  }
`;

const NoticeText = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.GRAYSCALE[9]};
`;

const NoticeStrong = styled.strong`
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

const NoticeDanger = styled.strong`
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.red};
`;

const NoticeGreen = styled.strong`
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.secondary.main};
`;

/* ── 자동 임시저장 알림 ── */
const SaveNotice = styled.div`
  background: ${theme.PALETTE.primary.extraLight};
  border-radius: 20px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 23px;
`;

const SaveIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
`;

const SaveText = styled.p`
  margin: 0;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.PALETTE.primary.main};
  white-space: pre-line;
`;

/* ══ Footer ══ */
const Footer = styled.footer`
  background: ${theme.PALETTE.primary.main};
  padding: 40px 300px;
  box-sizing: border-box;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FooterLink = styled.a`
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.PALETTE.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinkDivider = styled.div`
  width: 1px;
  height: 11px;
  background: rgba(255, 255, 255, 0.3);
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialBtn = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  &:hover {
    border-color: ${theme.PALETTE.white};
  }
`;

const FooterInfoLabel = styled.p`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.48px;
  margin: 0 0 12px 0;
`;

const FooterInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const FooterInfo = styled.p`
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.white};
  margin: 0;
  white-space: nowrap;
`;

/* ══ 컴포넌트 ══ */
const PostWrite = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");

  return (
    <Page>
      {/* 헤더 */}
      <Header>
        <LogoArea onClick={() => navigate("/")}>
          <LogoSign src={logoSignImg} alt="이음 로고" />
          <LogoText>이음</LogoText>
        </LogoArea>

        <Nav>
          <NavItem>학습</NavItem>
          <NavItem>시험</NavItem>
          <NavItem>커뮤니티</NavItem>
          <NavItem>고객지원</NavItem>
        </Nav>

        <HeaderButtons>
          <HeaderBtn $variant="outline">마이페이지</HeaderBtn>
          <HeaderBtn $variant="filled">로그아웃</HeaderBtn>
        </HeaderButtons>
      </Header>

      {/* 콘텐츠 영역 */}
      <ContentArea>
        {/* 왼쪽: 작성 영역 (984px) */}
        <LeftBlock>
          {/* 상단 액션 버튼 */}
          <ActionButtons>
            <ActionBtn $type="cancel" onClick={() => navigate(-1)}>
              취소
            </ActionBtn>
            <ActionBtn $type="draft">임시저장</ActionBtn>
            <ActionBtn $type="submit">등록하기</ActionBtn>
          </ActionButtons>

          {/* 작성 카드 */}
          <WriteCard>
            <CardHeader>
              <p>이음 커뮤니티에 새 글을 작성합니다</p>
            </CardHeader>

            <CardBody>
              {/* 카테고리 */}
              <FieldRow>
                <FieldLabel>
                  <LabelText>카테고리</LabelText>
                  <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <CategoryCol>
                  <CategoryHint>
                    글의 성격에 맞는 카테고리를 선택해 주세요
                  </CategoryHint>
                  <CategoryPills>
                    {CATEGORIES.map((cat) => (
                      <CategoryPill
                        key={cat}
                        $active={activeCategory === cat}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </CategoryPill>
                    ))}
                  </CategoryPills>
                </CategoryCol>
              </FieldRow>

              {/* 제목 */}
              <FieldRow>
                <FieldLabel>
                  <LabelText>제목</LabelText>
                  <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <InputField placeholder="제목을 입력해 주세요 zz" />
              </FieldRow>

              {/* 본문 */}
              <FieldRow>
                <FieldLabel>
                  <LabelText>본문</LabelText>
                  <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <BodyCol>
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
                      <ToolbarIcon
                        style={{ transform: "scaleY(-1) rotate(180deg)" }}
                      >
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
                  <TextArea placeholder="내용을 입력해 주세요" />
                </BodyCol>
              </FieldRow>

              {/* 첨부파일 */}
              <FieldRow>
                <FieldLabel>
                  <LabelText>첨부파일</LabelText>
                </FieldLabel>
                <FileDropZone>
                  <UploadIcon src={iconUpload} alt="파일 업로드" />
                  <FileDropTitle>
                    파일을 드래그하거나 클릭해서 첨부하세요
                  </FileDropTitle>
                  <FileDropSub>
                    JPG, PNG, GIF, MP4 지원 · 파일당 최대 10MB
                  </FileDropSub>
                  <FileButtons>
                    <FileBtn>이미지 첨부</FileBtn>
                    <FileBtn>영상 첨부</FileBtn>
                  </FileButtons>
                </FileDropZone>
              </FieldRow>

              {/* 태그 */}
              <FieldRow>
                <FieldLabel>
                  <LabelText>태그</LabelText>
                </FieldLabel>
                <TagCol>
                  <TagHint>Enter 또는 쉼표로 태그 추가 (최대 10개)</TagHint>
                  <TagInputField placeholder="# 태그를 입력하세요" />
                  <TagHint>예: #수어기초 #학습인증 #30일도전</TagHint>
                </TagCol>
              </FieldRow>
            </CardBody>
          </WriteCard>

          {/* 하단 액션 버튼 */}
          <ActionButtons>
            <ActionBtn $type="cancel" onClick={() => navigate(-1)}>
              취소
            </ActionBtn>
            <ActionBtn $type="draft">임시저장</ActionBtn>
            <ActionBtn $type="submit">등록하기</ActionBtn>
          </ActionButtons>
        </LeftBlock>

        {/* 오른쪽: 사이드바 (312px) */}
        <RightBlock>
          {/* 작성 가이드 */}
          <SideCard>
            <SideCardTitle>📋 작성 가이드</SideCardTitle>
            <SideDivider />
            <NoticeList>
              <NoticeItem>
                <NumberBadge>
                  <span>1</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeStrong>카테고리</NoticeStrong>를 먼저 선택해 주세요.
                  {"\n"}
                  글의 성격에 맞는 게시판에 올려야{"\n"}더 많은 분들이 볼 수
                  있어요.
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>2</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeStrong>제목</NoticeStrong>은 내용을 잘 나타낼 수 있도록
                  {"\n"}명확하게 작성해 주세요.
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>3</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeStrong>태그</NoticeStrong>를 추가하면 비슷한 관심사의
                  {"\n"}분들이 글을 더 쉽게 찾아요
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>4</span>
                </NumberBadge>
                <NoticeText>
                  수어 영상이나 이미지를 첨부하면{"\n"}
                  <NoticeStrong>훨씬 풍부한 게시글</NoticeStrong>이 됩니다.
                </NoticeText>
              </NoticeItem>
            </NoticeList>
          </SideCard>

          {/* 자동 임시저장 알림 */}
          <SaveNotice>
            <SaveIcon src={iconSaveNotice} alt="" />
            <SaveText>
              {
                "작성 중인 글은 자동으로 임시 저장됩니다.\n언제든지 이어서 작성할 수 있어요."
              }
            </SaveText>
          </SaveNotice>

          {/* 커뮤니티 규칙 */}
          <SideCard>
            <SideCardTitle>커뮤니티 규칙</SideCardTitle>
            <SideDivider />
            <NoticeList>
              <NoticeItem>
                <NumberBadge>
                  <span>1</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeGreen>서로 존중</NoticeGreen>하고 배려하는 말 사용
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>2</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeDanger>욕설, 비방</NoticeDanger> 및 혐오 표현{" "}
                  <NoticeDanger>금지</NoticeDanger>
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>3</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeDanger>광고, 홍보성</NoticeDanger> 게시글{" "}
                  <NoticeDanger>삭제</NoticeDanger>
                </NoticeText>
              </NoticeItem>
              <NoticeItem>
                <NumberBadge>
                  <span>4</span>
                </NumberBadge>
                <NoticeText>
                  <NoticeDanger>저작권 침해</NoticeDanger> 콘텐츠{" "}
                  <NoticeDanger>금지</NoticeDanger>
                </NoticeText>
              </NoticeItem>
            </NoticeList>
          </SideCard>
        </RightBlock>
      </ContentArea>

      {/* 푸터 */}
      <Footer>
        <FooterTop>
          <FooterLinks>
            <FooterLink>개인정보처리방침</FooterLink>
            <FooterLinkDivider />
            <FooterLink>서비스 이용약관</FooterLink>
          </FooterLinks>
          <SocialLinks>
            <SocialBtn>
              <img src={youtubeLogoImg} alt="유튜브" />
            </SocialBtn>
            <SocialBtn>
              <img src={naverLogoImg} alt="네이버" />
            </SocialBtn>
            <SocialBtn>
              <img src={instagramLogoImg} alt="인스타그램" />
            </SocialBtn>
          </SocialLinks>
        </FooterTop>
        <FooterInfoLabel>INFO.</FooterInfoLabel>
        <FooterInfoRow>
          <FooterInfo>주식회사 이음</FooterInfo>
          <FooterInfo>대표 : 노규호 외 4명</FooterInfo>
          <FooterInfo>사업자등록번호 : 123-45-67890</FooterInfo>
        </FooterInfoRow>
        <FooterInfoRow style={{ marginTop: "8px" }}>
          <FooterInfo>주소 : 서울특별시 마포구 백범로 130</FooterInfo>
          <FooterInfo>광고·제휴문의 : code-kine@gmail.com</FooterInfo>
        </FooterInfoRow>
      </Footer>
    </Page>
  );
};

export default PostWrite;
