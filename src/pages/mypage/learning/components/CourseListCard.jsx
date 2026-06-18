import React, { useState } from "react";

import S from "../style";

const COLLAPSED_COUNT = 4;
const PAGE_SIZE = 8;

// 학습 페이지에서 보여줄 수강중인 강좌 더미데이터
const fallbackCourseVideos = [
  {
    eduId: "course-sign-basic",
    category: "수어",
    title: "수어 기초",
    eduDetail: "기초 과정",
    studyStartAt: "2026.06.05",
    studyEndAt: "2027.06.05",
    progressPercent: 20,
    youtubeUrl: "https://www.youtube.com/watch?v=1IDTB4KQ-Fk",
    thumbnail: "https://img.youtube.com/vi/1IDTB4KQ-Fk/hqdefault.jpg",
  },
  {
    eduId: "course-sign-middle",
    category: "수어",
    title: "수어 중급",
    eduDetail: "중급 과정",
    studyStartAt: "2026.06.05",
    studyEndAt: "2027.06.05",
    progressPercent: 40,
    youtubeUrl: "https://www.youtube.com/watch?v=1JyJwc_Hd8U",
    thumbnail: "https://img.youtube.com/vi/1JyJwc_Hd8U/hqdefault.jpg",
  },
  {
    eduId: "course-morse-basic",
    category: "수신호",
    title: "모스부호 기초",
    eduDetail: "기초 과정",
    studyStartAt: "2026.06.05",
    studyEndAt: "2027.06.05",
    progressPercent: 30,
    youtubeUrl: "https://www.youtube.com/watch?v=fHPC_1MjqD0",
    thumbnail: "https://img.youtube.com/vi/fHPC_1MjqD0/hqdefault.jpg",
  },
  {
    eduId: "course-braille-basic",
    category: "수신호",
    title: "점자 A~F",
    eduDetail: "기초 과정",
    studyStartAt: "2026.06.05",
    studyEndAt: "2027.06.05",
    progressPercent: 10,
    youtubeUrl: "https://www.youtube.com/watch?v=hRzXnPTW8jY",
    thumbnail: "https://img.youtube.com/vi/hRzXnPTW8jY/hqdefault.jpg",
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

  // 지금은 백엔드 학습 API가 아닌 리액트 더미데이터만 보여준다.
  const displayCourseList = courseList.length > 0 ? courseList : fallbackCourseVideos;

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