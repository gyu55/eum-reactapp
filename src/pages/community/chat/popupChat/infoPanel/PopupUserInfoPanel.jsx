import React from "react";
import { colors } from "../../../constants";
import OutlineButton from "../../../common/OutlineButton";
import * as S from "../../ChatStyle";
import UserReportButton from "../../../report/userreport/UserReportButton";

const PopupUserInfoPanel = ({
  id,
  userProfile,
  userNickname,
  userExp,
  onClose,
}) => (
  <S.RightPanelScroll>
    <S.UserInfoTopSection>
      <S.UserInfoSectionHeader>
        <S.UserInfoSectionTitle>유저 정보</S.UserInfoSectionTitle>
        <S.Divider />
      </S.UserInfoSectionHeader>
      <S.UserBigAvatarBox>
        <img src={userProfile} alt={userNickname} />
      </S.UserBigAvatarBox>
      <S.UserInfoName>{userNickname}</S.UserInfoName>
      <S.LevelRoleBadge>
        Lv.{userExp} · {"테스트"}
      </S.LevelRoleBadge>
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
    </S.UserInfoTopSection>

    <S.PanelSection>
      <S.SectionLabel>유저 프로필 이동</S.SectionLabel>
      <S.ActionDescText>해당 유저의 프로필로 이동합니다.</S.ActionDescText>
      <OutlineButton borderColor={colors.live} textColor={colors.live}>
        유저 프로필로 이동
      </OutlineButton>
    </S.PanelSection>

    <S.PanelSection>
      <S.SectionLabel>채팅방 프로필로 되돌아가기</S.SectionLabel>
      <S.ActionDescText>
        해당 유저 정보 열람을 종료 후 다시 채팅방 프로필 내용으로 돌아갑니다
      </S.ActionDescText>
      <OutlineButton
        borderColor={colors.danger}
        textColor={colors.danger}
        onClick={onClose}
      >
        유저 정보 열람 종료
      </OutlineButton>
    </S.PanelSection>

    <S.PanelSection $last>
      <S.ReportCard>
        <S.ReportCardTitle>⚠️ 신고 및 차단</S.ReportCardTitle>
        <S.ReportCardDesc>
          부적절한 활동이 확인되면 신고해 주세요. 운영팀이 검토합니다.
        </S.ReportCardDesc>
      </S.ReportCard>
      {/* <OutlineButton borderColor={ORANGE} textColor={ORANGE}>
        이 유저 신고하기
      </OutlineButton> */}
      <UserReportButton userId={id}>.</UserReportButton>
      <OutlineButton borderColor={colors.border} textColor={colors.textSub}>
        이 유저 차단하기
      </OutlineButton>
    </S.PanelSection>
  </S.RightPanelScroll>
);

export default PopupUserInfoPanel;
