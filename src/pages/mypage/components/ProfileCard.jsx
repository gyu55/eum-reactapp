import React from "react";
import styled from "styled-components";
import Card from "./Card";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 카드 전체 */
const Wrapper = styled(Card)`
  width: 984px;
  height: 191px;
  padding: 28px 32px;
  display: flex;
  gap: 24px;
  position: relative;
`;

/* 프로필 이미지 */
const ProfileImage = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 오른쪽 정보 영역 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 이름 + 레벨 */
const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

const LevelBadge = styled.span`
  width: 34px;
  height: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${PALETTE.primary.extraLight};

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* 경험치 */
const ExpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ExpBar = styled.div`
  width: 131px;
  height: 7px;
  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

const ExpFill = styled.div`
  width: 24%;
  height: 100%;
  background: ${PALETTE.primary.main};
`;

const ExpText = styled.span`
  width: 55px;
  font-size: 8px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 개인정보 영역 */
const DetailArea = styled.div`
  display: flex;
  gap: 72px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
`;

const Value = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 수정 버튼 */
const EditButton = styled.button`
  position: absolute;
  top: 28px;
  right: 32px;

  height: 36px;
  padding: 0 14px;

  border: 1px solid ${PALETTE.primary.main};
  border-radius: 8px;
  background: ${PALETTE.white};

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/*
  - 프로필 이미지, 이름, 레벨, 경험치, 개인정보는 백엔드 유저 API 연동 필요
*/
const ProfileCard = () => {
  return (
    <Wrapper>
      <ProfileImage />

      <Content>
        <NameRow>
          <UserName>홍길동</UserName>
          <LevelBadge>Lv.7</LevelBadge>
        </NameRow>

        <ExpRow>
          <ExpBar>
            <ExpFill />
          </ExpBar>
          <ExpText>40 / 240 EXP</ExpText>
        </ExpRow>

        <DetailArea>
          <Column>
            <Row>
              <Label>이메일</Label>
              <Value>user123@gmail.com</Value>
            </Row>
            <Row>
              <Label>닉네임</Label>
              <Value>수어마스터홍길동</Value>
            </Row>
            <Row>
              <Label>직업</Label>
              <Value>학생</Value>
            </Row>
          </Column>

          <Column>
            <Row>
              <Label>가입일</Label>
              <Value>2025-01-15</Value>
            </Row>
            <Row>
              <Label>지역</Label>
              <Value>서울</Value>
            </Row>
            <Row>
              <Label>최근 접속</Label>
              <Value>2025-03-08</Value>
            </Row>
          </Column>
        </DetailArea>
      </Content>

      <EditButton>정보수정하기</EditButton>
    </Wrapper>
  );
};

export default ProfileCard;