// import React, { useState } from "react";
// import styled from "styled-components";
// import CommentItem from "./CommentItem";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, RADIUS } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../../styles/theme";
import { FONT_FAMILY, RADIUS } from "../../../constants";
import { useState } from "react";
import CommentItem from "./CommentItem";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const profileImg1 =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const profileImg2 =
  "https://www.figma.com/api/mcp/asset/491962d2-cd51-4e18-a625-fd4324bdaeec";
const defaultAvatarImg =
  "https://www.figma.com/api/mcp/asset/cb1e934a-35f4-4b63-abf6-44baea169a05";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CommentTitle = styled.h2`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h5};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.56px;
  margin: 0;
`;

const CountBadge = styled.span`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h12};
  letter-spacing: -0.2px;
  border-radius: ${RADIUS.pill};
  padding: 4px 8px;
  white-space: nowrap;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 97px;
  border: 1px solid ${PALETTE.primary.main};
  border-radius: ${RADIUS.input};
  padding: 16px 24px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;
  resize: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${PALETTE.primary.dark};
  }
`;

const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  padding: 8px 30px;
  border-radius: ${RADIUS.sm};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: ${PALETTE.primary.dark};
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MOCK_COMMENTS = [
  {
    id: 1,
    avatar: defaultAvatarImg,
    authorName: "영상러이소희",
    isAuthor: false,
    isReply: false,
    lines: [
      "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕",
      "영상도 꼭 올려주세요! 기다릴게요 📹",
    ],
    likes: 1,
    replies: 1,
    time: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 2,
    avatar: profileImg2,
    authorName: "댓글 작성 유저",
    isAuthor: false,
    isReply: false,
    lines: [
      "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕",
      "영상도 꼭 올려주세요! 기다릴게요 📹ㅇㅇ",
    ],
    likes: 1,
    replies: 1,
    time: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 3,
    avatar: profileImg1,
    authorName: "게시글 작성자 (글 작성자)",
    isAuthor: true,
    isReply: true,
    lines: [
      "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕",
      "영상도 꼭 올려주세요! 기다릴게요 📹ㅇㅇ",
    ],
    likes: 1,
    replies: 1,
    time: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 4,
    avatar: defaultAvatarImg,
    authorName: "영상러이소희",
    isAuthor: false,
    isReply: false,
    lines: [
      "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕",
      "영상도 꼭 올려주세요! 기다릴게요 📹",
    ],
    likes: 1,
    replies: 1,
    time: "2시간 전",
    showAccessibility: true,
  },
];

const CommentSection = ({ commentCount = 247, comments = MOCK_COMMENTS }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
  };

  return (
    <Wrapper>
      <HeaderRow>
        <CommentTitle>댓글</CommentTitle>
        <CountBadge>{commentCount}</CountBadge>
      </HeaderRow>

      <TextArea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="따뜻한 댓글을 남겨보세요"
      />

      <SubmitRow>
        <SubmitButton onClick={handleSubmit}>댓글 등록</SubmitButton>
      </SubmitRow>

      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </CommentList>
    </Wrapper>
  );
};

export default CommentSection;
