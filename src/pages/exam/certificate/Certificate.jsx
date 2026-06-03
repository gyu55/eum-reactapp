import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPrint, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY } from "../style";
import * as S from "../style";

const CERT_GREEN = "#4eca80";

const infoCards = [
  { title: "수료증 조회", sub: "이름·생년월일로 조회", path: "/exam/certificate/check",   icon: faMagnifyingGlass },
  { title: "수료증 출력", sub: "PDF / 인쇄 출력",      path: "/exam/certificate/print",   icon: faPrint },
  { title: "재발급 신청", sub: "기간 만료 후 재신청",   path: "/exam/certificate/reissue", icon: faRotateRight },
];

export default function Certificate() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet   = useOutlet();

  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge $color={CERT_GREEN} $bg="#e8faf2" $border="#a8edcc">수료증</S.HeroBadge>
          <S.HeroTitle>수료증조회</S.HeroTitle>
          <S.HeroSub>이수 완료 후 발급된 수료증을 조회하고 출력하세요</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/exam/exam_certificate_hero.svg" alt="" style={{ width: 56, height: 56, objectFit: "contain" }} />
        </S.HeroIllust>
      </S.HeroCard>

      <S.NoticeBanner $bg="#f0faf5" $border="#c3f0d8" $color="#1a6b3a">
        수료증은 과정 종료 후 7영업일 이내에 발급됩니다. 발급 후 180일 이내에 출력하시기 바랍니다.
      </S.NoticeBanner>

      <div>
        <S.SectionTitle>수료증조회</S.SectionTitle>
        <S.InfoCardRow>
          {infoCards.map((card, i) => {
            const active = location.pathname === card.path;
            return (
              <S.InfoCard
                key={i}
                $active={active}
                onClick={() => navigate(active ? "/exam/certificate" : card.path, { preventScrollReset: true })}
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
