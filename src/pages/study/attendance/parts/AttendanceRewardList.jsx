// 출석 보상 목록: 연속 출석 보상 단계와 수령 상태 표시를 담당
import * as S from "../style";

const AttendanceRewardList = ({ rewards = [] }) => {
  return (
    <S.RewardCard>
      <S.CardTitle>출석 보상</S.CardTitle>
      <S.RewardList>
      {rewards.map((reward) => (
        <S.RewardItem key={reward.id || reward.day} $status={reward.status}>
          <S.RewardDay>{reward.day}</S.RewardDay>
          <div>
            <strong>{reward.title}</strong>
            <span>{reward.desc}</span>
          </div>
          <button type="button">{reward.buttonText}</button>
        </S.RewardItem>
      ))}
      </S.RewardList>
    </S.RewardCard>
  );
};

export default AttendanceRewardList;
