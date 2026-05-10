// 채팅과 관련된 각종 스타일 들을 모아놓는 곳

import styled from "styled-components";
import { colors, fonts, radius } from "../constants";
import {
  H9Bold,
  H11Bold,
  H11Regular,
  H12Bold,
  H12Regular,
} from "../communityTextStyle";
import {
  flexBetweenRow,
  flexCenterColumn,
  flexCenterRow,
  h11Bold,
  h12Bold,
  h12Regular,
} from "../../../styles/common";

export const ORANGE = "#ff8004";
export const ORANGE_LIGHT = "#fff3e8";
export const ORANGE_DARK = "#92400e";

// ─── Page wrapper ──────────────────────────────────────────────────────────────

export const PageBg = styled.div`
  background: ${colors.bgPopupOverlay};
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 73px 0 40px;
`;

export const Popup = styled.div`
  width: 872px;
  /* display: flex;
  flex-direction: column; */
  ${flexCenterColumn}
`;

// ─── Header ────────────────────────────────────────────────────────────────────

export const Header = styled.div`
  background: linear-gradient(
    175.28deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  width: 100%;
  ${flexBetweenRow}
  padding: 12px;
`;

export const HeaderLeft = styled.div`
  ${flexCenterRow}
  gap: 36px;
`;

export const ProfileArea = styled.div`
  ${flexCenterRow}
  gap: 12px;
`;

export const RoomProfileBox = styled.div`
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

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 105px;
`;

export const RoomTitle = styled(H9Bold).attrs({ $color: colors.textWhite })``;

export const RoomSubText = styled(H11Regular).attrs({
  $color: colors.border,
})``;

export const MessageStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 122px;
`;

export const LiveBadge = styled.div`
  background: ${colors.tagOnPrimary};
  border: 1px solid ${colors.tagOnPrimaryBorder};
  border-radius: ${radius.pill};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  align-self: flex-start;
`;

export const LiveIcon = styled.img`
  width: 8px;
  height: 8px;
`;

export const LiveText = styled(H12Bold).attrs({ $color: colors.textWhite })``;

export const TodayMsgRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;

export const TodayMsgText = styled(H11Regular).attrs({
  $color: colors.border,
})``;

export const HeaderRight = styled.div`
  ${flexCenterRow}
  gap: 6px;
`;

export const LeaveBtn = styled.button`
  background: ${colors.dangerOverlay};
  border: none;
  border-radius: 6px;
  height: 20px;
  width: 79px;
  cursor: pointer;
  ${h12Regular}
  color: ${colors.textWhite};
  text-align: center;
  line-height: 1;
`;

export const MinimizeBtn = styled.button`
  background: ${colors.overlayWhite15};
  border: none;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 40%;
    height: 40%;
    object-fit: contain;
  }
`;

export const CloseBtn = styled.button`
  background: ${colors.dangerOverlay};
  border: none;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 8px;
    height: 9px;
  }
`;

// ─── Body ──────────────────────────────────────────────────────────────────────

export const Body = styled.div`
  display: flex;
  align-items: stretch;
  height: 540px;
`;

// ─── Left panel ────────────────────────────────────────────────────────────────

export const LeftPanel = styled.div`
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

export const ParticipantHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ParticipantLabel = styled(H11Bold).attrs({
  $color: colors.textSub,
})``;

export const CountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  ${h12Bold}
`;

export const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  width: 100%;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
`;

export const UserItem = styled.div`
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

export const UserProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const AvatarImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: ${({ $isIcon }) => ($isIcon ? "contain" : "cover")};
  background: ${colors.bgSection};
  padding: ${({ $isIcon }) => ($isIcon ? "6px" : "0")};
`;

export const OnlineDot = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6px;
  height: 6px;
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
`;

export const UserNameText = styled(H11Bold).attrs({ $color: colors.textMain })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserRoleText = styled(H12Regular).attrs({
  $color: colors.textSub,
})``;

export const LevelBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 2px 6px;
  ${h12Bold}
  color: ${colors.primary};
  white-space: nowrap;
`;

// ─── Center panel ──────────────────────────────────────────────────────────────

export const CenterPanel = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  min-height: 0;
`;

export const MessagesArea = styled.div`
  flex: 1;
  min-height: 0;
  background: ${colors.bgCard};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  overflow-y: auto;
`;

export const OtherMsgWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const MsgAvatar = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`;

export const MsgContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 206px;
`;

export const SenderName = styled(H12Bold).attrs({ $color: colors.textSub })``;

export const MsgTimeRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const OtherBubble = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 188px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
`;

export const OtherBubbleText = styled(H11Regular).attrs({
  $color: colors.textMain,
})``;

export const MsgTime = styled(H12Regular).attrs({ $color: colors.textSub })`
  white-space: nowrap;
`;

export const MyMsgRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;
`;

export const MyBubble = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 188px;
`;

export const MyBubbleText = styled(H11Regular).attrs({
  $color: colors.textWhite,
})``;

export const InputArea = styled.div`
  background: ${colors.bgCard};
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AttachRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AttachIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AttachIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const AttachDivider = styled.div`
  width: 1px;
  height: 16px;
  background: ${colors.border};
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TextInputBox = styled.div`
  flex: 1;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 8px 10px;
`;

export const InputPlaceholder = styled(H11Regular).attrs({
  $color: colors.textSub,
})`
  white-space: nowrap;
`;

export const SendBtn = styled.button`
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

export const RightPanel = styled.div`
  width: 200px;
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 ${radius.card} 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* 채팅방 기본 정보 패널 — 내용이 패널 높이를 초과하면 세로 스크롤 */
export const RightPanelScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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

export const PanelSection = styled.div`
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

export const SectionLabel = styled(H12Bold).attrs({ $color: colors.textSub })`
  width: 100%;
`;

export const RoomProfileImg = styled.div`
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

export const RoomTitleCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 100%;
`;

export const RoomTitleText = styled(H9Bold).attrs({ $color: colors.textMain })`
  text-align: center;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LiveStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LiveDot = styled.img`
  width: 8px;
  height: 8px;
`;

export const LiveLabel = styled(H12Bold).attrs({ $color: colors.live })``;

export const ParticipantCount = styled(H12Regular).attrs({
  $color: colors.textSub,
})``;

export const IntroText = styled.div``;

export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 8px;
`;

export const Tag = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: ${radius.pill};
  padding: 2px 8px;
  font-weight: ${fonts.weight.bold};
  font-size: 8px;

  color: ${({ $color }) => $color};
  white-space: nowrap;
`;

/* 접근성 도구 섹션 — 라벨 + 토글 가로 배치 */
export const AccessRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AccessLabel = styled(H11Regular).attrs({
  $color: colors.textMain,
})``;

// ─── ChatRoomUserInfo ───────────────────────────────────────────────────────────

export const UserInfoTopSection = styled.div`
  background: ${colors.bgCard};
  border-left: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  padding: 19px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

export const UserInfoSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const UserInfoSectionTitle = styled(H9Bold).attrs({
  $color: colors.textMain,
})``;

export const UserBigAvatarBox = styled.div`
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

export const UserInfoName = styled(H9Bold).attrs({ $color: colors.textMain })`
  text-align: center;
`;

export const LevelRoleBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 4px 12px;
  ${h11Bold}
  color: ${colors.primary};
  white-space: nowrap;
`;

export const ActionDescText = styled(H11Regular).attrs({
  $color: colors.textMain,
})``;

export const ReportCard = styled.div`
  background: ${ORANGE_LIGHT};
  border-radius: 16px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const ReportCardTitle = styled(H11Bold).attrs({ $color: ORANGE })``;

export const ReportCardDesc = styled(H11Regular).attrs({
  $color: ORANGE_DARK,
})``;

// ─── PopupChatRoomSelect ───────────────────────────────────────────────────────

const POPUP_OVERLAY = "rgba(0, 0, 0, 0.45)";
const INACTIVE_BORDER = "#8d8d8d";

export const SelectPageBg = styled.div`
  background: ${POPUP_OVERLAY};
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 73px 0 40px;
`;

export const SelectPopup = styled.div`
  width: 872px;
  display: flex;
  flex-direction: column;
`;

export const SelectHeader = styled.div`
  background: linear-gradient(
    169.4deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const HeaderTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textWhite};
  margin: 0;
`;

export const HeaderBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SelectCloseBtn = styled.button`
  background: ${colors.dangerOverlay};
  border: none;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 6px;
  img {
    width: 8px;
    height: 9px;
    object-fit: contain;
  }
`;

export const SelectBody = styled.div`
  display: flex;
  height: 460px;
`;

export const SelectLeftPanel = styled.div`
  width: 312px;
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

export const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PanelLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
`;

export const SelectCountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  letter-spacing: -0.2px;
`;

export const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const RoomItem = styled.div`
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

export const RoomItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RoomIconBox = styled.div`
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
    width: 20px;
    height: 11px;
    object-fit: contain;
  }
`;

export const RoomMetaCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RoomNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

export const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SelectLiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.live};
  flex-shrink: 0;
`;

export const SelectLiveLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.live};
  letter-spacing: -0.24px;
  margin: 0;
`;

export const RoomCountText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

export const SelectUserList = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow-y: auto;
`;

export const SelectUserItem = styled.div`
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

export const UserAvatarBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
`;

export const SelectUserNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

export const FilterTabsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 13px;
`;

export const FilterTab = styled.button`
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

export const SelectRightPanel = styled.div`
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

export const OngoingRoomList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OngoingRoomItem = styled.div`
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

export const OngoingProfileBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
`;

export const OngoingRoomInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const OngoingRoomTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  white-space: nowrap;
`;

export const OngoingRoomNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OngoingRoomName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

export const OngoingRoomCount = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

export const OngoingLastTime = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
`;

export const OngoingLastMsg = styled.p`
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
