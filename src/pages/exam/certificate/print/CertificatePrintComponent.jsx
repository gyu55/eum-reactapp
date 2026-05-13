import * as S from "./style";

const cert = {
  no: "CL-2025-00456",
  name: "OOO",
  course: "수어통역 기초과정",
  date: "2025년 2월 28일",
};

const CertificatePrintComponent = () => {
  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>수료증 출력</S.SectionTitle>
      <S.Subtitle>수료증을 미리보기 하고 PDF로 출력할 수 있습니다.</S.Subtitle>

      <S.CertCard>
        <S.CertHeader>수 료 증</S.CertHeader>
        <S.CertBody>
          <S.CertNo>제 {cert.no} 호</S.CertNo>
          <S.CertFieldRow>
            <div>
              <S.CertFieldLabel>성명</S.CertFieldLabel>
              <S.CertFieldValue>{cert.name}</S.CertFieldValue>
            </div>
            <div>
              <S.CertFieldLabel>과정명</S.CertFieldLabel>
              <S.CertFieldValue>{cert.course}</S.CertFieldValue>
            </div>
          </S.CertFieldRow>
          <S.CertTextBlock>
            위 사람은 상기 과정을 수료하였음을<br/>증명합니다.
          </S.CertTextBlock>
          <S.CertFooter>
            <S.CertDate>{cert.date}</S.CertDate>
            <S.CertOrg>이음</S.CertOrg>
          </S.CertFooter>
        </S.CertBody>
      </S.CertCard>

      <S.PrintBtnWrap>
        <S.PrintBtn>PDF 다운로드 및 출력</S.PrintBtn>
      </S.PrintBtnWrap>
    </S.Wrapper>
  );
};

export default CertificatePrintComponent;
