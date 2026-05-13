import * as S from "./style";

const overviewItems = [
  { label: "시험 유형", value: "국가공인 자격검정시험" },
  { label: "시행 기관", value: "한국농아인협회" },
  { label: "시험 횟수", value: "연 4회 (분기별 시행)" },
  { label: "응시 수수료", value: "1급 50,000원 / 2급 40,000원 / 3급 30,000원" },
];

const LicenseNoticeContainer = () => {
  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 8 }}>시험 목적</S.SectionTitle>
      <S.PurposeText>
        수어통역사 자격시험은 농인과 청인 간의 원활한 의사소통을 지원할 수 있는
        전문 수어통역사를 양성하고 자질을 검증하기 위해 시행됩니다.
        자격 취득을 통해 복지, 의료, 교육 등 다양한 분야에서 전문적인 수어통역 서비스를 제공할 수 있습니다.
      </S.PurposeText>

      <S.SectionTitle style={{ marginBottom: 16 }}>시험 개요</S.SectionTitle>
      <S.Grid>
        {overviewItems.map((item, i) => (
          <S.OverviewCard key={i}>
            <S.OverviewLabel>{item.label}</S.OverviewLabel>
            <S.OverviewValue>{item.value}</S.OverviewValue>
          </S.OverviewCard>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default LicenseNoticeContainer;
