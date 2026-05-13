import React, { useState } from "react";
import * as S from "./style";

const mockData = [
  {
    no: "RN-2025-00012",
    type: "갱신",
    date: "2025.03.15",
    status: "처리중",
    expected: "2025.03.25 (예정)",
    detail: "처리 진행: 서류검토 완료 → 갱신 등록 중 → 자격증 발송 (예정)",
  },
];

const UpdateCheckComponent = () => {
  const [searched, setSearched] = useState(true);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>신청 현황 조회</S.SectionTitle>
      <S.SearchRow>
        <S.SearchInput $flex={2} placeholder="자격증 번호 예: SL-2023-001234" />
        <S.SearchInput $flex={1} placeholder="성명" />
        <S.SearchBtn onClick={() => setSearched(true)}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {searched && (
        <S.StyledTable>
          <thead>
            <S.TheadRow>
              {["신청번호", "유형", "신청일", "상태", "예상 완료일"].map((col) => (
                <S.Th key={col}>{col}</S.Th>
              ))}
            </S.TheadRow>
          </thead>
          <tbody>
            {mockData.map((row, i) => (
              <React.Fragment key={i}>
                <tr>
                  <S.NumberTd>{row.no}</S.NumberTd>
                  <S.Td>{row.type}</S.Td>
                  <S.Td>{row.date}</S.Td>
                  <S.Td>
                    <S.StatusBadge>{row.status}</S.StatusBadge>
                  </S.Td>
                  <S.Td>{row.expected}</S.Td>
                </tr>
                <tr>
                  <S.DetailCell colSpan={5}>
                    <S.DetailText>{row.detail}</S.DetailText>
                    <S.DetailNote>배송조회는 발송 후 문자로 안내드립니다.</S.DetailNote>
                  </S.DetailCell>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </S.StyledTable>
      )}
    </S.Wrapper>
  );
};

export default UpdateCheckComponent;
