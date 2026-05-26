import React, { useState, useRef } from "react";
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
    await fetch("http://localhost:10000/api/inquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        inquireType:    activeCategory,
        inquireEmail:   email,
        inquireTitle:   title,
        inquireContent: content,
      }),
    });
  } catch (err) {
    console.error(err);
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






