import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_SIZE, FONT_WEIGHT } = theme;

const S = {};

/* 학습 페이지 레이아웃 */

/* 전체 영역 */
S.LearningLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin-top: 26px;
`;

/* 왼쪽 영역 */
S.LearningLeftArea = styled.div`
  width: 988px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 오른쪽 영역 */
S.LearningRightArea = styled.div`
  width: 312px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 학습 목록 CSS */

/* 섹션 */
S.LearningSection = styled.section`
  margin-top: 0;
`;

/* 제목 */
S.LearningTitle = styled.h3`
  margin: 0 0 10px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 카드 */
S.LearningCardBox = styled.div`
  width: 981px;
  min-height: 228px;
  height: auto;

  padding: 24px 26px 14px 28px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};

  display: flex;
  flex-direction: column;
`;

/* 학습현황 헤더 */
S.LearningHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 90px 130px;
  align-items: center;

  padding-bottom: 8px;
  border-bottom: 1px solid #eceef5;
`;

/* 학습결과 헤더 */
S.LearningResultHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 110px 90px;
  align-items: center;

  padding-bottom: 8px;
  border-bottom: 1px solid #eceef5;
`;

/* 헤더 텍스트 */
S.LearningHeaderText = styled.span`
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;

  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 학습현황 행 */
S.LearningRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 90px 130px;
  align-items: center;

  min-height: 31px;
  border-bottom: 1px solid #eceef5;
`;

/* 학습결과 행 */
S.LearningResultRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 110px 90px;
  align-items: center;

  min-height: 31px;
  border-bottom: 1px solid #eceef5;
`;

/* 행 텍스트 */
S.LearningText = styled.span`
  min-width: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* 제목 */
  &:first-child {
    text-align: left;
    color: #333333;
  }

  /* 진행도, 시간, 정답률 */
  &:not(:first-child) {
    font-size: 13px;
    color: #9ca3af;
  }
`;

/* 학습 제목 버튼 */
S.LearningTitleButton = styled.button`
  min-width: 0;
  padding: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #333333;
  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 빈 목록 문구 */
S.EmptyText = styled.p`
  margin: 28px 0 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
  text-align: center;
`;

/* 더보기 */
S.LearningMoreButton = styled.button`
  margin: 18px auto 0;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/* 학습요약 카드 CSS */

/* 학습요약 카드 */
S.StudySummaryCardBox = styled.div`
  width: 312px;
  height: 150px;

  padding: 18px 18px 14px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 학습요약 제목 */
S.StudySummaryTitle = styled.p`
  margin: 0;
  padding-bottom: 10px;

  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 학습요약 목록 */
S.StudySummaryList = styled.div`
  height: 94px;

  padding: 10px 6px 10px 14px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid #e5e7eb;
`;

/* 학습요약 항목 */
S.StudySummaryItem = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 학습요약 라벨 */
S.StudySummaryLabel = styled.p`
  margin: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #333333;
`;

/* 학습요약 값 */
S.StudySummaryValue = styled.p`
  margin: 0;

  min-width: 70px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;
  text-align: right;

  color: #4359fc;
`;

/* 학습 페이지네이션 영역 */
S.LearningPaginationArea = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 학습 페이지 번호 버튼 */
S.LearningPageButton = styled.button`
  min-width: 26px;
  height: 26px;
  padding: 0 8px;

  border: 1px solid ${({ $active }) => ($active ? "#4359fc" : "#e4e7ef")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#4359fc" : "#ffffff")};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $active }) => ($active ? "#ffffff" : "#555555")};

  cursor: pointer;
`;

/* AI 학습 분석 카드 전체 박스 */
S.AiAnalysisCardBox = styled.div`
  width: 312px;
  height: 170px;

  padding: 14px 16px 12px;
  box-sizing: border-box;

  border: 2px solid ${PALETTE.primary.main};
  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* AI 학습 분석 카드 상단 콘텐츠 영역 */
S.AiAnalysisContent = styled.div`
  height: 88px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

/* AI 학습 분석 카드 텍스트 영역 */
S.AiAnalysisTextArea = styled.div`
  padding-top: 8px;
  min-width: 0;
`;

/* AI 학습 분석 카드 제목 */
S.AiAnalysisTitle = styled.p`
  margin: 0 0 12px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* AI 학습 분석 카드 설명 */
S.AiAnalysisDesc = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 19px;

  color: #333333;
`;

/* AI 학습 분석 카드 그래프 장식 */
S.AiAnalysisVisual = styled.svg`
  width: 104px;
  height: 95px;
  margin-right: 23px;
  flex-shrink: 0;

  rect,
  circle {
    fill: ${PALETTE.primary.main};
    opacity: 0.6;
  }

  path:first-of-type {
    fill: none;
    stroke: ${PALETTE.primary.main};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.75;
  }

  path:last-of-type {
    fill: ${PALETTE.primary.main};
    opacity: 0.85;
  }
`;

/* AI 학습 분석 카드 분석하기 버튼 */
S.AiAnalysisButton = styled.button`
  width: 100%;
  height: 38px;
  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: ${PALETTE.primary.main};

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};

  cursor: pointer;
`;

/* 수강중인 강좌 섹션 */
S.CourseSection = styled.section`
  margin-top: 0;
`;

/* 수강중인 강좌 제목 */
S.CourseTitle = styled.h3`
  margin: 0 0 5px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 수강중인 강좌 설명 */
S.CourseDesc = styled.p`
  margin: 0 0 13px;
  padding-left: 3px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 수강중인 강좌 카드 */
S.CourseCardBox = styled.div`
  width: 981px;
  min-height: ${({ $isExpanded }) => ($isExpanded ? "auto" : "327px")};
  padding: 22px 22px 8px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 강좌 목록 */
S.CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  column-gap: 13px;
  row-gap: 18px;
  justify-content: space-between;
`;

/* 강좌 카드 */
S.CourseItem = styled.div`
  width: 220px;
  height: 260px;
  box-sizing: border-box;

  border: 1px solid #eceef5;
  border-radius: 10px;

  background: ${PALETTE.white};
  overflow: hidden;
`;

/* 강좌 영상 이미지 링크 */
S.CourseVideoLink = styled.a`
  position: relative;

  width: 100%;
  height: 104px;

  display: block;

  background: #e5e7eb;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* 강좌 영상 재생 버튼 */
S.CoursePlayButton = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

  border-radius: 50%;
  background: rgba(67, 89, 252, 0.9);

  font-size: 18px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ffffff;
`;

/* 강좌 내용 */
S.CourseInfo = styled.div`
  height: 156px;
  padding: 12px 14px 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

/* 강좌명 */
S.CourseName = styled.p`
  margin: 0;

  height: 40px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  font-family: "Pretendard";
  font-size: 15px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1.35;
  color: #000000;

  word-break: keep-all;
`;

/* 과정명 */
S.CourseLevel = styled.p`
  margin: 8px 0 0;

  height: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.3;
  color: #000000;
`;

/* 수강기간 */
S.CourseDate = styled.div`
  margin: 12px 0 0;

  display: flex;
  flex-direction: column;
  gap: 6px;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.25;
  color: #000000;
`;

/* 수강기간 첫 줄 */
S.CourseDateLine = styled.span`
  display: block;
  text-align: left;
  white-space: nowrap;
`;

/* 수강기간 종료일 */
S.CourseDateEnd = styled.span`
  display: block;
  padding-left: 100px;

  text-align: left;
  white-space: nowrap;
`;

/* 진행 바 */
S.CourseProgressBar = styled.div`
  width: 100%;
  height: 8px;

  margin-top: auto;

  border-radius: 999px;
  background: #e4e7ef;

  overflow: hidden;
`;

/* 진행률 */
S.CourseProgressFill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;

  border-radius: 999px;
  background: #4359fc;
`;

/* 강좌 더보기 */
S.CourseMoreButton = styled.button`
  margin: 28px auto 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;

  cursor: pointer;
`;

/* 강좌 페이지네이션 영역 */
S.CoursePaginationArea = styled.div`
  margin: 12px auto 4px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 강좌 페이지 버튼 */
S.CoursePageButton = styled.button`
  min-width: 26px;
  height: 26px;
  padding: 0 8px;

  border: 1px solid ${({ $active }) => ($active ? "#4359fc" : "#e4e7ef")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#4359fc" : "#ffffff")};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $active }) => ($active ? "#ffffff" : "#555555")};

  cursor: pointer;
`;

export default S;
