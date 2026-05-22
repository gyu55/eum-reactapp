// 학습로드맵항목: 챕터별 학습 단계 카드
import * as S from "../style";

const LearnRoadmapItem = ({ lesson, onStart }) => {

  return (
    <S.RoadmapItem $status={lesson.status}>
      <S.StepBadge $status={lesson.status}>{lesson.badge}</S.StepBadge>
      <S.LessonCard $status={lesson.status}>
        <S.LessonText>
          <S.LessonTitle $status={lesson.status}>{lesson.title}</S.LessonTitle>
          <S.LessonDesc>{lesson.desc}</S.LessonDesc>
        </S.LessonText>
        <S.LessonButton type="button" $status={lesson.status} onClick={() => onStart?.(lesson)}>
          {lesson.buttonText}
        </S.LessonButton>
      </S.LessonCard>
    </S.RoadmapItem>
  );
};

export default LearnRoadmapItem;
