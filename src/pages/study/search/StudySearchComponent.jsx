import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchResultList from './parts/SearchResultList';
import SearchResultCard from './parts/SearchResultCard';
import { SearchPage as S } from './style';

// 임시데이터
const searchList = [
    {
        id: 1,
        word: "안녕하세요",
        meaning: "Hello · こんにちは",
        category: "인사 표현 · 일상 · 격식",
        desc: "오른쪽 손바닥을 주먹을 쥔 왼 팔등에 내린 후 맞손 모두 손바닥이 바닥을 향하도록 주먹을 쥐고 가슴 앞에 내린다.",
        shortDesc: "오른쪽 손바닥을 주먹을 쥔 왼 팔등에 내린 후 맞손 모두 손바닥이 바닥을 향하도록 주먹을 쥐고 가슴 앞에 내린다.",
        imageLabel: "이미지 슬롯",
        cardImage: "",
        motions: [
        { id: 1, icon: "👊", label: "동작 ①" },
        { id: 2, icon: "✋", label: "동작 ②" },
        { id: 3, icon: "👋", label: "동작 ③" },
        ],
    },
    {
        id: 2,
        word: "안녕하세요 (격식)",
        meaning: "Formal greeting",
        category: "공식 인사 표현",
        desc: "공식적인 자리에서 사용하는 정중한 인사 표현입니다.",
        shortDesc: "공식적인 자리에서 사용하는 정중한 인사 표현",
        imageLabel: "이미지 슬롯",
        cardImage: "",
        motions: [
        { id: 1, icon: "🤝", label: "동작 ①" },
        { id: 2, icon: "✋", label: "동작 ②" },
        { id: 3, icon: "🙂", label: "동작 ③" },
        ],
    },
    {
        id: 3,
        word: "안녕 (반말)",
        meaning: "Casual hello",
        category: "편안한 인사 표현",
        desc: "친한 친구나 아랫사람에게 사용하는 편안한 인사입니다.",
        shortDesc: "친한 친구나 아랫사람에게 사용하는 편안한 인사",
        imageLabel: "이미지 슬롯",
        cardImage: "",
        motions: [
        { id: 1, icon: "👋", label: "동작 ①" },
        { id: 2, icon: "😊", label: "동작 ②" },
        { id: 3, icon: "👐", label: "동작 ③" },
        ],
    },
    ];

    const loadSearchList = async (keyword) => {
    // 백엔드 연결 시 이 부분만 API 호출로 변경
    // const response = await fetch(`/api/study/search?keyword=${keyword}`);
    // const data = await response.json();
    const value = keyword.trim();

    if (!value) {
        return searchList;
    }

    return searchList.filter((item) => item.word.includes(value));
    };

// 검색페이지
const StudySearchComponent = () => {

    const [keyword, setKeyword] = useState("안녕하세요");
    const [searchResult, setSearchResult] = useState(searchList);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const selectedResult = selectedIndex === null ? null : searchResult[selectedIndex];

    const showSearchList = async () => {
        try {
            setLoading(true);
            setError(null);
            setSelectedIndex(null);

            const data = await loadSearchList(keyword);
            setSearchResult(data);
        } catch (error) {
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
