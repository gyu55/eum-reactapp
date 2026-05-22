// 문자학습컴포넌트: 한글 자모 카드 목록과 글자 상세 팝업
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alphabetMenus, alphabetQuests, alphabetSections, getAlphabetInfo } from "./data/alphabetMock";
import LearnAlphabetPopup from "./parts/LearnAlphabetPopup";
import LetterCard from "./parts/LetterCard";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "서비스 준비중입니다.";

const LearnAlphabetComponent = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 전체글자목록: 팝업에서 이전/다음 이동할 때 사용합니다.
  const letters = useMemo(() => alphabetSections.flatMap((section) => section.letters), []);
  const selectedLetter = selectedIndex !== null ? getAlphabetInfo(letters[selectedIndex]) : null;

  // 메뉴이동: 왼쪽 메뉴에서 연결된 화면이동
  const handleMenu = (menu) => {
    if (!menu.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(menu.to, { state: { activeType: menu.activeType } });
  };

  // 글자선택: 선택한 글자의 상세 팝업열림
  const handleOpenLetter = (letter) => {
    setSelectedIndex(letters.indexOf(letter));
  };

  // 이전글자: 팝업에서 이전 글자로 이동
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev <= 0 ? letters.length - 1 : prev - 1));
  };

  // 다음글자: 팝업에서 다음 글자로 이동
  const handleNext = () => {
    setSelectedIndex((prev) => (prev >= letters.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.AlphaWrap>
      <S.AlphaLayout>
        <S.SideMenu aria-label="학습 메뉴">
          {alphabetMenus.map((menu) => (
            <S.SideButton key={menu.id} type="button" $active={menu.active} onClick={() => handleMenu(menu)}>
              <span>{menu.icon}</span>
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>

        <S.AlphaMain>
          <S.AlphaHeader>
            <S.AlphaTitle>수어로 한글을 표현해볼까요?</S.AlphaTitle>
            <S.AlphaDesc>자음과 모음을 손 모양으로 익히고, 글자별 설명을 팝업에서 확인해보세요.</S.AlphaDesc>
            <S.AlphaStartButton type="button" onClick={() => handleOpenLetter(letters[0])}>
              글자 학습 시작하기
            </S.AlphaStartButton>
          </S.AlphaHeader>

          {alphabetSections.map((section) => (
            <S.AlphaSection key={section.id}>
              <S.AlphaSectionTitle>{section.title}</S.AlphaSectionTitle>
              <S.AlphaLetterGrid>
                {section.letters.map((letter) => (
                  <LetterCard key={letter} letter={letter} onClick={() => handleOpenLetter(letter)} />
                ))}
              </S.AlphaLetterGrid>
            </S.AlphaSection>
          ))}
        </S.AlphaMain>

        <S.AlphaQuestPanel>
          <S.QuestTitle>오늘의 퀘스트</S.QuestTitle>
          {alphabetQuests.map((quest) => {
            const progress = Math.min((quest.current / quest.total) * 100, 100);

            return (
              <S.QuestItem key={quest.id}>
                <S.QuestIcon>{quest.icon}</S.QuestIcon>
                <S.QuestInfo>
                  <S.QuestName>{quest.title}</S.QuestName>
                  <S.QuestBar $progress={progress} aria-label={`${quest.title} 진행률`}>
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
        </S.AlphaQuestPanel>
      </S.AlphaLayout>

      {selectedLetter && (
        <LearnAlphabetPopup
          letter={selectedLetter}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </S.AlphaWrap>
  );
};

export default LearnAlphabetComponent;
