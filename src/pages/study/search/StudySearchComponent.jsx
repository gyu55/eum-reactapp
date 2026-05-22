// 검색화면컴포넌트: 검색창, 결과 목록, 상세 카드 전환을 담당합니다.
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { signWordCategories, signWordMockList } from "./data/signWordMock";
import { fetchSignWords } from "../apis/SignWordApi";
import { useSignWordSearch } from "../hooks/useSignWordSearch";
import { mapSignWords } from "../mappers/signWordMapper";
import SearchResultCard from "./parts/SearchResultCard";
import SearchResultList from "./parts/SearchResultList";
import * as S from "./style";

// 임시데이터필터함수: API 실패 시 mock 데이터에서 검색어와 카테고리로 결과를 찾습니다.
const getMockResults = (searchKeyword, category) => {
  const trimmedKeyword = searchKeyword.trim();

  return signWordMockList.filter((item) => {
    const matchedCategory = category === "전체" || item.category === category;
    const matchedKeyword =
      !trimmedKeyword ||
      item.word.includes(trimmedKeyword) ||
      item.meaning.includes(trimmedKeyword) ||
      item.desc.includes(trimmedKeyword);

    return matchedCategory && matchedKeyword;
  });
};

const StudySearchComponent = () => {
  const location = useLocation();
  const initialKeyword = location.state?.keyword || "";
  const {
    keyword,
    setKeyword,
    results,
    setResults,
    selectedIndex,
    setSelectedIndex,
    loading,
    setLoading,
    error,
    setError,
  } = useSignWordSearch(initialKeyword);
  const [submittedKeyword, setSubmittedKeyword] = useState(initialKeyword);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 검색결과필터: API 결과를 카테고리 기준으로 한 번 더 골라냅니다.
  const filteredResults = useMemo(() => {
    return results.filter((item) => selectedCategory === "전체" || item.category === selectedCategory);
  }, [results, selectedCategory]);

  const selectedResult = selectedIndex !== null ? filteredResults[selectedIndex] : null;

  // 검색실행함수: 백엔드 검색 API를 호출하고 실패하면 임시데이터를 보여줍니다.
  const searchSignWords = async (searchKeyword = keyword, category = selectedCategory) => {
    setLoading(true);
    setError(null);
    setSelectedIndex(null);

    try {
      const data = await fetchSignWords(searchKeyword);
      const mappedResults = mapSignWords(data);

      if (mappedResults.length === 0) {
        setResults(getMockResults(searchKeyword, category));
        setError("검색 결과가 없어 임시데이터를 보여주고 있어요.");
        return;
      }

      setResults(mappedResults);
    } catch {
      setResults(getMockResults(searchKeyword, category));
      setError("서버 연결이 어려워 임시데이터를 보여주고 있어요.");
    } finally {
      setLoading(false);
    }
  };

  // 첫검색실행: 검색 페이지에 처음 들어오면 기본 검색 결과를 준비합니다.
  useEffect(() => {
    searchSignWords(initialKeyword, selectedCategory);
    // 최초 진입 시에만 실행하기 위해 의존성을 고정합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 검색실행이벤트: 입력한 검색어로 결과 목록을 다시 보여줍니다.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedKeyword(keyword);
    searchSignWords(keyword, selectedCategory);
  };

  // 카테고리선택함수: 선택한 분류 기준으로 결과를 다시 필터링합니다.
  const handleCategory = (category) => {
    setSelectedCategory(category);
    setSelectedIndex(null);

    if (error) {
      setResults(getMockResults(submittedKeyword, category));
    }
  };

  // 상세이동함수: 목록에서 선택한 결과를 상세 카드로 전환합니다.
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  // 이전결과함수: 상세 카드에서 이전 검색결과로 이동합니다.
  const handlePrev = () => {
    setSelectedIndex((prev) => Math.max((prev ?? 0) - 1, 0));
  };

  // 다음결과함수: 상세 카드에서 다음 검색결과로 이동합니다.
  const handleNext = () => {
    setSelectedIndex((prev) => Math.min((prev ?? 0) + 1, filteredResults.length - 1));
  };

  return (
    <S.SearchWrap>
      <S.SearchHero>
        <S.Kicker>수어 검색</S.Kicker>
        <S.Title>필요한 수어 표현을 바로 찾아보세요</S.Title>
        <S.Desc>단어를 검색하고 카드에서 의미, 사용 예시, 관련 분류를 확인할 수 있어요.</S.Desc>

        <S.SearchForm onSubmit={handleSubmit}>
          <S.SearchInput
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="예: 안녕하세요, 병원, 도와주세요"
            aria-label="수어 검색어"
          />
          <S.SearchButton type="submit">검색</S.SearchButton>
        </S.SearchForm>
      </S.SearchHero>

      <S.CategoryList aria-label="수어 검색 카테고리">
        {signWordCategories.map((category) => (
          <S.CategoryButton
            type="button"
            key={category}
            $active={selectedCategory === category}
            onClick={() => handleCategory(category)}
          >
            {category}
          </S.CategoryButton>
        ))}
      </S.CategoryList>

      <S.SearchContent>
        <S.ContentHead>
          <S.ContentTitle>{selectedResult ? "수어 상세" : "검색 결과"}</S.ContentTitle>
          <S.ResultCount>{loading ? "검색 중" : `${filteredResults.length}개`}</S.ResultCount>
        </S.ContentHead>

        {error && <S.SearchNotice>{error}</S.SearchNotice>}

        {loading ? (
          <S.EmptyBox>
            <strong>검색 결과를 불러오는 중이에요.</strong>
            <span>잠시만 기다려주세요.</span>
          </S.EmptyBox>
        ) : selectedResult ? (
          <SearchResultCard
            result={selectedResult}
            currentIndex={selectedIndex}
            totalCount={filteredResults.length}
            onBack={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : filteredResults.length > 0 ? (
          <SearchResultList results={filteredResults} onSelect={handleSelect} />
        ) : (
          <S.EmptyBox>
            <strong>검색 결과가 없어요.</strong>
            <span>다른 단어나 카테고리로 다시 검색해보세요.</span>
          </S.EmptyBox>
        )}
      </S.SearchContent>
    </S.SearchWrap>
  );
};

export default StudySearchComponent;
