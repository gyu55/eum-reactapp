import React from "react";
import styled from "styled-components";
import Card from "./Card";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 섹션 */
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 카드 */
const Wrapper = styled(Card)`
  width: 984px;
  min-height: 220px;
  padding: 20px 28px 15px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px 70px 70px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f3f4f6;
`;

const HeaderText = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.span`
  width: 58px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${({ $bg }) => $bg};

  font-size: ${FONT_SIZE.h12};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
`;

const TitleText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

const NumberText = styled.span`
  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
  text-align: center;
`;

const MoreButton = styled.button`
  margin: 14px auto 0;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/*
  커뮤니티 게시글 API 연동 필요 확인용 데이터
*/
const posts = [
  {
    category: "학습 인증",
    type: "cert",
    title: "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
    like: 42,
    view: 324,
    date: "03.08",
  },
  {
    category: "학습 인증",
    type: "cert",
    title: "20일차 학습 인증 — 수어 숫자 1~100 완주!",
    like: 31,
    view: 201,
    date: "03.05",
  },
  {
    category: "수어 영상",
    type: "video",
    title: "처음으로 수어 영상 찍어봤어요 📹 (많이 어색해요ㅎㅎ)",
    like: 74,
    view: 487,
    date: "03.01",
  },
  {
    category: "학습 질문",
    type: "question",
    title: "수어에서 문장 순서가 한국어랑 다른가요?",
    like: 19,
    view: 162,
    date: "02.24",
  },
];

const getBadgeStyle = (type) => {
  if (type === "video") return { color: "#DB2777", bg: "#FCE7F3" };
  if (type === "question") return { color: "#7C3AED", bg: "#EDE9FE" };
  return { color: PALETTE.primary.main, bg: PALETTE.primary.extraLight };
};

const MypostList = () => {
  return (
    <Section>
      <SectionTitle>나의 게시글</SectionTitle>

      <Wrapper>
        <Header>
          <HeaderText>제목</HeaderText>
          <HeaderText $center>좋아요</HeaderText>
          <HeaderText $center>조회수</HeaderText>
          <HeaderText $center>날짜</HeaderText>
        </Header>

        {posts.map((post, index) => {
          const badge = getBadgeStyle(post.type);

          return (
            <Row key={index}>
              <PostTitle>
                <Badge $color={badge.color} $bg={badge.bg}>
                  {post.category}
                </Badge>
                <TitleText>{post.title}</TitleText>
              </PostTitle>

              <NumberText>{post.like}</NumberText>
              <NumberText>{post.view}</NumberText>
              <NumberText>{post.date}</NumberText>
            </Row>
          );
        })}

        <MoreButton>
          더 보기 <span>→</span>
        </MoreButton>
      </Wrapper>
    </Section>
  );
};

export default MypostList;