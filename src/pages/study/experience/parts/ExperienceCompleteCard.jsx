// 체험 완료 카드: 체험 결과와 회원가입 유도 표시
const ExperienceCompleteCard = ({ accuracy }) => {

  return (
    <article>
      <h2>체험학습 완료!</h2>
      <p>정확도 {accuracy ?? 0}%</p>
    </article>
  );
};

export default ExperienceCompleteCard;
