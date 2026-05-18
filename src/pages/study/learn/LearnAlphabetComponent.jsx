import React, { useState } from "react";
import LearnAlphabetPopup from "./parts/LearnAlphabetPopup";
import { LearnAlphabetPage as S } from "./style";


const alphabetData = {
  menus: [
    { id: "learn", icon: "🏠", label: "학습" },
    { id: "letter", icon: "韓", label: "문자", active: true },
    { id: "signal", icon: "🚦", label: "수신호" },
    { id: "profile", icon: "👤", label: "프로필" },
    { id: "more", icon: "⋯", label: "더보기" },
  ],
  quests: [
    { id: 1, icon: "⚡", title: "10 EXP 획득하기", current: 0, total: 10 },
    { id: 2, icon: "🤟", title: "레슨 2개에서 연속 5개 정답", current: 0, total: 2 },
    { id: 3, icon: "⏱", title: "10분 동안 학습하기", current: 0, total: 10 },
  ],
  sections: [
    {
      title: "기본 자음",
      letters: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
    },
    {
      title: "된소리 자음",
      letters: ["ㄲ", "ㄸ", "ㅉ", "ㅃ", "ㅆ"],
    },
    {
      title: "기본 모음",
      letters: ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ", "ㅐ", "ㅔ", "ㅒ", "ㅖ"],
    },
    {
      title: "이중 모음",
      letters: ["ㅘ", "ㅝ", "ㅙ", "ㅞ", "ㅚ", "ㅟ", "ㅢ"],
    },
  ],
};

const getLetterInfo = (letter) => ({
  letter,
  name: letter === "ㄱ" ? "기역" : "글자",
  sound: letter === "ㄱ" ? "[ g / k ]" : "[ sound ]",
  desc: ["가장 기본적인 자음이에요.", '"가나다"의 첫 자음이에요.'],
});

const LearnAlphabetComponent = ({ onChangeView }) => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const openPopup = (letter) => {
    setSelectedLetter(getLetterInfo(letter));
  };

  return (
    <S.Page>
      <S.Layout>
        <S.SideMenu>
          {alphabetData.menus.map((menu) => (
            <S.SideButton
              key={menu.id}
              type="button"
              $active={menu.active}
              onClick={() => menu.id === "learn" && onChangeView?.("learn")}
            >
              <span>{menu.icon}</span>
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>

        <S.Main>
          <S.Title>수어로 한글을 표현해봐요.</S.Title>
          <S.Desc>자음과 모음을 손으로 표현하는 수지한국어를 배워보세요.</S.Desc>
          <S.StartButton type="button" onClick={() => openPopup("ㄱ")}>
            글자 학습 시작하기
          </S.StartButton>

          {alphabetData.sections.map((section) => (
            <S.Section key={section.title}>
              <S.SectionTitle>{section.title}</S.SectionTitle>
              <S.LetterGrid>
                {section.letters.map((letter) => (
                  <S.LetterCard key={letter} type="button" onClick={() => openPopup(letter)}>
                    <strong>{letter}</strong>
                    <span />
                  </S.LetterCard>
                ))}
              </S.LetterGrid>
            </S.Section>
          ))}
        </S.Main>

        <S.QuestPanel>
          <S.QuestHead>
            <strong>오늘의 퀘스트</strong>
          </S.QuestHead>

          {alphabetData.quests.map((quest) => (
            <S.QuestItem key={quest.id}>
              <S.QuestIcon>{quest.icon}</S.QuestIcon>
              <div>
                <S.QuestName>{quest.title}</S.QuestName>
                <S.QuestBar>
                  <span style={{ width: `${(quest.current / quest.total) * 100}%` }} />
                </S.QuestBar>
              </div>
              <S.QuestCount>
                {quest.current} / {quest.total}
              </S.QuestCount>
              <S.QuestReward>🎁</S.QuestReward>
            </S.QuestItem>
          ))}
        </S.QuestPanel>
      </S.Layout>

      {selectedLetter && (
        <LearnAlphabetPopup
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
          onPrev={() => openPopup("ㄱ")}
          onNext={() => openPopup("ㄴ")}
        />
      )}
    </S.Page>
  );
};

export default LearnAlphabetComponent;
