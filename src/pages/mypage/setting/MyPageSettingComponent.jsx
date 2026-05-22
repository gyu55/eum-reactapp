import React, { useState } from "react";

import S from "./style";
import { useNavigate } from "react-router-dom";

const alarmList = [
  {
    icon: "💬",
    title: "댓글 알림",
    desc: "내 게시글에 댓글이 달릴 때 알림을 받습니다",
    active: true,
  },
  {
    icon: "❤️",
    title: "좋아요 알림",
    desc: "내 게시글이 좋아요를 받을 때 알림을 받습니다",
    active: true,
  },
  {
    icon: "👥",
    title: "팔로우 알림",
    desc: "새로운 팔로워가 생길 때 알림을 받습니다",
    active: true,
  },
  {
    icon: "📢",
    title: "공지사항 알림",
    desc: "이용 서비스 공지 및 업데이트 소식을 받습니다",
    active: true,
  },
  {
    icon: "📚",
    title: "학습 리마인더",
    desc: "매일 학습 알림을 받아 학습 습관을 유지합니다",
    active: false,
  },
  {
    icon: "✉️",
    title: "이메일 수신",
    desc: "이벤트 · 혜택 안내 이메일을 수신합니다",
    active: false,
  },
];

const chatList = [
  {
    icon: "✋",
    title: "수어 자동 기본 사용",
    desc: "채팅방에 들어가면 수어 채팅 UI를 기본으로 사용합니다",
    active: true,
  },
  {
    icon: "⠿",
    title: "점자 번역 기능",
    desc: "채팅 내용을 점자 번역 형태로 함께 제공합니다",
    active: true,
  },
  {
    icon: <S.ScrollArrowIcon>↧</S.ScrollArrowIcon>,
    title: "새 메시지 자동 스크롤",
    desc: "새 메시지가 오면 가장 최근 대화 위치로 자동 이동합니다",
    active: false,
  },
  {
    icon: "💬",
    title: "실시간 알림",
    desc: "새 메시지가 오면 바로 알림을 받습니다",
    active: true,
  },
  {
    icon: <S.MentionIcon>@</S.MentionIcon>,
    title: "멘션 알림",
    desc: "내 이름이 언급되면 우선 알림으로 표시합니다",
    active: true,
  },
];

const MyPageSettingComponent = () => {
  const navigate = useNavigate();
  const [alarms, setAlarms] = useState(alarmList);
  const [chats, setChats] = useState(chatList);
  const [postVisible, setPostVisible] = useState(true);

  const toggleAlarm = (index) => {
    setAlarms((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, active: !item.active } : item
      )
    );
  };

  const toggleChat = (index) => {
    setChats((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, active: !item.active } : item
      )
    );
  };

   const handleSave = () => {
    // 설정 저장 API 연동
    alert("설정이 저장되었습니다.");

    navigate("/mypage");
   };

  const handleCancel = () => {
    // 저장 전 설정값 다시 불러오기
    navigate("/mypage");
  };

  return (
    <S.SettingWrapper>
      <S.SettingHeader>
        <S.SettingTitle>설정</S.SettingTitle>
        <S.SettingDesc>
          서비스 이용 환경을 편하게 설정해 주세요
        </S.SettingDesc>
      </S.SettingHeader>

      <S.SettingCard>
        {/* 알림 설정 */}
        <S.SettingSection>
          <S.SectionTitle>알림 설정</S.SectionTitle>

          {alarms.map((alarm, index) => (
            <S.SettingItem key={alarm.title}>
              <S.ItemLeft>
                <S.ItemIcon>{alarm.icon}</S.ItemIcon>

                <S.ItemTextBox>
                  <S.ItemTitle>{alarm.title}</S.ItemTitle>
                  <S.ItemDesc>{alarm.desc}</S.ItemDesc>
                </S.ItemTextBox>
              </S.ItemLeft>

              <S.ToggleButton
                type="button"
                $active={alarm.active}
                onClick={() => toggleAlarm(index)}
              >
                <S.ToggleCircle $active={alarm.active} />
              </S.ToggleButton>
            </S.SettingItem>
          ))}
        </S.SettingSection>

        {/* 게시글 */}
        <S.SettingSection>
          <S.SectionTitle>게시글</S.SectionTitle>

          <S.SettingItem>
            <S.ItemLeft>
              <S.ItemTextBox>
                <S.ItemTitle>게시글 공개 범위</S.ItemTitle>
                <S.ItemDesc>
                  작성하는 게시글의 기본 공개 범위를 선택해 주세요
                </S.ItemDesc>
              </S.ItemTextBox>
            </S.ItemLeft>

            <S.PostButtonGroup>
              <S.PostRangeButton
                type="button"
                $active={postVisible}
                onClick={() => setPostVisible(true)}
              >
                공개
              </S.PostRangeButton>

              <S.PostRangeButton
                type="button"
                $active={!postVisible}
                onClick={() => setPostVisible(false)}
              >
                비공개
              </S.PostRangeButton>
            </S.PostButtonGroup>
          </S.SettingItem>
        </S.SettingSection>

        {/* 채팅방 설정 */}
        <S.SettingSection>
          <S.SectionTitle>채팅방 설정</S.SectionTitle>

          {chats.map((chat, index) => (
            <S.SettingItem key={chat.title}>
              <S.ItemLeft>
                <S.ItemIcon>{chat.icon}</S.ItemIcon>

                <S.ItemTextBox>
                  <S.ItemTitle>{chat.title}</S.ItemTitle>
                  <S.ItemDesc>{chat.desc}</S.ItemDesc>
                </S.ItemTextBox>
              </S.ItemLeft>

              <S.ToggleButton
                type="button"
                $active={chat.active}
                onClick={() => toggleChat(index)}
              >
                <S.ToggleCircle $active={chat.active} />
              </S.ToggleButton>
            </S.SettingItem>
          ))}
        </S.SettingSection>

        <S.ButtonArea>
          <S.CancelButton type="button" onClick={handleCancel}>
            취소
          </S.CancelButton>

          <S.SaveButton type="button" onClick={handleSave}>
            저장하기
          </S.SaveButton>
        </S.ButtonArea>
      </S.SettingCard>
    </S.SettingWrapper>
  );
};

export default MyPageSettingComponent;