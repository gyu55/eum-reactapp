import React, { useEffect } from "react";
import * as S from "./style";
import { CATEGORIES } from "./constants";

const CustomServiceInquireComponent = ({
  activeCategory,
  email,
  title,
  content,
  files,
  previewUrls,
  onCategoryChange,
  onEmailChange,
  onTitleChange,
  onContentChange,
  onFileChange,
  onRemoveFile,
  onSubmit,
  getKey,
}) => {
  useEffect(() => {
    return () => {
      Object.values(previewUrls.current).forEach((url) =>
        URL.revokeObjectURL(url)
      );
    };
  }, []);

  return (
    <S.Wrap>
      {/* 문의 유형 */}
      <div>
        <S.Label as="span">문의 유형</S.Label>
        <S.CategoryRow>
          {CATEGORIES.map((cat) => (
            <S.CategoryBtn
              key={cat}
              $active={activeCategory === cat}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </S.CategoryBtn>
          ))}
        </S.CategoryRow>
      </div>

      {/* 이메일 */}
      <div>
        <S.Label>이메일 <S.Required>*</S.Required></S.Label>
        <S.Input
          type="email"
          placeholder="example1234@gmail.com"
          value={email}
          onChange={onEmailChange}
        />
      </div>

      {/* 문의 제목 */}
      <div>
        <S.Label>문의 제목 <S.Required>*</S.Required></S.Label>
        <S.Input
          type="text"
          placeholder="문의 제목을 입력해주세요."
          value={title}
          onChange={onTitleChange}
        />
      </div>

      {/* 문의 내용 */}
      <div>
        <S.Label>문의 내용 <S.Required>*</S.Required></S.Label>
        <S.Textarea
          placeholder="문의 내용을 자세히 작성해주세요. (최소 10자)"
          value={content}
          onChange={onContentChange}
          maxLength={500}
        />
        <S.CharCount>{content.length} / 500자</S.CharCount>
      </div>

      {/* 파일 첨부 */}
      <div>
        <S.Label as="span">파일 첨부</S.Label>
        <S.FileDropZone>
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={onFileChange}
          />
          + 파일을 드래그하거나 클릭해서 첨부하세요. (최대 5MB)
        </S.FileDropZone>
        {files.length > 0 && (
          <S.FileList>
            {files.map((file, i) => {
              const previewUrl = previewUrls.current[getKey(file)];
              return (
                <S.FileItem key={i}>
                  <S.FileInfo>
                    {previewUrl && (
                      <S.FileThumb src={previewUrl} alt={file.name} />
                    )}
                    <S.FileName>{file.name}</S.FileName>
                  </S.FileInfo>
                  <S.FileRemoveBtn onClick={() => onRemoveFile(i)}>✕</S.FileRemoveBtn>
                </S.FileItem>
              );
            })}
          </S.FileList>
        )}
      </div>

      {/* 제출 버튼 */}
      <S.SubmitBtn onClick={onSubmit}>문의 제출하기</S.SubmitBtn>
    </S.Wrap>
  );
};

export default CustomServiceInquireComponent;