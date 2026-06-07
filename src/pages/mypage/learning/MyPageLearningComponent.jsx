import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";
import StudyStatusCard from "../components/StudyStatusCard";
import AttendanceCard from "../components/AttendanceCard";
import QuickMenuCard from "../components/QuickMenuCard";
import LevelGuideModal from "../components/LevelGuideModal";

import StudySummaryCard from "./components/StudySummaryCard";

import S from "./style";

const COLLAPSED_COUNT = 4;
const PAGE_SIZE = 8;

// 백엔드 학습현황이 비어 있을 때만 보여줄 React 더미데이터입니다.
const fallbackStatusList = [
  {
    eduId: "dummy-braille-a-f",
    eduTitle: "점자 A~F",
    progress: 30,
    recentStudyAt: "2026-06-06T10:00:00",
  },
  {
    eduId: "dummy-morse-basic",
    eduTitle: "모스부호 기초",
    progress: 90,
    recentStudyAt: "2026-06-04T10:00:00",
  },
  {
    eduId: "dummy-life-sign",
    eduTitle: "실생활 수어",
    progress: 100,
    recentStudyAt: "2026-05-31T10:00:00",
  },
];

// 백엔드 학습결과가 비어 있을 때만 보여줄 React 더미데이터입니다.
const fallbackResultList = [
  {
    quizAttemptId: "dummy-braille-read",
    quizTitle: "점자 읽기",
    correctCount: 8,
    totalCount: 10,
    spentTime: 105,
    accuracy: 80,
    completedAt: "2026-06-06T11:00:00",
  },
  {
    quizAttemptId: "dummy-life-morse",
    quizTitle: "실생활 모스부호",
    correctCount: 1,
    totalCount: 10,
    spentTime: 300,
    accuracy: 10,
    completedAt: "2026-06-04T11:00:00",
  },
];

const formatPercent = (value) => `${value || 0}%`;

const formatScore = (correctCount, totalCount) => `${correctCount || 0}/${totalCount || 0}`;

const formatTime = (seconds) => {
  const value = Number(seconds || 0);

  if (value < 60) {
    return `${value}초`;
  }

  const hour = Math.floor(value / 3600);
  const minute = Math.floor((value % 3600) / 60);
  const second = value % 60;

  if (hour > 0) {
    return `${hour}시간${minute > 0 ? `${minute}분` : ""}`;
  }

  return `${minute}분${second > 0 ? `${second}초` : ""}`;
};

const formatRecentTime = (date) => {
  if (!date) {
    return "-";
  }

  const targetDate = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - targetDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return "방금 전";
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;

  return String(date).includes("T") ? String(date).split("T")[0] : String(date).split(" ")[0];
};

// 최신 학습한 항목이 위로 오도록 정렬합니다.
const sortStatusListByRecent = (list) => {
  return [...list].sort((a, b) => {
    const aTime = new Date(a.recentStudyAt || 0).getTime();
    const bTime = new Date(b.recentStudyAt || 0).getTime();

    return bTime - aTime;
  });
};

// 최근 완료한 결과가 위로 오도록 정렬합니다.
const sortResultListByRecent = (list) => {
  return [...list].sort((a, b) => {
    const aDate = a.completedAt || a.quizAttemptCreateAt || a.createdAt || 0;
    const bDate = b.completedAt || b.quizAttemptCreateAt || b.createdAt || 0;

    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
};

const getVisibleList = (list, isExpanded, currentPage) => {
  if (!isExpanded) {
    return list.slice(0, COLLAPSED_COUNT);
  }

  if (list.length < PAGE_SIZE) {
    return list;
  }

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  return list.slice(startIndex, startIndex + PAGE_SIZE);
};

const MyPageLearningComponent = () => {
  const navigate = useNavigate();

  const [myPageData, setMyPageData] = useState(null);
  const [learningData, setLearningData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);
  const [isResultExpanded, setIsResultExpanded] = useState(false);
  const [statusPage, setStatusPage] = useState(1);
  const [resultPage, setResultPage] = useState(1);

  // 마이페이지 공통 데이터와 학습 페이지 데이터를 조회합니다.
  useEffect(() => {
    const getLearningPage = async () => {
      try {
        const [myPageResponse, learningResponse] = await Promise.all([
          fetch("http://localhost:10000/private/api/mypage", {
            method: "GET",
            credentials: "include",
          }),
          fetch("http://localhost:10000/private/api/mypage/learning", {
            method: "GET",
            credentials: "include",
          }),
        ]);

        const myPageResult = await myPageResponse.json();
        const learningResult = await learningResponse.json();

        if (!myPageResult.success) {
          alert(myPageResult.message);
          return;
        }

        if (!learningResult.success) {
          alert(learningResult.message);
          return;
        }

        setMyPageData(myPageResult.data);
        setLearningData(learningResult.data);
      } catch (error) {
        console.error(error);
        alert("학습 정보를 불러오지 못했습니다.");
      }
    };

    getLearningPage();
  }, []);

  if (!myPageData || !learningData) {
    return null;
  }

  const originStatusList = learningData.statusList || [];
  const originResultList = learningData.resultList || [];

  const statusList = sortStatusListByRecent(
    originStatusList.length > 0 ? originStatusList : fallbackStatusList
  );

  const resultList = sortResultListByRecent(
    originResultList.length > 0 ? originResultList : fallbackResultList
  );

  const needStatusToggleButton = statusList.length > COLLAPSED_COUNT;
  const needResultToggleButton = resultList.length > COLLAPSED_COUNT;
  const needStatusPagination = isStatusExpanded && statusList.length >= PAGE_SIZE;
  const needResultPagination = isResultExpanded && resultList.length >= PAGE_SIZE;

  const statusPageCount = Math.ceil(statusList.length / PAGE_SIZE);
  const resultPageCount = Math.ceil(resultList.length / PAGE_SIZE);

  const visibleStatusList = getVisibleList(statusList, isStatusExpanded, statusPage);
  const visibleResultList = getVisibleList(resultList, isResultExpanded, resultPage);

  // 학습 제목 클릭 시 이어 학습 페이지로 이동합니다.
  const handleMoveLearning = (learning) => {
    navigate(`/study/learn/quiz/greeting/questions/1?eduId=${learning.eduId}`, {
      state: {
        eduId: learning.eduId,
        lessonTitle: learning.eduTitle,
      },
    });
  };

  // 학습현황 더보기 / 접기
  const handleStatusToggleClick = () => {
    setIsStatusExpanded((prev) => !prev);
    setStatusPage(1);
  };

  // 학습결과 더보기 / 접기
  const handleResultToggleClick = () => {
    setIsResultExpanded((prev) => !prev);
    setResultPage(1);
  };

  return (
    <>
      <S.LearningLayout>
        {/* 왼쪽 영역 */}
        <S.LearningLeftArea>
          <ProfileCard
            profile={myPageData.profile}
            onLevelClick={() => setIsLevelModalOpen(true)}
          />

          {/* 학습현황 */}
          <S.LearningSection>
            <S.LearningTitle>학습현황</S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningHeader>
                <S.LearningHeaderText>제목</S.LearningHeaderText>
                <S.LearningHeaderText>진행도</S.LearningHeaderText>
                <S.LearningHeaderText>최근 학습 시간</S.LearningHeaderText>
              </S.LearningHeader>

              {visibleStatusList.map((learning) => (
                <S.LearningRow key={learning.eduId}>
                  <S.LearningTitleButton
                    type="button"
                    onClick={() => handleMoveLearning(learning)}
                  >
                    {learning.eduTitle}
                  </S.LearningTitleButton>

                  <S.LearningText>{formatPercent(learning.progress)}</S.LearningText>
                  <S.LearningText>{formatRecentTime(learning.recentStudyAt)}</S.LearningText>
                </S.LearningRow>
              ))}

              {statusList.length === 0 && (
                <S.EmptyText>진행 중인 학습이 없습니다.</S.EmptyText>
              )}

              {needStatusPagination && (
                <S.LearningPaginationArea>
                  {Array.from({ length: statusPageCount }, (_, index) => index + 1).map((page) => (
                    <S.LearningPageButton
                      key={page}
                      type="button"
                      $active={page === statusPage}
                      onClick={() => setStatusPage(page)}
                    >
                      {page}
                    </S.LearningPageButton>
                  ))}
                </S.LearningPaginationArea>
              )}

              {needStatusToggleButton && (
                <S.LearningMoreButton
                  type="button"
                  onClick={handleStatusToggleClick}
                >
                  {isStatusExpanded ? "접기" : "더 보기"}{" "}
                  <span>{isStatusExpanded ? "↑" : "→"}</span>
                </S.LearningMoreButton>
              )}
            </S.LearningCardBox>
          </S.LearningSection>

          {/* 학습결과 */}
          <S.LearningSection>
            <S.LearningTitle>학습결과</S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningResultHeader>
                <S.LearningHeaderText>제목</S.LearningHeaderText>
                <S.LearningHeaderText>정답 수</S.LearningHeaderText>
                <S.LearningHeaderText>소요시간</S.LearningHeaderText>
                <S.LearningHeaderText>정답률</S.LearningHeaderText>
              </S.LearningResultHeader>

              {visibleResultList.map((result) => (
                <S.LearningResultRow key={result.quizAttemptId}>
                  <S.LearningText>{result.quizTitle}</S.LearningText>
                  <S.LearningText>{formatScore(result.correctCount, result.totalCount)}</S.LearningText>
                  <S.LearningText>{formatTime(result.spentTime)}</S.LearningText>
                  <S.LearningText>{formatPercent(result.accuracy)}</S.LearningText>
                </S.LearningResultRow>
              ))}

              {resultList.length === 0 && (
                <S.EmptyText>완료한 학습 결과가 없습니다.</S.EmptyText>
              )}

              {needResultPagination && (
                <S.LearningPaginationArea>
                  {Array.from({ length: resultPageCount }, (_, index) => index + 1).map((page) => (
                    <S.LearningPageButton
                      key={page}
                      type="button"
                      $active={page === resultPage}
                      onClick={() => setResultPage(page)}
                    >
                      {page}
                    </S.LearningPageButton>
                  ))}
                </S.LearningPaginationArea>
              )}

              {needResultToggleButton && (
                <S.LearningMoreButton
                  type="button"
                  onClick={handleResultToggleClick}
                >
                  {isResultExpanded ? "접기" : "더 보기"}{" "}
                  <span>{isResultExpanded ? "↑" : "→"}</span>
                </S.LearningMoreButton>
              )}
            </S.LearningCardBox>
          </S.LearningSection>
        </S.LearningLeftArea>

        {/* 오른쪽 영역 */}
        <S.LearningRightArea>
          <StudySummaryCard summary={learningData.summary} />

          {/* 기존 마이페이지 메인 학습 현황 데이터 표시 */}
          <StudyStatusCard studyStatusList={myPageData.studyStatusList || []} />

          <AttendanceCard attendance={myPageData.attendance} />

          <QuickMenuCard />
        </S.LearningRightArea>
      </S.LearningLayout>

      {isLevelModalOpen && (
        <LevelGuideModal onClose={() => setIsLevelModalOpen(false)} />
      )}
    </>
  );
};

export default MyPageLearningComponent;