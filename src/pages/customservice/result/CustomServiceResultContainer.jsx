import React, { useState, useEffect } from "react";
import * as S from "./style";
import CustomServiceResultComponent from "./CustomServiceResultComponent";
import PageHeroCard from "../common/pageHeroCard";
import useAuthCheck from "../useAuthCheck";
import { STATS_LABELS } from "./constants";

const CustomServiceResultContainer = () => {
  const [results, setResults]     = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState(null);
  const [isAdmin, setIsAdmin]     = useState(false);

  // ── 목록 다시 불러오기 ──────────────────────────
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

  // ── 최초 진입 ───────────────────────────────────
  useEffect(() => {
    const init = async () => {
      try {
        const meRes = await fetch("http://localhost:10000/api/auth/me", { credentials: "include" });
        let admin = false;
        if (meRes.ok) {
          const user = await meRes.json();
          admin = user.role === "ADMIN";
          setIsAdmin(admin);
        }
        await reload(admin);   // ← admin 값 직접 넘김
      } catch {
        setError("초기화 실패");
      }
    };
    init();
  }, []);

  // ── 답변 / 수정 / 삭제 후 reload ───────────────
  const handleAnswer = async (id, answer) => {
    try {
      const res = await fetch(`http://localhost:10000/api/inquire/${id}/answer`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ inquireAnswer: answer }),
      });
      if (!res.ok) throw new Error("답변 실패");
      alert("답변이 등록되었습니다.");
      reload(isAdmin);   // ← 현재 isAdmin 상태 넘김
    } catch {
      alert("답변 등록에 실패했습니다.");
    }
  };

  const handleEdit = async (id, title, content) => {
    try {
      const res = await fetch(`http://localhost:10000/api/inquire/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ inquireTitle: title, inquireContent: content }),
      });
      if (!res.ok) throw new Error("수정 실패");
      alert("문의가 수정되었습니다.");
      reload(isAdmin);   // ← 현재 isAdmin 상태 넘김
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
      alert("문의가 삭제되었습니다.");
      reload(isAdmin);   // ← 현재 isAdmin 상태 넘김
    } catch {
      alert("문의 삭제에 실패했습니다.");
    }
  };

  const totalCount   = results.length;
  const doneCount    = results.filter((r) => r.inquireStatus === "답변완료").length;
  const pendingCount = results.filter((r) => r.inquireStatus === "답변대기").length;

  const STATS = [
    { label: STATS_LABELS[0], count: totalCount },
    { label: STATS_LABELS[1], count: doneCount },
    { label: STATS_LABELS[2], count: pendingCount },
  ];

  // if (!isAuth) return null;

  return (
    <>
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