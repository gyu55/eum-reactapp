import * as S from "./style";

const tableData = [
  {
    grade: "1급",
    requirement: "2급 취득 후 2년 이상 경력",
    subjects: "필기 4과목 + 실기 수어통역",
    standard: "필기·실기 각 60점 이상",
  },
  {
    grade: "2급",
    requirement: "3급 취득 후 1년 이상 경력",
    subjects: "필기 3과목 + 실기 수어번역",
    standard: "필기·실기 각 60점 이상",
  },
  {
    grade: "3급",
    requirement: "제한 없음 (만 18세 이상)",
    subjects: "필기 2과목",
    standard: "과목당 40점 이상, 평균 60점",
  },
];

const LicenseIntroContainer = () => {
  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 20 }}>응시 자격 및 시험 과목</S.SectionTitle>
      <S.StyledTable>
        <thead>
          <S.TheadRow>
            {["등급", "응시자격", "시험과목", "합격기준"].map((col) => (
              <S.Th key={col}>{col}</S.Th>
            ))}
          </S.TheadRow>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <S.TbodyRow key={i} $even={i % 2 === 0}>
              <S.GradeTd>{row.grade}</S.GradeTd>
              <S.Td>{row.requirement}</S.Td>
              <S.Td>{row.subjects}</S.Td>
              <S.Td>{row.standard}</S.Td>
            </S.TbodyRow>
          ))}
        </tbody>
      </S.StyledTable>
    </S.Wrapper>
  );
};

export default LicenseIntroContainer;
