import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ProfileWrapper,
  ProfileImage,
  ProfileContent,
  ProfileNameRow,
  ProfileUserName,
  LevelButton,
  LevelBadge,
  ExpRow,
  ExpButton,
  ExpBar,
  ExpFill,
  ExpText,
  DetailArea,
  ProfileColumn,
  ProfileRow,
  ProfileLabel,
  ProfileValue,
  EditButton,
} from "./style";

/*
  프로필 정보는 유저 API 연동 필요
*/
const ProfileCard = ({ onLevelClick }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/mypage/edit");
  };

  return (
    <ProfileWrapper>
      <ProfileImage />

      <ProfileContent>
        <ProfileNameRow>
          <ProfileUserName>홍길동</ProfileUserName>

          <LevelButton type="button" onClick={onLevelClick}>
            <LevelBadge>Lv.7</LevelBadge>
          </LevelButton>
        </ProfileNameRow>

        <ExpRow>
          <ExpButton type="button" onClick={onLevelClick}>
            <ExpBar>
              <ExpFill />
            </ExpBar>
          </ExpButton>

          <ExpButton type="button" onClick={onLevelClick}>
            <ExpText>40 / 240 EXP</ExpText>
          </ExpButton>
        </ExpRow>

        <DetailArea>
          <ProfileColumn>
            <ProfileRow>
              <ProfileLabel>이메일</ProfileLabel>
              <ProfileValue>user123@gmail.com</ProfileValue>
            </ProfileRow>
            <ProfileRow>
              <ProfileLabel>닉네임</ProfileLabel>
              <ProfileValue>수어마스터홍길동</ProfileValue>
            </ProfileRow>
            <ProfileRow>
              <ProfileLabel>직업</ProfileLabel>
              <ProfileValue>학생</ProfileValue>
            </ProfileRow>
          </ProfileColumn>

          <ProfileColumn>
            <ProfileRow>
              <ProfileLabel>가입일</ProfileLabel>
              <ProfileValue>2025-01-15</ProfileValue>
            </ProfileRow>
            <ProfileRow>
              <ProfileLabel>지역</ProfileLabel>
              <ProfileValue>서울</ProfileValue>
            </ProfileRow>
            <ProfileRow>
              <ProfileLabel>최근 접속</ProfileLabel>
              <ProfileValue>2025-03-08</ProfileValue>
            </ProfileRow>
          </ProfileColumn>
        </DetailArea>
      </ProfileContent>

      <EditButton type="button" onClick={handleEditClick}>
        정보수정하기
      </EditButton>
    </ProfileWrapper>
  );
};

export default ProfileCard;