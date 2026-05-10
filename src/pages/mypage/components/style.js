import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 공통 CSS */

/* 카드 */
export const CardBox = styled.div`
  background-color: ${PALETTE.white};
  border-radius: 14px;
  padding: 20px;
`;

/* 섹션 */
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 섹션 제목 */
export const SectionTitle = styled.h3`
  margin: 0;
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 표 제목 */
export const TableHeaderText = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
`;

/* 게시글 제목 영역 */
export const PostTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/* 카테고리 뱃지 */
export const PostBadge = styled.span`
  width: 58px;
  height: 16px;

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
export const PostTitleText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 숫자 텍스트 */
export const NumberText = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: center;
`;

/* 더보기 버튼 */
export const MoreButton = styled.button`
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
export const ActivityWrapper = styled(CardBox)`
  width: 312px;
  min-height: 255px;
  padding: 18px 20px 22px;
`;

/* 제목 */
export const ActivityTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 9px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
export const ActivityDivider = styled.div`
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

/* 그룹 */
export const ActivityGroup = styled.div`
  margin-top: ${({ $first }) => ($first ? "14px" : "12px")};
`;

/* 한 줄 */
export const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`;

/* 이모티콘 + 텍스트 */
export const ActivityLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 이모티콘 */
export const ActivityIcon = styled.span`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 1;
`;

/* 오른쪽 숫자 */
export const ActivityCount = styled.span`
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* AttendanceCard CSS */

/* 카드 전체 */
export const AttendanceWrapper = styled.div`
  width: 312px;
  height: 90px;
  padding: 0 22px;

  display: flex;
  align-items: center;

  border-radius: 16px;
  background: ${PALETTE.primary.main};
`;

/* 출석일 */
export const AttendanceDayText = styled.div`
  width: 170px;
  flex-shrink: 0;

  font-size: 34px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${PALETTE.white};
  white-space: nowrap;
`;

/* 오른쪽 텍스트 영역 */
export const AttendanceInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* 강조 텍스트 */
export const AttendanceStrongText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
  white-space: nowrap;
`;

/* 보조 텍스트 */
export const AttendanceSubText = styled.span`
  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
`;

/* BookmarkList CSS */

/* 카드 */
export const BookmarkWrapper = styled(CardBox)`
  width: 984px;
  height: 201px;
  padding: 20px 28px 16px;
`;

/* 표 헤더 */
export const BookmarkHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

/* 표 행 */
export const BookmarkRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 70px 70px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f3f4f6;
`;

/* MypostList CSS */

/* 카드 */
export const MyPostWrapper = styled(CardBox)`
  width: 984px;
  min-height: 220px;
  padding: 20px 28px 15px;
`;

/* 표 헤더 */
export const MyPostHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

/* 표 행 */
export const MyPostRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px 70px 70px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f3f4f6;
`;

/* FollowList CSS */

/* 카드 */
export const FollowWrapper = styled(CardBox)`
  width: 984px;
  min-height: 266px;
  padding: 21px 28px 24px;
`;

/* 팔로우 제목 영역 */
export const FollowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

/* 팔로우 제목 */
export const FollowTitle = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 인원 뱃지 */
export const CountBadge = styled.span`
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
export const UserList = styled.div`
  margin-top: 9px;
  display: flex;
  gap: 12px;
`;

/* 유저 아이템 */
export const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* 프로필 이미지 */
export const Avatar = styled.div`
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
export const FollowUserName = styled.span`
  margin-top: 6px;

  font-size: ${FONT_SIZE.h12};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
  white-space: nowrap;
`;

/* 밑줄 */
export const FollowDivider = styled.div`
  height: 1px;
  margin-top: 6px;
  background: #f3f4f6;
`;

/* 팔로워 영역 */
export const FollowerBlock = styled.div`
  margin-top: 12px;
`;

/* ProfileCard CSS */

/* 카드 전체 */
export const ProfileWrapper = styled(CardBox)`
  width: 988px;
  height: 191px;
  padding: 28px 32px;

  display: flex;
  gap: 24px;
  position: relative;
`;

/* 프로필 이미지 */
export const ProfileImage = styled.div`
  width: 68px;
  height: 68px;

  border-radius: 16px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 정보 영역 */
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 이름 영역 */
export const ProfileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 이름 */
export const ProfileUserName = styled.span`
  font-size: 18px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 레벨 버튼 */
export const LevelButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

/* 레벨 뱃지 */
export const LevelBadge = styled.span`
  width: 34px;
  height: 19px;

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
export const ExpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 경험치 버튼 */
export const ExpButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

/* 경험치 바 */
export const ExpBar = styled.div`
  width: 131px;
  height: 7px;

  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

/* 경험치 채움 */
export const ExpFill = styled.div`
  width: 24%;
  height: 100%;
  background: ${PALETTE.primary.main};
`;

/* 경험치 텍스트 */
export const ExpText = styled.span`
  width: 55px;

  font-size: 8px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 개인정보 영역 */
export const DetailArea = styled.div`
  display: flex;
  gap: 72px;
`;

/* 개인정보 열 */
export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 개인정보 행 */
export const ProfileRow = styled.div`
  display: flex;
  gap: 10px;
`;

/* 개인정보 라벨 */
export const ProfileLabel = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

/* 개인정보 값 */
export const ProfileValue = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 수정 버튼 */
export const EditButton = styled.button`
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
export const QuickMenuWrapper = styled.div`
  width: 312px;
  min-height: 166px;
  padding: 13px 17px 10px;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 제목 */
export const QuickMenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
export const QuickMenuDivider = styled.div`
  height: 1px;
  margin-top: 9px;
  background: #f3f4f6;
`;

/* 메뉴 그리드 */
export const MenuGrid = styled.div`
  margin-top: 9px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

/* 메뉴 버튼 */
export const MenuButton = styled.button`
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
export const StudyStatusWrapper = styled(CardBox)`
  width: 312px;
  height: 181px;
  padding: 18px 20px 36px;
`;

/* 제목 */
export const StudyStatusTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
export const StudyStatusDivider = styled.div`
  height: 1px;
  margin-top: 8px;
  background: #f3f4f6;
`;

/* 리스트 */
export const StudyStatusList = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* 한 줄 */
export const StudyStatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* 단계명 */
export const StudyStatusLabel = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 퍼센트 */
export const StudyStatusPercent = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* 진행 바 */
export const ProgressBar = styled.div`
  width: 256px;
  height: 7px;
  margin-top: 8px;

  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

/* 진행률 */
export const ProgressFill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  background: ${PALETTE.primary.main};
`;

/* LevelGuideModal CSS */

/* 모달 배경 */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 24, 39, 0.25);
`;

/* 모달 박스 */
export const LevelModalBox = styled.div`
  width: 534px;
  height: 270px;
  padding: 18px 28px 16px;
  box-sizing: border-box;

  background: ${PALETTE.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.12);
`;

/* 모달 상단 */
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 모달 제목 */
export const ModalTitle = styled.h3`
  margin: 0;

  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 닫기 버튼 */
export const ModalCloseButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[7]};
`;

/* 밑줄 */
export const ModalDivider = styled.div`
  height: 1px;
  margin-top: 10px;
  background: #e5e7eb;
`;

/* 본문 */
export const LevelModalContent = styled.div`
  padding-top: 8px;
`;

/* 안내 제목 */
export const LevelGuideHeader = styled.div`
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
export const LevelGuideCards = styled.div`
  display: flex;
  gap: 28px;
`;

/* 안내 카드 */
export const LevelGuideCard = styled.div`
  width: 224px;
  height: 108px;
  padding: 16px 18px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};
`;

/* 안내 행 */
export const LevelGuideRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 14px;
  }
`;

/* 안내 라벨 */
export const LevelGuideLabel = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #111827;
`;

/* 경험치 */
export const LevelGuideValue = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 안내 문구 */
export const LevelNoticeBox = styled.div`
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