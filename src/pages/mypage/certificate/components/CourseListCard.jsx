import React, { useState } from "react";

import S from "../style";

const fallbackCourseVideos = [
  {
    eduId: "fallback-1",
    category: "숫자",
    title: "1부터 1000까지 배워보기 수화 지숫자",
    eduDetail: "초급 과정",
    studyPeriod: "2025.12.31 ~ 2026.12.30",
    progressPercent: 62,
    thumbnail: "https://img.youtube.com/vi/1JyJwc_Hd8U/hqdefault.jpg",
  },
  {
    eduId: "fallback-2",
    category: "수어",
    title: "지문자로 한글이름 써보기 내 이름을 수화로",
    eduDetail: "중급 과정",
    studyPeriod: "2025.12.31 ~ 2026.12.30",
    progressPercent: 46,
    thumbnail: "https://img.youtube.com/vi/1IDTB4KQ-Fk/hqdefault.jpg",
  },
  {
    eduId: "fallback-3",
    category: "알파벳",
    title: "미국 수어 알파벳 ABC 배우기",
    eduDetail: "실습 과정",
    studyPeriod: "2025.12.31 ~ 2026.12.30",
    progressPercent: 32,
    thumbnail: "https://img.youtube.com/vi/hRzXnPTW8jY/hqdefault.jpg",
  },
  {
    eduId: "fallback-4",
    category: "교신",
    title: "한국 CW 교신에 자주 나오는 단어",
    eduDetail: "이해 과정",
    studyPeriod: "2025.12.31 ~ 2026.12.30",
    progressPercent: 78,
    thumbnail: "https://img.youtube.com/vi/fHPC_1MjqD0/hqdefault.jpg",
  },
];

const DEFAULT_VISIBLE_COUNT = 4;

const getYoutubeThumbnail = (youtubeUrl) => {
  if (!youtubeUrl) {
    return "";
  }

  const match = String(youtubeUrl).match(/(?:v=|\/embed\/|youtu\.be\/)([^&?/]+)/);
  const videoId = match?.[1];

  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const CourseListCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayCourseList = fallbackCourseVideos;
  const needToggleButton = displayCourseList.length > DEFAULT_VISIBLE_COUNT;
  const visibleCourseList = isExpanded
    ? displayCourseList
    : displayCourseList.slice(0, DEFAULT_VISIBLE_COUNT);

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
            const thumbnailUrl =
              course.thumbnailUrl ||
              course.thumbnail ||
              getYoutubeThumbnail(course.youtubeUrl) ||
              fallbackVideo?.thumbnail ||
              "";

            const courseTitle = course.eduTitle || course.title || fallbackVideo.title;
            const courseLevel = course.eduDetail || course.category || fallbackVideo.eduDetail || "수어 학습";
            const studyPeriod = course.studyPeriod || fallbackVideo.studyPeriod || "-";
            const [startDate, endDate] = studyPeriod.split(" ~ ");

            return (
              <S.CourseItem key={course.eduId || fallbackVideo.eduId}>
                <S.CourseImageBox>
                  {thumbnailUrl && (
                    <img src={thumbnailUrl} alt={courseTitle} />
                  )}
                </S.CourseImageBox>

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
                      {endDate || ""}
                    </S.CourseDateEnd>
                  </S.CourseDate>

                  <S.CourseProgressBar>
                    <S.CourseProgressFill
                      $percent={course.progressPercent || fallbackVideo.progressPercent || 0}
                    />
                  </S.CourseProgressBar>
                </S.CourseInfo>
              </S.CourseItem>
            );
          })}
        </S.CourseList>

        {needToggleButton && (
          <S.CourseMoreButton
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "접기" : "더 보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.CourseMoreButton>
        )}
      </S.CourseCardBox>
    </S.CourseSection>
  );
};

export default CourseListCard;