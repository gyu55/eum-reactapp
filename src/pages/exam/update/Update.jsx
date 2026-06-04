import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY } from "../style";
import * as S from "../style";

const infoCards = [
  { title: "자격증갱신 / 재발급", sub: "갱신 및 재발급 신청", path: "/exam/update/renew",  icon: faArrowsRotate },
  { title: "신청확인",           sub: "처리 현황 조회",      path: "/exam/update/check",  icon: faClipboardCheck },
];

export default function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet   = useOutlet();

  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge>자격증</S.HeroBadge>
          <S.HeroTitle>자격증갱신</S.HeroTitle>
          <S.HeroSub>유효기간 만료 전 갱신하고 재발급 신청하세요</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/exam/exam_update_hero.png" alt="" style={{ width: 50, height: 50, objectFit: "contain" }} />
        </S.HeroIllust>
      </S.HeroCard>

      <S.NoticeBanner>
        <span style={{ fontSize: 16 }}>⚠️</span>
        자격증 유효기간(3년) 만료 전 갱신하세요. 갱신 미이행 시 자격이 취소될 수 있습니다.
      </S.NoticeBanner>

      <div>
        <S.SectionTitle>자격증갱신</S.SectionTitle>
        <S.InfoCardRow>
          {infoCards.map((card, i) => {
            const active = location.pathname === card.path;
            return (
              <S.InfoCard
                key={i}
                $active={active}
                onClick={() => navigate(active ? "/exam/update" : card.path, { preventScrollReset: true })}
              >
                <S.InfoCardInner>
                  <S.InfoCardIcon $active={active}>
                    <FontAwesomeIcon icon={card.icon} style={{ fontSize: 18, color: active ? PRIMARY : "#7b8cde" }} />
                  </S.InfoCardIcon>
                  <div>
                    <S.InfoCardTitle $active={active}>{card.title}</S.InfoCardTitle>
                    <S.InfoCardSub>{card.sub}</S.InfoCardSub>
                  </div>
                </S.InfoCardInner>
                <S.InfoCardArrow $active={active}>›</S.InfoCardArrow>
              </S.InfoCard>
            );
          })}
        </S.InfoCardRow>
      </div>

      {outlet}
    </>
  );
}
