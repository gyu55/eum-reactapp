import { useState } from "react";
import * as S from "./style";

const LicenseComponent = () => {
  const [cert, setCert] = useState(null);

  const handleSearch = () => {
    setCert({
      no: "제2025-01-0001호",
      name: "OOO",
      birth: "0000.00.00",
      grade: "2급",
      date: "2025년 3월 20일",
    });
  };

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>합격증 조회</S.SectionTitle>
      <S.SearchRow>
        <S.SearchInput $flex={2} placeholder="수험번호 예: 2025-01-00001" />
        <S.SearchInput $flex={1} placeholder="생년월일 YYYYMMDD" />
        <S.SearchBtn onClick={handleSearch}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {cert && (
        <div>
          <S.CertCardWrap>
            <S.CertHeader>합 격 증</S.CertHeader>
            <S.CertBody>
              <S.CertNo>{cert.no}</S.CertNo>
              <S.CertFieldRow>
                <div>
                  <S.CertFieldLabel>성명</S.CertFieldLabel>
                  <S.CertFieldValue>{cert.name}</S.CertFieldValue>
                </div>
                <div>
                  <S.CertFieldLabel>생년월일</S.CertFieldLabel>
                  <S.CertFieldValue>{cert.birth}</S.CertFieldValue>
                </div>
              </S.CertFieldRow>
              <S.CertTextBlock>
                위 사람은 수어통역사 자격시험 {cert.grade}에<br/>합격하였음을 증명합니다.
              </S.CertTextBlock>
              <S.CertFooter>
                <S.CertDate>{cert.date}</S.CertDate>
                <S.CertOrg>이음</S.CertOrg>
              </S.CertFooter>
            </S.CertBody>
          </S.CertCardWrap>
          <S.PrintBtnWrap>
            <S.PrintBtn>합격증 출력 (PDF)</S.PrintBtn>
          </S.PrintBtnWrap>
        </div>
      )}
    </S.Wrapper>
  );
};

export default LicenseComponent;
