import React, { useState, useEffect } from "react";
import * as S from "./style";
import CustomServiceResultComponent from "./CustomServiceResultComponent";
import PageHeroCard from "../common/pageHeroCard";
import { STATS_LABELS } from "./constants";
import useAuthStore from "../../../store/authStore";
import LoginRequiredPopup from "../../community/common/LoginRequiredPopup";
import InquireDonePopup from "../common/InquireDonePopup";

const CustomServiceResultContainer = () => {
  const [results, setResults]           = useState([]);
  const [isLoading, setIsLoading]       = useState(false);
  const [error, setError]               = useState(null);
  const [isAdmin, setIsAdmin]           = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [donePopup, setDonePopup]       = useState({
    isOpen: false, title: "", sub: "", buttonText: "", onConfirm: null
  });
  const { isAuthenticated }             = useAuthStore();

  const reload = async (admin) => {
    setIsLoading(true);
    try {
      const url = admin
        ? "http://localhost:10000/api/inquire/admin"
        : "http://localhost:10000/api/inquire";
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("문의 목록을 불러올 수 없습니다.");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLoginPopup(true);
      return;
    }
    const init = async () => {
      try {
        const meRes = await fetch("http://localhost:10000/api/auth/me", { credentials: "include" });
        let admin = false;
        if (meRes.ok) {
          const user = await meRes.json();
          admin = user.role === "ADMIN";
          setIsAdmin(admin);
        }
        await reload(admin);
      } catch {
        setError("초기화 실패");
      }
    };
    init();
  }, [isAuthenticated]);

  const handleAnswer = async (id, answer) => {
    try {
      const res = await fetch(`http://localhost:10000/api/inquire/${id}/answer`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ inquireAnswer: answer }),
      });
      if (!res.ok) throw new Error("답변 실패");
      reload(isAdmin);
      setDonePopup({
        isOpen: true,
        title: "답변이 등록되었습니다!",
        sub: "답변이 정상적으로 등록되었습니다.",
        buttonText: "확인",
        onConfirm: null,
      });
    } catch {
      alert("답변 등록에 실패했습니다.");
    }
  };

  const handleEdit = async (id, title, content, file) => {
    try {
      const formData = new FormData();
      formData.append("inquireContent", content);
      if (file) formData.append("file", file);

      const res = await fetch(`http://localhost:10000/api/inquire/${id}`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });
      if (!res.ok) throw new Error("수정 실패");
      reload(isAdmin);
      setDonePopup({
        isOpen: true,
        title: "문의가 수정되었습니다!",
        sub: "수정된 내용은 문의 결과에서 확인하실 수 있습니다.",
        buttonText: "확인",
        onConfirm: null,
      });
    } catch {
      alert("문의 수정에 실패했습니다.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:10000/api/inquire/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("삭제 실패");
      reload(isAdmin);
      setDonePopup({
        isOpen: true,
        title: "문의가 삭제되었습니다!",
        sub: "문의가 정상적으로 삭제되었습니다.",
        buttonText: "확인",
        onConfirm: null,
      });
    } catch {
      alert("문의 삭제에 실패했습니다.");
    }
  };

  const totalCount   = results.length;
  const doneCount    = results.filter((r) => r.inquireStatus === "답변완료").length;
  const pendingCount = results.filter((r) => r.inquireStatus === "대기").length;

  const STATS = [
    { label: STATS_LABELS[0], count: totalCount },
    { label: STATS_LABELS[1], count: doneCount },
    { label: STATS_LABELS[2], count: pendingCount },
  ];

  return (
    <>
      <LoginRequiredPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      <InquireDonePopup
        isOpen={donePopup.isOpen}
        onClose={() => setDonePopup((prev) => ({ ...prev, isOpen: false }))}
        title={donePopup.title}
        sub={donePopup.sub}
        buttonText={donePopup.buttonText}
        onConfirm={donePopup.onConfirm}
      />
      <PageHeroCard
        badge="고객지원"
        title="문의 결과"
        sub="접수하신 문의 내역과 답변을 확인하세요."
        iconSrc="/assets/image/customService/resultIcon.svg"
      />

      <S.StatRow>
        {STATS.map((stat) => (
          <S.StatCard key={stat.label}>
            <S.StatCount>{stat.count}</S.StatCount>
            <S.StatLabel>{stat.label}</S.StatLabel>
          </S.StatCard>
        ))}
      </S.StatRow>

      <CustomServiceResultComponent
        results={results}
        isLoading={isLoading}
        error={error}
        isAdmin={isAdmin}
        onAnswer={handleAnswer}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default CustomServiceResultContainer;