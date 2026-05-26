import styled from "styled-components";
import theme from "../../../styles/theme";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
`;

export const DropdownWrap = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 380px;
  max-height: 600px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 16px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #1a1a2e;
`;

export const ReadAllBtn = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  background: #f5f5f7;
  border: none;
  border-radius: 10px;
  padding: 6px 14px;
  cursor: pointer;
`;

export const TabRow = styled.div`
  display: flex;
  gap: 4px;
  margin: 0 24px 16px;
  background: #f5f5f7;
  border-radius: 12px;
  padding: 4px;
`;

export const TabBtn = styled.button`
  flex: 1;
  padding: 8px 0;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? theme.PALETTE.primary.main : "#888")};
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: ${({ $active }) => ($active ? "0 2px 8px rgba(0,0,0,0.08)" : "none")};
`;

export const NotificationList = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 0 12px 12px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 4px; }
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  max-height: ${({ $removing }) => ($removing ? "0" : "80px")};
  opacity: ${({ $removing }) => ($removing ? "0" : "1")};
  padding-top: ${({ $removing }) => ($removing ? "0 !important" : "")};
  padding-bottom: ${({ $removing }) => ($removing ? "0 !important" : "")};
  transition: background 0.12s, max-height 0.3s ease, opacity 0.25s ease, padding 0.3s ease;

  &:hover { background: #f7f8fd; }
  & + & { border-top: 1px solid #f5f5f7; }
  
`;

export const IconWrap = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme.PALETTE.primary.main};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotifContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const NotifTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 2px;
`;

export const NotifDesc = styled.div`
  font-size: 12px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NotifTime = styled.div`
  font-size: 11px;
  color: #bbb;
  flex-shrink: 0;
`;

export const EmptyMsg = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 14px;
  color: #bbb;
`;

// 기존 NotificationItem에 $removing 트랜지션 추가
// 기존 NotificationItem 정의를 아래로 교체하세요

export const ReadBtn = styled.button`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0.5px solid #d1d5db;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: #6b7280;
  transition: background 0.15s, color 0.15s;
  &:hover { background: #eff6ff; color: #2563eb; border-color: transparent; }
`;

export const BackBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0.5px solid #d1d5db;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
`;

export const ReviewBody = styled.div`padding: 20px;`;

export const SectionLabel = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const StarRow = styled.div`display: flex; gap: 6px; margin-bottom: 20px;`;

export const Star = styled.span`
  font-size: 28px;
  cursor: pointer;
  display: inline-block;
  color: ${({ $active }) => ($active ? "#F5A623" : "#d1d5db")};
  transition: color 0.1s;
  animation: ${({ $delay }) =>
    $delay > 0 ? `starPop 0.3s ease ${($delay - 1) * 0.06}s both` : "none"};

  @keyframes starPop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.4); }
    70%  { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
`;

export const RatingText = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #F5A623;
  margin-bottom: 20px;
  text-align: center;
`;

export const TagRow = styled.div`display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;`;

export const Tag = styled.button`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  background: ${({ $selected }) => ($selected ? "#eff6ff" : "transparent")};
  color: ${({ $selected }) => ($selected ? "#2563eb" : "#6b7280")};
  border: 0.5px solid ${({ $selected }) => ($selected ? "transparent" : "#d1d5db")};
`;

export const ReviewTextarea = styled.textarea`
  width: 100%;
  border: 0.5px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  font-family: inherit;
  resize: none;
  height: 100px;
  margin-bottom: 20px;
  outline: none;
  box-sizing: border-box;
  &:focus { border-color: #9ca3af; }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #5c6bc0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover { background: #4a58a8; }
`;