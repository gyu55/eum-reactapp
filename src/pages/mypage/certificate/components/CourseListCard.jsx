import React from "react";

import S from "../style";

const courseList = [
  {
    title: "수어 기초 회화",
    level: "초급 과정",
    startDate: "2025.12.31",
    endDate: "2026.12.30",
    progress: 62,
    image: "",
  },
  {
    title: "표현 중심의 수어 문법 학습",
    level: "중급 과정",
    startDate: "2025.12.31",
    endDate: "2026.12.30",
    progress: 46,
    image: "",
  },
  {
    title: "실전 중심의 수어 통역 연습",
    level: "실습 과정",
    startDate: "2025.12.31",
    endDate: "2026.12.30",
    progress: 32,
    image: "",
  },
  {
    title: "농인 문화와 소통 이해",
    level: "이해 과정",
    startDate: "2025.12.31",
    endDate: "2026.12.30",
    progress: 78,
    image: "",
  },
];

const CourseListCard = () => {
  return (
    <S.CourseSection>
      {/* 섹션 제목 */}
      <S.CourseTitle>수강중인 강좌</S.CourseTitle>

      {/* 섹션 설명 */}
      <S.CourseDesc>
        현재 학습 중인 수어 강좌를 확인할 수 있어요.
      </S.CourseDesc>

      {/* 수강중인 강좌 카드 */}
      <S.CourseCardBox>
        <S.CourseList>
          {/* 수강 강좌 목록 연동 */}
          {courseList.map((course) => (
            <S.CourseItem key={course.title}>
              {/* 강좌 이미지 연동 */}
              <S.CourseImageBox>
                {course.image && (
                  <img src={course.image} alt={course.title} />
                )}
              </S.CourseImageBox>

              <S.CourseInfo>
                <S.CourseName>{course.title}</S.CourseName>
                <S.CourseLevel>{course.level}</S.CourseLevel>

                <S.CourseDate>
                  수강기간: {course.startDate} ~
                  <br />
                  {course.endDate}
                </S.CourseDate>

                <S.CourseProgressBar>
                  <S.CourseProgressFill $percent={course.progress} />
                </S.CourseProgressBar>
              </S.CourseInfo>
            </S.CourseItem>
          ))}
        </S.CourseList>

        <S.CourseMoreButton type="button">
          더 보기 <span>→</span>
        </S.CourseMoreButton>
      </S.CourseCardBox>
    </S.CourseSection>
  );
};

export default CourseListCard;