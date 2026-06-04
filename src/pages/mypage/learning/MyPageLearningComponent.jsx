import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";
import StudyStatusCard from "../components/StudyStatusCard";
import AttendanceCard from "../components/AttendanceCard";
import QuickMenuCard from "../components/QuickMenuCard";
import LevelGuideModal from "../components/LevelGuideModal";

import StudySummaryCard from "./components/StudySummaryCard";

import S from "./style";

const DEFAULT_VISIBLE_COUNT = 4;

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

const MyPageLearningComponent = () => {
  const navigate = useNavigate();

  const [myPageData, setMyPageData] = useState(null);
  const [learningData, setLearningData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  // 마이페이지 공통 데이터와 학습 페이지 데이터를 조회
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

  const statusList = learningData.statusList || [];
  const resultList = learningData.resultList || [];

  const visibleStatusList = isStatusExpanded
    ? statusList
    : statusList.slice(0, DEFAULT_VISIBLE_COUNT);

  const visibleResultList = isResultExpanded
    ? resultList
    : resultList.slice(0, DEFAULT_VISIBLE_COUNT);

  const needStatusToggleButton = statusList.length > DEFAULT_VISIBLE_COUNT;
  const needResultToggleButton = resultList.length > DEFAULT_VISIBLE_COUNT;

  // 학습 제목 클릭 시 이어 학습 페이지로 이동
  const handleMoveLearning = (learning) => {
    navigate(`/study/learn/quiz/greeting/questions/1?eduId=${learning.eduId}`, {
      state: {
        eduId: learning.eduId,
        lessonTitle: learning.eduTitle,
      },
    });
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

              {/* 학습 현황 목록 */}
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

              {needStatusToggleButton && (
                <S.LearningMoreButton
                  type="button"
                  onClick={() => setIsStatusExpanded((prev) => !prev)}
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

              {/* 학습 결과 목록 */}
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

              {needResultToggleButton && (
                <S.LearningMoreButton
                  type="button"
                  onClick={() => setIsResultExpanded((prev) => !prev)}
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