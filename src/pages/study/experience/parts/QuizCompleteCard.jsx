import React from "react";
import { QuizPage as S } from "../style";

const QuizCompleteCard = ({ accuracy }) => {
  return (
    <S.CompleteCard>
      <S.ResultIcon>🎉</S.ResultIcon>
      <S.ResultTitle>체험학습 완료!</S.ResultTitle>
      <S.ResultText>기본 인사 문법 · 3문제 완료</S.ResultText>

      <S.Stats>
        <S.Stat>
          <strong>{accuracy || 80}%</strong>
          <span>정확도</span>
        </S.Stat>
        <S.Stat>
          <strong>2분</strong>
          <span>소요시간</span>
        </S.Stat>
      </S.Stats>

      <S.NextBox>
        <S.BoxLabel>다음 학습 단계</S.BoxLabel>
        <S.NextItem>
          <strong>일상 표현 · 감사와 사과</strong>
          <span>5문제 · 약 3분</span>
        </S.NextItem>
        <S.NextItem>
          <strong>숫자와 날짜 표현</strong>
          <span>5문제 · 약 3분</span>
        </S.NextItem>
      </S.NextBox>

      <S.BenefitBox>
        <S.BoxLabel>회원 혜택</S.BoxLabel>
        <S.BenefitItem>
          <span>1</span>
          <div>
            <strong>전체 커리큘럼</strong>
            <p>300개 이상 수어 학습 콘텐츠를 이어서 학습</p>
          </div>
        </S.BenefitItem>
        <S.BenefitItem>
          <span>2</span>
          <div>
            <strong>학습 기록</strong>
            <p>진도와 성취도를 저장하고 이어서 학습</p>
          </div>
        </S.BenefitItem>
        <S.BenefitItem>
          <span>3</span>
          <div>
            <strong>커뮤니티 채팅</strong>
            <p>회원끼리 자유롭게 소통</p>
          </div>
        </S.BenefitItem>
      </S.BenefitBox>

      <S.SignupTitle>더 많은 문제를 풀고 싶으신가요?</S.SignupTitle>
      <S.SignupDesc>회원가입하면 전체 커리큘럼을 무료로 이용할 수 있어요.</S.SignupDesc>
      <S.AuthButton to="/join" $primary>
        이메일로 가입하기
      </S.AuthButton>
      <S.AuthButton to="/join">Kakao로 시작하기</S.AuthButton>
      <S.AuthButton to="/join">Naver로 시작하기</S.AuthButton>
      <S.AuthButton to="/join">Google로 시작하기</S.AuthButton>
    </S.CompleteCard>
  );
};

export default QuizCompleteCard;
