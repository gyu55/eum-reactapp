// 체험 카드 컴포넌트: 비회원 미리보기 학습 카드 표시
import * as S from "../style";

const ExperienceCard = ({ item, onStart }) => {

  return (
    <S.ExperienceCard type="button" $tone={item.tone} onClick={() => onStart(item)}>
      <span className="badge">{item.label}</span>
      <img src={item.image} alt={`${item.title} 아이콘`} />
      <strong>{item.title}</strong>
      <p>{item.desc}</p>
      <em>{item.count}</em>
    </S.ExperienceCard>
  );
};

export default ExperienceCard;
