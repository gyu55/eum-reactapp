import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const mockData = [
  { no: "CL-2025-00456", course: "수어통역 기초과정", date: "2025.02.28", status: "발급완료" },
  { no: "CL-2025-00457", course: "수어통역 심화과정", date: "2025.03.15", status: "발급대기" },
];

const CertificateCheckComponent = () => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState(false);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>수료증 조회</S.SectionTitle>
      <S.SearchRow>
        <S.SearchInput placeholder="이름" />
        <S.SearchInput placeholder="생년월일 YYYY-MM-DD" />
        <S.SearchBtn onClick={() => setSearched(true)}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {searched && (
        <>
          <S.SectionTitle style={{ marginBottom: 12, fontSize: 15 }}>조회 결과</S.SectionTitle>
          <S.StyledTable>
            <thead>
              <S.TheadRow>
                {["수료번호", "과정명", "수료일", "상태", ""].map((col, i) => (
                  <S.Th key={i}>{col}</S.Th>
                ))}
              </S.TheadRow>
            </thead>
            <tbody>
              {mockData.map((row, i) => (
                <tr key={i}>
                  <S.NumberTd>{row.no}</S.NumberTd>
                  <S.TextTd>{row.course}</S.TextTd>
                  <S.TextTd>{row.date}</S.TextTd>
                  <S.Td>
                    <S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge>
                  </S.Td>
                  <S.Td>
                    {row.status === "발급완료" && (
                      <S.PrintBtn onClick={() => navigate("/exam/certificate/print")}>출력하기</S.PrintBtn>
                    )}
                  </S.Td>
                </tr>
              ))}
            </tbody>
          </S.StyledTable>
        </>
      )}
    </S.Wrapper>
  );
};

export default CertificateCheckComponent;
