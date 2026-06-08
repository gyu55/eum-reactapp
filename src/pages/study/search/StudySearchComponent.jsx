import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSignWords } from "../apis/SignWordApi";
import { useSignWordSearch } from "../hooks/useSignWordSearch";
import { mapSignWords } from "../mappers/signWordMapper";
import SearchResultCard from "./parts/SearchResultCard";
import SearchResultList from "./parts/SearchResultList";
import * as S from "./style";

// 검색 화면 문구: 화면에서 반복 사용되는 텍스트를 한 곳에서 관리
const TEXT = {
  all: "전체",
  title: "필요한 수어 표현을 바로 찾아보세요",
  placeholder: "예: 안녕하세요, 병원, 도와주세요",
  inputLabel: "수어 검색어",
  submitLabel: "검색",
  categoryLabel: "수어 검색 카테고리",
  serverError: "검색 서버에 연결하기 어려워요. 잠시 후 다시 시도해주세요.",
  detailTitle: "수어 상세",
  resultTitle: "검색 결과",
  searching: "검색 중",
  countUnit: "개",
  loadingTitle: "검색 결과를 불러오는 중이에요.",
  loadingDesc: "잠시만 기다려주세요.",
  emptyTitle: "검색 결과가 없어요.",
  emptyDesc: "다른 단어나 카테고리로 다시 검색해보세요.",
};

const StudySearchComponent = () => {
  const location = useLocation();
  const initialKeyword = location.state?.keyword || new URLSearchParams(location.search).get("keyword") || "";
  const initialKeywordRef = useRef(initialKeyword);
  const categoryScrollRef = useRef(null);
  const categoryDragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });
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
  const [selectedCategory, setSelectedCategory] = useState(TEXT.all);

  // API 결과에 실제 존재하는 분류만 카테고리로 노출
  const categories = useMemo(
    () => [
      TEXT.all,
      ...new Set(
        results
          .map((item) => item.category)
          .filter((category) => category && category !== TEXT.all)
      ),
    ],
    [results]
  );

  // 선택한 카테고리에 맞는 검색 결과만 화면에 표시
  const filteredResults = useMemo(() => {
    return results.filter((item) => selectedCategory === TEXT.all || item.category === selectedCategory);
  }, [results, selectedCategory]);

  const selectedResult = selectedIndex !== null ? filteredResults[selectedIndex] : null;

  // 검색어로 수어 OpenAPI 데이터를 조회하고 화면용 데이터로 변환
  const searchSignWords = useCallback(
    async (searchKeyword) => {
      setLoading(true);
      setError(null);
      setSelectedIndex(null);
      setSelectedCategory(TEXT.all);

      try {
        const data = await fetchSignWords(searchKeyword);
        setResults(mapSignWords(data));
      } catch {
        setResults([]);
        setError(TEXT.serverError);
      } finally {
        setLoading(false);
      }
    },
    [setError, setLoading, setResults, setSelectedIndex]
  );

  useEffect(() => {
    // 첫 진입 시 URL이나 이전 화면에서 전달된 검색어로 결과를 준비
    searchSignWords(initialKeywordRef.current);
  }, [searchSignWords]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSignWords(keyword);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setSelectedIndex(null);
  };

  // 카테고리 목록을 마우스로 드래그해서 가로 이동
  const handleCategoryMouseDown = (event) => {
    const list = categoryScrollRef.current;
    if (!list) return;

    categoryDragRef.current = {
      active: true,
      startX: event.pageX - list.offsetLeft,
      scrollLeft: list.scrollLeft,
    };
  };

  const handleCategoryMouseMove = (event) => {
    const list = categoryScrollRef.current;
    const drag = categoryDragRef.current;
    if (!list || !drag.active) return;

    event.preventDefault();
    const currentX = event.pageX - list.offsetLeft;
    list.scrollLeft = drag.scrollLeft - (currentX - drag.startX);
  };

  const handleCategoryMouseEnd = () => {
    categoryDragRef.current.active = false;
  };

  const handleCategoryArrow = (direction) => {
    const list = categoryScrollRef.current;
    if (!list) return;

    list.scrollBy({ left: direction * 260, behavior: "smooth" });
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleNavigate = (direction) => {
    setSelectedIndex((prev) => {
      const nextIndex = (prev ?? 0) + direction;
      return Math.min(Math.max(nextIndex, 0), filteredResults.length - 1);
    });
  };

  return (
    <S.SearchWrap>
      <S.SearchHero>
        <S.Title>{TEXT.title}</S.Title>

        <S.SearchForm onSubmit={handleSubmit}>
          <S.SearchIcon aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </S.SearchIcon>
          <S.SearchInput
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder={TEXT.placeholder}
            aria-label={TEXT.inputLabel}
          />
          <S.SearchButton type="submit" aria-label={TEXT.submitLabel}>
            검색
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchHero>

      <S.CategoryShell>
        <S.CategoryArrowButton type="button" aria-label="previous categories" onClick={() => handleCategoryArrow(-1)}>
          &lt;
        </S.CategoryArrowButton>
        <S.CategoryList
          ref={categoryScrollRef}
          aria-label={TEXT.categoryLabel}
          onMouseDown={handleCategoryMouseDown}
          onMouseMove={handleCategoryMouseMove}
          onMouseUp={handleCategoryMouseEnd}
          onMouseLeave={handleCategoryMouseEnd}
        >
          {categories.map((category) => (
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
        <S.CategoryArrowButton type="button" aria-label="next categories" onClick={() => handleCategoryArrow(1)}>
          &gt;
        </S.CategoryArrowButton>
      </S.CategoryShell>

      {/* 검색 결과 목록과 선택한 수어 상세를 같은 영역에서 전환 */}
      <S.SearchContent>
        <S.ContentHead>
          <S.ContentTitle>{selectedResult ? TEXT.detailTitle : TEXT.resultTitle}</S.ContentTitle>
          <S.ResultCount>{loading ? TEXT.searching : filteredResults.length + TEXT.countUnit}</S.ResultCount>
        </S.ContentHead>

        {error && <S.SearchNotice>{error}</S.SearchNotice>}

        {loading ? (
          <S.EmptyBox>
            <strong>{TEXT.loadingTitle}</strong>
            <span>{TEXT.loadingDesc}</span>
          </S.EmptyBox>
        ) : selectedResult ? (
          <SearchResultCard
            result={selectedResult}
            currentIndex={selectedIndex}
            totalCount={filteredResults.length}
            onBack={() => setSelectedIndex(null)}
            onPrev={() => handleNavigate(-1)}
            onNext={() => handleNavigate(1)}
          />
        ) : filteredResults.length > 0 ? (
          <SearchResultList results={filteredResults} onSelect={handleSelect} />
        ) : (
          <S.EmptyBox>
            <strong>{TEXT.emptyTitle}</strong>
            <span>{TEXT.emptyDesc}</span>
          </S.EmptyBox>
        )}
      </S.SearchContent>
    </S.SearchWrap>
  );
};

export default StudySearchComponent;
