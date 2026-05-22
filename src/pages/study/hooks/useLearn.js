// 학습 상태 훅: 로드맵과 퀘스트 화면 데이터 관리
import { useEffect, useState } from "react";
import { fetchLearnList } from "../apis/LearnApi";
import { learnHomeMock } from "../learn/data/learnMock";
import { mergeLearnListToHome } from "../mappers/learnMapper";

export const useLearn = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(learnHomeMock);

  // 학습목록조회함수: 백엔드 학습 목록을 로드맵 반영, 실패 시 임시데이터 -> 유지
  useEffect(() => {
    let ignore = false;

    const loadLearn = async () => {
      setLoading(true);
      setError(null);

      try {
        const learnList = await fetchLearnList();

        if (ignore)
          return;

        setData(mergeLearnListToHome(learnHomeMock, learnList));
      } catch {
        if (ignore)
          return;

        setData(learnHomeMock);
        setError("학습 서버 연결이 어려워 임시데이터를 보여주고 있어요.");
      } finally {

        if (!ignore)
          setLoading(false);
      }
    };

    loadLearn();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    loading,
    error,
    data,
  };
};
