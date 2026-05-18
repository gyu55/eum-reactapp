import React from "react";
import { SearchPage as S } from "../style";

const SearchResultCard = ({ result, currentIndex, totalCount, onPrev, onNext, onBack }) => {

  return (
    <S.CardSection>
      <S.SearchForm as="div">
        <S.SearchInput value="안녕하세요." readOnly />
        <S.SearchButton type="button" onClick={onBack}>검색</S.SearchButton>
      </S.SearchForm>

      <S.ResultCount>
        <span>"안녕하세요" 검색 결과 </span>
        <strong>{totalCount}개</strong>
      </S.ResultCount>

      <S.CardArea>
        <S.CardPager>
          <span>
            {currentIndex + 1} / {totalCount}
          </span>
          <button type="button" onClick={onPrev} disabled={currentIndex === 0}>
            ‹
          </button>
          <button type="button" onClick={onNext} disabled={currentIndex === totalCount - 1}>
            ›
          </button>
        </S.CardPager>

        <S.CardVisual>
          <S.CardNumber>1</S.CardNumber>
          {result.cardImage ? (
            <img src={result.cardImage} alt={result.word} />
          ) : (
            <S.EmptyVisual>
              <span>📌</span>
              <p>수어 표현과 생동감 있는<br />표정 일러스트 슬롯</p>
            </S.EmptyVisual>
          )}
        </S.CardVisual>

        <S.CardDetail>
          <S.DetailBlock>
            <S.StepBadge>2</S.StepBadge>
            <S.DetailTitle>수어 동작</S.DetailTitle>
            <S.MotionGrid>
              {result.motions.map((motion) => (
                <S.MotionCard key={motion.id}>
                  <span>{motion.icon}</span>
                  <p>{motion.label}</p>
                </S.MotionCard>
              ))}
            </S.MotionGrid>
            <S.VideoButton type="button">▶ 동작 영상 보기 (한국수어사전)</S.VideoButton>
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>3</S.StepBadge>
            <S.DetailTitle>수어의 뜻</S.DetailTitle>
            <S.InfoBox>
              <strong>{result.word}</strong>
              <span> · {result.meaning}</span>
              <p>{result.category}</p>
            </S.InfoBox>
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>4</S.StepBadge>
            <S.DetailTitle>동작 설명</S.DetailTitle>
            <S.InfoBox>
              <p>{result.desc}</p>
            </S.InfoBox>
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>5</S.StepBadge>
            <S.DetailTitle>한국수어사전 원문</S.DetailTitle>
            <S.SourceBox>
              <S.QRSlot>이미지 슬롯</S.QRSlot>
              <div>
                <strong>한국수어사전</strong>
                <p>QR코드로 원문에서 정확하게 확인 가능</p>
              </div>
              <button type="button">원문 보기</button>
            </S.SourceBox>
          </S.DetailBlock>
        </S.CardDetail>
      </S.CardArea>

      <S.StartLink to="/study/experience/sign/1">이 단어로 학습 시작하기 →</S.StartLink>
    </S.CardSection>
  );
};

export default SearchResultCard;
