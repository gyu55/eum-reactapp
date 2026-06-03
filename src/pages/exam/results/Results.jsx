import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAward } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY } from "../style";
import * as S from "../style";

const infoCards = [
  { title: "합격자조회", sub: "수험번호로 결과 확인", path: "/exam/results/check",   icon: faMagnifyingGlass },
  { title: "합격증",    sub: "합격증 출력 및 발급",  path: "/exam/results/license", icon: faAward },
];

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet   = useOutlet();

  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge>자격증</S.HeroBadge>
          <S.HeroTitle>합격자발표</S.HeroTitle>
          <S.HeroSub>합격 여부를 확인하고 합격증을 발급받으세요</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/exam/exam_results_hero.svg" alt="" style={{ width: 80, height: 80, objectFit: "contain" }} />
        </S.HeroIllust>
      </S.HeroCard>

      <S.NoticeBanner>
        <span style={{ fontSize: 16 }}>📢</span>
        2025년 1회 합격자가 발표되었습니다. 수험번호와 생년월일로 합격 여부를 확인하세요.
      </S.NoticeBanner>

      <div>
        <S.SectionTitle>합격자발표</S.SectionTitle>
        <S.InfoCardRow>
          {infoCards.map((card, i) => {
            const active = location.pathname === card.path;
            return (
              <S.InfoCard
                key={i}
                $active={active}
                onClick={() => navigate(active ? "/exam/results" : card.path, { preventScrollReset: true })}
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
