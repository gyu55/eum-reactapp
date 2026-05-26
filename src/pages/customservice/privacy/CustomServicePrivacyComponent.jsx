import React from "react";
import * as S from "./style";
import theme from "../../../styles/theme";
import { SECTIONS } from "./constants";

const CustomServicePrivacyComponent = () => {
  return (
    <S.PrivacyWrap>
      <div>
        <S.TocTitle>목차</S.TocTitle>
        <S.TocGrid>
          {SECTIONS.map((sec) => (
            <S.TocItem key={sec.id}>
              <S.TocNumber>{sec.id}</S.TocNumber>
              <S.TocLabel>{sec.title}</S.TocLabel>
            </S.TocItem>
          ))}
        </S.TocGrid>
      </div>

      <S.Section id="privacy-section-1">
        <S.SectionTitle>1. 수집하는 개인정보 항목</S.SectionTitle>
        <S.SectionSub>이음은 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</S.SectionSub>
        <S.StyledTable>
          <thead>
            <tr>
              <S.Th>구분</S.Th>
              <S.Th>수집 항목</S.Th>
              <S.Th>수집 방법</S.Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Td $color={theme.PALETTE.primary.main}>필수</S.Td>
              <S.Td>이름, 이메일, 비밀번호</S.Td>
              <S.Td>회원 가입시</S.Td>
            </tr>
            <tr>
              <S.Td $color={theme.PALETTE.warning.main}>선택</S.Td>
              <S.Td>프로필 사진, 학습목표, 관심 분야, 청각 상태</S.Td>
              <S.Td>직접 입력</S.Td>
            </tr>
            <tr>
              <S.Td $color={theme.TEXT_COLOR.secondary}>자동</S.Td>
              <S.Td>접속 IP, 학습 이력, 기기 정보</S.Td>
              <S.Td>자동 수집</S.Td>
            </tr>
          </tbody>
        </S.StyledTable>
      </S.Section>

      <S.Section id="privacy-section-2">
        <S.SectionTitle>2. 개인정보 수집 및 이용목적</S.SectionTitle>
        <S.SectionSub>수어 학습 서비스 제공, 맞춤형 커리큘럼 추천, 고객 지원, 마케팅(동의 시)에 한해 이용합니다.</S.SectionSub>
      </S.Section>

      <S.Section id="privacy-section-3">
        <S.SectionTitle>3. 보유 및 이용 기간</S.SectionTitle>
        <S.SectionSub>탈퇴 시 즉시 파기 완료. 전자상거래법에 따라 결제 기록 5년, 분쟁 기록 3년 접속 로그 3개월 보관합니다.</S.SectionSub>
      </S.Section>

      <S.Section id="privacy-section-4">
        <S.SectionTitle>4. 제 3자 제공</S.SectionTitle>
        <S.SectionSub>별도 동의 없이 제 3자에게 제공하지 않습니다. 결제 대행, 서비스 분석에 한해 최소 항목만 제공합니다.</S.SectionSub>
      </S.Section>

      <S.Section id="privacy-section-5">
        <S.SectionTitle>5. 이용자의 권리</S.SectionTitle>
        <S.SectionSub>열람 · 정정 · 삭제 · 처리 정지 · 동의 철회 권리를 언제든 행사할 수 있습니다. 요청 후 10일 이내 처리됩니다.</S.SectionSub>
      </S.Section>

      <S.Section id="privacy-section-6">
        <S.SectionTitle>6. 개인정보보호 책임자</S.SectionTitle>
        <S.SectionSub>홍길동 (CPO) · ium999@gmail.com · 02-1234-1234</S.SectionSub>
        <S.SectionSub>신고 · 상담 : 개인정보보호위원회 privacy.go.kr | KISA 118</S.SectionSub>
      </S.Section>
    </S.PrivacyWrap>
  );
};

export default CustomServicePrivacyComponent;