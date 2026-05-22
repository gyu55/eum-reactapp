// 체험 퀴즈 컴포넌트: 비회원 퀴즈 문제, 정답 피드백, 완료
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuizFeedback from "../components/QuizFeedback";
import QuizProgress from "../components/QuizProgress";
import QuizShell from "../components/QuizShell";
import StudyStatusMessage from "../components/StudyStatusMessage";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { experienceQuizMock } from "./data/experienceQuizMock";
import * as S from "./style";

const StudyExperienceQuizComponent = () => {
  const navigate = useNavigate();
  const { quiz, id } = useParams();
  const { state, actions } = useContext(StudyQuizContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const quizData = experienceQuizMock[quiz];
  const currentIndex = Math.max(Number(id || 1) - 1, 0);
  const currentQuestion = quizData?.questions[currentIndex];


  // 현재 체험 퀴즈 데이터 -> context
  useEffect(() => {
    if (!quizData)
      return;

    actions.setQuiz({
      mode: "guest",
      quizId: quiz,
      quizType: "experience",
      questions: quizData.questions,
    });
  }, [actions, quiz, quizData]);

  // 주소의 문제 번호가 바뀔 때 선택 상태를 초기화
  useEffect(() => {
    setSelectedOption(null);
    setIsComplete(false);
  }, [id, quiz]);

  // 현재까지 정답 수를 계산하는 값
  const correctCount = useMemo(
    () => state.answers.filter((answer) => answer.isCorrect).length,
    [state.answers]
  );

  // 보기를 선택했을 때 정답 여부를 저장
  const handleSelectOption = (option) => {
    if (selectedOption)
      return;

    setSelectedOption(option);
    actions.selectAnswer({
      questionId: currentQuestion.id,
      selectedId: option.id,
      isCorrect: option.correct,
    });
  };

  // 다음 문제 또는 결과 화면으로 이동
  const handleNext = () => {
    const isLastQuestion = currentIndex >= quizData.questions.length - 1;

    if (isLastQuestion) {
      setIsComplete(true);

      return;
    }

    navigate(`/study/experience/${quiz}/questions/${currentIndex + 2}`);
  };

  // 선택 없이 확인을 눌렀을 때 alert
  const handleConfirm = () => {
    if (!selectedOption) {

      alert("답을 먼저 선택해주세요.");
      return;
    }

    handleNext();
  };

  if (!quizData || !currentQuestion) {
    return (
      <QuizShell>
        <StudyStatusMessage>체험 퀴즈 정보를 찾을 수 없습니다.</StudyStatusMessage>
      </QuizShell>
    );
  }

  return (
    <QuizShell>
      <S.ExperienceQuizPage $dimmed={isComplete}>
        <S.ExperienceQuizHeader>
          <button type="button" onClick={() => navigate("/study/experience")}>
            ←
          </button>
          <span>{currentQuestion.category || quizData.title}</span>
          <strong>
            {currentIndex + 1} / {quizData.questions.length}
          </strong>
          <em>⚡ 20</em>
        </S.ExperienceQuizHeader>

        <S.ExperienceQuizPanel>
          <QuizProgress current={currentIndex + 1} total={quizData.questions.length} />

          <S.QuestionInfo>
            <h2>{currentQuestion.question}</h2>
          </S.QuestionInfo>

          <S.GestureBox>{currentQuestion.gesture || "👋"}</S.GestureBox>

          <S.OptionList>
            {currentQuestion.options.map((option) => (
              <S.TextOptionButton
                key={option.id}
                type="button"
                $selected={selectedOption?.id === option.id}
                $correct={option.correct}
                onClick={() => handleSelectOption(option)}
              >
                <strong>{option.label}</strong>
                <span>{option.text}</span>
              </S.TextOptionButton>
            ))}
          </S.OptionList>

          {selectedOption && (
            <QuizFeedback
              status={selectedOption.correct ? "correct" : "wrong"}
              title={selectedOption.correct ? "정답이에요!" : "다시 기억해볼까요?"}
              desc={currentQuestion.explanation}
              onNext={handleNext}
              buttonText="확인"
            />
          )}

          <S.QuizBottomBar>
            <button type="button" onClick={handleNext}>
              건너뛰기
            </button>
            <button type="button" onClick={handleConfirm}>
              확인
            </button>
          </S.QuizBottomBar>
        </S.ExperienceQuizPanel>
      </S.ExperienceQuizPage>

      {isComplete && (
        <S.AuthPromptOverlay>
          <S.AuthPromptModal>
            <S.ModalClose type="button" onClick={() => navigate("/study")}>
              ×
            </S.ModalClose>
            <S.CheckIcon>✓</S.CheckIcon>
            <h2>체험학습 완료!</h2>
            <p className="summary">기본 인사 문법 · {quizData.questions.length}문제 완료</p>

            <S.ResultStats>
              <div>
                <strong>{Math.round((correctCount / quizData.questions.length) * 100)}%</strong>
                <span>정확도</span>
              </div>
              <div>
                <strong>2분</strong>
                <span>소요시간</span>
              </div>
            </S.ResultStats>

            <S.NextStepList>
              <span>다음 학습 단계</span>
              <p>일상 표현 - 감사·사과</p>
              <small>5문제 · 약 3분</small>
              <p>숫자·날짜 표현</p>
              <small>5문제 · 약 3분</small>
            </S.NextStepList>

            <S.MemberBenefits>
              <span>회원 혜택</span>
              <li>
                <strong>전체 커리큘럼</strong>
                <small>300개 이상 수어 학습 콘텐츠</small>
              </li>
              <li>
                <strong>학습 기록</strong>
                <small>진도와 성적을 저장하고 이어서 학습</small>
              </li>
              <li>
                <strong>커뮤니티 채팅</strong>
                <small>회원끼리 자유롭게 소통</small>
              </li>
            </S.MemberBenefits>

            <S.EmailSignupLink to="/join">이메일로 가입하기</S.EmailSignupLink>
            <S.SocialDivider>또는 소셜 계정으로 시작하기</S.SocialDivider>
            <S.SocialButton to="/login" $provider="kakao">Kakao로 시작하기</S.SocialButton>
            <S.SocialButton to="/login" $provider="naver">Naver로 시작하기</S.SocialButton>
            <S.SocialButton to="/login" $provider="google">Google로 시작하기</S.SocialButton>
          </S.AuthPromptModal>
        </S.AuthPromptOverlay>
      )}
    </QuizShell>
  );
};

export default StudyExperienceQuizComponent;