// 출석 보상 목록: 자동 지급된 연속 출석 보상 상태를 표시
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
            <span className="rewardStatus">{reward.buttonText}</span>
          </S.RewardItem>
        ))}
      </S.RewardList>
    </S.RewardCard>
  );
};

export default AttendanceRewardList;
