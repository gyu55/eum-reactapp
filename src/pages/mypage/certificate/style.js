import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 자격증 페이지 레이아웃 CSS */

/* 자격증 페이지 레이아웃 */
S.CertificateLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin-top: 26px;
`;

/* 왼쪽 영역 */
S.CertificateLeftArea = styled.div`
  width: 988px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 오른쪽 영역 */
S.CertificateRightArea = styled.div`
  width: 312px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 내 자격증 카드 CSS */

/* 자격증 섹션 */
S.CertificateSection = styled.section`
  margin-top: 10px;
`;

/* 제목 */
S.CertificateTitle = styled.h3`
  margin: 0 0 5px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 설명 */
S.CertificateDesc = styled.p`
  margin: 0 0 10px;
  padding-left: 3px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 카드 */
S.CertificateCardBox = styled.div`
  width: 984px;
  height: ${({ $hasDetail }) => ($hasDetail ? "474px" : "257px")};

  padding: 24px 26px 12px 28px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 표 헤더 */
S.CertificateHeader = styled.div`
  display: grid;
  grid-template-columns: 520px 120px 110px 110px;
  column-gap: 18px;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid #eceef5;
`;

/* 헤더 텍스트 */
S.CertificateHeaderText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 표 행 */
S.CertificateRow = styled.div`
  display: grid;
  grid-template-columns: 520px 120px 110px 110px;
  column-gap: 18px;
  align-items: center;

  padding: 7px 0;
  border-bottom: 1px solid #eceef5;
`;

/* 행 텍스트 */
S.CertificateText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 상태 박스 */
S.CertificateStatusButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  background: #e4e7ef;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 신청 박스 */
S.CertificateApplyButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  background: #e4e7ef;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: pointer;
`;

/* 선택 자격증 상세 CSS */

/* 상세 박스 */
S.CertificateDetailBox = styled.div`
  width: 724px;
  height: 188px;

  margin: 11px auto 0;

  /* 내부 여백 */
  padding: 13px 14px 16px 22px;
  box-sizing: border-box;

  position: relative;

  border-radius: 14px;
  background: #f8f9fc;
`;

/* 상세 제목 */
S.CertificateDetailTitle = styled.h4`
  margin: 13px 0 12px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 상세 정보 영역 */
S.CertificateDetailInfoRow = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;

  column-gap: 46px;
`;

/* 상세 정보 묶음 */
S.CertificateDetailInfoItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

/* 상세 라벨 */
S.CertificateDetailLabel = styled.span`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
`;

/* 상세 값 */
S.CertificateDetailValue = styled.span`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
`;


/* 안내 제목 */
S.CertificateDetailNoticeTitle = styled.p`
  margin: 20px 0 10px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
`;

/* 안내 문구 */
S.CertificateDetailNoticeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.6;

  color: #000000;
`;

/* 실물 신청 버튼 */
S.CertificateDetailApplyButton = styled.button`
  position: absolute;

  right: 14px;
  bottom: 15px;

  width: 92px;
  height: 36px;

  border: none;
  border-radius: 8px;

  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};

  color: #ffffff;

  cursor: pointer;
`;

/* 더보기 */
S.CertificateMoreButton = styled.button`
  margin: ${({ $hasDetail }) => ($hasDetail ? "18px auto 0" : "46px auto 0")};

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/* 수강중인 자격증 목록 CSS */

/* 수강중인 강좌 섹션 */
S.CourseSection = styled.section`
  margin-top: 9px;
`;

/* 수강중인 강좌 제목 */
S.CourseTitle = styled.h3`
  margin: 0 0 5px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 수강중인 강좌 설명 */
S.CourseDesc = styled.p`
  margin: 0 0 6px;
  padding-left: 3px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 수강중인 강좌 카드 */
S.CourseCardBox = styled.div`
  width: 985px;
  height: 327px;
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
  justify-content: space-between;
`;

/* 강좌 카드 */
S.CourseItem = styled.div`
  width: 220px;
  height: 243px;
  box-sizing: border-box;

  border: 1px solid #eceef5;
  border-radius: 10px;

  background: ${PALETTE.white};
  overflow: hidden;
`;

/* 강좌 이미지 */
S.CourseImageBox = styled.div`
  width: 100%;
  height: 104px;

  background: #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 강좌 내용 */
S.CourseInfo = styled.div`
  padding: 6px 7px 2px;
  box-sizing: border-box;
`;

/* 강좌명 */
S.CourseName = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 과정명 */
S.CourseLevel = styled.p`
  margin: 6px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 수강기간 */
S.CourseDate = styled.p`
  margin: 6px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.4;
  color: #000000;
`;

/* 진행 바 */
S.CourseProgressBar = styled.div`
  width: calc(100% - 14px);
  height: 8px;

  margin: 9px auto 0;

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
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/* 실물 신청 안내 카드 CSS */

/* 안내 카드 */
S.CertificateGuideCardBox = styled.div`
  width: 312px;
  height: 196px;

  padding: 18px 18px 16px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 안내 제목 */
S.CertificateGuideTitle = styled.p`
  margin: 0 0 12px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 안내 목록 */
S.CertificateGuideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* 안내 문구 */
S.CertificateGuideItem = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.6;
  color: #000000;
`;

/* 신청 가이드 버튼 */
S.CertificateGuideButton = styled.button`
  width: 127px;
  height: 34px;

  margin: 5px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #dfe4ff;
  border-radius: 10px;

  background: #eef1ff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 실물 신청 가능 카드 CSS */

/* 카드 */
S.CertificateAvailableCardBox = styled.div`
  width: 312px;
  height: 150px;

  padding: 22px;
  box-sizing: border-box;

  border-radius: 18px;

  background: linear-gradient(
    135deg,
    #5664ff 0%,
    #4b57f5 100%
  );

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 왼쪽 내용 */
S.CertificateAvailableContent = styled.div`
  display: flex;
  flex-direction: column;
`;

/* 제목 */
S.CertificateAvailableTitle = styled.p`
  margin: 0 0 10px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ffffff;
`;

/* 숫자 영역 */
S.CertificateAvailableCountWrap = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 4px;

  margin-bottom: 8px;
`;

/* 숫자 */
S.CertificateAvailableCount = styled.span`
  font-size: 44px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #ffffff;
`;

/* 단위 */
S.CertificateAvailableUnit = styled.span`
  margin-bottom: 5px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};

  color: #ffffff;
`;

/* 설명 */
S.CertificateAvailableDesc = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};

  color: rgba(255, 255, 255, 0.9);
`;

/* 오른쪽 아이콘 */
S.CertificateAvailableIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 110px;
    height: 100px;

    object-fit: contain;

    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12));
  }
`;

export default S;