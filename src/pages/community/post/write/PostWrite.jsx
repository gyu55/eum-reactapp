// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import theme from "../styles/theme";

import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";
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
} from "../../../../styles/common";
import {
  flexBetweenTopRow,
  flexStartColumn,
  textFieldStyle,
} from "../../communityStyle";
import ToolBar from "./postWriteComponent/ToolBar";
import CommunityRule from "./postWriteComponent/CommunityRule";
import PostingGuide from "./postWriteComponent/PostingGuide";

/* ── 에셋 URL ── */
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
  min-width: 0;
  height: 49px;
  padding: 0 24px;
  ${h10Regular}

  ${textFieldStyle}
  ${leftAreaWidth}
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

// 카테고리 선택 버튼 조정
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

const TextArea = styled.textarea`
  height: 360px;
  resize: vertical;
  ${h10Regular}
  ${textFieldStyle}
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
  ${h10Bold}
  color: ${theme.GRAYSCALE[9]};
  text-align: center;
`;

const FileDropSub = styled.p`
  margin: 0;
  ${h11Regular}
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
  ${h11Bold}
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
  ${h11Regular}
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
  ${h11Regular}
  color: ${theme.PALETTE.primary.main};
  white-space: pre-line;
`;

/* ══ 컴포넌트 ══ */
const PostWrite = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");

  return (
    <Page>
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
                  <ToolBar />
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
          <PostingGuide />
          {/* 커뮤니티 규칙 */}
          <CommunityRule />

          {/* 자동 임시저장 알림 */}
          <SaveNotice>
            <SaveIcon src={iconSaveNotice} alt="" />
            <SaveText>
              {
                "작성 중인 글은 자동으로 임시 저장됩니다.\n언제든지 이어서 작성할 수 있어요."
              }
            </SaveText>
          </SaveNotice>
        </RightBlock>
      </ContentArea>
    </Page>
  );
};

export default PostWrite;
