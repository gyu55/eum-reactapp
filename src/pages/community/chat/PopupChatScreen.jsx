import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../constants";
import OutlineButton from "../common/OutlineButton";
import ToggleSwitch from "../common/ToggleSwitch";

// Figma asset URLs (expires in 7 days)
const assets = {
  roomProfile:
    "https://www.figma.com/api/mcp/asset/4597fd24-1f77-4b23-a97f-9d0612d37539",
  liveVector:
    "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7",
  emojiIcon:
    "https://www.figma.com/api/mcp/asset/7326d7ec-d93d-4233-a0cb-6b4c1a81433e",
  imageIcon:
    "https://www.figma.com/api/mcp/asset/0e43611f-4878-4e38-a9b5-3429810282f1",
  linkIcon:
    "https://www.figma.com/api/mcp/asset/02cbb637-a056-4524-a973-dd1de4c0bc6d",
  signIcon:
    "https://www.figma.com/api/mcp/asset/e4fac756-efc7-444e-8b51-66b882636ee0",
  downloadIcon:
    "https://www.figma.com/api/mcp/asset/20ea9338-907b-444f-9835-2f74b2aa1a24",
  minimizeV:
    "https://www.figma.com/api/mcp/asset/d026f38b-0832-4a94-b0cc-5bbc2206c401",
  closeV:
    "https://www.figma.com/api/mcp/asset/633d41af-e1e1-462a-acec-b1534e4d49ad",
  onlineDot:
    "https://www.figma.com/api/mcp/asset/b33f6cd4-cc19-4c37-9250-813cb5dca21d",
  avatarBook:
    "https://www.figma.com/api/mcp/asset/08386982-c82d-42f5-af37-598a6fd8785a",
  avatar2:
    "https://www.figma.com/api/mcp/asset/83e9a63d-b47c-449f-b99b-fcf322b5e2bd",
  avatar3:
    "https://www.figma.com/api/mcp/asset/cc784c94-994e-4a8f-91f1-23642503d8d9",
  avatar4:
    "https://www.figma.com/api/mcp/asset/ba8e3192-8c1a-4388-baa8-a512da31e094",
  avatar5:
    "https://www.figma.com/api/mcp/asset/6d0896e4-c001-4785-806b-e2b3e7943f21",
  msgAvatar1:
    "https://www.figma.com/api/mcp/asset/047eac11-c15a-4d40-bf4b-3c6cc159b4de",
  msgAvatar2:
    "https://www.figma.com/api/mcp/asset/f2fad4c6-fd43-4ef4-8d70-4cf117c31970",
};

const USERS = [
  {
    id: 1,
    name: "이규학",
    role: "학습자",
    level: 7,
    avatar: assets.avatarBook,
    iconProfile: true,
    online: false,
  },
  {
    id: 2,
    name: "사용자 2",
    role: "학습자",
    level: 5,
    avatar: assets.avatar2,
    iconProfile: false,
    online: true,
  },
  {
    id: 3,
    name: "사용자 3",
    role: "학습자",
    level: 7,
    avatar: assets.avatar3,
    iconProfile: false,
    online: true,
  },
  {
    id: 4,
    name: "사용자 4",
    role: "학습자",
    level: 7,
    avatar: assets.avatar4,
    iconProfile: false,
    online: true,
  },
  {
    id: 5,
    name: "사용자 5",
    role: "학습자",
    level: 8,
    avatar: assets.avatar5,
    iconProfile: false,
    online: true,
  },
  {
    id: 6,
    name: "사용자 6",
    role: "학습자",
    level: 7,
    avatar: assets.avatarBook,
    iconProfile: true,
    online: false,
  },
];

const MESSAGES = [
  {
    id: 1,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar1,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 2,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar2,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 3,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar1,
    content:
      "여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지",
    time: "14:02",
  },
  {
    id: 4,
    type: "mine",
    content: "안녕하세요! 오늘도 열공해요 💪",
    time: "15:00",
  },
  {
    id: 5,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar2,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 6,
    type: "mine",
    content:
      "안녕하세요! 오늘도 열공해요 💪안녕하세요! 오늘도 열공해안녕하세요! 오늘도 열공해",
    time: "15:00",
  },
];

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

const ORANGE = "#ff8004";
const ORANGE_LIGHT = "#fff3e8";
const ORANGE_DARK = "#92400e";

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
  display: flex;
  flex-direction: column;
`;

// ─── Header ────────────────────────────────────────────────────────────────────

const Header = styled.div`
  background: linear-gradient(
    175.28deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
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
  width: 105px;
`;

const RoomTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textWhite};
  margin: 0;
`;

const RoomSubText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.border};
  margin: 0;
`;

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

const LiveText = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  letter-spacing: -0.2px;
  color: ${colors.textWhite};
`;

const TodayMsgRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;

const TodayMsgText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.border};
  letter-spacing: -0.24px;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LeaveBtn = styled.button`
  background: ${colors.dangerOverlay};
  border: none;
  border-radius: 6px;
  height: 20px;
  width: 79px;
  cursor: pointer;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  text-align: center;
  line-height: 1;
`;

const MinimizeBtn = styled.button`
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

const CloseBtn = styled.button`
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

const ParticipantLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
`;

const CountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  letter-spacing: -0.2px;
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

const UserNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.textMain};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRoleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  margin: 0;
`;

const LevelBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 2px 6px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
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
  background: ${colors.bgCard};
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
`;

const MsgContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 206px;
`;

const SenderName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
`;

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

const OtherBubbleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.textMain};
  margin: 0;
`;

const MsgTime = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
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

const MyBubbleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.textWhite};
  margin: 0;
`;

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

const InputPlaceholder = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
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

const SectionLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
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

const RoomTitleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textMain};
  text-align: center;
  margin: 0;
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

const LiveLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.live};
  letter-spacing: -0.2px;
  margin: 0;
`;

const ParticipantCount = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
`;

const IntroText = styled.div`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.textMain};
  p {
    margin: 0;
  }
`;

const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 8px;
`;

const Tag = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: ${radius.pill};
  padding: 2px 8px;
  font-family: ${fonts.family};
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

const AccessLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
  margin: 0;
`;

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

const UserInfoSectionTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.textMain};
  margin: 0;
`;

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

const UserInfoName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textMain};
  text-align: center;
  margin: 0;
`;

const LevelRoleBadge = styled.div`
  background: ${colors.primaryLight};
  border-radius: ${radius.pill};
  padding: 4px 12px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.primary};
  white-space: nowrap;
`;

const ActionDescText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.textMain};
  margin: 0;
`;

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

const ReportCardTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${ORANGE};
  margin: 0;
`;

const ReportCardDesc = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${ORANGE_DARK};
  margin: 0;
`;

// ─── Main Component ────────────────────────────────────────────────────────────

const PopupChatScreen = ({ onMinimize, onClose, onLeave }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [signToggle, setSignToggle] = useState(false);
  const [readToggle, setReadToggle] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.id === user.id ? null : user));
  };

  return (
    <PageBg>
      <Popup>
        {/* ── Header ── */}
        <Header>
          <HeaderLeft>
            <ProfileArea>
              <RoomProfileBox>
                <img src={assets.roomProfile} alt="채팅방 프로필" />
              </RoomProfileBox>
              <RoomInfo>
                <RoomTitle>학습 일상 대화방</RoomTitle>
                <RoomSubText>00명 참여 중</RoomSubText>
              </RoomInfo>
            </ProfileArea>
            <MessageStatus>
              <LiveBadge>
                <LiveIcon src={assets.liveVector} alt="" />
                <LiveText>LIVE</LiveText>
              </LiveBadge>
              <TodayMsgRow>
                <img src={assets.downloadIcon} alt="" />
                <TodayMsgText>오늘 00개 메시지</TodayMsgText>
              </TodayMsgRow>
            </MessageStatus>
          </HeaderLeft>
          <HeaderRight>
            <LeaveBtn onClick={onLeave}>채팅방 나가기</LeaveBtn>
            <MinimizeBtn onClick={onMinimize}>
              <img src={assets.minimizeV} alt="최소화" />
            </MinimizeBtn>
            <CloseBtn onClick={onClose}>
              <img src={assets.closeV} alt="닫기" />
            </CloseBtn>
          </HeaderRight>
        </Header>

        {/* ── Body ── */}
        <Body>
          {/* 참여자 리스트 */}
          <LeftPanel>
            <ParticipantHeader>
              <ParticipantLabel>참여자</ParticipantLabel>
              <CountBadge>247</CountBadge>
            </ParticipantHeader>
            <Divider />
            <UserList>
              {USERS.map((user) => (
                <UserItem
                  key={user.id}
                  $selected={selectedUser?.id === user.id}
                  onClick={() => handleUserClick(user)}
                >
                  <UserProfileRow>
                    <AvatarWrap>
                      <AvatarImg
                        src={user.avatar}
                        alt={user.name}
                        $isIcon={user.iconProfile}
                      />
                      {user.online && (
                        <OnlineDot src={assets.onlineDot} alt="" />
                      )}
                    </AvatarWrap>
                    <UserMeta>
                      <UserNameText>{user.name}</UserNameText>
                      <UserRoleText>{user.role}</UserRoleText>
                    </UserMeta>
                  </UserProfileRow>
                  <LevelBadge>Lv.{user.level}</LevelBadge>
                </UserItem>
              ))}
            </UserList>
          </LeftPanel>

          {/* 채팅 중앙부 */}
          <CenterPanel>
            <MessagesArea>
              {MESSAGES.map((msg) =>
                msg.type === "other" ? (
                  <OtherMsgWrap key={msg.id}>
                    <MsgAvatar src={msg.avatar} alt={msg.sender} />
                    <MsgContentCol>
                      <SenderName>{msg.sender}</SenderName>
                      <MsgTimeRow>
                        <OtherBubble>
                          <OtherBubbleText>{msg.content}</OtherBubbleText>
                        </OtherBubble>
                        <MsgTime>{msg.time}</MsgTime>
                      </MsgTimeRow>
                    </MsgContentCol>
                  </OtherMsgWrap>
                ) : (
                  <MyMsgRow key={msg.id}>
                    <MsgTime>{msg.time}</MsgTime>
                    <MyBubble>
                      <MyBubbleText>{msg.content}</MyBubbleText>
                    </MyBubble>
                  </MyMsgRow>
                ),
              )}
            </MessagesArea>
            <InputArea>
              <AttachRow>
                <AttachIcons>
                  <AttachIcon src={assets.emojiIcon} alt="이모지" />
                  <AttachIcon src={assets.imageIcon} alt="이미지" />
                  <AttachIcon src={assets.linkIcon} alt="링크" />
                </AttachIcons>
                <AttachDivider />
                <AttachIcon src={assets.signIcon} alt="수어" />
              </AttachRow>
              <InputRow>
                <TextInputBox>
                  <InputPlaceholder>메시지 입력...</InputPlaceholder>
                </TextInputBox>
                <SendBtn>➤</SendBtn>
              </InputRow>
            </InputArea>
          </CenterPanel>

          {/* 우측 패널 */}
          <RightPanel>
            {selectedUser ? (
              /* ChatRoomUserInfo — 유저 선택 시 */
              <RightPanelScroll>
                <UserInfoTopSection>
                  <UserInfoSectionHeader>
                    <UserInfoSectionTitle>유저 정보</UserInfoSectionTitle>
                    <Divider />
                  </UserInfoSectionHeader>
                  <UserBigAvatarBox $isIcon={selectedUser.iconProfile}>
                    <img src={selectedUser.avatar} alt={selectedUser.name} />
                  </UserBigAvatarBox>
                  <UserInfoName>{selectedUser.name}</UserInfoName>
                  <LevelRoleBadge>
                    Lv.{selectedUser.level} · {selectedUser.role}
                  </LevelRoleBadge>
                  <OutlineButton
                    borderColor={colors.primary}
                    textColor={colors.primary}
                    padding="10px 16px"
                  >
                    + 팔로우
                  </OutlineButton>
                  <OutlineButton
                    bgColor={colors.primary}
                    borderColor={colors.primary}
                    textColor={colors.textWhite}
                    padding="10px 16px"
                  >
                    1:1 채팅 시작
                  </OutlineButton>
                </UserInfoTopSection>
                <PanelSection>
                  <SectionLabel>유저 프로필 이동</SectionLabel>
                  <ActionDescText>해당 유저의 프로필로 이동합니다.</ActionDescText>
                  <OutlineButton borderColor={colors.live} textColor={colors.live}>
                    유저 프로필로 이동
                  </OutlineButton>
                </PanelSection>
                <PanelSection>
                  <SectionLabel>채팅방 프로필로 되돌아가기</SectionLabel>
                  <ActionDescText>
                    해당 유저 정보 열람을 종료 후 다시 채팅방 프로필 내용으로 돌아갑니다
                  </ActionDescText>
                  <OutlineButton
                    borderColor={colors.danger}
                    textColor={colors.danger}
                    onClick={() => setSelectedUser(null)}
                  >
                    유저 정보 열람 종료
                  </OutlineButton>
                </PanelSection>
                <PanelSection $last>
                  <ReportCard>
                    <ReportCardTitle>⚠️ 신고 및 차단</ReportCardTitle>
                    <ReportCardDesc>
                      부적절한 활동이 확인되면 신고해 주세요. 운영팀이 검토합니다.
                    </ReportCardDesc>
                  </ReportCard>
                  <OutlineButton borderColor={ORANGE} textColor={ORANGE}>
                    이 유저 신고하기
                  </OutlineButton>
                  <OutlineButton borderColor={colors.border} textColor={colors.textSub}>
                    이 유저 차단하기
                  </OutlineButton>
                </PanelSection>
              </RightPanelScroll>
            ) : (
              /* 채팅방 기본 정보 패널 — 높이 초과 시 스크롤 */
              <RightPanelScroll>
                {/* 채팅방 프로필 */}
                <PanelSection $center $gap="12px">
                  <RoomProfileImg>
                    <img src={assets.roomProfile} alt="채팅방" />
                  </RoomProfileImg>
                  <RoomTitleCenter>
                    <RoomTitleText>수어 일상 대화방</RoomTitleText>
                    <StatusRow>
                      <LiveStatusRow>
                        <LiveDot src={assets.liveVector} alt="" />
                        <LiveLabel>라이브</LiveLabel>
                      </LiveStatusRow>
                      <ParticipantCount>00명</ParticipantCount>
                    </StatusRow>
                  </RoomTitleCenter>
                </PanelSection>

                {/* 채팅방 소개 */}
                <PanelSection>
                  <SectionLabel>채팅방 소개</SectionLabel>
                  <IntroText>
                    <p>수어로 일상 대화를 나누는</p>
                    <p>공간이에요. 초보자도 환영!</p>
                    <p>서로 격려하며 함께 배워요 🌱</p>
                  </IntroText>
                </PanelSection>

                {/* 태그 */}
                <PanelSection $gap="9px">
                  <SectionLabel>태그</SectionLabel>
                  <TagGrid>
                    {TAGS.map((tag, i) => (
                      <Tag key={i} $bg={tag.bg} $color={tag.color}>
                        {tag.label}
                      </Tag>
                    ))}
                  </TagGrid>
                </PanelSection>

                {/* 접근성 도구 */}
                <PanelSection $gap="8px">
                  <SectionLabel>접근성 도구</SectionLabel>
                  <AccessRow>
                    <AccessLabel>수어 자동 변환</AccessLabel>
                    <ToggleSwitch
                      checked={signToggle}
                      onChange={() => setSignToggle((v) => !v)}
                      activeColor={colors.accessibilitySign}
                    />
                  </AccessRow>
                  <AccessRow>
                    <AccessLabel>메세지 읽어주기</AccessLabel>
                    <ToggleSwitch
                      checked={readToggle}
                      onChange={() => setReadToggle((v) => !v)}
                      activeColor={colors.accessibilityRead}
                    />
                  </AccessRow>
                </PanelSection>

                {/* 채팅방 공유 / 나가기 */}
                <PanelSection $gap="8px">
                  <OutlineButton
                    borderColor={colors.border}
                    textColor={colors.textSub}
                  >
                    채팅방 공유
                  </OutlineButton>
                  <OutlineButton
                    borderColor={colors.live}
                    textColor={colors.live}
                  >
                    채팅방 나가기
                  </OutlineButton>
                </PanelSection>

                {/* 채팅방 신고 */}
                <PanelSection $gap="8px" $last>
                  <SectionLabel>채팅방 신고</SectionLabel>
                  <IntroText>
                    <p>만약 해당 채팅방에서 부적절한 행위</p>
                    <p>혹은 대화가 발생한다면 아래의</p>
                    <p>신고하기 버튼으로 신고 가능합니다.</p>
                  </IntroText>
                  <OutlineButton
                    borderColor={colors.danger}
                    textColor={colors.danger}
                  >
                    채팅방신고
                  </OutlineButton>
                </PanelSection>
              </RightPanelScroll>
            )}
          </RightPanel>
        </Body>
      </Popup>
    </PageBg>
  );
};

export default PopupChatScreen;
