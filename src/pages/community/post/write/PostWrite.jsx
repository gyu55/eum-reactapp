// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import theme from "../styles/theme";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import ToolBar from "./postWriteComponent/ToolBar";
import CommunityRule from "./postWriteComponent/CommunityRule";
import PostingGuide from "./postWriteComponent/PostingGuide";
import * as S from "./postWriteStyle";
import { createPost } from "../../communityApi/postApi";

// 파일 업로드 내 파일
import postFileUpload from "../../assets/postWrite/post-file-upload.svg";
import postTempSaveInfo from "../../assets/postWrite/post-temp-save-info.svg";

const CATEGORIES = [
  "전체",
  "자유게시판",
  "학습 질문",
  "학습 인증",
  "수어 영상",
  "취업·진로",
];

// const searchParams = searchParams()

const TITLE_MAX = 255;
const CONTENT_MAX = 4000;

/* ══ 컴포넌트 ══ */
const PostWrite = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
  });

  const validate = () => {
    const errs = {};
    if (activeCategory === "전체") errs.category = "카테고리를 선택해 주세요.";
    if (!title.trim()) errs.title = "제목을 입력해 주세요.";
    else if (title.length > TITLE_MAX)
      errs.title = `제목은 ${TITLE_MAX}자 이내로 입력해 주세요.`;
    if (editor?.isEmpty) errs.content = "본문을 입력해 주세요.";
    else if ((editor?.getHTML() ?? "").length > CONTENT_MAX)
      errs.content = `본문은 ${CONTENT_MAX}자 이내로 입력해 주세요.`;
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    try {
      await createPost({
        postTitle: title,
        postContent: editor.getHTML(),
        postTag: activeCategory,
      });
      navigate(-1);
    } catch {
      setErrors({ submit: "게시글 등록에 실패했습니다. 다시 시도해 주세요." });
    }
  };

  return (
    <S.PostWritePage>
      {/* 콘텐츠 영역 */}
      <S.ContentArea>
        {/* 왼쪽: 작성 영역 (984px) */}
        <S.LeftBlock>
          {/* 상단 액션 버튼 */}
          <S.ActionButtons>
            <S.ActionBtn $type="cancel" onClick={() => navigate(-1)}>
              취소
            </S.ActionBtn>
            <S.ActionBtn $type="draft">임시저장</S.ActionBtn>
            <S.ActionBtn $type="submit" onClick={handleSubmit}>
              등록하기
            </S.ActionBtn>
          </S.ActionButtons>

          {/* 작성 카드 */}
          <S.WriteCard>
            <S.CardHeader>
              <p>이음 커뮤니티에 새 글을 작성합니다</p>
            </S.CardHeader>

            <S.CardBody>
              {/* 카테고리 */}
              <S.FieldRow>
                <S.FieldLabel>
                  <S.LabelText>카테고리</S.LabelText>
                  <S.RequiredMark>*</S.RequiredMark>
                </S.FieldLabel>
                <S.CategoryCol>
                  <S.CategoryHint>
                    글의 성격에 맞는 카테고리를 선택해 주세요
                  </S.CategoryHint>
                  <S.CategoryPills>
                    {CATEGORIES.map((cat) => (
                      <S.CategoryPill
                        key={cat}
                        $active={activeCategory === cat}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </S.CategoryPill>
                    ))}
                  </S.CategoryPills>
                  {errors.category && (
                    <S.ErrorText>{errors.category}</S.ErrorText>
                  )}
                </S.CategoryCol>
              </S.FieldRow>

              {/* 제목 */}
              <S.FieldRow>
                <S.FieldLabel>
                  <S.LabelText>제목</S.LabelText>
                  <S.RequiredMark>*</S.RequiredMark>
                </S.FieldLabel>
                <S.CategoryCol>
                  <S.InputField
                    placeholder="제목을 입력해 주세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={TITLE_MAX}
                  />
                  {errors.title && <S.ErrorText>{errors.title}</S.ErrorText>}
                </S.CategoryCol>
              </S.FieldRow>

              {/* 본문 */}
              <S.FieldRow>
                <S.FieldLabel>
                  <S.LabelText>본문</S.LabelText>
                  <S.RequiredMark>*</S.RequiredMark>
                </S.FieldLabel>
                <S.BodyCol>
                  <ToolBar editor={editor} />
                  <S.TiptapWrapper>
                    <EditorContent editor={editor} />
                  </S.TiptapWrapper>
                  {errors.content && (
                    <S.ErrorText>{errors.content}</S.ErrorText>
                  )}
                </S.BodyCol>
              </S.FieldRow>

              {/* 첨부파일 */}
              <S.FieldRow>
                <S.FieldLabel>
                  <S.LabelText>첨부파일</S.LabelText>
                </S.FieldLabel>
                <S.FileDropZone>
                  <S.UploadIcon src={postFileUpload} alt="파일 업로드" />
                  <S.FileDropTitle>
                    파일을 드래그하거나 클릭해서 첨부하세요
                  </S.FileDropTitle>
                  <S.FileDropSub>
                    JPG, PNG, GIF, MP4 지원 · 파일당 최대 10MB
                  </S.FileDropSub>
                  <S.FileButtons>
                    <S.FileBtn>이미지 첨부</S.FileBtn>
                    <S.FileBtn>영상 첨부</S.FileBtn>
                  </S.FileButtons>
                </S.FileDropZone>
              </S.FieldRow>

              {/* 태그 */}
              <S.FieldRow>
                <S.FieldLabel>
                  <S.LabelText>태그</S.LabelText>
                </S.FieldLabel>
                <S.TagCol>
                  <S.TagHint>Enter 또는 쉼표로 태그 추가 (최대 10개)</S.TagHint>
                  <S.TagInputField placeholder="# 태그를 입력하세요" />
                  <S.TagHint>예: #수어기초 #학습인증 #30일도전</S.TagHint>
                </S.TagCol>
              </S.FieldRow>
            </S.CardBody>
          </S.WriteCard>

          {/* 하단 액션 버튼 */}
          {errors.submit && <S.ErrorText>{errors.submit}</S.ErrorText>}
          <S.ActionButtons>
            <S.ActionBtn $type="cancel" onClick={() => navigate(-1)}>
              취소
            </S.ActionBtn>
            <S.ActionBtn $type="draft">임시저장</S.ActionBtn>
            <S.ActionBtn $type="submit" onClick={handleSubmit}>
              등록하기
            </S.ActionBtn>
          </S.ActionButtons>
        </S.LeftBlock>

        {/* 오른쪽: 사이드바 (312px) */}
        <S.RightBlock>
          {/* 작성 가이드 */}
          <PostingGuide />
          {/* 커뮤니티 규칙 */}
          <CommunityRule />

          {/* 자동 임시저장 알림 */}
          <S.SaveNotice>
            <S.SaveIcon src={postTempSaveInfo} alt="" />
            <S.SaveText>
              {
                "작성 중인 글은 자동으로 임시 저장됩니다.\n언제든지 이어서 작성할 수 있어요."
              }
            </S.SaveText>
          </S.SaveNotice>
        </S.RightBlock>
      </S.ContentArea>
    </S.PostWritePage>
  );
};

export default PostWrite;
