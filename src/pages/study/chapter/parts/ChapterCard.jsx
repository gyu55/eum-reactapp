// 오!퀴즈 카드: 퀴즈 카테고리 카드 표시를 담당
import * as S from "../style";

const ChapterCard = ({ chapter, onClick }) => {
  return (
    <S.ChapterCard type="button" $tone={chapter.tone} onClick={onClick}>
      <span className="badge">{chapter.label}</span>
      <img src={chapter.image} alt={`${chapter.title} 아이콘`} />
      <strong>{chapter.title}</strong>
      <p>{chapter.desc}</p>
      <S.ChapterMeta>
        <span>{chapter.level}</span>
        <span>{chapter.questionCount}문제</span>
        <span>+{chapter.exp} EXP</span>
      </S.ChapterMeta>
    </S.ChapterCard>
  );
};

export default ChapterCard;
