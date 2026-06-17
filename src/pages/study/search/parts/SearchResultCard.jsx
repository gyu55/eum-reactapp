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
            <S.DetailVideo controls preload="metadata">
              <source src={result.videoUrl} />
              수어 영상을 재생할 수 없어요.
            </S.DetailVideo>
          ) : result.cardImage ? (
            <S.DetailImage src={result.cardImage} alt={`${result.word} 수어 상세 이미지`} />
          ) : (
            <S.MediaPlaceholder>
              <span>📌</span>
              <p>등록된 수어 이미지나 영상이 없어요.</p>
            </S.MediaPlaceholder>
          )}
        </S.DetailMediaWrap>

        <S.DetailInfo>
          <S.StepTitle>
            수어 표현
          </S.StepTitle>
          <S.MeaningBox>
            <S.DetailTitle>{result.word}</S.DetailTitle>
            {/* <S.DetailCategoryText>{result.category}</S.DetailCategoryText> */}
          </S.MeaningBox>

          <S.StepTitle>
            동작 설명
          </S.StepTitle>
          <S.DetailDesc>{result.desc}</S.DetailDesc>

          <S.StepTitle>
            한국수어사전 원문
          </S.StepTitle>
          <S.ExampleBox>
            <S.SourceThumb>{result.cardImage ? <img src={result.cardImage} alt="" /> : "이미지 없음"}</S.SourceThumb>
            <div>
              <S.ExampleLabel>한국수어사전</S.ExampleLabel>
              <p>{result.sourceUrl ? "원문에서 정확한 수어 정보를 확인할 수 있어요." : "등록된 원문 링크가 없어요."}</p>
            </div>
            {result.sourceUrl && (
              <S.SourceButton href={result.sourceUrl} target="_blank" rel="noreferrer">
                원문 보기
              </S.SourceButton>
            )}
          </S.ExampleBox>
        </S.DetailInfo>
      </S.DetailBody>
    </S.DetailCard>
  );
};

export default SearchResultCard;
