// 오!퀴즈 결과 컴포넌트: 정확도, 틀린 문제, 뱃지 획득 표시를 담당
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { chapterQuizMock } from "./data/chapterQuizMock";
import FireworkCanvas from "./parts/FireworkCanvas";
import * as S from "./style";

const StudyChapterResultComponent = () => {
  const { quiz } = useParams();
  const { state } = useContext(StudyQuizContext);
  const [isBadgeOpen, setIsBadgeOpen] = useState(true);
  const chapter = chapterQuizMock.find((item) => item.id === quiz);

  // 정답 개수와 정확도를 계산하는 값
  const result = useMemo(() => {
    const questions = chapter?.questions || [];
    const hasAnswers = state.answers.length > 0;
    const totalCount = hasAnswers ? questions.length : 5;
    const correctCount = hasAnswers
      ? state.answers.filter((answer) => answer.isCorrect).length
      : 4;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const wrongItems = questions.filter(
      (question) => !state.answers.find((answer) => answer.questionId === question.id && answer.isCorrect)
    );
    const fallbackWrong = {
      id: "wrong-fallback",
      question: "수어의 4 대 요소가 아닌 것은?",
      myAnswer: "수향",
      correctAnswer: "수색",
    };

    return {
      totalCount,
      correctCount,
      accuracy,
      wrongItems: hasAnswers && wrongItems.length > 0 ? wrongItems : [fallbackWrong],
    };
  }, [chapter, state.answers]);

  if (!chapter) {
    return (
      <S.ChapterWrap>
        <S.ChapterReadyCard>
          <h1>결과를 찾을 수 없습니다.</h1>
          <S.ResultTextAction to="/study/chapter">목록으로 돌아가기</S.ResultTextAction>
        </S.ChapterReadyCard>
      </S.ChapterWrap>
    );
  }

  return (
    <S.ChapterResultWrap>
      <S.ChapterResultContent $dimmed={isBadgeOpen}>
        <S.ResultCelebrate>🎉</S.ResultCelebrate>
        <S.ResultTitle>퀴즈 완료!</S.ResultTitle>
        <S.ResultAccuracy>{result.accuracy}%</S.ResultAccuracy>
        <S.ResultSubText>
          {result.totalCount}문제 중 {result.correctCount}개 정답
        </S.ResultSubText>

        <S.ResultStatGrid>
          <div>
            <span>🎯</span>
            <small>정답</small>
            <strong>{result.correctCount}개</strong>
          </div>
          <div>
            <span>⚡</span>
            <small>EXP</small>
            <strong>+40</strong>
          </div>
          <div>
            <span>⏱️</span>
            <small>시간</small>
            <strong>2분 48초</strong>
          </div>
        </S.ResultStatGrid>

        <S.ResultWrongBox>
          <strong>❌ 틀린 문제</strong>
          <p>Q. {result.wrongItems[0]?.question}</p>
          <p>
            내 답: {result.wrongItems[0]?.myAnswer || "선택한 답"} →
            <em> 정답: {result.wrongItems[0]?.correctAnswer || "정답 보기"}</em>
          </p>
        </S.ResultWrongBox>

        <S.ResultLine />

        <S.ResultTextActions>
          <S.ResultTextAction to="/study/chapter">목록으로</S.ResultTextAction>
          <S.ResultTextAction to={`/study/chapter/${quiz}`}>다시풀기</S.ResultTextAction>
        </S.ResultTextActions>
      </S.ChapterResultContent>

      {isBadgeOpen && (
        <S.BadgeModalOverlay>
          <FireworkCanvas />
          <S.BadgeModal>
            <S.BadgeIcon>🎯</S.BadgeIcon>
            <S.BadgeLabel>NEW BADGE</S.BadgeLabel>
            <h2>첫 번째 뱃지 획득!</h2>
            <p className="badgeName">수어 입문자</p>
            <p className="badgeDesc">
              기본 인사 문법 퀴즈를 완료해
              <br />
              첫 번째 뱃지를 획득했어요!
            </p>

            <S.BadgeModalStats>
              <div>
                <strong>+40</strong>
                <span>XP 획득</span>
              </div>
              <div>
                <strong>{result.accuracy}%</strong>
                <span>정확도</span>
              </div>
            </S.BadgeModalStats>

            <S.NextBadgeBox>
              <div>
                <span>다음 뱃지까지</span>
                <strong>수어 초급자</strong>
              </div>
              <S.NextBadgeProgress>
                <span />
              </S.NextBadgeProgress>
              <em>1/3</em>
            </S.NextBadgeBox>

            <S.BadgeModalActions>
              <button type="button" onClick={() => setIsBadgeOpen(false)}>
                결과 화면으로 돌아가기
              </button>
              <S.ResultTextAction to="/study/chapter">계속 학습하기</S.ResultTextAction>
            </S.BadgeModalActions>
          </S.BadgeModal>
        </S.BadgeModalOverlay>
      )}
    </S.ChapterResultWrap>
  );
};

export default StudyChapterResultComponent;