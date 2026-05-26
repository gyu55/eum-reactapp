import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomServiceNoticeWriteComponent from "./CustomServiceNoticeWriteComponent";
import PageHeroCard from "../../common/pageHeroCard";

const CustomServiceNoticeWriteContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ category, pinned, title, content }) => {
    try {
      await fetch("http://localhost:10000/api/notice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          noticeCategory: category,
          noticePinned:   pinned ? 1 : 0,
          noticeTitle:    title,
          noticeContent:  content,
        }),
      });
      navigate("/customservice/notice");
    } catch {
      alert("등록에 실패했습니다.");
    }
  };

  const handleCancel = () => navigate("/customservice/notice");

  return (
    <>
      <PageHeroCard
        badge="고객지원"
        title="공지사항"
        sub="이음 서비스의 새로운 소식과 업데이트를 확인하세요."
        iconSrc="/assets/image/customService/noticeIcon.svg"
        />
      <CustomServiceNoticeWriteComponent
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        />
    </>
  );
};

export default CustomServiceNoticeWriteContainer;