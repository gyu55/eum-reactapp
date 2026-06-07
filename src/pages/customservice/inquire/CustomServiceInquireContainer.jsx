import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomServiceInquireComponent from "./CustomServiceInquireComponent";
import PageHeroCard from "../common/pageHeroCard";

const CustomServiceInquireContainer = ({ onSubmit }) => {
  const [activeCategory, setActiveCategory] = useState("학습 문의");
  const [email, setEmail]                   = useState("");
  const [title, setTitle]                   = useState("");
  const [content, setContent]               = useState("");
  const [files, setFiles]                   = useState([]);
  const previewUrls                         = useRef({});
  const navigate                            = useNavigate();

  useEffect(() => {
  const fetchMe = async () => {
    try {
      const res = await fetch("http://localhost:10000/api/auth/me", { credentials: "include" });
      if (res.ok) {
        const user = await res.json();
        setEmail(user.userEmail ?? "");  // ← 유저 이메일 자동 입력
      }
    } catch {
      // 비로그인 상태면 그냥 빈 값 유지
    }
  };
  fetchMe();
}, []);

  const getKey = (file) => file.name + file.lastModified;

  const handleFileChange = (e) => {
    const newFiles      = Array.from(e.target.files);
    const existingNames = files.map((f) => f.name);
    const filtered      = newFiles.filter((f) => !existingNames.includes(f.name));
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
      const key     = getKey(removed);
      if (previewUrls.current[key]) {
        URL.revokeObjectURL(previewUrls.current[key]);
        delete previewUrls.current[key];
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = async () => {
  if (!email.trim())              return alert("이메일을 입력해주세요.");
  if (!title.trim())              return alert("제목을 입력해주세요.");
  if (content.trim().length < 10) return alert("내용을 최소 10자 이상 입력해주세요.");

  try {
    const formData = new FormData();
    formData.append("inquireType",    activeCategory);
    formData.append("inquireEmail",   email);
    formData.append("inquireTitle",   title);
    formData.append("inquireContent", content);
    files.forEach(file => formData.append("file", file));

    console.log("files 개수:", files.length);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const res = await fetch("http://localhost:10000/api/inquire", {
      method: "POST",
      credentials: "include",
      body: formData,   // Content-Type 헤더 설정 X
    });

    if (!res.ok) throw new Error("문의 등록 실패");
    alert("문의가 등록되었습니다.");
  } catch (err) {
    console.error(err);
    alert("문의 등록에 실패했습니다.");
    return;
  }

  setActiveCategory("학습 문의");
  setEmail("");
  setTitle("");
  setContent("");
  setFiles([]);
  navigate("/customservice/result");
};

  return (
    <>
      <PageHeroCard
        badge="고객지원"
        title="1:1 문의"
        sub="이음 서비스 관련 문의사항을 남겨주세요."
        iconSrc="/assets/image/customService/messageIcon.svg"
      />

      <CustomServiceInquireComponent
        activeCategory={activeCategory}
        email={email}
        title={title}
        content={content}
        files={files}
        previewUrls={previewUrls}
        onCategoryChange={setActiveCategory}
        onEmailChange={(e) => setEmail(e.target.value)}
        onTitleChange={(e) => setTitle(e.target.value)}
        onContentChange={(e) => setContent(e.target.value)}
        onFileChange={handleFileChange}
        onRemoveFile={handleRemoveFile}
        onSubmit={handleSubmit}
        getKey={getKey}
      />
    </>
  );
};

export default CustomServiceInquireContainer;






