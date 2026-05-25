import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  background-color: ${theme.PALETTE.white};
  position: relative;
  overflow: hidden;
  height: 650px;
`;

const BlobGreen = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -120px;
  top: 100px;
  width: 400px;
  height: 400px;
  background-color: #a8f0d8;
  filter: blur(110px);
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
`;

const BlobBlue = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -100px;
  top: -80px;
  width: 520px;
  height: 520px;
  background-color: #7eb8ff;
  filter: blur(140px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const BlobOrange = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 460px;
  top: 160px;
  width: 340px;
  height: 340px;
  background-color: #ffbf80;
  filter: blur(120px);
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
`;

const BlobYellow = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 700px;
  bottom: 20px;
  width: 340px;
  height: 340px;
  background-color: #ffd96b;
  filter: blur(110px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const BlobPurple = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -90px;
  right: -120px;
  width: 500px;
  height: 500px;
  background-color: #c4a8ff;
  filter: blur(130px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const BlobPink = styled.div`
  position: absolute;
  border-radius: 50%;
  right: 60px;
  bottom: -20px;
  width: 320px;
  height: 320px;
  background-color: #fbc8ff;
  filter: blur(100px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  height: 100%;
  position: relative;
  gap: 60px;
  /* z-index: 1; */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 0 0 560px;
  text-align: center;
`;

const TitleBlack = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: 54px;
  line-height: 64px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
  color: ${theme.PALETTE.black};
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: 84px;
  line-height: 96px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
  color: ${theme.PALETTE.primary.main};
  margin: 0;
`;

const Description = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.medium};
  line-height: 30px;
  letter-spacing: -0.32px;
  color: ${theme.TEXT_COLOR.basic};
  margin: 0;
  text-align: center;
`;

const StatisticsSection = styled.div`
  display: flex;
  gap: 52px;
  align-items: center;
  margin-top: 8px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatNumber = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.48px;
  color: ${theme.PALETTE.primary.main};
  margin: 0;
`;

const StatLabel = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  flex: 0 0 360px;
`;

const EventItem = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${theme.PALETTE.primary.light};
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(67, 89, 252, 0.06);
`;

const EventText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${theme.PALETTE.primary.dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommunityHeaderA = () => {
  console.log("헤더 빌드");
  return (
    <Container>
      <BlobGreen />
      <BlobBlue />
      <BlobOrange />
      <BlobYellow />
      <BlobPurple />
      <BlobPink />
      <Inner>
        <MainSection>
          <LeftSection>
            <TitleBlack>함께 배우고 성장하는</TitleBlack>
            <Title>이음 커뮤니티</Title>
            <Description>
              청각장애인, 수어 학습자, 교사 모두가 함께하는 따뜻한 소통
              공간입니다.
            </Description>
            <StatisticsSection>
              <StatItem>
                <StatNumber>78</StatNumber>
                <StatLabel>전체 회원</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>18</StatNumber>
                <StatLabel>오늘 게시글</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>21</StatNumber>
                <StatLabel>지금 접속중</StatLabel>
              </StatItem>
            </StatisticsSection>
          </LeftSection>

          <RightSection>
            <EventItem>
              <EventText>이달의 베스트 작성자 모집 중</EventText>
            </EventItem>
            <EventItem>
              <EventText>수어 챌린지 이벤트</EventText>
            </EventItem>
            <EventItem>
              <EventText>자격시험 응시료 한시적 할인 (최대 80%)</EventText>
            </EventItem>
          </RightSection>
        </MainSection>
      </Inner>
    </Container>
  );
};

export default CommunityHeaderA;
