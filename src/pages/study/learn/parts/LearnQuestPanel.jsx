// 오늘의 퀘스트 패널: 퀘스트 진행도와 보상표시
import * as S from "../style";

const LearnQuestPanel = ({ quests = [] }) => {

  return (
    <S.QuestPanel>
      <S.QuestTitle>{"\uc624\ub298\uc758 \ud018\uc2a4\ud2b8"}</S.QuestTitle>
      {quests.map((quest) => {
        const progress = Math.min((quest.current / quest.total) * 100, 100);

        return (
          <S.QuestItem key={quest.id}>
            <S.QuestIcon>{quest.icon}</S.QuestIcon>
            <S.QuestInfo>
              <S.QuestName>{quest.title}</S.QuestName>
              <S.QuestBar $progress={progress} aria-label={`${quest.title} progress`}>
                <span />
              </S.QuestBar>
            </S.QuestInfo>
            <S.QuestMeta>
              <S.QuestCount>
                {quest.current} / {quest.total}
              </S.QuestCount>
              <S.QuestReward>{quest.reward}</S.QuestReward>
            </S.QuestMeta>
          </S.QuestItem>
        );
      })}
    </S.QuestPanel>
  );
};

export default LearnQuestPanel;
