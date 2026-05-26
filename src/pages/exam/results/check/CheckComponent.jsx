import { useState, useEffect } from "react";
import * as S from "./style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험"];

const PASS_SCORE = 60;

// 비로그인: 수험번호 조회 뷰
const GuestView = () => {
  const [round, setRound] = useState(rounds[0]);
  const [examNumber, setExamNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!examNumber.trim()) return;
    setResult({
      passed: true,
      round: "2025년 1회 정기시험",
      grade: "2급",
      examNumber: "2025-01-00001",
      written: 78,
      practical: 82,
      total: 80,
    });
  };

  return (
    <>
      <S.SearchRow>
        <S.SearchSelect $flex={2} value={round} onChange={e => setRound(e.target.value)}>
          {rounds.map(r => <option key={r} value={r}>{r}</option>)}
        </S.SearchSelect>
        <S.SearchInput
          $flex={2}
          placeholder="수험번호 예: 2025-01-00001"
          value={examNumber}
          onChange={e => setExamNumber(e.target.value)}
        />
        <S.SearchBtn onClick={handleSearch}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {result && (
        <S.ResultBox $passed={result.passed}>
          <S.ResultTitle $passed={result.passed}>
            {result.passed ? "축하합니다! 합격입니다." : "아쉽게도 불합격입니다."}
          </S.ResultTitle>
          <S.ResultInfo>
            {result.round} · {result.grade} · 수험번호 {result.examNumber}
          </S.ResultInfo>
          <S.ScoreRow>
            {[
              { label: "필기", score: result.written },
              { label: "실기", score: result.practical },
              { label: "종합", score: result.total },
            ].map((s) => (
              <S.ScoreItem key={s.label}>
                <S.ScoreLabel>{s.label}</S.ScoreLabel>
                <S.ScoreValue>{s.score}점</S.ScoreValue>
              </S.ScoreItem>
            ))}
          </S.ScoreRow>
          <S.PassCriteria>합격 기준: {PASS_SCORE}점 이상</S.PassCriteria>
          <S.PassNote>※ 합격증은 합격증 메뉴에서 출력 가능합니다.</S.PassNote>
        </S.ResultBox>
      )}
    </>
  );
};

// 로그인: 내 결과 목록 뷰
const MyResultView = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:10000/api/test-apply/my-results", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.success) setResults(data.data);
        else setError("결과를 불러오지 못했습니다.");
      })
      .catch(() => setError("서버 오류가 발생했습니다."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <S.EmptyMsg>불러오는 중...</S.EmptyMsg>
  );

  if (error) return (
    <S.EmptyMsg style={{ color: "#e74c3c" }}>{error}</S.EmptyMsg>
  );

  if (results.length === 0) return (
    <S.EmptyMsg>응시한 시험이 없습니다.</S.EmptyMsg>
  );

  return (
    <S.MyResultList>
      {results.map((r) => {
        const pending = r.testResultPoint == null;
        const passed = !pending && r.testResultPoint >= PASS_SCORE;
        return (
          <S.MyResultCard key={r.testApplyId} $passed={passed} $pending={pending}>
            <S.MyResultHeader>
              <S.MyResultTitle>{r.testTitle}</S.MyResultTitle>
              <S.MyResultBadge $passed={passed} $pending={pending}>
                {pending ? "결과 발표 전" : passed ? "합격" : "불합격"}
              </S.MyResultBadge>
            </S.MyResultHeader>
            <S.MyResultDate>
              {new Date(r.testDate).toLocaleDateString("ko-KR")} 시행
            </S.MyResultDate>
            {!pending && (
              <>
                <S.ScoreRow>
                  <S.ScoreItem>
                    <S.ScoreLabel>점수</S.ScoreLabel>
                    <S.ScoreValue>{r.testResultPoint}점</S.ScoreValue>
                  </S.ScoreItem>
                </S.ScoreRow>
                <S.PassCriteria>합격 기준: {PASS_SCORE}점 이상</S.PassCriteria>
                {passed && (
                  <S.PassNote>※ 합격증은 합격증 메뉴에서 출력 가능합니다.</S.PassNote>
                )}
              </>
            )}
          </S.MyResultCard>
        );
      })}
    </S.MyResultList>
  );
};

const CheckComponent = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:10000/private/api/users/me", { credentials: "include" })
      .then(res => (res.ok ? res.json() : null))
      .then(data => { if (data?.success) setUser(data.data); })
      .catch(() => {})
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>합격 여부 조회</S.SectionTitle>
      {authLoading ? null : user ? <MyResultView /> : <GuestView />}
    </S.Wrapper>
  );
};

export default CheckComponent;
