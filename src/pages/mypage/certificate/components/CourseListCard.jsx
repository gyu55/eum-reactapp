import React, { useState } from "react";

import S from "../style";

const COLLAPSED_COUNT = 4;
const PAGE_SIZE = 8;

// 자격증 페이지에서만 보여줄 수강중인 강좌 React 더미데이터
const fallbackCourseVideos = [
  {
    eduId: "course-number",
    category: "숫자",
    title: "1부터 1000까지 배워보기 수화 지숫자",
    eduDetail: "초급 과정",
    studyStartAt: "2025.12.31",
    studyEndAt: "2026.12.30",
    progressPercent: 62,
    youtubeUrl: "https://www.youtube.com/watch?v=1JyJwc_Hd8U",
    thumbnail: "https://img.youtube.com/vi/1JyJwc_Hd8U/hqdefault.jpg",
  },
  {
    eduId: "course-finger",
    category: "수어",
    title: "지문자로 한글이름 써보기 내 이름을 수화로",
    eduDetail: "실습 과정",
    studyStartAt: "2025.12.31",
    studyEndAt: "2026.12.30",
    progressPercent: 46,
    youtubeUrl: "https://www.youtube.com/watch?v=1IDTB4KQ-Fk",
    thumbnail: "https://img.youtube.com/vi/1IDTB4KQ-Fk/hqdefault.jpg",
  },
  {
    eduId: "course-alphabet",
    category: "알파벳",
    title: "미국 수어 알파벳 ABC 배우기",
    eduDetail: "실습 과정",
    studyStartAt: "2025.12.31",
    studyEndAt: "2026.12.30",
    progressPercent: 32,
    youtubeUrl: "https://www.youtube.com/watch?v=hRzXnPTW8jY",
    thumbnail: "https://img.youtube.com/vi/hRzXnPTW8jY/hqdefault.jpg",
  },
  {
    eduId: "course-cw",
    category: "교신",
    title: "한국 CW 교신에 자주 나오는 단어",
    eduDetail: "이해 과정",
    studyStartAt: "2025.12.31",
    studyEndAt: "2026.12.30",
    progressPercent: 78,
    youtubeUrl: "https://www.youtube.com/watch?v=fHPC_1MjqD0",
    thumbnail: "https://img.youtube.com/vi/fHPC_1MjqD0/hqdefault.jpg",
  },
];

const getYoutubeThumbnail = (youtubeUrl) => {
  if (!youtubeUrl) {
    return "";
  }

  const match = String(youtubeUrl).match(/(?:v=|\/embed\/|youtu\.be\/)([^&?/]+)/);
  const videoId = match?.[1];

  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const CourseListCard = ({ courseList = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

 // 자격증 페이지 수강중인 강좌는 백엔드 학습 API가 아닌 리액트 더미데이터만 보여준다.
  const displayCourseList = fallbackCourseVideos;

  const needToggleButton = displayCourseList.length > COLLAPSED_COUNT;
  const needPagination = isExpanded && displayCourseList.length > PAGE_SIZE;
  const pageCount = Math.ceil(displayCourseList.length / PAGE_SIZE);

  const visibleCourseList = (() => {
    if (!isExpanded) {
      return displayCourseList.slice(0, COLLAPSED_COUNT);
    }

    if (!needPagination) {
      return displayCourseList;
    }

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return displayCourseList.slice(startIndex, startIndex + PAGE_SIZE);
  })();

  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <S.CourseSection>
      <S.CourseTitle>수강중인 강좌</S.CourseTitle>

      <S.CourseDesc>
        현재 학습 중인 수어 강좌를 확인할 수 있어요.
      </S.CourseDesc>

      <S.CourseCardBox $isExpanded={isExpanded}>
        <S.CourseList>
          {visibleCourseList.map((course, index) => {
            const fallbackVideo = fallbackCourseVideos[index % fallbackCourseVideos.length];
            const youtubeUrl = course.youtubeUrl || fallbackVideo.youtubeUrl;
            const thumbnailUrl =
              course.thumbnailUrl ||
              course.thumbnail ||
              getYoutubeThumbnail(youtubeUrl) ||
              fallbackVideo.thumbnail;

            const courseTitle = course.eduTitle || course.title || fallbackVideo.title;
            const courseLevel = course.eduDetail || course.category || fallbackVideo.eduDetail;
            const startDate = course.studyStartAt || fallbackVideo.studyStartAt;
            const endDate = course.studyEndAt || fallbackVideo.studyEndAt;
            const progressPercent = course.progressPercent ?? fallbackVideo.progressPercent ?? 0;

            return (
              <S.CourseItem key={course.eduId || fallbackVideo.eduId}>
                {/* 오늘의 단어 영상처럼 이미지 클릭 시 유튜브로 이동 */}
                <S.CourseVideoLink
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={thumbnailUrl} alt={courseTitle} />
                  <S.CoursePlayButton>▶</S.CoursePlayButton>
                </S.CourseVideoLink>

                <S.CourseInfo>
                  <S.CourseName title={courseTitle}>
                    {courseTitle}
                  </S.CourseName>

                  <S.CourseLevel>{courseLevel}</S.CourseLevel>

                  <S.CourseDate>
                    <S.CourseDateLine>
                      수강기간: {startDate} ~
                    </S.CourseDateLine>
                    <S.CourseDateEnd>
                      {endDate}
                    </S.CourseDateEnd>
                  </S.CourseDate>

                  <S.CourseProgressBar>
                    <S.CourseProgressFill $percent={progressPercent} />
                  </S.CourseProgressBar>
                </S.CourseInfo>
              </S.CourseItem>
            );
          })}
        </S.CourseList>

        {needToggleButton && (
          <S.CourseMoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더 보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.CourseMoreButton>
        )}

        {needPagination && (
          <S.CoursePaginationArea>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <S.CoursePageButton
                key={page}
                type="button"
                $active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.CoursePageButton>
            ))}
          </S.CoursePaginationArea>
        )}
      </S.CourseCardBox>
    </S.CourseSection>
  );
};

export default CourseListCard;