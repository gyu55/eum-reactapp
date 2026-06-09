import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../constants";
import OutlineButton from "../../../common/OutlineButton";
import * as S from "../../ChatStyle";
import UserReportButton from "../../../report/userreport/UserReportButton";
import defaultProfile from "../../../assets/chat/chat_default_profile.svg";
import { useChatContext } from "../../../context/ChatContext";

const UserInfoMiniPopup = ({
  id,
  userId,
  userProfile,
  userNickname,
  userExp,
  onClose,
}) => {
  const navigate = useNavigate();
  const { closeView } = useChatContext();

  const goToProfile = () => {
    navigate(`/community/profile/${userId}`);
    closeView();
  };

  console.log("팝업 유저 프로필의 유저 아이디: ", id);
  console.log("팝업 유저 프로필의 또다른 아이디: ", userId);

  return (
    <S.MiniPopupOverlay onClick={onClose}>
      <S.MiniPopupCard onClick={(e) => e.stopPropagation()}>
        <S.MiniPopupCloseBtn onClick={onClose}>✕</S.MiniPopupCloseBtn>
        <S.UserBigAvatarBox>
          <img
            src={userProfile}
            alt={userNickname}
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
        </S.UserBigAvatarBox>
        <S.UserInfoName>{userNickname}</S.UserInfoName>
        <S.LevelRoleBadge>Lv.{userExp} · 테스트</S.LevelRoleBadge>
        <S.Divider />
        <S.MiniPopupBtnGroup>
          <OutlineButton
            borderColor={colors.primary}
            textColor={colors.primary}
            padding="8px 16px"
          >
            + 팔로우
          </OutlineButton>
          <OutlineButton
            bgColor={colors.primary}
            borderColor={colors.primary}
            textColor={colors.textWhite}
            padding="8px 16px"
          >
            1:1 채팅 시작
          </OutlineButton>
          <OutlineButton
            borderColor={colors.live}
            textColor={colors.live}
            padding="8px 16px"
            onClick={goToProfile}
          >
            유저 프로필로 이동
          </OutlineButton>
        </S.MiniPopupBtnGroup>
        <S.Divider />
        <S.MiniPopupBtnGroup>
          <UserReportButton userId={id}>신고하기</UserReportButton>
          <OutlineButton
            borderColor={colors.border}
            textColor={colors.textSub}
            padding="8px 16px"
          >
            이 유저 차단하기
          </OutlineButton>
        </S.MiniPopupBtnGroup>
      </S.MiniPopupCard>
    </S.MiniPopupOverlay>
  );
};

export default UserInfoMiniPopup;
