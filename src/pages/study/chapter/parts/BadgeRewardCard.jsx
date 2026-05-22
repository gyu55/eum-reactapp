// 뱃지 보상 카드: 퀴즈 완료 후 획득 뱃지와 다음 뱃지 진행률
import * as S from "../style";

const BadgeRewardCard = ({ badge }) => {
  return (
    <S.BadgeRewardCard>
      <span>{badge?.icon || "🏅"}</span>
      <strong>{badge?.title || "새 뱃지"}</strong>
      <p>{badge?.desc || "퀴즈 완료 보상"}</p>
    </S.BadgeRewardCard>
  );
};

export default BadgeRewardCard;
