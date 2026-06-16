// 오!퀴즈 결과 컴포넌트: 정확도, 틀린 문제, 뱃지 획득 표시를 담당
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { chapterQuizMeta } from "./data/chapterQuizMeta";
import FireworkCanvas from "./parts/FireworkCanvas";
import * as S from "./style";


const formatResultTime = (seconds) => {
  const value = Number(seconds || 0);

  if (value <= 0) return "-";

  const minute = Math.floor(value / 60);
  const second = value % 60;

  if (minute <= 0) return `${second}초`;

  return `${minute}분${second > 0 ? ` ${second}초` : ""}`;
};
const StudyChapterResultComponent = () => {
  const { quiz } = useParams();
  const { state } = useContext(StudyQuizContext);
  const [isBadgeOpen, setIsBadgeOpen] = useState(true);
  const chapter = chapterQuizMeta.find((item) => item.id === quiz);
  const resultMeta = chapter?.result || {};

  const submittedResult = state.result?.data;
  const resultAnswers = state.result?.answers;
  const resultQuestions = state.result?.questions;
  const answerSnapshot = useMemo(() => resultAnswers || state.answers, [resultAnswers, state.answers]);
  const questionSnapshot = useMemo(() => resultQuestions || state.questions || [], [resultQuestions, state.questions]);
  const hasAnswers = answerSnapshot.length > 0;

  // 정답 개수와 정확도를 계산하는 값
  const result = useMemo(() => {
    const totalCount = questionSnapshot.length || submittedResult?.quizAttemptTotalCount || answerSnapshot.length || chapter?.questionCount || 0;
    const rawCorrectCount = submittedResult?.quizAttemptScore ?? answerSnapshot.filter((answer) => answer.isCorrect).length;
    const correctCount = Math.min(rawCorrectCount, totalCount);
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const wrongItems = questionSnapshot
      .map((question) => {
        const selectedAnswer = answerSnapshot.find((answer) => answer.questionId === question.id);
        const selectedOption = question.options?.find((option) => option.id === selectedAnswer?.selectedId);
        const correctOption = question.options?.find((option) => option.correct);

        return {
          question: question.question,
          selectedText: selectedOption?.text || "선택한 답 없음",
          correctText: correctOption?.text || "정답 정보 없음",
          isCorrect: selectedAnswer?.isCorrect === true,
        };
      })
      .filter((item) => !item.isCorrect);
    const rewardExp = state.result?.submitted && correctCount >= Math.ceil(totalCount / 2)
      ? resultMeta.rewardExp || chapter?.exp || 0
      : 0;
    const spentTime = submittedResult?.quizAttemptTime ?? 0;

    return {
      totalCount,
      correctCount,
      accuracy,
      wrongItems,
      rewardExp,
      spentTime,
    };
  }, [answerSnapshot, chapter?.exp, chapter?.questionCount, questionSnapshot, resultMeta.rewardExp, state.result?.submitted, submittedResult]);
  const shouldShowRewardModal = isBadgeOpen && result.rewardExp > 0;

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

  if (!hasAnswers) {
    return (
      <S.ChapterWrap>
        <S.ChapterReadyCard>
          <h1>아직 퀴즈 결과가 없습니다.</h1>
          <p>문제를 먼저 풀면 결과와 오답 확인이 표시돼요.</p>
          <S.ResultTextAction to={`/study/chapter/${quiz}`}>문제 풀러가기</S.ResultTextAction>
        </S.ChapterReadyCard>
      </S.ChapterWrap>
    );
  }
  return (
    <S.ChapterResultWrap>
      <S.ChapterResultContent $dimmed={shouldShowRewardModal}>
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
            <strong>+{result.rewardExp}</strong>
          </div>
          <div>
            <span>⏱️</span>
            <small>시간</small>
            <strong>{formatResultTime(result.spentTime)}</strong>
          </div>
        </S.ResultStatGrid>

        <S.ResultWrongBox>
          <strong>복습 추천 문제</strong>
          {result.wrongItems.length > 0 ? (
            <S.ResultWrongItem>
              <p>Q. {result.wrongItems[0]?.question}</p>
              <span>내 답: {result.wrongItems[0]?.selectedText}</span>
              <em>정답: {result.wrongItems[0]?.correctText}</em>
            </S.ResultWrongItem>
          ) : (
            <p>틀린 문제가 없어요.</p>
          )}
        </S.ResultWrongBox>
        <S.ResultLine />

        <S.ResultTextActions>
          <S.ResultTextAction to="/study/chapter">목록으로</S.ResultTextAction>
          <S.ResultTextAction to={`/study/chapter/${quiz}`}>다시풀기</S.ResultTextAction>
        </S.ResultTextActions>
      </S.ChapterResultContent>

      {shouldShowRewardModal && (
        <S.BadgeModalOverlay>
          <FireworkCanvas />
          <S.BadgeModal>
            <S.BadgeIcon>{resultMeta.badgeIcon || "🎯"}</S.BadgeIcon>
            <S.BadgeLabel>NEW BADGE</S.BadgeLabel>
            <h2>{resultMeta.badgeTitle || "뱃지 획득!"}</h2>
            <p className="badgeName">{resultMeta.badgeName || chapter.title}</p>
            <p className="badgeDesc">
              {(resultMeta.badgeDesc || "퀴즈를 완료해 뱃지를 획득했어요!").split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <S.BadgeModalStats>
              <div>
                <strong>+{result.rewardExp}</strong>
                <span>EXP 획득</span>
              </div>
              <div>
                <strong>{result.accuracy}%</strong>
                <span>정확도</span>
              </div>
            </S.BadgeModalStats>

            <S.NextBadgeBox>
              <div>
                <span>다음 뱃지까지</span>
                <strong>{resultMeta.nextBadgeName || "다음 뱃지"}</strong>
              </div>
              <S.NextBadgeProgress>
                <span />
              </S.NextBadgeProgress>
              <em>{resultMeta.nextBadgeProgress || "1/3"}</em>
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
