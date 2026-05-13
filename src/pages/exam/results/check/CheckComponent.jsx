import { useState } from "react";
import * as S from "./style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험"];

const CheckComponent = () => {
  const [round, setRound] = useState("2025년 1회 정기시험");
  const [examNumber, setExamNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
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
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>합격 여부 조회</S.SectionTitle>
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
          <S.PassCriteria>합격 기준: 60점 이상</S.PassCriteria>
          <S.PassNote>※ 합격증은 합격증 메뉴에서 출력 가능합니다.</S.PassNote>
        </S.ResultBox>
      )}
    </S.Wrapper>
  );
};

export default CheckComponent;
