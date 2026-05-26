import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomServiceNoticeWriteComponent from "../write/CustomServiceNoticeWriteComponent";
import PageHeroCard from "../../common/pageHeroCard";

const CustomServiceNoticeEditContainer = () => {
  const { id }             = useParams();
  const navigate           = useNavigate();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const loadNotice = async () => {
      try {
        const res = await fetch(`http://localhost:10000/api/notice/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        setNotice(data);
      } catch (err) {
        console.error("조회 실패:", err);
      }
    };
    loadNotice();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch(`http://localhost:10000/api/notice/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          noticeTitle:    formData.title,
          noticeContent:  formData.content,
          noticeCategory: formData.category,
          noticePinned:   formData.pinned ? 1 : 0,
          noticeFileUrl:  "default.jpg",
        }),
      });
      if (!res.ok) throw new Error("수정 실패");
      navigate(`/customservice/notice/${id}`);
    } catch {
      alert("수정에 실패했습니다.");
    }
  };

  const handleCancel = () => navigate(`/customservice/notice/${id}`);

  if (!notice) return null;

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
        initialData={{
          title:    notice.noticeTitle,
          content:  notice.noticeContent,
          category: notice.noticeCategory,
          pinned:   notice.noticePinned === 1,
        }}
      />
    </>
  );
};

export default CustomServiceNoticeEditContainer;