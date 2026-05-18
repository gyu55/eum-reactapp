import React from "react";

import S from "../style";

const certificateList = [
  {
    name: "수어 통역사 2급",
    date: "2025.03.08",
    status: "미신청",
    apply: "신청하기",
  },
  {
    name: "수어 통역사 1급",
    date: "2024.11.21",
    status: "신청완료",
    apply: "완료",
  },
  {
    name: "수어 지도사",
    date: "2023.08.14",
    status: "신청대기",
    apply: "처리중",
  },
];

const CertificateGuideExampleCard = () => {
  return (
    <S.GuideExampleSection>
      <S.GuideExampleTitle>
        2. 자격증 페이지에서 어디를 눌러야 하나요?
      </S.GuideExampleTitle>

      <S.GuideExampleDesc>
        아래 예시 화면에서 파란색 신청하기 버튼을 눌러야 실물 신청이 접수됩니다.
      </S.GuideExampleDesc>

      <S.GuideExampleCardBox>
        <S.GuideExampleInnerBox>
          <S.GuideExamplePointBox>
            이 파란색 ‘신청하기’ 버튼을 누르세요
          </S.GuideExamplePointBox>

          <S.GuideExampleArrow />

          <S.GuideExampleInnerTitle>내 자격증</S.GuideExampleInnerTitle>

          <S.GuideExampleInnerDesc>
            취득한 수어 자격증명, 취득일자, 실물 신청 상태를 확인하세요.
          </S.GuideExampleInnerDesc>

          <S.GuideExampleTable>
            <S.GuideExampleHeader>
              <S.GuideExampleHeaderText>취득한 자격증명</S.GuideExampleHeaderText>
              <S.GuideExampleHeaderText>취득일자</S.GuideExampleHeaderText>
              <S.GuideExampleHeaderText>실물 신청 상태</S.GuideExampleHeaderText>
              <S.GuideExampleHeaderText>신청</S.GuideExampleHeaderText>
            </S.GuideExampleHeader>

            {certificateList.map((certificate) => {
              const isActive = certificate.apply === "신청하기";

              return (
                <S.GuideExampleRow key={certificate.name}>
                  <S.GuideExampleText>{certificate.name}</S.GuideExampleText>
                  <S.GuideExampleText>{certificate.date}</S.GuideExampleText>

                  <S.GuideExampleStatusButton type="button">
                    {certificate.status}
                  </S.GuideExampleStatusButton>

                  <S.GuideExampleApplyBox $active={isActive}>
                    <S.GuideExampleApplyButton type="button" $active={isActive}>
                      {certificate.apply}
                    </S.GuideExampleApplyButton>
                  </S.GuideExampleApplyBox>
                </S.GuideExampleRow>
              );
            })}
          </S.GuideExampleTable>

          <S.GuideExampleNotice>
            신청 가능한 자격증은 상태가 미신청으로 표시되며, 오른쪽 버튼이 활성화됩니다.
          </S.GuideExampleNotice>
        </S.GuideExampleInnerBox>
      </S.GuideExampleCardBox>
    </S.GuideExampleSection>
  );
};

export default CertificateGuideExampleCard;