// ?숈뒿 ?댁쫰 而댄룷?뚰듃: ?⑥뼱 議고쉶, 臾몄젣 ?앹꽦, ?뺣떟 ?뺤씤, 蹂듭뒿 ?먮쫫 ?대떦
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchEduVideoById, fetchRandomWordsByLearnId, finishLearnWord, completeEduStart, startLearn, recordLearnProgress } from "../apis/LearnApi";
import { submitQuizAnswers } from "../apis/QuizApi";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { useStudyUser } from "../hooks/useStudyUser";
import { canSubmitQuizAnswers, mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { getLearnQuiz } from "./data/learnQuizMock";
import LearnQuizFeedback from "./parts/LearnQuizFeedback";
import LearnQuizOptionCard from "./parts/LearnQuizOptionCard";
import LearnQuizReview from "./parts/LearnQuizReview";
import * as S from "./style";

const optionIcons = ["수어", "표현", "단어", "연습", "복습"];

// 怨좎젙 ?쒖꽌 ?앹꽦: ??踰??쒖옉???숈뒿 ?몄뀡?먯꽌??媛숈? ?쒖꽌瑜??좎?
const getOrderValue = (value) => {
  const hash = String(value).split("").reduce((sum, character) => ((sum * 31) + character.charCodeAt(0)) >>> 0, 0);
  const mixedHash = Math.imul(hash ^ (hash >>> 16), 0x45d9f3b);

  return (mixedHash ^ (mixedHash >>> 16)) >>> 0;
};

const shuffleItems = (items, seed) =>
  [...items].sort((left, right) => {
    const leftOrder = getOrderValue(`${seed}-${left.id}`);
    const rightOrder = getOrderValue(`${seed}-${right.id}`);

    return leftOrder - rightOrder;
  });

// ?⑥뼱 蹂닿린 ?앹꽦: 諛깆뿏???⑥뼱瑜??댁쫰 蹂닿린 移대뱶 ?뺤떇?쇰줈 蹂??
const createWordOption = (word, index, correct = false, videoMode = false) => ({
  id: `${correct ? "correct" : "word"}-${word.id}`,
  label: word.wordsTitle,
  desc: word.wordsDetail || "같이 학습할 수어 표현이에요.",
  icon: videoMode ? word.wordsTitle : optionIcons[index % optionIcons.length],
  hideText: videoMode,
  correct,
});

// ?ㅻ떟 蹂닿린 ?앹꽦: 媛숈? ?숈뒿 ?⑥뼱瑜??곗꽑 ?ъ슜?섍퀬 遺議깊븯硫??꾩떆 蹂닿린濡?梨꾩?
const createWrongOptions = ({ word, words, baseQuiz, correctLabel, videoMode = false }) => {
  const wordOptions = words
    .filter((item) => item.id !== word.id && item.wordsTitle && item.wordsTitle !== correctLabel)
    .slice(0, 2)
    .map((item, index) => createWordOption(item, index, false, videoMode));

  if (wordOptions.length >= 2) {
    return wordOptions;
  }

  const fallbackOptions = baseQuiz.questions
    .flatMap((item) => item.options)
    .filter((option) => option.label && option.label !== correctLabel)
    .filter((option, index, options) => options.findIndex((item) => item.label === option.label) === index)
    .slice(0, 2 - wordOptions.length)
    .map((option, index) => ({
      ...option,
      id: `fallback-${word.id}-${index}`,
      correct: false,
    }));

  return [...wordOptions, ...fallbackOptions];
};

// 蹂닿린 ?쒖꽌 ?앹꽦: ?뺣떟怨??ㅻ떟 ?꾩튂瑜??몄뀡留덈떎 ?욎뼱??諛곗튂
const createQuestionOptions = ({ word, words, baseQuiz, correctLabel, videoMode = false, seed }) => {
  const wrongOptions = createWrongOptions({ word, words, baseQuiz, correctLabel, videoMode });
  const correctOption = createWordOption(word, wrongOptions.length, true, videoMode);

  return shuffleItems([...wrongOptions, correctOption].filter(Boolean), `${seed}-${word.id}`);
};

const LearnQuizComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type = "greeting", id = "1" } = useParams();

  const {
    state,
    actions: { setQuiz, selectAnswer, setResult },
  } = useContext(StudyQuizContext);

  const { userId, isGuest } = useStudyUser();

  const searchParams = new URLSearchParams(location.search);
  const queryEduId = searchParams.get("eduId");
  const routeEduId = location.state?.eduId || queryEduId;
  const isBackendQuiz = Boolean(routeEduId);

  const lessonTitle = location.state?.lessonTitle;
  const [sessionWords, setSessionWords] = useState([]); // 諛깆뿏?쒖뿉??諛쏆? ?⑥뼱 紐⑸줉
  const [sessionVideos, setSessionVideos] = useState({});
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessionError, setSessionError] = useState(null);
  const [sessionSeed, setSessionSeed] = useState(Math.random);
  const [resultSummary, setResultSummary] = useState(null);
  const sessionStartedAtRef = useRef(Date.now());
  const sessionCompletedRef = useRef(false);
  const baseQuiz = useMemo(() => getLearnQuiz(type), [type]);

  const getElapsedSeconds = () => Math.max(1, Math.round((Date.now() - sessionStartedAtRef.current) / 1000));

  const formatSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const restSeconds = seconds % 60;

    return minutes > 0 ? `${minutes}분 ${restSeconds}초` : `${restSeconds}초`;
  };

  // OpenAPI ?⑥뼱留??ъ슜: eduId濡??ㅼ뼱???숈뒿 ?댁쫰?먯꽌??湲곗〈 ?꾩떆 ?⑥뼱瑜??욎? ?딆쓬
  const quizWords = useMemo(() => {
    return sessionWords;
  }, [sessionWords]);

  const orderedQuizWords = useMemo(() => shuffleItems(quizWords, sessionSeed), [quizWords, sessionSeed]);

  const quiz = useMemo(() => {
    if (orderedQuizWords.length === 0) {
      return isBackendQuiz
        ? {
            ...baseQuiz,
            id: routeEduId || baseQuiz.id,
            title: lessonTitle || baseQuiz.title,
            questions: [],
          }
        : baseQuiz;
    }

    return {
      ...baseQuiz,
      id: routeEduId || baseQuiz.id,
      title: lessonTitle || baseQuiz.title,
      questions: orderedQuizWords.map((word, index) => {
        const fallback = baseQuiz.questions[index % baseQuiz.questions.length];
        const correctLabel = word.wordsTitle || fallback.targetWord || fallback.options.find((option) => option.correct)?.label;
        const video = sessionVideos[word.id];
        const options = createQuestionOptions({
          word: { ...word, wordsTitle: correctLabel },
          words: orderedQuizWords,
          baseQuiz,
          correctLabel,
          videoMode: Boolean(video),
          seed: sessionSeed,
        });

        return {
          ...fallback,
          id: word.id,
          title: video ? "이 수어는 어떤 뜻일까요?" : `다음 중 어느 수어가 "${correctLabel}"일까요?`,
          targetWord: correctLabel,
          hint: word.wordsDetail || fallback.hint,
          word,
          video,
          options,
          feedback: {
            ...fallback.feedback,
            correct: `"${correctLabel}" 표현을 골랐어요.`,
            incorrect: `정답은 "${correctLabel}"이에요.`,
            reviewTitle: correctLabel,
            reviewDesc: word.wordsDetail || fallback.feedback.reviewDesc,
          },
        };
      }),
    };
  }, [baseQuiz, isBackendQuiz, lessonTitle, orderedQuizWords, routeEduId, sessionSeed, sessionVideos]);

  const currentIndex = Math.max(Number(id) - 1, 0);
  const question = quiz.questions[currentIndex] || quiz.questions[0];
  const hasQuestion = Boolean(question);
  const totalQuestions = Math.max(quiz.questions.length, 1);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [status, setStatus] = useState("solving");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [savedEduWordMapIds, setSavedEduWordMapIds] = useState([]);

  // ?몄뀡 ?먮즺 議고쉶: ?숈뒿 ?쒖옉 ???⑥뼱? ?곸긽??遺덈윭? 臾몄젣 ?몄뀡 援ъ꽦
  useEffect(() => {
    if (!routeEduId) return;

    let ignore = false;

    const loadSession = async () => {
      setSessionLoading(true);
      setSessionError(null);

      try {
        if (!isGuest && userId && routeEduId) {
          try {
            await startLearn(routeEduId);
            sessionStartedAtRef.current = Date.now();
            sessionCompletedRef.current = false;
          } catch {
            // ?쒖옉 湲곕줉 ?ㅽ뙣媛 臾몄젣 ????먮쫫??留됱????딆쓬
          }
        }

        const words = await fetchRandomWordsByLearnId(routeEduId, 5);
        if (ignore) return;

        setSessionSeed(Math.random());
        setSessionWords(words || []);

        const videoEntries = await Promise.all(
          (words || [])
            .filter((word) => word.eduVideoId)
            .map(async (word) => {
              try {
                const video = await fetchEduVideoById(word.eduVideoId);

                return [word.id, video];
              } catch {
                return [word.id, null];
              }
            })
        );

        if (!ignore) {
          setSessionVideos(Object.fromEntries(videoEntries.filter(([, video]) => video)));
        }
      } catch {
        if (!ignore) {
          setSessionError("학습 단어를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
        }
      } finally {
        if (!ignore) {
          setSessionLoading(false);
        }
      }
    };

    loadSession();

    return () => {
      ignore = true;
    };
  }, [isGuest, routeEduId, userId]);

  // ?댁쫰 珥덇린?? URL?대굹 臾몄젣 紐⑸줉??諛붾뚮㈃ 而⑦뀓?ㅽ듃 臾몄젣 紐⑸줉 媛깆떊
  useEffect(() => {
    setQuiz({
      mode: "learn",
      quizId: quiz.id,
      quizType: type,
      questions: quiz.questions,
    });
  }, [quiz, setQuiz, type]);

  // 臾몄젣 蹂寃?珥덇린?? ?ㅼ쓬 臾몄젣濡??대룞?????좏깮 ?곹깭 珥덇린??
  useEffect(() => {
    setSelectedOptionId(null);
    setStatus("solving");
  }, [id]);

  useEffect(() => {
    setSavedEduWordMapIds([]);
  }, [isGuest, routeEduId, userId]);

  const selectedOption = question?.options.find((option) => option.id === selectedOptionId) || null;
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const progressStatus = status === "correct" ? "correct" : status === "incorrect" ? "incorrect" : "solving";
  const isLastQuestion = currentIndex >= quiz.questions.length - 1;
  const isSignalQuiz = type === "signal";
  const reviewQuestions = useMemo(() => {
    if (!question) return [];

    const wrongQuestionIds = state.answers
      .filter((answer) => answer.correct === false)
      .map((answer) => String(answer.questionId));
    const wrongQuestions = quiz.questions.filter((item) => wrongQuestionIds.includes(String(item.id)));
    const randomWrongQuestion = wrongQuestions[Math.floor(Math.random() * wrongQuestions.length)];

    return randomWrongQuestion ? [randomWrongQuestion] : [question];
  }, [question, quiz.questions, state.answers]);
  const reviewQuestion = reviewQuestions[reviewIndex] || reviewQuestions[0];

  // ?듭븞 ?좏깮: ?ъ슜?먭? 怨좊Ⅸ 蹂닿린 ???
  const handleSelect = (optionId) => {
    if (status !== "solving") return;

    setSelectedOptionId(optionId);
  };

  // ?⑥뼱 ?꾨즺 ??? 臾몄젣瑜?留욏엺 ?⑥뼱留??숈뒿 吏꾪뻾?꾨줈 湲곕줉
  const saveCurrentWord = async () => {
    const eduWordMapId = question?.word?.eduWordMapId;

    if (isGuest || !userId || !eduWordMapId || savedEduWordMapIds.includes(eduWordMapId)) {
      return;
    }

    try {
      await finishLearnWord({ userId, eduWordMapId });
      setSavedEduWordMapIds((prev) => [...prev, eduWordMapId]);
    } catch {
      // ?⑥뼱 ????ㅽ뙣媛 臾몄젣 ????먮쫫??留됱? ?딅룄濡?泥섎━
    }
  };

  // ?뺣떟 ?뺤씤: ?좏깮??蹂닿린???뺣떟 ?щ? ?뺤씤 諛?而⑦뀓?ㅽ듃 湲곕줉
  const handleCheck = async () => {
    if (status !== "solving" || !selectedOption) return;

    const isCorrect = Boolean(selectedOption.correct);

    selectAnswer({
      questionId: question.id,
      answerId: selectedOption.id,
      correct: isCorrect,
    });

    setStatus(isCorrect ? "correct" : "incorrect");

    if (!isGuest && userId && routeEduId) {
      try {
        await recordLearnProgress({
          userId,
          eduId: routeEduId,
          isCorrect: isCorrect ? 1 : 0,
        });
      } catch {
        // ?숈뒿 ?몄뀡 吏꾪뻾 湲곕줉 ?ㅽ뙣媛 臾몄젣 ????먮쫫??留됱????딆쓬
      }
    }

    if (isCorrect) {
      await saveCurrentWord();
    }
  };

  // ?숈뒿 ?꾨즺: 寃곌낵 ??μ쓣 ?쒕룄?섍퀬 寃곌낵 ?앹뾽 ?쒖떆
  const createLearnResultSummary = (submitted = false, data = null) => {
    const answers = state.answers || [];
    const totalCount = quiz.questions.length || answers.length || totalQuestions;
    const correctCount = answers.filter((answer) => answer.correct === true || answer.isCorrect === true).length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const wrongItems = quiz.questions
      .map((item) => {
        const answer = answers.find((savedAnswer) => String(savedAnswer.questionId) === String(item.id));
        const selected = item.options?.find((option) => String(option.id) === String(answer?.answerId || answer?.selectedId));
        const correctOption = item.options?.find((option) => option.correct);

        return {
          question: item.title,
          selectedText: selected?.label || "선택한 답이 없어요",
          correctText: correctOption?.label || item.targetWord || "정답 정보가 없어요",
          isCorrect: answer?.correct === true || answer?.isCorrect === true,
        };
      })
      .filter((item) => !item.isCorrect);
    const randomWrongItem = wrongItems[Math.floor(Math.random() * wrongItems.length)] || null;

    return {
      submitted,
      data,
      totalCount,
      correctCount,
      accuracy,
      exp: correctCount * 20,
      spentTime: formatSeconds(getElapsedSeconds()),
      wrongItem: randomWrongItem,
    };
  };

  const handleFinish = async () => {
    if (isGuest || !userId || !canSubmitQuizAnswers(quiz.id, state.answers)) {
      const summary = createLearnResultSummary(false);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        reason: isGuest || !userId ? "guest" : "mock",
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);

      return;
    }

    const answers = mapQuizAnswersForSubmit(state.answers);

    try {
      const result = await submitQuizAnswers({
        quizId: quiz.id,
        userId,
        answers,
      });
      
      if (routeEduId) {
        await completeLearnSession();
      }

      const summary = createLearnResultSummary(true, result);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: true,
        data: result,
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);
    } catch {
      if (routeEduId) {
        await completeLearnSession();
      }
      
      const summary = createLearnResultSummary(false);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);
    }
  };

  // ?ㅼ쓬 臾몄젣: ?ㅼ쓬 臾몄젣濡??대룞?섍굅??留덉?留?臾몄젣?먯꽌 蹂듭뒿 ?붾㈃?쇰줈 ?꾪솚
  const completeLearnSession = async () => {
    if (isGuest || !userId || !routeEduId || sessionCompletedRef.current) {
      return;
    }

    try {
      await completeEduStart({ userId, eduId: routeEduId, eduStartTime: getElapsedSeconds() });
      sessionCompletedRef.current = true;
    } catch {
      // ?꾨즺 湲곕줉 ?ㅽ뙣媛 ?붾㈃ 吏꾪뻾??留됱????딆쓬
    }
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      if (status !== "solving") {
        await completeLearnSession();
      }

      setReviewIndex(0);
      setStatus("review");

      return;
    }

    const nextQuery = routeEduId ? `?eduId=${routeEduId}` : "";
    navigate(`/study/learn/quiz/${type}/questions/${currentIndex + 2}${nextQuery}`);
  };

  // ?リ린: ?숈뒿 硫붿씤 ?붾㈃?쇰줈 ?대룞
  const handleClose = () => {
    navigate("/study/learn");
  };

  // 蹂듭뒿 ?ㅼ쓬: ?ㅻ떟 蹂듭뒿???쒖꽌?濡?蹂댁뿬二쇨퀬 留덉?留됱뿉 ?숈뒿 醫낅즺
  const handleReviewNext = () => {
    if (reviewQuestions.length > 0 && reviewIndex < reviewQuestions.length - 1) {
      setReviewIndex((prev) => prev + 1);

      return;
    }

    handleFinish();
  };

  const handleResultReplay = () => {
    setResultSummary(null);
    setStatus("solving");
    setSelectedOptionId(null);
    setReviewIndex(0);
    const firstQuery = routeEduId ? `?eduId=${routeEduId}` : "";
    navigate(`/study/learn/quiz/${type}/questions/1${firstQuery}`);
  };

  const resultPopup = resultSummary && (
    <S.LearnResultOverlay>
      <S.LearnResultModal>
        <S.LearnResultCelebrate>🎉</S.LearnResultCelebrate>
        <S.LearnResultTitle>학습 완료!</S.LearnResultTitle>
        <S.LearnResultAccuracy>{resultSummary.accuracy}%</S.LearnResultAccuracy>
        <S.LearnResultSubText>
          {resultSummary.totalCount}문제 중 {resultSummary.correctCount}개 정답
        </S.LearnResultSubText>

        <S.LearnResultStatGrid>
          <div>
            <span>🎯</span>
            <small>정답</small>
            <strong>{resultSummary.correctCount}개</strong>
          </div>
          <div>
            <span>⚡</span>
            <small>EXP</small>
            <strong>+{resultSummary.exp}</strong>
          </div>
          <div>
            <span>⏱️</span>
            <small>시간</small>
            <strong>{resultSummary.spentTime}</strong>
          </div>
        </S.LearnResultStatGrid>

        <S.LearnResultWrongBox>
          <strong>복습 추천 문제</strong>
          {resultSummary.wrongItem ? (
            <S.LearnResultWrongItem>
              <p>Q. {resultSummary.wrongItem.question}</p>
              <span>내 답: {resultSummary.wrongItem.selectedText}</span>
              <em>정답: {resultSummary.wrongItem.correctText}</em>
            </S.LearnResultWrongItem>
          ) : (
            <p>틀린 문제가 없어요.</p>
          )}
        </S.LearnResultWrongBox>

        <S.LearnResultLine />
        <S.LearnResultActions>
          <button type="button" onClick={() => navigate("/study/learn")}>목록으로</button>
          <button type="button" onClick={handleResultReplay}>다시풀기</button>
        </S.LearnResultActions>
      </S.LearnResultModal>
    </S.LearnResultOverlay>
  );

  if (!hasQuestion) {
    const emptyMessage = sessionLoading
      ? "학습 단어를 불러오는 중이에요."
      : sessionError || "등록된 OpenAPI 학습 단어가 없어요. 관리자에서 학습 단어를 연결해 주세요.";

    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <S.LearnQuizTop>
            <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
              ×
            </S.LearnQuizClose>
            <S.LearnQuizProgress aria-label="학습 퀴즈 진행률" $progress={0} $status="solving">
              <span />
            </S.LearnQuizProgress>
            <S.LearnQuizCount>0 / 0</S.LearnQuizCount>
          </S.LearnQuizTop>

          <S.LearnQuizHeader>
            <S.LearnQuizTitle>{emptyMessage}</S.LearnQuizTitle>
          </S.LearnQuizHeader>

          <S.LearnQuizBottom>
            <S.LearnQuizSkip type="button" onClick={handleClose}>
              학습으로 돌아가기
            </S.LearnQuizSkip>
          </S.LearnQuizBottom>
        </S.LearnQuizShell>
        {resultPopup}
      </S.LearnQuizWrap>
    );
  }

  if (status === "review") {
    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <LearnQuizReview
            label={isSignalQuiz ? "수신호 배우기" : "수어 배우기"}
            headline={isSignalQuiz ? "수신호를 기억해볼까요?" : "수어를 기억해볼까요?"}
            mediaText={isSignalQuiz ? "수신호 이미지/영상 영역" : "수어 이미지/영상 영역"}
            wordLabel={isSignalQuiz ? "수신호 표현" : "수어 표현"}
            title={reviewQuestion.feedback.reviewTitle}
            desc={reviewQuestion.feedback.reviewDesc}
            videoUrl={reviewQuestion.video?.eduVideoUrl}
            imageUrl={reviewQuestion.word?.wordsImage}
            onSkip={handleFinish}
            onRemember={handleReviewNext}
          />
        </S.LearnQuizShell>
        {resultPopup}
      </S.LearnQuizWrap>
    );
  }

  return (
    <S.LearnQuizWrap>
      <S.LearnQuizShell>
        <S.LearnQuizTop>
          <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
            ×
          </S.LearnQuizClose>
          <S.LearnQuizProgress aria-label="학습 퀴즈 진행률" $progress={progress} $status={progressStatus}>
            <span />
          </S.LearnQuizProgress>
          <S.LearnQuizCount>
            {currentIndex + 1} / {totalQuestions}
          </S.LearnQuizCount>
        </S.LearnQuizTop>

        <S.LearnQuizHeader>
          <S.LearnQuizTitle>{question.title}</S.LearnQuizTitle>
        </S.LearnQuizHeader>

        {(sessionLoading || sessionError || question.video) && (
          <S.LearnSessionIntro>
            {sessionLoading && <S.SessionStatus>학습 자료를 불러오는 중이에요.</S.SessionStatus>}
            {sessionError && <S.SessionStatus>{sessionError}</S.SessionStatus>}
            {question.video && (
              <S.SessionVideoCard>
                <video controls src={question.video.eduVideoUrl}>
                  수어 영상을 재생할 수 없어요.
                </video>
              </S.SessionVideoCard>
            )}
          </S.LearnSessionIntro>
        )}

        <S.LearnQuizOptionGrid>
          {question.options.map((option, index) => (
            <LearnQuizOptionCard
              key={option.id}
              option={option}
              index={index}
              selected={selectedOptionId === option.id}
              revealed={status !== "solving"}
              correct={Boolean(option.correct)}
              onClick={() => handleSelect(option.id)}
            />
          ))}
        </S.LearnQuizOptionGrid>

        {status === "solving" ? (
          <S.LearnQuizBottom>
            <S.LearnQuizSkip type="button" onClick={handleNext}>
              건너뛰기
            </S.LearnQuizSkip>
            <S.LearnQuizCheck type="button" disabled={!selectedOptionId} onClick={handleCheck}>
              확인
            </S.LearnQuizCheck>
          </S.LearnQuizBottom>
        ) : (
          <LearnQuizFeedback
            status={status}
            exp={status === "correct" ? (isBackendQuiz ? 20 : question.exp) : 0}
            message={status === "correct" ? question.feedback.correct : question.feedback.incorrect}
            description={question.word?.wordsDetail || question.hint}
            onNext={handleNext}
          />
        )}
      </S.LearnQuizShell>
      {resultPopup}
    </S.LearnQuizWrap>
  );
};

export default LearnQuizComponent;

