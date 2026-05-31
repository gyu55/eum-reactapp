import React, { useState } from "react";
import { colors } from "../../../constants";
import { useChatContext } from "../../../context/ChatContext";
import OutlineButton from "../../../common/OutlineButton";
import ToggleSwitch from "../../../common/ToggleSwitch";
import T from "../../../communityTextStyle";
import {
  RightPanelScroll,
  PanelSection,
  RoomTitleCenter,
  RoomTitleText,
  StatusRow,
  LiveStatusRow,
  LiveDot,
  LiveLabel,
  ParticipantCount,
  SectionLabel,
  IntroText,
  TagGrid,
  Tag,
  AccessRow,
  AccessLabel,
} from "../../ChatStyle";
import { PopupChatRoomInfoThumbnail } from "../../chatComponents/chatComponentStyle";
import defaultProfileImg from "../../../assets/chat/chat_default_profile.svg";

const S = {
  RightPanelScroll,
  PanelSection,
  RoomTitleCenter,
  RoomTitleText,
  StatusRow,
  LiveStatusRow,
  LiveDot,
  LiveLabel,
  ParticipantCount,
  SectionLabel,
  IntroText,
  TagGrid,
  Tag,
  AccessRow,
  AccessLabel,
};

const liveVectorUrl =
  "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7";

const PopupRoomInfoPanel = ({
  chatRoomProfile,
  chatRoomName,
  chatRoomUsers,
  chatRoomDetail,
  tags,
}) => {
  const { leaveRoom } = useChatContext();
  const [signToggle, setSignToggle] = useState(false);
  const [readToggle, setReadToggle] = useState(false);

  return (
    <S.RightPanelScroll>
      <S.PanelSection $center $gap="12px">
        <PopupChatRoomInfoThumbnail
          src={chatRoomProfile || defaultProfileImg}
          alt="채팅방"
          onError={(e) => {
            e.target.src = defaultProfileImg;
          }}
        />
        <S.RoomTitleCenter>
          <S.RoomTitleText>{chatRoomName ?? "채팅방"}</S.RoomTitleText>
          <S.StatusRow>
            <S.LiveStatusRow>
              <S.LiveDot src={liveVectorUrl} alt="" />
              <S.LiveLabel>라이브</S.LiveLabel>
            </S.LiveStatusRow>
            <S.ParticipantCount>{chatRoomUsers ?? 0}명</S.ParticipantCount>
          </S.StatusRow>
        </S.RoomTitleCenter>
      </S.PanelSection>

      {chatRoomDetail && (
        <S.PanelSection>
          <S.SectionLabel>채팅방 소개</S.SectionLabel>
          <S.IntroText>
            <T.H11Regular $color={colors.textMain}>
              {chatRoomDetail}
            </T.H11Regular>
          </S.IntroText>
        </S.PanelSection>
      )}

      <S.PanelSection $gap="9px">
        <S.SectionLabel>태그</S.SectionLabel>
        <S.TagGrid>
          {tags.map((tag, i) => (
            <S.Tag key={i} $bg={tag.bg} $color={tag.color}>
              {tag.label}
            </S.Tag>
          ))}
        </S.TagGrid>
      </S.PanelSection>

      <S.PanelSection $gap="8px">
        <S.SectionLabel>접근성 도구</S.SectionLabel>
        <S.AccessRow>
          <S.AccessLabel>수어 자동 변환</S.AccessLabel>
          <ToggleSwitch
            checked={signToggle}
            onChange={() => setSignToggle((v) => !v)}
            activeColor={colors.accessibilitySign}
          />
        </S.AccessRow>
        <S.AccessRow>
          <S.AccessLabel>메세지 읽어주기</S.AccessLabel>
          <ToggleSwitch
            checked={readToggle}
            onChange={() => setReadToggle((v) => !v)}
            activeColor={colors.accessibilityRead}
          />
        </S.AccessRow>
      </S.PanelSection>

      <S.PanelSection $gap="8px">
        <OutlineButton borderColor={colors.border} textColor={colors.textSub}>
          채팅방 공유
        </OutlineButton>
        <OutlineButton
          borderColor={colors.live}
          textColor={colors.live}
          onClick={leaveRoom}
        >
          채팅방 나가기
        </OutlineButton>
      </S.PanelSection>

      <S.PanelSection $gap="8px" $last>
        <S.SectionLabel>채팅방 신고</S.SectionLabel>
        <S.IntroText>
          <T.H11Regular $color={colors.textMain}>
            만약 해당 채팅방에서 부적절한 행위
          </T.H11Regular>
          <T.H11Regular $color={colors.textMain}>
            혹은 대화가 발생한다면 아래의
          </T.H11Regular>
          <T.H11Regular $color={colors.textMain}>
            신고하기 버튼으로 신고 가능합니다.
          </T.H11Regular>
        </S.IntroText>
        <OutlineButton borderColor={colors.danger} textColor={colors.danger}>
          채팅방신고
        </OutlineButton>
      </S.PanelSection>
    </S.RightPanelScroll>
  );
};

export default PopupRoomInfoPanel;
