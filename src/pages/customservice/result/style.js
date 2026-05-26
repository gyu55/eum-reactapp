import styled from "styled-components";

const STATUS_STYLE = {
  답변완료: { color: "#fff", background: "#4f6ef7" },
  대기:     { color: "#fff", background: "#f5a623" },
};

/* ── Accordion ── */

export const AccordionWrap = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  cursor: pointer;
  background: ${({ $open }) => ($open ? "#f7f8fd" : "#fff")};
  transition: background 0.15s;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  color: ${({ $status }) => STATUS_STYLE[$status]?.color ?? "#555"};
  background: ${({ $status }) => STATUS_STYLE[$status]?.background ?? "#eee"};
`;

export const AccordionTitle = styled.span`
  flex: 1;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 500;
`;

export const AccordionDate = styled.span`
  font-size: 13px;
  color: #aaa;
  flex-shrink: 0;
`;

export const AccordionArrow = styled.span`
  font-size: 16px;
  color: #aaa;
  flex-shrink: 0;
  display: inline-block;
  transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

export const AccordionBody = styled.div`
  max-height: ${({ $height }) => $height}px;
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

export const AccordionContent = styled.div`
  border-top: 1px solid #f0f0f5;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QAText = styled.div`
  font-size: 13px;
  color: #444;
  line-height: 1.6;
`;

export const QALabel = styled.span`
  font-weight: 700;
  color: #3a5df5;
`;

export const PendingText = styled.div`
  font-size: 13px;
  color: #aaa;
`;

export const AnswerBtnWrap = styled.div`
  margin-top: 8px;
`;

export const AnswerBtn = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: 1.5px solid #4f6ef7;
  background: #fff;
  color: #4f6ef7;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const AnswerInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AnswerTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 13px;
  outline: none;
  resize: none;
  height: 100px;
  box-sizing: border-box;
  font-family: inherit;
`;

export const AnswerBtnRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const CancelBtn = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  background: #fff;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  background: #4f6ef7;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

/* ── Result List ── */

export const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 14px;
  color: ${({ $error }) => ($error ? "#f55" : "#aaa")};
`;

export const EmptyWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 60px 0;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

export const EmptyTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
`;

export const EmptySub = styled.div`
  font-size: 13px;
  color: #aaa;
`;

export const ResultWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 24px 28px;
`;

export const ResultListTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
`;

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* ── Stat Cards ── */

export const StatRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const StatCard = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 24px 0;
  text-align: center;
`;

export const StatCount = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #3a5df5;
  margin-bottom: 6px;
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: #888;
`;
