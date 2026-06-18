import styled from "styled-components";
import theme from "../../../../styles/theme";

const { PALETTE, FONT_SIZE, FONT_WEIGHT, GRAYSCALE, TEXT_COLOR } = theme;

const S = {};

/* AI 학습 분석 페이지 전체 영역 */
S.AnalysisWrapper = styled.div`
  margin-top: 36px;
`;

/* AI 학습 분석 페이지 제목 영역 */
S.AnalysisHeader = styled.div`
  margin-bottom: 18px;
`;

/* AI 학습 분석 페이지 메인 제목 */
S.AnalysisTitle = styled.h2`
  margin: 0 0 8px;

  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* AI 학습 분석 페이지 설명 */
S.AnalysisDesc = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

/* 상단 종합 리포트 + 전체 분석 결과 카드 */
S.AnalysisTopCard = styled.section`
  width: 100%;
  min-height: 330px;

  padding: 22px 26px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 256px 1px 1fr;
  column-gap: 28px;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 상단 카드 내부 구분선 */
S.AnalysisDivider = styled.div`
  width: 1px;
  height: 100%;

  background: #dde1ef;
`;

/* 공통 섹션 제목 */
S.SectionTitle = styled.h3`
  margin: 0;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 종합 리포트 영역 */
S.ReportCardArea = styled.div`
  min-width: 0;
`;

/* 종합 리포트 콘텐츠 정렬 */
S.ReportContent = styled.div`
  margin-top: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* 종합 리포트 원형 그래프 */
S.ReportCircle = styled.div`
  width: 124px;
  height: 124px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 50%;
  background: conic-gradient(
    ${({ $color }) => $color || PALETTE.primary.main} 0deg,
    ${({ $color }) => $color || PALETTE.primary.main} ${({ $rate }) => $rate * 3.6}deg,
    #e6e8f0 ${({ $rate }) => $rate * 3.6}deg,
    #e6e8f0 360deg
  );

  &::after {
    content: "";
    width: 98px;
    height: 98px;

    position: absolute;

    border-radius: 50%;
    background: ${PALETTE.white};
  }
`;

/* 종합 리포트 원형 그래프 수치 */
S.ReportCircleText = styled.span`
  position: relative;
  z-index: 1;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $color }) => $color || PALETTE.primary.main};
`;

/* 종합 리포트 등급 배지 */
S.ReportGrade = styled.div`
  width: 108px;
  height: 36px;
  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: ${({ $color }) => $color || PALETTE.primary.main};

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
`;

/* 종합 리포트 안내 문구 */
S.ReportMessage = styled.p`
  margin: 14px 0 16px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

/* 종합 리포트 수치 테이블 */
S.ReportTable = styled.div`
  width: 240px;

  border: 1px solid #dde1ef;
  border-radius: 0;
`;

/* 종합 리포트 테이블 행 */
S.ReportTableRow = styled.div`
  height: 30px;
  padding: 0 16px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e8ebf3;

  &:last-child {
    border-bottom: none;
  }
`;

/* 종합 리포트 테이블 왼쪽 라벨 */
S.ReportTableLabel = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
`;

/* 종합 리포트 테이블 오른쪽 값 */
S.ReportTableValue = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $primary }) => ($primary ? PALETTE.primary.main : TEXT_COLOR.basic)};
`;

/* 전체 분석 결과 영역 */
S.OverallCardArea = styled.div`
  min-width: 0;
`;

/* 전체 분석 결과 목록 */
S.OverallList = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

/* 전체 분석 결과 행 */
S.OverallRow = styled.div`
  min-height: 64px;
  padding: 12px 20px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 380px 1fr;
  align-items: center;
  column-gap: 42px;

  border: 1px solid ${({ $danger }) => ($danger ? "#FF4D4F" : "#dde1ef")};
  border-radius: 8px;
  background: #fbfcff;
`;

/* 전체 분석 결과 진행률 영역 */
S.OverallProgressArea = styled.div`
  min-width: 0;
`;

/* 전체 분석 결과 제목 + 퍼센트 라인 */
S.OverallTitleLine = styled.div`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 전체 분석 결과 제목 */
S.OverallTitle = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $color }) => $color};
`;

/* 전체 분석 결과 퍼센트 */
S.OverallRate = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $color }) => $color};
`;

/* 전체 분석 결과 진행률 배경 */
S.OverallProgressTrack = styled.div`
  width: 100%;
  height: 8px;

  border-radius: 999px;
  background: #e6e8f0;
  overflow: hidden;
`;

/* 전체 분석 결과 진행률 바 */
S.OverallProgressBar = styled.div`
  width: ${({ $rate }) => `${$rate}%`};
  height: 100%;

  border-radius: 999px;
  background: ${({ $color }) => $color};
`;

/* 전체 분석 결과 설명 영역 */
S.OverallTextArea = styled.div`
  min-width: 0;
`;

/* 전체 분석 결과 설명 첫 줄 */
S.OverallDesc = styled.p`
  margin: 0 0 8px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 전체 분석 결과 추천 문구 */
S.OverallGuide = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 하단 개별 분석 목록 + 상세 분석 카드 */
S.AnalysisBottomCard = styled.section`
  width: 100%;
  min-height: 286px;
  margin-top: 16px;

  padding: 24px 26px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  column-gap: 30px;
  align-items: start;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 하단 카드 내부 구분선 */
S.AnalysisBottomDivider = styled.div`
  width: 1px;
  height: 100%;

  background: #dde1ef;
`;

/* 개별 분석 목록 영역 */
S.IndividualListArea = styled.div`
  min-width: 0;
`;

/* 개별 분석 목록 테이블 */
S.IndividualTable = styled.div`
  margin-top: 18px;
`;

/* 개별 분석 목록 헤더 */
S.IndividualHeader = styled.div`
  height: 34px;
  padding: 0 14px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1.4fr 1fr 80px 100px 90px;
  align-items: center;

  border-radius: 6px;
  background: #f8f9fc;
`;

/* 개별 분석 목록 헤더 텍스트 */
S.IndividualHeaderText = styled.span`
  width: 100%;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
  text-align: center;

  &:first-child {
    text-align: left;
    padding-left: 29px;
    box-sizing: border-box;
  }
`;

/* 개별 분석 목록 행 */
S.IndividualRow = styled.div`
  height: 42px;
  padding: 0 14px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1.4fr 1fr 80px 100px 90px;
  align-items: center;

  border-bottom: 1px solid #e8ebf3;
  background: ${({ $active }) => ($active ? "#f4f6ff" : "transparent")};
`;

/* 개별 분석 목록 제목 셀 */
S.IndividualTitleCell = styled.div`
  min-width: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  padding-left: 10px;
  box-sizing: border-box;
`;

/* 개별 분석 목록 색상 점 */
S.IndividualDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;

  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

/* 개별 분석 목록 텍스트 */
S.IndividualText = styled.span`
  min-width: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $muted }) => ($muted ? GRAYSCALE[9] : TEXT_COLOR.basic)};

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 개별 분석 목록 분석 보기 버튼 */
S.IndividualButton = styled.button`
  width: 72px;
  height: 28px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${PALETTE.primary.main};
  border-radius: 6px;
  background: ${PALETTE.white};

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${PALETTE.primary.main};

  cursor: pointer;
`;

/* 개별 분석 목록 페이지네이션 영역 */
S.IndividualPaginationArea = styled.div`
  margin-top: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

/* 개별 분석 목록 페이지네이션 버튼 */
S.IndividualPageButton = styled.button`
  min-width: 26px;
  height: 26px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ $active }) => ($active ? PALETTE.primary.main : "#e4e7ef")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? PALETTE.primary.main : PALETTE.white)};

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $active }) => ($active ? PALETTE.white : "#555555")};

  cursor: pointer;
`;

/* 개별 상세 분석 영역 */
S.DetailArea = styled.div`
  min-width: 0;
  padding-top: 0;
`;

/* 개별 상세 분석 상단 수치 영역 */
S.DetailStats = styled.div`
  margin: 22px 0 22px;

  display: flex;
  align-items: center;
  gap: 42px;
`;

/* 개별 상세 분석 수치 묶음 */
S.DetailStat = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 개별 상세 분석 수치 라벨 */
S.DetailStatLabel = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 개별 상세 분석 수치 값 */
S.DetailStatValue = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $color }) => $color || TEXT_COLOR.basic};
`;

/* 정답 오답 그리드 */
S.AnswerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--answer-column-count), 72px);
  width: fit-content;

  border-top: 1px solid #dde1ef;
  border-left: 1px solid #dde1ef;
`;

/* 정답 오답 그리드 칸 */
S.AnswerCell = styled.div`
  width: 72px;
  height: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-right: 1px solid #dde1ef;
  border-bottom: 1px solid #dde1ef;
`;

/* 정답 오답 그리드 문제 번호 */
S.AnswerNumber = styled.span`
  margin-bottom: 5px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

/* 정답 오답 그리드 표시 */
S.AnswerMark = styled.span`
  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $correct }) => ($correct ? PALETTE.primary.main : "#FF4D4F")};
`;

/* 정답 오답 범례 */
S.AnswerLegend = styled.div`
  margin-top: 13px;
  padding-left: 1px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;

/* 정답 오답 범례 텍스트 */
S.LegendItem = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $color }) => $color};
`;

/* AI 추천 학습 가이드 박스 */
S.RecommendBox = styled.div`
  min-height: 58px;
  margin-top: 15px;
  padding: 12px 16px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 12px;

  border: 1px solid #cfd6ff;
  border-radius: 8px;
  background: #fbfcff;
`;

/* AI 추천 학습 가이드 아이콘 */
S.RecommendIcon = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #eef1ff;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* AI 추천 학습 가이드 텍스트 영역 */
S.RecommendTextArea = styled.div`
  min-width: 0;
`;

/* AI 추천 학습 가이드 제목 */
S.RecommendTitle = styled.p`
  margin: 0 0 6px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* AI 추천 학습 가이드 설명 */
S.RecommendDesc = styled.p`
  margin: 0;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 학습 목록 돌아가기 버튼 영역 */
S.AnalysisBackButtonArea = styled.div`
  width: 100%;
  margin-top: 26px;

  display: flex;
  justify-content: flex-end;
`;

/* 학습 목록 돌아가기 버튼 */
S.AnalysisBackButton = styled.button`
  width: auto;
  min-width: 156px;
  height: 40px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #dde1ef;
  border-radius: 8px;
  background: #fff;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: pointer;

  &:hover {
    border-color: ${PALETTE.primary.main};
    color: ${PALETTE.primary.main};
  }
`;

export default S;