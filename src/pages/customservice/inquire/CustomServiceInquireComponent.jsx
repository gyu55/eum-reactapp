import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";

const CATEGORIES = ["학습 문의", "결제 / 환불", "계정 / 로그인", "기타"];

const CustomServiceInquireComponent = ({ onSubmit }) => {
  const [activeCategory, setActiveCategory] = useState("학습 문의");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const previewUrls = useRef({});

  const getKey = (file) => file.name + file.lastModified;

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const existingNames = files.map((f) => f.name);
    const filtered = newFiles.filter((f) => !existingNames.includes(f.name));
    filtered.forEach((file) => {
      if (file.type.startsWith("image/")) {
        previewUrls.current[getKey(file)] = URL.createObjectURL(file);
      }
    });
    setFiles((prev) => [...prev, ...filtered]);
    e.target.value = "";
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => {
      const removed = prev[index];
      const key = getKey(removed);
      if (previewUrls.current[key]) {
        URL.revokeObjectURL(previewUrls.current[key]);
        delete previewUrls.current[key];
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  useEffect(() => {
    return () => {
      Object.values(previewUrls.current).forEach((url) =>
        URL.revokeObjectURL(url)
      );
    };
  }, []);

  const handleSubmit = async () => {
    if (!email.trim()) return alert("이메일을 입력해주세요.");
    if (!title.trim()) return alert("제목을 입력해주세요.");
    if (content.trim().length < 10)
      return alert("내용을 최소 10자 이상 입력해주세요.");

    await onSubmit({ category: activeCategory, email, title, content, files });

    setActiveCategory("학습 문의");
    setEmail("");
    setTitle("");
    setContent("");
    setFiles([]);
  };

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
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </S.CategoryBtn>
          ))}
        </S.CategoryRow>
      </div>

      {/* 이메일 */}
      <div>
        <S.Label>
          이메일 <S.Required>*</S.Required>
        </S.Label>
        <S.Input
          type="email"
          placeholder="example1234@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* 문의 제목 */}
      <div>
        <S.Label>
          문의 제목 <S.Required>*</S.Required>
        </S.Label>
        <S.Input
          type="text"
          placeholder="문의 제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 문의 내용 */}
      <div>
        <S.Label>
          문의 내용 <S.Required>*</S.Required>
        </S.Label>
        <S.Textarea
          placeholder="문의 내용을 자세히 작성해주세요. (최소 10자)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
            onChange={handleFileChange}
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
                  <S.FileRemoveBtn onClick={() => handleRemoveFile(i)}>
                    ✕
                  </S.FileRemoveBtn>
                </S.FileItem>
              );
            })}
          </S.FileList>
        )}
      </div>

      {/* 제출 버튼 */}
      <S.SubmitBtn onClick={handleSubmit}>문의 제출하기</S.SubmitBtn>
    </S.Wrap>
  );
};

export default CustomServiceInquireComponent;
