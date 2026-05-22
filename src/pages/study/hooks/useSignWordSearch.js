// 수어 검색 상태 훅: 검색어, 결과, 선택한 카드 상태관리
import { useState } from "react";

export const useSignWordSearch = (initialKeyword = "") => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return {
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
  };
};
