// 검색결과리스트: 검색된 수어 단어 목록을 카드 형태로 보여줍니다.
import * as S from "../style";

const SearchResultList = ({ results = [], onSelect }) => {
  return (
    <S.ResultList>
      {results.map((result, index) => (
        <S.ResultItemButton type="button" key={result.id} onClick={() => onSelect?.(index)}>
          <S.ResultThumbWrap>
            {result.cardImage ? (
              <S.ResultThumb src={result.cardImage} alt={`${result.word} 수어 이미지`} />
            ) : (
              <span>이미지 슬롯</span>
            )}
          </S.ResultThumbWrap>
          <S.ResultText>
            <S.ResultCategory>{result.category}</S.ResultCategory>
            <S.ResultWord>{result.word}</S.ResultWord>
            <S.ResultDesc>{result.shortDesc}</S.ResultDesc>
          </S.ResultText>
          <S.ResultActionText>자세히 보기</S.ResultActionText>
        </S.ResultItemButton>
      ))}
    </S.ResultList>
  );
};

export default SearchResultList;
