// 학습 상태 훅 담당: 백엔드 학습 목록과 진행도를 화면 데이터로 변환
import { useEffect, useState } from "react";
import { fetchLearnCompletedWordCount, fetchLearnList, fetchLearnTotalWordCount } from "../apis/LearnApi";
import { learnHomeMock } from "../learn/data/learnMock";
import { mergeLearnListToHome } from "../mappers/learnMapper";
import { useStudyUser } from "./useStudyUser";

const createLearnInitialData = () => ({
  ...learnHomeMock,
  roadmaps: {
    ...learnHomeMock.roadmaps,
    sign: {
      ...learnHomeMock.roadmaps.sign,
      chapter: {
        ...learnHomeMock.roadmaps.sign.chapter,
        title: "수어 학습",
        progressDesc: "학습 데이터를 불러오면 진행도가 표시돼요.",
        percent: 0,
        exp: 0,
      },
      lessons: [],
    },
  },
});

export const useLearn = () => {
  const { userId, isGuest } = useStudyUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(() => createLearnInitialData());

  // 학습 목록 조회: 서버 데이터가 성공했을 때만 수어 로드맵에 반영
  useEffect(() => {
    let ignore = false;

    const loadLearn = async () => {
      setLoading(true);
      setError(null);

      try {
        const learnList = await fetchLearnList();

        if (!Array.isArray(learnList) || learnList.length === 0) {
          if (!ignore) {
            setData(createLearnInitialData());
          }

          return;
        }

        const progressList = await Promise.all(
          learnList.map(async (learn) => {
            const totalCount = await fetchLearnTotalWordCount(learn.id);
            const completedCount = isGuest || !userId
              ? 0
              : await fetchLearnCompletedWordCount({ userId, learnId: learn.id });

            return {
              learnId: learn.id,
              totalCount,
              completedCount,
            };
          })
        );

        if (ignore) return;

        setData(mergeLearnListToHome(createLearnInitialData(), learnList, progressList));
      } catch {
        if (ignore) return;

        setData(createLearnInitialData());
        setError("학습 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadLearn();

    return () => {
      ignore = true;
    };
  }, [isGuest, userId]);

  return {
    loading,
    error,
    data,
  };
};
