import React from "react";
import LiveChatCard from "./chatComponents/LiveChatCard";
import S from "../communityStyle";
import T from "../communityTextStyle";
import styled from "styled-components";
import { flexCenterRow } from "../../../styles/common";
import { useChatContext } from "../context/ChatContext";

const HeaderBlock = styled.div`
  ${flexCenterRow}
  justify-content: space-between;
  width: 100%;
`;

// TODO: API 연결 시 서버에서 받아온 데이터로 교체
const MOCK_ROOMS = [
  {
    id: 1,
    title: "수어 학습 질문방",
    description: "수어 학습 중 궁금한 점을 함께 해결해요. 초보자도 편하게!",
    participantCount: 24,
  },
  {
    id: 2,
    title: "일상 수어 대화방",
    description: "일상적인 수어 표현을 자유롭게 연습하는 공간이에요.",
    participantCount: 15,
  },
  {
    id: 3,
    title: "수어 기초반",
    description: "수어를 처음 배우는 분들을 위한 입문 대화방입니다.",
    participantCount: 8,
  },
  {
    id: 4,
    title: "수어 고급반",
    description: "심화 수어 학습을 원하시는 분들 모여요!",
    participantCount: 5,
  },
  {
    id: 5,
    title: "청각장애인 소통방",
    description: "편하게 소통하고 일상을 나눠요.",
    participantCount: 31,
  },
  {
    id: 6,
    title: "수어 선생님 Q&A",
    description: "선생님께 직접 질문해보세요!",
    participantCount: 12,
  },
];

const CommunityChatComponent = () => {
  const { openChatRoom } = useChatContext();

  return (
    <div>
      <S.ColumnBlock>
        {/* 상단 헤더 */}
        <HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <S.ActionBtn $type="submit">+채팅방 만들기</S.ActionBtn>
        </HeaderBlock>

        {/* 채팅방 카드 목록 */}
        <S.RowBlock flexWrap="wrap">
          {MOCK_ROOMS.map((room) => (
            <LiveChatCard
              key={room.id}
              title={room.title}
              description={room.description}
              participantCount={room.participantCount}
              onJoin={() => openChatRoom(room)}
            />
          ))}
        </S.RowBlock>
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityChatComponent;
