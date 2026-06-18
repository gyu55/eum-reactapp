import styled from "styled-components";
import { colors, fonts, radius } from "../../constants";

export const MessageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
  justify-content: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
  gap: 8px;
  width: 100%;
  max-width: 480px;
  margin-left: ${({ $isMine }) => ($isMine ? "auto" : "0")};
  margin-right: ${({ $isMine }) => ($isMine ? "0" : "auto")};
`;

export const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background-color: ${colors.border};
`;

export const ProfilePlaceholder = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${colors.border};
  flex-shrink: 0;
`;

export const MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

export const Username = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
  line-height: 1;
`;

export const BubbleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

export const Bubble = styled.div`
  background-color: ${({ $isMine }) =>
    $isMine ? colors.primary : colors.bgCard};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 280px;
`;

export const MessageText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${({ $isMine }) => ($isMine ? colors.textWhite : colors.textMain)};
  margin: 0;
  line-height: 1.5;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const TimeText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  line-height: 1;
`;

export const ChatImg = styled.img`
  max-width: 188px;
  max-height: 200px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: block;
`;