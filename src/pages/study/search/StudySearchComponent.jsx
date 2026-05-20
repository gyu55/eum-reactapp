import React, { useEffect, useState } from "react";
import SearchResultList from "./parts/SearchResultList";
import SearchResultCard from "./parts/SearchResultCard";
import { SearchPage as S } from "./style";
import { fetchSignWords } from "./apis/SignWordApi";

// React 변환 부분
const convertSignWordsToSearchResults = (signWords) => {
  return signWords.map((signWord, index) => ({
    id: signWord.id || index + 1,
    word: signWord.signWordTitle,
    meaning: signWord.signWordCategory || "일상생활수어",
    category: signWord.signWordCategory || "일상생활수어",
    desc: signWord.signWordDescription || "수어 설명이 준비되지 않았어요.",
    shortDesc: signWord.signWordDescription || "수어 설명이 준비되지 않았어요.",
    imageLabel: "이미지 없음",
    cardImage: signWord.signWordThumbnailUrl,
    videoUrl: signWord.signWordVideoUrl,
    sourceUrl: signWord.signWordSourceUrl,
    motions: [
      { id: 1, icon: "✋", label: "수어 동작" },
      { id: 2, icon: "▶", label: "영상 확인" },
      { id: 3, icon: "📘", label: "원문 보기" },
    ],
  }));
}

// 검색페이지
const StudySearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedResult = selectedIndex === null ? null : searchResult[selectedIndex];

  const showSearchList = async () => {
    console.log("검색 버튼 실행", keyword);

    try {
      setLoading(true);
      setError(null);
      setSelectedIndex(null);

      const data = await fetchSignWords(keyword);
      console.log("검색 결과 데이터", data);


      setSearchResult(convertSignWordsToSearchResults(data));
    } catch (error) {
      console.error("수어 검색 오류", error);
      setError("검색 결과를 불러오지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showSearchList();
  }, []);

  const handlePrev = () => {
    setSelectedIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => Math.min(prev + 1, searchResult.length - 1));
  };

  return (
    <S.Wrapper>
      {selectedResult ? (
        <SearchResultCard
          result={selectedResult}
          currentIndex={selectedIndex}
          totalCount={searchResult.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onBack={() => setSelectedIndex(null)}
        />
      ) : (
        <SearchResultList
          keyword={keyword}
          results={searchResult}
          loading={loading}
          error={error}
          onChangeKeyword={setKeyword}
          onSearch={showSearchList}
          onSelectCard={setSelectedIndex}
        />
      )}
    </S.Wrapper>
  );
};

export default StudySearchComponent;