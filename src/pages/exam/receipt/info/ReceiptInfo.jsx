import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faFilePen, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY } from "../../style";
import * as S from "../../style";

const infoCards = [
  { title: "시험접수안내",    sub: "접수 방법 및 유의사항",  path: "/exam/receipt/info/guide",   icon: faListCheck },
  { title: "시험원서접수",    sub: "바로 원서 제출하기",     path: "/exam/receipt/info/submit",  icon: faFilePen },
  { title: "접수확인 / 취소", sub: "접수 현황 조회 및 취소", path: "/exam/receipt/info/confirm", icon: faClipboardCheck },
];

export default function ReceiptInfo() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const outlet    = useOutlet();

  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge>자격증</S.HeroBadge>
          <S.HeroTitle>원서접수</S.HeroTitle>
          <S.HeroSub>시험 원서 접수부터 확인·취소까지 모두 안내합니다</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/exam/exam_receipt_hero.svg" alt="" style={{ width: 80, height: 80, objectFit: "contain" }} />
        </S.HeroIllust>
      </S.HeroCard>

      <S.NoticeBanner>
        <span style={{ fontSize: 16 }}>📋</span>
        원서접수는 인터넷으로만 가능합니다. 접수 기간 외에는 신청이 불가하니 일정을 미리 확인하세요.
      </S.NoticeBanner>

      <div>
        <S.SectionTitle>원서접수</S.SectionTitle>
        <S.InfoCardRow>
          {infoCards.map((card, i) => {
            const active = location.pathname === card.path;
            return (
              <S.InfoCard
                key={i}
                $active={active}
                onClick={() => navigate(active ? "/exam/receipt/info" : card.path, { preventScrollReset: true })}
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
