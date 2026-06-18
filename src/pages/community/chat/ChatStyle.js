// 채팅과 관련된 각종 스타일 들을 모아놓는 곳

import styled from "styled-components";
import { colors, fonts, radius } from "../constants";
import T from "../communityTextStyle";
import {
  flexCenterColumn,
  flexCenterRow,
  h11Bold,
  h12Bold,
  h12Regular,
} from "../../../styles/common";
import theme from "../../../styles/theme";

export const ORANGE = "#ff8004";
export const ORANGE_LIGHT = "#fff3e8";
export const ORANGE_DARK = "#92400e";

// ─── Page wrapper ──────────────────────────────────────────────────────────────

const PageBg = styled.div`
  background: ${colors.bgPopupOverlay};
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 73px 0 40px;
`;

const Popup = styled.div`
  width: 872px;
  /* display: flex;
  flex-direction: column; */
  ${flexCenterColumn}
  position: relative;
  overflow: hidden;
`;

// 팝업 채팅방
// ─── Header ────────────────────────────────────────────────────────────────────

// 채팅방 자체 해더
const Header = styled.div`
  background: linear-gradient(
    175.28deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 72px;
`;

const HeaderLeft = styled.div`
  ${flexCenterRow}
  gap: 36px;
`;

const ProfileArea = styled.div`
  ${flexCenterRow}
  gap: 12px;
`;

const RoomProfileBox = styled.div`
  background: ${colors.tagOnPrimary};
  border: 1px solid ${colors.tagOnPrimaryBorder};
  border-radius: ${radius.button};
  padding: 8px;
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const RoomTitle = styled(T.H9Bold).attrs({ $color: colors.textWhite })``;

const RoomSubText = styled(T.H11Regular).attrs({
  $color: colors.border,
})``;

const MessageStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 122px;
`;

const LiveBadge = styled.div`
  background: ${colors.tagOnPrimary};
  border: 1px solid ${colors.tagOnPrimaryBorder};
  border-radius: ${radius.pill};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  align-self: flex-start;
`;

const LiveIcon = styled.img`
  width: 8px;
  height: 8px;
`;

const LiveText = styled(T.H12Bold).attrs({ $color: colors.textWhite })``;

const TodayMsgRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;

const TodayMsgText = styled(T.H11Regular).attrs({
  $color: colors.border,
})``;

const HeaderRight = styled.div`
  ${flexCenterRow}
  gap: 6px;
`;

// 팝업채팅방 헤더 우측 버튼

const LeaveBtn = styled.button`
  background: ${colors.dangerOverlay};
  border: none;
  border-radius: 6px;
  height: 30px;
  width: 80px;
  cursor: pointer;
  ${h12Regular}
  color: ${colors.textWhite};
  text-align: center;
  line-height: 1;
`;

const MinimizeBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: ${colors.textWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 10px;
  flex-shrink: 0;
`;

const CloseBtn = styled(MinimizeBtn)`
  background: rgba(255, 80, 80, 0.5);
`;

// ─── Body ──────────────────────────────────────────────────────────────────────

const Body = styled.div`
  display: flex;
  align-items: stretch;
  height: 540px;
`;

// ─── Left panel ────────────────────────────────────────────────────────────────

const LeftPanel = styled.div`
  width: 200px;
  background: ${colors.bgSection};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 0 ${radius.card};
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 16px;
`;

const ParticipantHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ParticipantLabel = styled(T.H11Bold).attrs({
  $color: colors.textSub,
})``;

const CountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  ${h12Bold}
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  width: 100%;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 8px;
  background: ${({ $selected }) =>
    $selected ? colors.primaryLight : "transparent"};
  transition: background 0.15s;
  &:hover {
    background: ${colors.primaryLight};
  }
`;

const UserProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

const AvatarImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: ${({ $isIcon }) => ($isIcon ? "contain" : "cover")};
  background: ${colors.bgSection};
  padding: ${({ $isIcon }) => ($isIcon ? "6px" : "0")};
`;

const OnlineDot = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6px;
  height: 6px;
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
`;

const UserNameText = styled(T.H11Bold).attrs({ $color: colors.textMain })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRoleText = styled(T.H12Regular).attrs({
  $color: colors.textSub,
})``;

const LevelBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 2px 6px;
  ${h12Bold}
  color: ${colors.primary};
  white-space: nowrap;
`;

// ─── Center panel ──────────────────────────────────────────────────────────────

const CenterPanel = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  min-height: 0;
`;

const MessagesArea = styled.div`
  flex: 1;
  min-height: 0;
  background: ${theme.GRAYSCALE[10]};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  overflow-y: auto;
`;

const OtherMsgWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const MsgAvatar = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 100%;
`;

const MsgContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 206px;
`;

const SenderName = styled(T.H11Bold).attrs({ $color: colors.textSub })``;

const MsgTimeRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const OtherBubble = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 188px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
`;

const OtherBubbleText = styled(T.H10Regular).attrs({
  $color: colors.textMain,
})``;

const MsgTime = styled(T.H11Regular).attrs({ $color: colors.textSub })`
  white-space: nowrap;
`;

const MyMsgRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;
`;

const MyBubble = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 188px;
`;

const MyBubbleText = styled(T.H10Regular).attrs({
  $color: colors.textWhite,
})``;

const InputArea = styled.div`
  background: ${colors.bgCard};
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AttachRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AttachIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AttachIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const AttachDivider = styled.div`
  width: 1px;
  height: 16px;
  background: ${colors.border};
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextInputBox = styled.div`
  flex: 1;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 8px 10px;
`;

const InputPlaceholder = styled(T.H10Regular).attrs({
  $color: colors.textSub,
})`
  white-space: nowrap;
`;

const SendBtn = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.input};
  padding: 8px 10px;
  cursor: pointer;
  color: ${colors.textWhite};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ─── Right panel ───────────────────────────────────────────────────────────────

const RightPanel = styled.div`
  width: 200px;
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 ${radius.card} 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* 채팅방 기본 정보 패널 — 내용이 패널 높이를 초과하면 세로 스크롤 */
const RightPanelScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: ${colors.bgCard};

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 3px;
  }
`;

const PanelSection = styled.div`
  background: ${colors.bgCard};
  border-left: 1px solid ${colors.border};
  border-bottom: ${({ $last }) =>
    $last ? "none" : `1px solid ${colors.border}`};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || "8px"};
  align-items: ${({ $center }) => ($center ? "center" : "flex-start")};
  flex: ${({ $flex }) => $flex || "none"};
`;

const SectionLabel = styled(T.H12Bold).attrs({ $color: colors.textSub })`
  width: 100%;
`;

const RoomProfileImg = styled.div`
  background: ${colors.bgSection};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
`;

const RoomTitleCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 100%;
`;

const RoomTitleText = styled(T.H9Bold).attrs({ $color: colors.textMain })`
  text-align: center;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LiveStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LiveDot = styled.img`
  width: 8px;
  height: 8px;
`;

const LiveLabel = styled(T.H12Bold).attrs({ $color: colors.live })``;

const ParticipantCount = styled(T.H12Regular).attrs({
  $color: colors.textSub,
})``;

const IntroText = styled.div``;

const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 8px;
`;

const Tag = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: ${radius.pill};
  padding: 2px 8px;
  font-weight: ${fonts.weight.bold};
  font-size: 8px;

  color: ${({ $color }) => $color};
  white-space: nowrap;
`;

/* 접근성 도구 섹션 — 라벨 + 토글 가로 배치 */
const AccessRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AccessLabel = styled(T.H11Regular).attrs({
  $color: colors.textMain,
})``;

// ─── ChatRoomUserInfo ───────────────────────────────────────────────────────────

const UserInfoTopSection = styled.div`
  background: ${colors.bgCard};
  border-left: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding: 19px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const UserInfoSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const UserInfoSectionTitle = styled(T.H9Bold).attrs({
  $color: colors.textMain,
})``;

const UserBigAvatarBox = styled.div`
  width: 64px;
  height: 64px;
  background: ${colors.primaryLight};
  border-radius: ${radius.button};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ $isIcon }) => ($isIcon ? "contain" : "cover")};
    padding: ${({ $isIcon }) => ($isIcon ? "12px" : "0")};
    box-sizing: border-box;
  }
`;

const UserInfoName = styled(T.H9Bold).attrs({ $color: colors.textMain })`
  text-align: center;
`;

const LevelRoleBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 4px 12px;
  ${h11Bold}
  color: ${colors.primary};
  white-space: nowrap;
`;

const ActionDescText = styled(T.H11Regular).attrs({
  $color: colors.textMain,
})``;

const ReportCard = styled.div`
  background: ${ORANGE_LIGHT};
  border-radius: 16px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const ReportCardTitle = styled(T.H11Bold).attrs({ $color: ORANGE })``;

const ReportCardDesc = styled(T.H11Regular).attrs({
  $color: ORANGE_DARK,
})``;

// ─── UserInfoMiniPopup ─────────────────────────────────────────────────────────

const MiniPopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const MiniPopupCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 24px 20px 20px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
`;

const MiniPopupCloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.textSub};
  font-size: 14px;
  line-height: 1;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &:hover {
    background: ${colors.bgSection};
  }
`;

const MiniPopupBtnGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > * {
    width: 100%;
  }
`;

// ─── PopupChatRoomSelect ───────────────────────────────────────────────────────

const POPUP_OVERLAY = "rgba(0, 0, 0, 0.45)";
const INACTIVE_BORDER = "#8d8d8d";

const SelectPageBg = styled.div`
  background: ${POPUP_OVERLAY};
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 73px 0 40px;
`;

const SelectPopup = styled.div`
  width: 872px;
  height: 644px;
  display: flex;
  flex-direction: column;
`;

const SelectHeader = styled.div`
  background: linear-gradient(
    169.4deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const HeaderTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textWhite};
  margin: 0;
`;

const HeaderBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

// const SelectCloseBtn = styled.button`
//   background: ${colors.dangerOverlay};
//   border: none;
//   border-radius: 6px;
//   width: 20px;
//   height: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   padding: 5px 6px;
//   img {
//     width: 8px;
//     height: 9px;
//     object-fit: contain;
//   }
// `;

const SelectBody = styled.div`
  display: flex;
  height: 460px;
`;

const SelectLeftPanel = styled.div`
  width: 312px;
  /* height: 100%; */
  flex-shrink: 0;
  background: ${colors.bgSection};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 0 ${radius.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 16px;
`;

const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PanelLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
`;

const SelectCountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  letter-spacing: -0.2px;
`;

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

const RoomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: ${radius.input};
  background: ${colors.bgSection};
  border: 2px solid
    ${({ $active }) => ($active ? colors.primary : "transparent")};
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${colors.primaryMid};
  }
`;

const RoomItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RoomIconBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RoomMetaCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoomNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SelectLiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.live};
  flex-shrink: 0;
`;

const SelectLiveLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.live};
  letter-spacing: -0.24px;
  margin: 0;
`;

const RoomCountText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

const SelectUserList = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow-y: auto;
`;

const SelectUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const UserAvatarBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
`;

const SelectUserNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

const FilterTabsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 13px;
`;

const FilterTab = styled.button`
  background: ${({ $active }) =>
    $active ? colors.primaryLight : colors.bgCard};
  border: 1px solid
    ${({ $active }) => ($active ? colors.primary : INACTIVE_BORDER)};
  border-radius: ${radius.sm};
  padding: 8px 16px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${({ $active }) => ($active ? colors.primary : colors.textMain)};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
`;

const SelectRightPanel = styled.div`
  flex: 1;
  min-width: 0;
  background: ${colors.bgSection};
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 ${radius.card} 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 16px;
`;

const OngoingRoomList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const OngoingRoomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const OngoingProfileBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OngoingRoomInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const OngoingRoomTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  white-space: nowrap;
`;

const OngoingRoomNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OngoingRoomName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

const OngoingRoomCount = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

const OngoingLastTime = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
`;

const OngoingLastMsg = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  PageBg,
  Popup,
  Header,
  HeaderLeft,
  ProfileArea,
  RoomProfileBox,
  RoomInfo,
  RoomTitle,
  RoomSubText,
  MessageStatus,
  LiveBadge,
  LiveIcon,
  LiveText,
  TodayMsgRow,
  TodayMsgText,
  HeaderRight,
  LeaveBtn,
  MinimizeBtn,
  CloseBtn,
  Body,
  LeftPanel,
  ParticipantHeader,
  ParticipantLabel,
  CountBadge,
  Divider,
  UserList,
  UserItem,
  UserProfileRow,
  AvatarWrap,
  AvatarImg,
  OnlineDot,
  UserMeta,
  UserNameText,
  UserRoleText,
  LevelBadge,
  CenterPanel,
  MessagesArea,
  OtherMsgWrap,
  MsgAvatar,
  MsgContentCol,
  SenderName,
  MsgTimeRow,
  OtherBubble,
  OtherBubbleText,
  MsgTime,
  MyMsgRow,
  MyBubble,
  MyBubbleText,
  InputArea,
  AttachRow,
  AttachIcons,
  AttachIcon,
  AttachDivider,
  InputRow,
  TextInputBox,
  InputPlaceholder,
  SendBtn,
  RightPanel,
  RightPanelScroll,
  PanelSection,
  SectionLabel,
  RoomProfileImg,
  RoomTitleCenter,
  RoomTitleText,
  StatusRow,
  LiveStatusRow,
  LiveDot,
  LiveLabel,
  ParticipantCount,
  IntroText,
  TagGrid,
  Tag,
  AccessRow,
  AccessLabel,
  UserInfoTopSection,
  UserInfoSectionHeader,
  UserInfoSectionTitle,
  UserBigAvatarBox,
  UserInfoName,
  LevelRoleBadge,
  ActionDescText,
  ReportCard,
  ReportCardTitle,
  ReportCardDesc,
  MiniPopupOverlay,
  MiniPopupCard,
  MiniPopupCloseBtn,
  MiniPopupBtnGroup,
  SelectPageBg,
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  // SelectCloseBtn,
  SelectBody,
  SelectLeftPanel,
  PanelTop,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  RoomList,
  RoomItem,
  RoomItemLeft,
  RoomIconBox,
  RoomMetaCol,
  RoomNameText,
  LiveRow,
  SelectLiveDot,
  SelectLiveLabel,
  RoomCountText,
  SelectUserList,
  SelectUserItem,
  UserAvatarBox,
  SelectUserNameText,
  FilterTabsRow,
  FilterTab,
  SelectRightPanel,
  OngoingRoomList,
  OngoingRoomItem,
  OngoingProfileBox,
  OngoingRoomInfo,
  OngoingRoomTopRow,
  OngoingRoomNameRow,
  OngoingRoomName,
  OngoingRoomCount,
  OngoingLastTime,
  OngoingLastMsg,
};
