// 오!퀴즈 목록 컴포넌트: 퀴즈 카테고리 카드 목록
import { useNavigate } from "react-router-dom";
import { chapterQuizMock } from "./data/chapterQuizMock";
import ChapterCard from "./parts/ChapterCard";
import * as S from "./style";

const StudyChapterComponent = () => {
  const navigate = useNavigate();
  const chapterCount = chapterQuizMock.length;
  const totalExp = chapterQuizMock.reduce((sum, chapter) => sum + (Number(chapter.exp) || 0), 0);
  const averageProgress = chapterCount > 0
    ? Math.round(
      chapterQuizMock.reduce((sum, chapter) => sum + (Number(chapter.progress) || 0), 0) / chapterCount
    )
    : 0;

  // 선택한 챕터 안내 화면으로 이동
  const handleMoveChapter = (chapter) => {
    navigate(chapter.path);
  };

  return (
    <S.ChapterWrap>
      <S.ChapterHero>
        <span>오! 퀴즈</span>
        <h1>오늘의 퀴즈를 선택하세요</h1>
        <p>수어, 응급 수신호, 모스부호를 짧은 문제로 복습하고 EXP를 모아보세요.</p>
      </S.ChapterHero>

      <S.ChapterSummary>
        <div>
          <strong>{chapterCount}개</strong>
          <span>진행 가능한 퀴즈</span>
        </div>
        <div>
          <strong>{totalExp} EXP</strong>
          <span>오늘 획득 가능</span>
        </div>
        <div>
          <strong>{averageProgress}%</strong>
          <span>평균 진행률</span>
        </div>
      </S.ChapterSummary>

      <S.ChapterGrid>
        {chapterQuizMock.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            onClick={() => handleMoveChapter(chapter)}
          />
        ))}
      </S.ChapterGrid>
    </S.ChapterWrap>
  );
};

export default StudyChapterComponent;
