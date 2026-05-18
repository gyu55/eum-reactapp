import React from "react";
import { SearchPage as S } from "../style";

const SearchResultList = ({
  keyword,
  results,
  loading,
  error,
  onChangeKeyword,
  onSearch,
  onSelectCard,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <S.SearchSection>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          value={keyword}
          placeholder="검색어를 입력하세요."
          onChange={(event) => onChangeKeyword(event.target.value)}
        />
        <S.SearchButton type="submit">검색</S.SearchButton>
      </S.SearchForm>

      <S.ResultCount>
        <span>"{keyword}" 검색 결과 </span>
        <strong>{results.length}개</strong>
      </S.ResultCount>

      {loading && <S.StatusText>검색 중이에요.</S.StatusText>}
      {error && <S.StatusText>{error}</S.StatusText>}

      <S.ResultList>
        {results.map((result, index) => (
          <S.ResultItem key={result.id} $featured={index === 0}>
            <S.ImageSlot $featured={index === 0}>{result.imageLabel}</S.ImageSlot>

            <S.ResultText>
              <S.ResultTitle $featured={index === 0}>{result.word}</S.ResultTitle>
              <S.ResultDesc $featured={index === 0}>{result.shortDesc}</S.ResultDesc>
            </S.ResultText>

            <S.ResultActions>
              <button type="button">▶ 영상 보기</button>
              <button type="button" className="cardButton" onClick={() => onSelectCard(index)}>
                카드 보기
              </button>
              {index === 0 && <a href="https://sldict.korean.go.kr" target="_blank" rel="noreferrer">🔗 한국수어사전 원문 보기</a>}
            </S.ResultActions>
          </S.ResultItem>
        ))}
      </S.ResultList>
    </S.SearchSection>
  );
};

export default SearchResultList;
