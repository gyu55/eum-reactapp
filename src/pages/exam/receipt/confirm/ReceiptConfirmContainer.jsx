import { useState } from "react";
import * as S from "./style";

const mockData = [
  { num: "2025-02-00001", grade: "2급", examDate: "2025.06.14", appliedAt: "2025.05.13", status: "접수완료" },
];

const ReceiptConfirmContainer = () => {
  const [searched, setSearched] = useState(true);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>접수 내역 조회</S.SectionTitle>
      <S.SearchRow>
        <S.SearchInput $flex={2} placeholder="수험번호 예: 2025-02-00001" />
        <S.SearchInput $flex={1} placeholder="생년월일 YYYYMMDD" />
        <S.SearchBtn onClick={() => setSearched(true)}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {searched && (
        <>
          <S.SectionTitle style={{ marginBottom: 12, fontSize: 15 }}>접수 내역</S.SectionTitle>
          <S.StyledTable>
            <thead>
              <S.TheadRow>
                {["수험번호", "등급", "시험일", "접수일", "상태", ""].map((col, i) => (
                  <S.Th key={i}>{col}</S.Th>
                ))}
              </S.TheadRow>
            </thead>
            <tbody>
              {mockData.map((row, i) => (
                <tr key={i}>
                  <S.Td $dark>{row.num}</S.Td>
                  <S.Td $dark>{row.grade}</S.Td>
                  <S.Td>{row.examDate}</S.Td>
                  <S.Td>{row.appliedAt}</S.Td>
                  <S.Td>
                    <S.StatusBadge>{row.status}</S.StatusBadge>
                  </S.Td>
                  <S.Td>
                    <S.CancelBtn>접수취소</S.CancelBtn>
                  </S.Td>
                </tr>
              ))}
            </tbody>
          </S.StyledTable>
          <S.Note>※ 취소 신청 후 환불은 3~5 영업일 이내 처리됩니다.</S.Note>
        </>
      )}
    </S.Wrapper>
  );
};

export default ReceiptConfirmContainer;
