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

const chapterQuestionPathMap = {
  1: "/study/chapter/sign-history/questions/1",
  2: "/study/chapter/sos/questions/1",
  3: "/study/chapter/morse/questions/1",
};

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
    return `${hour}시간${minute > 0 ? ` ${minute}분` : ""}`;
  }

  return `${minute}분${second > 0 ? ` ${second}초` : ""}`;
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

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return String(date).includes("T") ? String(date).split("T")[0] : String(date).split(" ")[0];
};

const sortStatusListByRecent = (list) => {
  return [...list].sort((a, b) => {
    const aTime = new Date(a.recentStudyAt || 0).getTime();
    const bTime = new Date(b.recentStudyAt || 0).getTime();

    return bTime - aTime;
  });
};

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

  // 마이페이지 공통 데이터와 학습 페이지 데이터를 함께 조회합니다.
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

  // React 더미를 붙이지 않고, 백엔드에서 내려온 회원별 학습 데이터만 사용합니다.
  const statusList = sortStatusListByRecent(originStatusList);
  const resultList = sortResultListByRecent(originResultList);

  const needStatusToggleButton = statusList.length > COLLAPSED_COUNT;
  const needResultToggleButton = resultList.length > COLLAPSED_COUNT;
  const needStatusPagination = isStatusExpanded && statusList.length >= PAGE_SIZE;
  const needResultPagination = isResultExpanded && resultList.length >= PAGE_SIZE;

  const statusPageCount = Math.ceil(statusList.length / PAGE_SIZE);
  const resultPageCount = Math.ceil(resultList.length / PAGE_SIZE);

  const visibleStatusList = getVisibleList(statusList, isStatusExpanded, statusPage);
  const visibleResultList = getVisibleList(resultList, isResultExpanded, resultPage);

  // 학습현황 제목 클릭 시 이어서 학습할 수 있는 화면으로 이동합니다.
  const handleMoveLearning = (learning) => {
    if (learning.learningType === "QUIZ") {
      navigate(chapterQuestionPathMap[learning.eduId] || "/study/chapter");
      return;
    }

    navigate(`/study/learn/quiz/greeting/questions/1?eduId=${learning.eduId}`, {
      state: {
        eduId: learning.eduId,
        lessonTitle: learning.eduTitle,
      },
    });
  };

  const handleStatusToggleClick = () => {
    setIsStatusExpanded((prev) => !prev);
    setStatusPage(1);
  };

  const handleResultToggleClick = () => {
    setIsResultExpanded((prev) => !prev);
    setResultPage(1);
  };

  return (
    <>
      <S.LearningLayout>
        <S.LearningLeftArea>
          <ProfileCard
            profile={myPageData.profile}
            onLevelClick={() => setIsLevelModalOpen(true)}
          />

          <S.LearningSection>
            <S.LearningTitle>학습현황</S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningHeader>
                <S.LearningHeaderText>제목</S.LearningHeaderText>
                <S.LearningHeaderText>학습일</S.LearningHeaderText>
                <S.LearningHeaderText>진행률</S.LearningHeaderText>
                <S.LearningHeaderText>최근 학습 시간</S.LearningHeaderText>
              </S.LearningHeader>

              {visibleStatusList.map((learning) => (
                <S.LearningRow key={`${learning.learningType || "LEARN"}-${learning.eduId}-${learning.recentStudyAt}`}>
                  <S.LearningTitleButton
                    type="button"
                    onClick={() => handleMoveLearning(learning)}
                  >
                    {learning.eduTitle}
                  </S.LearningTitleButton>

                  <S.LearningText>{formatDate(learning.recentStudyAt)}</S.LearningText>
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
                  {isStatusExpanded ? "접기" : "더보기"}{" "}
                  <span>{isStatusExpanded ? "↑" : "↓"}</span>
                </S.LearningMoreButton>
              )}
            </S.LearningCardBox>
          </S.LearningSection>

          <S.LearningSection>
            <S.LearningTitle>학습결과</S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningResultHeader>
                <S.LearningHeaderText>제목</S.LearningHeaderText>
                <S.LearningHeaderText>완료일</S.LearningHeaderText>
                <S.LearningHeaderText>완료 단어</S.LearningHeaderText>
                <S.LearningHeaderText>학습 시간</S.LearningHeaderText>
                <S.LearningHeaderText>완료율</S.LearningHeaderText>
              </S.LearningResultHeader>

              {visibleResultList.map((result) => (
                <S.LearningResultRow key={`${result.resultType || "RESULT"}-${result.quizAttemptId}-${result.quizAttemptCreateAt || result.completedAt}`}>
                  <S.LearningText>{result.quizTitle}</S.LearningText>
                  <S.LearningText>{formatDate(result.completedAt || result.quizAttemptCreateAt || result.createdAt)}</S.LearningText>
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
                  {isResultExpanded ? "접기" : "더보기"}{" "}
                  <span>{isResultExpanded ? "↑" : "↓"}</span>
                </S.LearningMoreButton>
              )}
            </S.LearningCardBox>
          </S.LearningSection>
        </S.LearningLeftArea>

        <S.LearningRightArea>
          <StudySummaryCard summary={learningData.summary} />

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