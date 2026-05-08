import React, { useState } from "react";
import { colors } from "../../constants";
import OutlineButton from "../../common/OutlineButton";
import ToggleSwitch from "../../common/ToggleSwitch";
import { H11Regular } from "../../communityTextStyle";
import {
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
} from "../ChatStyle";

const roomProfileUrl =
  "https://www.figma.com/api/mcp/asset/4597fd24-1f77-4b23-a97f-9d0612d37539";
const liveVectorUrl =
  "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7";

const PopupRoomInfoPanel = ({ tags, onLeave }) => {
  const [signToggle, setSignToggle] = useState(false);
  const [readToggle, setReadToggle] = useState(false);

  return (
    <RightPanelScroll>
      <PanelSection $center $gap="12px">
        <RoomProfileImg>
          <img src={roomProfileUrl} alt="채팅방" />
        </RoomProfileImg>
        <RoomTitleCenter>
          <RoomTitleText>수어 일상 대화방</RoomTitleText>
          <StatusRow>
            <LiveStatusRow>
              <LiveDot src={liveVectorUrl} alt="" />
              <LiveLabel>라이브</LiveLabel>
            </LiveStatusRow>
            <ParticipantCount>00명</ParticipantCount>
          </StatusRow>
        </RoomTitleCenter>
      </PanelSection>

      <PanelSection>
        <SectionLabel>채팅방 소개</SectionLabel>
        <IntroText>
          <H11Regular $color={colors.textMain}>
            수어로 일상 대화를 나누는
          </H11Regular>
          <H11Regular $color={colors.textMain}>
            공간이에요. 초보자도 환영!
          </H11Regular>
          <H11Regular $color={colors.textMain}>
            서로 격려하며 함께 배워요 🌱
          </H11Regular>
        </IntroText>
      </PanelSection>

      <PanelSection $gap="9px">
        <SectionLabel>태그</SectionLabel>
        <TagGrid>
          {tags.map((tag, i) => (
            <Tag key={i} $bg={tag.bg} $color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </TagGrid>
      </PanelSection>

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

      <PanelSection $gap="8px">
        <OutlineButton borderColor={colors.border} textColor={colors.textSub}>
          채팅방 공유
        </OutlineButton>
        <OutlineButton
          borderColor={colors.live}
          textColor={colors.live}
          onClick={onLeave}
        >
          채팅방 나가기
        </OutlineButton>
      </PanelSection>

      <PanelSection $gap="8px" $last>
        <SectionLabel>채팅방 신고</SectionLabel>
        <IntroText>
          <H11Regular $color={colors.textMain}>
            만약 해당 채팅방에서 부적절한 행위
          </H11Regular>
          <H11Regular $color={colors.textMain}>
            혹은 대화가 발생한다면 아래의
          </H11Regular>
          <H11Regular $color={colors.textMain}>
            신고하기 버튼으로 신고 가능합니다.
          </H11Regular>
        </IntroText>
        <OutlineButton borderColor={colors.danger} textColor={colors.danger}>
          채팅방신고
        </OutlineButton>
      </PanelSection>
    </RightPanelScroll>
  );
};

export default PopupRoomInfoPanel;
