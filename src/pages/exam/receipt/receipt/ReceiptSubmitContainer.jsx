import { useState } from "react";
import * as S from "./style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험", "2025년 3회 정기시험"];
const grades = ["1급", "2급", "3급"];

const ReceiptSubmitContainer = () => {
  const [grade, setGrade] = useState("2급");
  const [round, setRound] = useState("");

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>원서 작성</S.SectionTitle>
      <S.Subtitle>원서를 작성하고 접수 및 결제하세요.</S.Subtitle>

      <S.FormWrap>
        <div>
          <S.Label>시험 회차 *</S.Label>
          <S.Select value={round} onChange={e => setRound(e.target.value)}>
            <option value="">시험 회차를 선택하세요</option>
            {rounds.map(r => <option key={r} value={r}>{r}</option>)}
          </S.Select>
        </div>

        <div>
          <S.Label>응시 등급 *</S.Label>
          <S.GradeBtnRow>
            {grades.map(g => (
              <S.GradeBtn key={g} $active={grade === g} onClick={() => setGrade(g)}>{g}</S.GradeBtn>
            ))}
          </S.GradeBtnRow>
        </div>

        <S.Grid>
          <div>
            <S.Label>이름 *</S.Label>
            <S.Input placeholder="홍길동" />
          </div>
          <div>
            <S.Label>생년월일 *</S.Label>
            <S.Input placeholder="YYYY-MM-DD" />
          </div>
          <div>
            <S.Label>연락처 *</S.Label>
            <S.Input placeholder="010-0000-0000" />
          </div>
          <div>
            <S.Label>이메일 *</S.Label>
            <S.Input placeholder="example@email.com" />
          </div>
        </S.Grid>

        <div>
          <S.Label>증빙서류 첨부 *</S.Label>
          <input type="file" style={{ fontSize: 13, color: "#555" }} />
        </div>

        <S.SubmitBtn>원서접수 및 결제하기</S.SubmitBtn>
      </S.FormWrap>
    </S.Wrapper>
  );
};

export default ReceiptSubmitContainer;
