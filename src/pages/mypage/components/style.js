import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const S = {};

/* 공통 CSS */

/* 카드 */
S.CardBox = styled.div`
  background-color: ${PALETTE.white};
  border-radius: 14px;
  padding: 20px;
`;

/* 섹션 */
S.Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 섹션 제목 */
S.SectionTitle = styled.h3`
  margin: 0;
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 테이블 제목 */
S.TableHeaderText = styled.span`
  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
`;

/* 게시글 제목 영역 */
S.PostTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

/* 카테고리 배지 */
S.PostBadge = styled.span`
  width: 58px;
  height: 16px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${({ $bg }) => $bg};

  font-size: ${FONT_SIZE.h12};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
`;

/* 제목 텍스트 */
S.PostTitleText = styled.span`
  min-width: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
`;

/* 숫자 텍스트 */
S.NumberText = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 더보기 버튼 */
S.MoreButton = styled.button`
  margin: 14px auto 0;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/* ActivityCard CSS */

/* 카드 전체 */
S.ActivityWrapper = styled(S.CardBox)`
  width: 312px;
  min-height: 255px;
  padding: 18px 20px 22px;
`;

/* 제목 */
S.ActivityTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 9px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
S.ActivityDivider = styled.div`
  height: 1px;
  margin-top: ${({ $spaced }) => ($spaced ? "12px" : "0")};
  background: ${GRAYSCALE[8]};
`;

/* 그룹 */
S.ActivityGroup = styled.div`
  margin-top: ${({ $first }) => ($first ? "14px" : "12px")};

  padding-left: 14px;
  padding-right: 6px;
  box-sizing: border-box;
`;

/* 한 줄 */
S.ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`;

/* 아이콘 + 텍스트 */
S.ActivityLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 아이콘 */
S.ActivityIcon = styled.span`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 1;
`;

/* 오른쪽 숫자 */
S.ActivityCount = styled.span`
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* AttendanceCard CSS */

/* 카드 전체 */
S.AttendanceWrapper = styled.div`
  position: relative;

  width: 312px;
  height: 80px;

  border-radius: 14px;
  background: #4359fc;
  overflow: hidden;
`;

/* 출석일 */
S.AttendanceDayText = styled.div`
  position: absolute;
  top: 23px;

  left: ${({ $digitType }) => {
    if ($digitType === "small") return "52px";
    if ($digitType === "medium") return "30px";
    return "8px";
  }};

  font-size: 34px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;
  letter-spacing: 0;
  color: ${PALETTE.white};
  white-space: nowrap;
`;

/* 오른쪽 텍스트 영역 */
S.AttendanceInfoBox = styled.div`
  position: absolute;
  top: 17px;
  left: 185px;

  display: flex;
  flex-direction: column;
`;

/* 강조 텍스트 */
S.AttendanceStrongText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
  white-space: nowrap;
`;

/* 보조 텍스트 */
S.AttendanceSubText = styled.span`
  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
`;

/* BookmarkList CSS */

/* 카드 */
S.BookmarkWrapper = styled(S.CardBox)`
  width: 984px;
  min-height: 201px;
  height: auto;
  padding: 20px 28px 16px;
`;

/* 테이블 헤더 */
S.BookmarkHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 80px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

/* 행 */
S.BookmarkRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 80px 70px 70px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f3f4f6;
`;

/* MypostList CSS */

/* 카드 */
S.MyPostWrapper = styled(S.CardBox)`
  width: 984px;
  min-height: 220px;
  height: auto;
  padding: 20px 28px 15px;
`;

/* 테이블 헤더 */
S.MyPostHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 70px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

/* 행 */
S.MyPostRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 70px 70px 70px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f3f4f6;
`;

/* FollowList CSS */

/* 카드 */
S.FollowWrapper = styled(S.CardBox)`
  width: 984px;
  min-height: 266px;
  height: auto;
  padding: 21px 28px 24px;
`;

/* 팔로우 카드 바깥 오른쪽 하단 회원탈퇴 영역 */
S.FollowWithdrawArea = styled.div`
  width: 984px;
  margin-top: 6px;

  display: flex;
  justify-content: flex-end;
`;

/* 팔로우 제목 영역 */
S.FollowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

/* 팔로우 제목 */
S.FollowTitle = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 인원 배지 */
S.CountBadge = styled.span`
  width: 24px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${GRAYSCALE[10]};

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
`;

/* 유저 목록 */
S.UserList = styled.div`
  margin-top: 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

/* 유저 아이템 */
S.UserItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
`;

/* 프로필 이미지 */
S.Avatar = styled.div`
  width: 42px;
  height: 43px;

  border-radius: 10px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 유저 이름 */
S.FollowUserName = styled.span`
  margin-top: 6px;

  max-width: 58px;

  font-size: ${FONT_SIZE.h12};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 밑줄 */
S.FollowDivider = styled.div`
  height: 1px;
  margin-top: 6px;
  background: #f3f4f6;
`;

/* 팔로워 영역 */
S.FollowerBlock = styled.div`
  margin-top: 12px;
`;

/* ProfileCard CSS */

/* 카드 전체 */
S.ProfileWrapper = styled(S.CardBox)`
  width: 988px;
  height: 191px;
  padding: 28px 32px;

  display: flex;
  gap: 24px;
  position: relative;
`;

/* 프로필 이미지 */
S.ProfileImage = styled.div`
  width: 96px;
  height: 96px;

  border-radius: 20px;
  overflow: hidden;
  background: #d9d9d9;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    display: block;
  }
`;

/* 정보 영역 */
S.ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 이름 영역 */
S.ProfileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 이름 */
S.ProfileUserName = styled.span`
  font-size: 18px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 레벨 버튼 */
S.LevelButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

/* 레벨 배지 */
S.LevelBadge = styled.span`
  min-width: 34px;
  height: 19px;
  padding: 0 8px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${PALETTE.primary.extraLight};

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* 경험치 영역 */
S.ExpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 경험치 버튼 */
S.ExpButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

/* 경험치 바 */
S.ExpBar = styled.div`
  width: 131px;
  height: 7px;

  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

/* 경험치 채움 */
S.ExpFill = styled.div`
  width: ${({ $percent }) => `${Math.min(Math.max($percent || 0, 0), 100)}%`};
  height: 100%;
  background: ${PALETTE.primary.main};
`;

/* 경험치 텍스트 */
S.ExpText = styled.span`
  width: 92px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 개인정보 영역 */
S.DetailArea = styled.div`
  display: flex;
  gap: 72px;
`;

/* 개인정보 열 */
S.ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 개인정보 행 */
S.ProfileRow = styled.div`
  display: flex;
  gap: 10px;
`;

/* 개인정보 라벨 */
S.ProfileLabel = styled.span`
  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

/* 개인정보 값 */
S.ProfileValue = styled.span`
  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 수정 버튼 */
S.EditButton = styled.button`
  position: absolute;
  top: 28px;
  right: 32px;

  height: 36px;
  padding: 0 14px;

  border: 1px solid ${PALETTE.primary.main};
  border-radius: 8px;
  background: ${PALETTE.white};

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* QuickMenuCard CSS */

/* 카드 전체 */
S.QuickMenuWrapper = styled.div`
  width: 312px;
  min-height: 166px;
  padding: 13px 17px 10px;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 제목 */
S.QuickMenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
S.QuickMenuDivider = styled.div`
  height: 1px;
  margin-top: 9px;
  background: #f3f4f6;
`;

/* 메뉴 그리드 */
S.MenuGrid = styled.div`
  margin-top: 9px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

/* 메뉴 버튼 */
S.MenuButton = styled.button`
  width: 100%;
  height: 51px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 10px;
  background: ${GRAYSCALE[10]};

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};

  &:focus {
    outline: none;
  }
`;

/* StudyStatusCard CSS */

/* 카드 전체 */
S.StudyStatusWrapper = styled(S.CardBox)`
  height: 248px;
  padding: 18px 18px 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

/* 제목 */
S.StudyStatusTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
S.StudyStatusDivider = styled.div`
  height: 1px;
  margin-top: 8px;
  background: #f3f4f6;
`;

/* 리스트 */
S.StudyStatusList = styled.div`
  height: 136px;
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 11px;
`;

/* 학습 현황 빈 목록 문구 */
S.StudyStatusEmptyText = styled.p`
  margin: auto 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
  text-align: center;
`;


/* 리스트 아이템 */
S.StudyStatusItem = styled.div``;

/* 한 줄 */
S.StudyStatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* 단계명 */
S.StudyStatusLabel = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #333333;
`;

/* 퍼센트 */
S.StudyStatusPercent = styled.span`
  min-width: 44px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};

  text-align: right;
`;

/* 진행 바 */
S.ProgressBar = styled.div`
  width: 100%;
  height: 7px;
  margin-top: 8px;

  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

/* 진행률 */
S.ProgressFill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;

  border-radius: 999px;
  background: ${PALETTE.primary.main};
`;

/* LevelGuideModal CSS */

/* 모달 배경 */
S.ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 24, 39, 0.25);
`;

/* 모달 박스 */
S.LevelModalBox = styled.div`
  width: 534px;
  height: 270px;
  padding: 18px 28px 16px;
  box-sizing: border-box;

  background: ${PALETTE.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.12);
`;

/* 모달 상단 */
S.ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 모달 제목 */
S.ModalTitle = styled.h3`
  margin: 0;

  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 닫기 버튼 */
S.ModalCloseButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[7]};
`;

/* 밑줄 */
S.ModalDivider = styled.div`
  height: 1px;
  margin-top: 10px;
  background: #e5e7eb;
`;

/* 본문 */
S.LevelModalContent = styled.div`
  padding-top: 8px;
`;

/* 안내 제목 */
S.LevelGuideHeader = styled.div`
  display: flex;
  gap: 196px;
  margin-bottom: 18px;

  span {
    font-size: 12px;
    font-weight: ${FONT_WEIGHT.bold};
    color: #6b7280;
  }
`;

/* 안내 카드 묶음 */
S.LevelGuideCards = styled.div`
  display: flex;
  gap: 28px;
`;

/* 안내 카드 */
S.LevelGuideCard = styled.div`
  width: 224px;
  height: 108px;
  padding: 16px 18px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};
`;

/* 안내 행 */
S.LevelGuideRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 14px;
  }
`;

/* 안내 라벨 */
S.LevelGuideLabel = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #111827;
`;

/* 경험치 */
S.LevelGuideValue = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 안내 문구 */
S.LevelNoticeBox = styled.div`
  width: 478px;
  height: 30px;
  margin-top: 19px;
  padding: 0 12px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-radius: 8px;
  background: #fed7aa;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #92400e;
`;

/* 페이지네이션 영역 */
S.PaginationArea = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  gap: 6px;
`;

/* 페이지 번호 버튼 */
S.PageButton = styled.button`
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