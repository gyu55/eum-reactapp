import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const initialAlarmList = [
  {
    key: "settingReply",
    icon: "💬",
    title: "댓글 알림",
    desc: "내 게시글에 댓글이 달리면 알림을 받습니다",
    value: 0,
  },
  {
    key: "settingGood",
    icon: "♡",
    title: "좋아요 알림",
    desc: "내 게시글에 좋아요를 받으면 알림을 받습니다",
    value: 0,
  },
  {
    key: "settingBulletin",
    icon: "📢",
    title: "공지사항 알림",
    desc: "이음 서비스 공지 및 업데이트 소식을 받습니다",
    value: 0,
  },
  {
    key: "settingStudy",
    icon: "📚",
    title: "학습 리마인더",
    desc: "매일 학습 알림을 받아 학습 습관을 유지합니다",
    value: 0,
  },
  {
    key: "settingEmailPush",
    icon: "✉",
    title: "이메일 수신",
    desc: "이벤트 및 혜택 안내 이메일을 수신합니다",
    value: 0,
  },
];

const initialChatList = [
  {
    key: "settingSignDefault",
    icon: "🤟",
    title: "수어 채팅 기본 사용",
    desc: "채팅방에 들어가면 수어 채팅 UI를 기본으로 사용합니다",
    value: 0,
  },
  {
    key: "settingBrailleTranslate",
    icon: "⠿",
    title: "점자 번역 기능",
    desc: "채팅 내용을 점자 번역 형태로 함께 제공합니다",
    value: 0,
  },
  {
    key: "settingAutoScroll",
    icon: <S.ScrollArrowIcon>↕</S.ScrollArrowIcon>,
    title: "새 메시지 자동 스크롤",
    desc: "새 메시지가 오면 가장 최근 메시지 위치로 자동 이동합니다",
    value: 0,
  },
  {
    key: "settingPushNotify",
    icon: "🔔",
    title: "실시간 알림",
    desc: "새 메시지가 오면 바로 알림을 받습니다",
    value: 0,
  },
  {
    key: "settingMentionNotify",
    icon: <S.MentionIcon>@</S.MentionIcon>,
    title: "멘션 알림",
    desc: "내 이름이 언급되면 우선 알림으로 표시합니다",
    value: 0,
  },
];

const MyPageSettingComponent = () => {
  const navigate = useNavigate();

  const [alarms, setAlarms] = useState(initialAlarmList);
  const [chats, setChats] = useState(initialChatList);
  const [postOpen, setPostOpen] = useState(0);

  //    회원 설정 조회
  useEffect(() => {
    const getSetting = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage/setting", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (!result.success) {
          alert(result.message);
          return;
        }

        const setting = result.data;

        setAlarms((prev) =>
          prev.map((item) => ({
            ...item,
            value: Number(setting[item.key] || 0),
          }))
        );

        setChats((prev) =>
          prev.map((item) => ({
            ...item,
            value: Number(setting[item.key] || 0),
          }))
        );

        setPostOpen(Number(setting.settingPostOpen || 0));
      } catch (error) {
        console.error(error);
        alert("설정 정보를 불러오지 못했습니다.");
      }
    };

    getSetting();
  }, []);

  //    알림 설정 ON/OFF 변경
  const toggleAlarm = (index) => {
    setAlarms((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, value: item.value === 1 ? 0 : 1 } : item
      )
    );
  };

  //    채팅 설정 ON/OFF 변경
  const toggleChat = (index) => {
    setChats((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, value: item.value === 1 ? 0 : 1 } : item
      )
    );
  };

  //    저장 요청 데이터 생성
  const makeRequestData = () => {
    const requestData = {
      settingPostOpen: postOpen,
    };

    alarms.forEach((alarm) => {
      requestData[alarm.key] = alarm.value;
    });

    chats.forEach((chat) => {
      requestData[chat.key] = chat.value;
    });

    return requestData;
  };

  //    회원 설정 저장
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:10000/private/api/mypage/setting", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(makeRequestData()),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("설정이 저장되었습니다.");
    } catch (error) {
      console.error(error);
      alert("설정 저장 중 오류가 발생했습니다.");
    }
  };

  //    설정 취소
  const handleCancel = () => {
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
            <S.SettingItem key={alarm.key}>
              <S.ItemLeft>
                <S.ItemIcon>{alarm.icon}</S.ItemIcon>

                <S.ItemTextBox>
                  <S.ItemTitle>{alarm.title}</S.ItemTitle>
                  <S.ItemDesc>{alarm.desc}</S.ItemDesc>
                </S.ItemTextBox>
              </S.ItemLeft>

              <S.ToggleButton
                type="button"
                $active={alarm.value === 1}
                onClick={() => toggleAlarm(index)}
              >
                <S.ToggleCircle $active={alarm.value === 1} />
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
                $active={postOpen === 1}
                onClick={() => setPostOpen(1)}
              >
                공개
              </S.PostRangeButton>

              <S.PostRangeButton
                type="button"
                $active={postOpen === 0}
                onClick={() => setPostOpen(0)}
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
            <S.SettingItem key={chat.key}>
              <S.ItemLeft>
                <S.ItemIcon>{chat.icon}</S.ItemIcon>

                <S.ItemTextBox>
                  <S.ItemTitle>{chat.title}</S.ItemTitle>
                  <S.ItemDesc>{chat.desc}</S.ItemDesc>
                </S.ItemTextBox>
              </S.ItemLeft>

              <S.ToggleButton
                type="button"
                $active={chat.value === 1}
                onClick={() => toggleChat(index)}
              >
                <S.ToggleCircle $active={chat.value === 1} />
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