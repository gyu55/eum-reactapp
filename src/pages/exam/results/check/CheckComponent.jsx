import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험"];

const PASS_SCORE = 60;

export const DUMMY_RESULTS = [
  { testApplyId: 1, testTitle: "2025년 1회 수어통역사 2급", testDate: "2025-03-15", testResultPoint: 78 },
  { testApplyId: 2, testTitle: "2024년 2회 수어통역사 3급", testDate: "2024-09-20", testResultPoint: 45 },
  { testApplyId: 3, testTitle: "2025년 2회 수어통역사 1급", testDate: "2025-06-10", testResultPoint: null },
];

// 비로그인: 수험번호 조회 뷰
const GuestView = () => {
  const navigate = useNavigate();
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
          {result.passed && (
            <S.PassGoBtn onClick={() => navigate("/exam/results/license")}>
              합격증 출력하러 가기 →
            </S.PassGoBtn>
          )}
        </S.ResultBox>
      )}
    </>
  );
};

// 결과 팝업 모달
const ResultModal = ({ r, onClose }) => {
  const navigate = useNavigate();
  const passed = r.testResultPoint >= PASS_SCORE;
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalBox onClick={e => e.stopPropagation()}>
        <S.ModalHeader $passed={passed}>
          <S.ModalClose onClick={onClose}>✕</S.ModalClose>
          <S.ModalIcon>{passed ? "🎉" : "😢"}</S.ModalIcon>
          <S.ModalStatus>{passed ? "합격을 축하합니다!" : "불합격입니다"}</S.ModalStatus>
          <S.ModalSubtitle>{r.testTitle}</S.ModalSubtitle>
        </S.ModalHeader>

        <S.ModalBody>
          <S.ModalInfoRow>
            <S.ModalInfoLabel>시행일</S.ModalInfoLabel>
            <S.ModalInfoValue>{new Date(r.testDate).toLocaleDateString("ko-KR")}</S.ModalInfoValue>
          </S.ModalInfoRow>
          <S.ModalInfoRow>
            <S.ModalInfoLabel>합격기준</S.ModalInfoLabel>
            <S.ModalInfoValue>{PASS_SCORE}점 이상</S.ModalInfoValue>
          </S.ModalInfoRow>

          <S.ModalScoreBox>
            <S.ModalScoreNum $passed={passed}>{r.testResultPoint}점</S.ModalScoreNum>
            <S.ModalScoreSub>취득 점수</S.ModalScoreSub>
          </S.ModalScoreBox>

          {passed && (
            <S.GoLicenseBtn onClick={() => { onClose(); navigate("/exam/results/license", { state: { testApplyId: String(r.testApplyId) } }); }}>
              합격증 출력하러 가기 →
            </S.GoLicenseBtn>
          )}
        </S.ModalBody>
      </S.ModalBox>
    </S.ModalOverlay>
  );
};

// 로그인: 내 결과 목록 뷰
const MyResultView = () => {
  const results = DUMMY_RESULTS;
  const [selected, setSelected] = useState(null);

  if (results.length === 0) return (
    <S.EmptyMsg>응시한 시험이 없습니다.</S.EmptyMsg>
  );

  return (
    <>
      <S.RoundTable>
        <thead>
          <S.RoundThead>
            <S.RoundTh>시험명</S.RoundTh>
            <S.RoundTh>시행일</S.RoundTh>
            <S.RoundTh>발표 여부</S.RoundTh>
          </S.RoundThead>
        </thead>
        <tbody>
          {results.map((r) => {
            const pending = r.testResultPoint == null;
            return (
              <tr key={r.testApplyId}>
                <S.RoundTitle>{r.testTitle}</S.RoundTitle>
                <S.RoundTd>{new Date(r.testDate).toLocaleDateString("ko-KR")}</S.RoundTd>
                <S.RoundTd>
                  {pending
                    ? <S.MyResultBadge $pending>{" 발표 전 "}</S.MyResultBadge>
                    : <S.ViewBtn onClick={() => setSelected(r)}>결과보기</S.ViewBtn>
                  }
                </S.RoundTd>
              </tr>
            );
          })}
        </tbody>
      </S.RoundTable>

      {selected && <ResultModal r={selected} onClose={() => setSelected(null)} />}
    </>
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
