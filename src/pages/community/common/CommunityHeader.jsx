import styled from "styled-components";
import theme from "../../../styles/theme";
import { h11Regular } from "../../../styles/common";

const imgVector =
  "https://www.figma.com/api/mcp/asset/ae9cf8c7-f2f4-48ac-a168-0f43c3f0ed15";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/6dced7bc-e9d3-45dd-906e-846871a7042b";

const Container = styled.div`
  background-color: ${theme.PALETTE.white};
  /* height: 237px; */
  position: relative;
  overflow: hidden;
`;

const ContainerColorSection = styled.div`
  background: linear-gradient(172.17deg, #0014a9 0%, #4359fc 55%, #a7b5ff 100%);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainSection = styled.div`
  /* background: linear-gradient(172.17deg, #0014a9 0%, #4359fc 55%, #a7b5ff 100%); */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 32px 300px; */
  padding-top: 32px;
  padding-bottom: 16px;
  width: 1320px;
  height: 100%;
  position: relative;
  gap: 44px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 445px;
`;

const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 51px;
  letter-spacing: -0.72px;
  color: ${theme.PALETTE.white};
  margin: 0;

  > p {
    margin: 0;
  }
`;

const Description = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.medium};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${theme.PALETTE.white};
  margin: 0;
`;

const StatisticsSection = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

const StatNumber = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.48px;
  color: ${theme.PALETTE.white};
`;

const StatLabel = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 312px;
`;

const EventItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
`;

const EventText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 22px;
  letter-spacing: -0.28px;
  color: ${theme.PALETTE.white};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VectorImage = styled.div`
  position: absolute;

  &.vector1 {
    right: 100px;
    top: -92px;
    width: 196px;
    height: 200px;
  }

  &.vector2 {
    bottom: -20px;
    right: 20px;
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CommunityHeader = () => {
  return (
    <Container>
      <ContainerColorSection>
        <MainSection>
          <LeftSection>
            <Title>
              <p>함께 배우고 성장하는</p>
              <p>이음 커뮤니티</p>
            </Title>
            <Description>
              청각장애인, 수어 학습자, 교사 모두가 함께하는 따뜻한 소통
              공간입니다.
            </Description>
            <StatisticsSection>
              <StatItem>
                <StatNumber>0000</StatNumber>
                <StatLabel>전체 회원</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>000</StatNumber>
                <StatLabel>오늘 게시글</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>00</StatNumber>
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

          <VectorImage className="vector1">
            <img alt="" src={imgVector} />
          </VectorImage>
          <VectorImage className="vector2">
            <img alt="" src={imgVector1} />
          </VectorImage>
        </MainSection>
      </ContainerColorSection>
    </Container>
  );
};

export default CommunityHeader;
