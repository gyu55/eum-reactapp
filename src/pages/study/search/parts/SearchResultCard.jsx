// 검색결과상세카드: 선택한 수어 단어의 자세한 설명을 보여줍니다.
import * as S from "../style";

// 영상주소확인함수: 수어 영상 URL이 있을 때 영상 영역에 표시할지 판단합니다.
const hasVideoSource = (url) => Boolean(url && typeof url === "string");

const SearchResultCard = ({ result, currentIndex, totalCount, onBack, onPrev, onNext }) => {
  if (!result) return null;

  return (
    <S.DetailCard>
      <S.DetailHeader>
        <S.BackButton type="button" onClick={onBack}>
          목록으로
        </S.BackButton>
        <S.DetailPager>
          <S.PagerButton type="button" onClick={onPrev} disabled={currentIndex <= 0}>
            이전
          </S.PagerButton>
          <S.PagerCount>
            {currentIndex + 1} / {totalCount}
          </S.PagerCount>
          <S.PagerButton type="button" onClick={onNext} disabled={currentIndex >= totalCount - 1}>
            다음
          </S.PagerButton>
        </S.DetailPager>
      </S.DetailHeader>

      <S.DetailBody>
        <S.DetailMediaWrap>
          {hasVideoSource(result.videoUrl) ? (
            <S.DetailVideo controls poster={result.cardImage || undefined}>
              <source src={result.videoUrl} />
              수어 영상을 재생할 수 없어요.
            </S.DetailVideo>
          ) : result.cardImage ? (
            <S.DetailImage src={result.cardImage} alt={`${result.word} 수어 상세 이미지`} />
          ) : (
            <S.MediaPlaceholder>
              <span>📌</span>
              <p>수어 표현과 생동감 있는 영상 슬롯</p>
            </S.MediaPlaceholder>
          )}
        </S.DetailMediaWrap>

        <S.DetailInfo>
          <S.StepTitle>
            <span>2</span>
            수어 동작
          </S.StepTitle>
          <S.MotionList>
            {(result.motions || [
              { id: 1, icon: "👊", label: "동작 ①" },
              { id: 2, icon: "✋", label: "동작 ②" },
              { id: 3, icon: "👋", label: "동작 ③" },
            ]).map((motion) => (
              <S.MotionItem key={motion.id}>
                <strong>{motion.icon}</strong>
                <span>{motion.label}</span>
              </S.MotionItem>
            ))}
          </S.MotionList>

          {result.videoUrl && (
            <S.VideoSourceLink href={result.videoUrl} target="_blank" rel="noreferrer">
              ▶ 동작 영상 보기
            </S.VideoSourceLink>
          )}

          <S.StepTitle>
            <span>3</span>
            수어의 뜻
          </S.StepTitle>
          <S.MeaningBox>
            <S.DetailTitle>{result.word}</S.DetailTitle>
            <S.DetailMeaning> · {result.meaning}</S.DetailMeaning>
            <S.DetailCategoryText>{result.category} · 검색 결과 · 한국수어사전</S.DetailCategoryText>
          </S.MeaningBox>

          <S.StepTitle>
            <span>4</span>
            동작 설명
          </S.StepTitle>
          <S.DetailDesc>{result.desc}</S.DetailDesc>

          <S.StepTitle>
            <span>5</span>
            한국수어사전 원문
          </S.StepTitle>
          <S.ExampleBox>
            <S.SourceThumb>{result.cardImage ? <img src={result.cardImage} alt="" /> : "이미지 슬롯"}</S.SourceThumb>
            <div>
              <S.ExampleLabel>한국수어사전</S.ExampleLabel>
              <p>{result.sourceUrl ? "원문에서 정확한 수어 정보를 확인할 수 있어요." : result.example}</p>
            </div>
            {result.sourceUrl && (
              <S.SourceButton href={result.sourceUrl} target="_blank" rel="noreferrer">
                원문 보기
              </S.SourceButton>
            )}
          </S.ExampleBox>

          <S.TagList>
            {result.tags?.map((tag) => (
              <S.TagItem key={tag}>#{tag}</S.TagItem>
            ))}
          </S.TagList>
        </S.DetailInfo>
      </S.DetailBody>

      <S.DetailStartButton type="button">이 단어로 학습 시작하기 →</S.DetailStartButton>
    </S.DetailCard>
  );
};

export default SearchResultCard;
