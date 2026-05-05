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
  height: 201px;
  padding: 20px 28px 16px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 70px 70px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f3f4f6;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 70px 70px;
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
  커뮤니티 즐겨찾기 API 연동 필요 확인용 데이터
*/
const bookmarks = [
  {
    category: "학습 인증",
    type: "study",
    title: "이음 앱 학습 100일 달성 후기! 정말 변화가 느껴져요",
    author: "이음선생님",
    like: 134,
    view: 892,
  },
  {
    category: "취업·진로",
    type: "career",
    title: "수어 통역사가 되는 방법 — 현직자가 알려드려요",
    author: "수어마스터",
    like: 97,
    view: "1.2k",
  },
  {
    category: "자유게시판",
    type: "free",
    title: "이음 앱 꿀팁 모음 — 이렇게 쓰면 훨씬 효율적이에요",
    author: "열공함",
    like: 56,
    view: 330,
  },
];

const getBadgeStyle = (type) => {
  if (type === "career") return { bg: "#FFF7ED", color: PALETTE.warning.main };
  if (type === "free") return { bg: PALETTE.primary.extraLight, color: PALETTE.primary.main };
  return { bg: "#DCFCE7", color: PALETTE.secondary.main };
};

const BookmarkList = () => {
  return (
    <Section>
      <SectionTitle>즐겨찾기</SectionTitle>

      <Wrapper>
        <Header>
          <HeaderText>제목</HeaderText>
          <HeaderText $center>작성자</HeaderText>
          <HeaderText $center>좋아요</HeaderText>
          <HeaderText $center>조회수</HeaderText>
        </Header>

        {bookmarks.map((bookmark, index) => {
          const badge = getBadgeStyle(bookmark.type);

          return (
            <Row key={index}>
              <PostTitle>
                <Badge $bg={badge.bg} $color={badge.color}>
                  {bookmark.category}
                </Badge>
                <TitleText>{bookmark.title}</TitleText>
              </PostTitle>

              <NumberText>{bookmark.author}</NumberText>
              <NumberText>{bookmark.like}</NumberText>
              <NumberText>{bookmark.view}</NumberText>
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

export default BookmarkList;