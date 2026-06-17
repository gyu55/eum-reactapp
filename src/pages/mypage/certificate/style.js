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

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 카드 */
S.CertificateCardBox = styled.div`
  width: 984px;
  min-height: ${({ $hasDetail }) => ($hasDetail ? "474px" : "257px")};
  height: auto;

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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9CA3AF;
  text-align: center;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }
`;

/* 표 행 */
S.CertificateRow = styled.div`
  display: grid;
  grid-template-columns: 520px 120px 110px 110px;
  column-gap: 18px;
  align-items: center;

  min-height: 44px;
  padding: 7px 0;
  border-bottom: 1px solid #eceef5;
`;

/* 행 텍스트 */
S.CertificateText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
  text-align: center;
  line-height: 1.4;

  &:first-child {
    justify-content: flex-start;
    text-align: left;

    overflow: hidden;
    word-break: keep-all;
    overflow-wrap: anywhere;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

/* 상태 박스 */
S.CertificateStatusButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  margin: 0 auto;
  justify-self: center;
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  background: #e4e7ef;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: default;
`;

/* 신청 버튼 */
S.CertificateApplyButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  margin: 0 auto;
  justify-self: center;
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  background: #e4e7ef;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

/* 선택 자격증 상세 CSS */

/* 상세 박스 */
S.CertificateDetailBox = styled.div`
  width: 724px;
  height: 188px;

  margin: 47px auto 0;

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
  grid-template-columns: 180px 120px 120px;

  column-gap: 20px;
  align-items: flex-start;
`;

/* 상세 정보 묶음 */
S.CertificateDetailInfoItem = styled.div`
  min-width: 0;

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

  min-width: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.3;

  color: #000000;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin: ${({ $hasDetail }) => ($hasDetail ? "18px auto 0" : "28px auto 0")};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;

  cursor: pointer;
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

/* 자격증 페이지네이션 영역 */
S.CertificatePaginationArea = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 자격증 페이지 번호 버튼 */
S.CertificatePageButton = styled.button`
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

/* 강좌 페이지네이션 영역 */
S.CoursePaginationArea = styled.div`
  margin: 12px auto 4px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 강좌 페이지 번호 버튼 */
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

/* 내 수료증 섹션 */
S.EduCertSection = styled.section`
  margin-top: 9px;
`;

/* 내 수료증 제목 */
S.EduCertTitle = styled.h3`
  margin: 0 0 5px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 내 수료증 설명 */
S.EduCertDesc = styled.p`
  margin: 0 0 13px;
  padding-left: 3px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 내 수료증 카드 */
S.EduCertCardBox = styled.div`
  width: 984px;
  min-height: 257px;
  height: auto;

  padding: 24px 26px 12px 28px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 내 수료증 헤더 */
S.EduCertHeader = styled.div`
  display: grid;
  grid-template-columns: 520px 120px 110px 110px;
  column-gap: 18px;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid #eceef5;
`;

/* 내 수료증 헤더 텍스트 */
S.EduCertHeaderText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
  text-align: center;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }
`;

/* 내 수료증 행 */
S.EduCertRow = styled.div`
  display: grid;
  grid-template-columns: 520px 120px 110px 110px;
  column-gap: 18px;
  align-items: center;

  min-height: 44px;
  padding: 7px 0;
  border-bottom: 1px solid #eceef5;
`;

/* 내 수료증 텍스트 */
S.EduCertText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
  text-align: center;
  line-height: 1.4;

  &:first-child {
    justify-content: flex-start;
    text-align: left;

    overflow: hidden;
    word-break: keep-all;
    overflow-wrap: anywhere;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

/* 내 수료증 출력 버튼 */
S.EduCertPrintButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  margin: 0 auto;
  justify-self: center;
  align-self: center;

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

/* 내 수료증 빈 목록 */
S.EduCertEmptyText = styled.p`
  margin: 52px 0 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
  text-align: center;
`;

/* 내 수료증 더보기 */
S.EduCertMoreButton = styled.button`
  margin: 18px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;

  cursor: pointer;
`;

/* 내 수료증 페이지네이션 영역 */
S.EduCertPaginationArea = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 내 수료증 페이지 버튼 */
S.EduCertPageButton = styled.button`
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

/* 내 수료증 원본 보기 배경 */
S.EduCertModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
`;

/* 내 수료증 원본 보기 모달 */
S.EduCertModalContent = styled.div`
  position: relative;

  padding: 32px 28px 28px;

  max-height: 90vh;
  overflow-y: auto;

  border-radius: 14px;
  background: #f0f0f0;
`;

/* 내 수료증 원본 보기 닫기 */
S.EduCertModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;

  border: none;
  background: none;

  font-size: 28px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;
  color: #666666;

  cursor: pointer;
`;

/* 내 수료증 원본 카드 */
S.EduCertPreviewCard = styled.div`
  width: 480px;
  padding: 40px 48px 36px;

  position: relative;
  overflow: hidden;

  border: 1.5px solid #c8c8c8;
  background: #ffffff;
`;

/* 내 수료증 워터마크 */
S.EduCertWatermark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 260px;

  opacity: 0.07;
  pointer-events: none;
  user-select: none;

  transform: translate(-50%, -50%);

  img {
    width: 100%;
    display: block;
  }
`;

/* 내 수료증 원본 제목 */
S.EduCertPreviewTitle = styled.div`
  margin-bottom: 36px;
  padding-bottom: 18px;

  border-bottom: 2px solid #111111;

  text-align: center;
  font-size: 28px;
  font-weight: ${FONT_WEIGHT.bold};
  letter-spacing: 0.45em;
  color: #111111;
`;

/* 내 수료증 원본 본문 */
S.EduCertPreviewBody = styled.div``;

/* 내 수료증 번호 */
S.EduCertPreviewNo = styled.div`
  margin-bottom: 20px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #888888;
  text-align: right;
`;

/* 내 수료증 정보 줄 */
S.EduCertPreviewFieldRow = styled.div`
  padding: 10px 0;

  display: flex;
  align-items: baseline;
  gap: 12px;

  border-bottom: 1px solid #cccccc;
`;

/* 내 수료증 정보 라벨 */
S.EduCertPreviewFieldLabel = styled.div`
  min-width: 80px;
  flex-shrink: 0;

  font-size: 15px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #555555;
`;

/* 내 수료증 정보 값 */
S.EduCertPreviewFieldValue = styled.div`
  flex: 1;

  font-size: 17px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #111111;
`;

/* 내 수료증 증명 문구 */
S.EduCertPreviewTextBlock = styled.div`
  padding: 28px 0 24px;

  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 2.2;
  color: #222222;
`;

/* 내 수료증 하단 */
S.EduCertPreviewFooter = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

/* 내 수료증 발급일 */
S.EduCertPreviewDate = styled.div`
  flex: 1;

  text-align: center;
  font-size: 15px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #444444;
`;

/* 내 수료증 발급 기관 */
S.EduCertPreviewOrg = styled.div`
  margin-top: 4px;

  font-size: 17px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #111111;
`;

/* 내 수료증 도장 */
S.EduCertPreviewSeal = styled.svg`
  flex-shrink: 0;
  opacity: 0.85;
`;

/* 내 수료증 출력 버튼 */
S.EduCertPreviewPrintButton = styled.button`
  width: 170px;
  height: 44px;

  margin: 20px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  background: #4359fc;

  font-size: 15px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ffffff;

  cursor: pointer;
`;

export default S;