import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomServiceNoticeComponent from "./CustomServiceNoticeComponent";
import { NOTICE_API } from "./constants";

const CustomServiceNoticeContainer = () => {
  const { id }                    = useParams();
  const navigate                  = useNavigate();
  const [notice, setNotice]       = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState(null);
  const [isAdmin, setIsAdmin]     = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(NOTICE_API.AUTH_ME, { credentials: "include" });
        if (res.ok) {
          const user = await res.json();
          setIsAdmin(user.role === "ADMIN");
        }
      } catch {
        setIsAdmin(false);
      }
    };
    fetchMe();
  }, []);

  useEffect(() => {
    const loadNotice = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${NOTICE_API.BASE}/${id}`, { credentials: "include" });
        if (!res.ok) throw new Error("공지사항을 찾을 수 없습니다.");
        const data = await res.json();
        setNotice(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadNotice();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    try {
      const res = await fetch(`${NOTICE_API.BASE}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("삭제 실패");
      navigate("/customservice/notice");
    } catch {
      alert("삭제에 실패했습니다.");
    }
  };

  const handleEdit = () => navigate(`/customservice/notice/${id}/edit`);

  return (
    <CustomServiceNoticeComponent
      notice={notice}
      isLoading={isLoading}
      error={error}
      isAdmin={isAdmin}
      onBack={() => navigate("/customservice/notice")}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );
};

export default CustomServiceNoticeContainer;