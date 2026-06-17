// 학습 로드맵 항목: 단계를 선택하면 말풍선에서 학습을 시작합니다.
import * as S from "../style";

const LearnRoadmapItem = ({ lesson, index, selected, onSelect, onStart }) => {
  const isLocked = lesson.status === "locked";
  const isReward = lesson.status === "reward";
  const canStart = !isLocked;
  const startLabel = isLocked ? "🔒" : isReward ? "보상 확인" : "시작 +10 XP";

  // 단계 선택: 바로 이동하지 않고 시작 말풍선만 표시합니다.
  const handleSelect = () => {
    onSelect?.(lesson);
  };

  // 학습 시작: 선택된 말풍선 안 버튼에서만 실제 이동합니다.
  const handleStart = () => {
    onStart?.(lesson);
  };

  return (
    <S.RoadmapItem $status={lesson.status} $index={index} $selected={selected}>
      <S.StepButton type="button" $status={lesson.status} $selected={selected} onClick={handleSelect} aria-label={`${lesson.title} 선택`}>
        <S.StepBadge $status={lesson.status}>
          {lesson.badgeImage ? <img src={lesson.badgeImage} alt="보상 수령 완료" /> : lesson.badge}
        </S.StepBadge>
      </S.StepButton>

      {selected && (
        <S.LessonPopover $status={lesson.status} $index={index}>
          <S.LessonPopoverTitle>{lesson.title}</S.LessonPopoverTitle>
          <S.LessonPopoverDesc>{isLocked ? "앞 단계를 완료하면 열려요" : lesson.desc}</S.LessonPopoverDesc>
          <S.LessonStartButton type="button" disabled={!canStart} onClick={handleStart}>
            {startLabel}
          </S.LessonStartButton>
        </S.LessonPopover>
      )}
    </S.RoadmapItem>
  );
};

export default LearnRoadmapItem;
