import * as S from "./userActivityStyle";

const UserActivity = ({
  postCount,
  commentCount,
  postLikeCount,
  getLikeCount,
}) => {
  const userStats = [
    { value: postCount, label: "게시글" },
    { value: commentCount, label: "댓글" },
    { value: getLikeCount, label: "받은 좋아요" },
    { value: postLikeCount, label: "좋아요한 글" },
  ];
  return (
    <S.Card>
      <S.Title>📊 활동 통계</S.Title>
      <S.Divider />
      <S.StatsGrid>
        {userStats.map(({ value, label }) => (
          <S.StatItem key={label}>
            <S.StatValue>{value}</S.StatValue>
            <S.StatLabel>{label}</S.StatLabel>
          </S.StatItem>
        ))}
      </S.StatsGrid>
    </S.Card>
  );
};

export default UserActivity;
