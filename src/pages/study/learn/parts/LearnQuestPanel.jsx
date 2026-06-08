// 오늘의 퀘스트 패널: 퀘스트 진행도와 보상표시
import * as S from "../style";

const LearnQuestPanel = ({ quests = [], panelComponent: PanelComponent = S.QuestPanel }) => {

  return (
    <PanelComponent>
      <S.QuestTitle>{"오늘의 퀘스트"}</S.QuestTitle>
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
    </PanelComponent>
  );
};

export default LearnQuestPanel;
