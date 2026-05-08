import React from "react";
import { colors } from "../../constants";
import OutlineButton from "../../common/OutlineButton";
import {
  RightPanelScroll,
  PanelSection,
  SectionLabel,
  Divider,
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
  ORANGE,
} from "../ChatStyle";

const PopupUserInfoPanel = ({ user, onClose }) => (
  <RightPanelScroll>
    <UserInfoTopSection>
      <UserInfoSectionHeader>
        <UserInfoSectionTitle>유저 정보</UserInfoSectionTitle>
        <Divider />
      </UserInfoSectionHeader>
      <UserBigAvatarBox $isIcon={user.iconProfile}>
        <img src={user.avatar} alt={user.name} />
      </UserBigAvatarBox>
      <UserInfoName>{user.name}</UserInfoName>
      <LevelRoleBadge>
        Lv.{user.level} · {user.role}
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
        onClick={onClose}
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
);

export default PopupUserInfoPanel;
