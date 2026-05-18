import React, { useState, useEffect } from "react";
import * as S from "./style";
import CustomServiceResultComponent from "./CustomServiceResultComponent";
import useAuthCheck from "../useAuthCheck";

const CustomServiceResultContainer = () => {
  const isAuth = useAuthCheck();
  const [results, setResults]   = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]       = useState(null);
  const [isAdmin, setIsAdmin]   = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("http://localhost:10000/api/auth/me", { credentials: "include" });
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

  const loadResults = async () => {
    setIsLoading(true);
    try {
      const url = isAdmin
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
    loadResults();
  }, [isAdmin]);

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
      loadResults();
    } catch {
      alert("답변 등록에 실패했습니다.");
    }
  };

  const totalCount   = results.length;
  const doneCount    = results.filter((r) => r.inquireStatus === "답변완료").length;
  const pendingCount = results.filter((r) => r.inquireStatus === "대기").length;

  if (!isAuth) return null;

  const STATS = [
    { label: "전체 문의", count: totalCount },
    { label: "답변 완료", count: doneCount },
    { label: "처리 중",   count: pendingCount },
  ];

  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge>고객지원</S.HeroBadge>
          <S.HeroTitle>문의 결과</S.HeroTitle>
          <S.HeroSub>접수하신 문의 내역과 답변을 확인하세요.</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/customService/resultIcon.svg" alt="" style={{ width: "80px" }} />
        </S.HeroIllust>
      </S.HeroCard>

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
      />
    </>
  );
};

export default CustomServiceResultContainer;
