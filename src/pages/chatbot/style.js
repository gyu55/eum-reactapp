import styled from "styled-components";
import theme from "../../styles/theme";

export const ChatBtn = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({ $hovered }) => ($hovered ? theme.PALETTE.white : theme.PALETTE.primary.main)};
  border: ${({ $hovered }) => ($hovered ? `2px solid ${theme.PALETTE.primary.main}` : "2px solid transparent")};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 1000;
  width: ${({ $hovered }) => ($hovered ? "180px" : "56px")};
  transition: width 0.3s ease, background-color 0.3s ease, border 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${theme.PALETTE.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const BtnLabel = styled.span`
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.medium};
  line-height: ${theme.FONT_LINE.h8};
  padding: 0 20px 0 12px;
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: opacity 0.2s ease 0.1s;
`;

/* ── Chatbot Modal ── */

const textGray = "#888888";
const noticeGray = "#aaa";

export const ModalWrap = styled.div`
  position: fixed;
  bottom: 100px;
  right: 32px;
  width: 360px;
  height: 520px;
  background-color: ${theme.PALETTE.white};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  background-color: ${theme.PALETTE.primary.main};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  color: ${theme.PALETTE.white};
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderTitle = styled.span`
  color: ${theme.PALETTE.white};
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: 14px;
`;

export const HeaderBtnRow = styled.div`
  display: flex;
  gap: 6px;
`;

export const HeaderBtn = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 11px;
  background-color: ${({ $red }) => ($red ? "#FF4444" : "rgba(255,255,255,0.25)")};
  color: ${theme.PALETTE.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ── Bot Message ── */

export const BotMessageWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const BotAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${theme.PALETTE.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const BotMessageInner = styled.div`
  flex: 1;
`;

export const BotName = styled.p`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${textGray};
  margin: 0 0 4px;
`;

export const BotBubble = styled.div`
  background-color: #f1f1f5;
  border-radius: 4px 12px 12px 12px;
  padding: 10px 14px;
  font-size: 13px;
  color: ${theme.PALETTE.black};
  line-height: 1.6;
  max-width: 85%;
  white-space: pre-line;
`;

export const BotTime = styled.p`
  font-size: ${theme.FONT_SIZE.h11};
  line-height: ${theme.FONT_LINE.h11};
  color: ${noticeGray};
  margin: 4px 0 0;
`;

/* ── Feedback ── */

export const FeedbackRow = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
`;

export const FeedbackBtn = styled.button`
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
  color: #555;
`;

/* ── Category ── */

export const CategoryArea = styled.div`
  flex: 1;
  padding: 20px 16px;
  overflow-y: auto;
`;

export const CategoryHint = styled.div`
  font-size: 13px;
  color: #555;
  margin: 16px 0 10px;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
  text-align: left;
`;

export const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #eeedfe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.FONT_SIZE.h9};
  flex-shrink: 0;
`;

export const CategoryLabel = styled.div`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.PALETTE.black};
`;

export const CategoryDesc = styled.div`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${textGray};
`;

/* ── Chat ── */

export const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QuickReplyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

export const QuickReplyBtn = styled.button`
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid ${theme.PALETTE.primary.main};
  background-color: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h11};
  cursor: pointer;
`;

export const UserMessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserBubble = styled.div`
  background-color: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  padding: 10px 14px;
  border-radius: 12px 4px 12px 12px;
  font-size: 13px;
  max-width: 75%;
  line-height: 1.6;
`;

export const UserTime = styled.div`
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${noticeGray};
  margin: 4px 0 0;
`;

/* ── Input ── */

export const InputArea = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

export const ChatInput = styled.input`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 13px;
  outline: none;
  background-color: #f8f8f8;
`;

export const SendBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${theme.PALETTE.primary.main};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
