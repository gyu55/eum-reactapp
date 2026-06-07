import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import * as S from "./alertPopupStyle";
import theme from "../../../styles/theme";
import { RADIUS } from "../constants";
import { postUserReport } from "../communityApi/userReportApi";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

const Input = styled.input`
  height: 44px;
  border-radius: ${RADIUS.input};
  border: 1.5px solid ${theme.GRAYSCALE[8]};
  padding: 0 14px;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
  &::placeholder {
    color: ${theme.GRAYSCALE[7]};
  }
`;

const Textarea = styled.textarea`
  height: 120px;
  border-radius: ${RADIUS.input};
  border: 1.5px solid ${theme.GRAYSCALE[8]};
  padding: 12px 14px;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  resize: none;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
  &::placeholder {
    color: ${theme.GRAYSCALE[7]};
  }
`;

const UserReportPopup = ({ isOpen, onClose, reportingUserId }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!title.trim() || !detail.trim()) return;
    setIsLoading(true);
    try {
      await postUserReport({
        userReportTitle: title.trim(),
        userReportDetail: detail.trim(),
        reportingUserId,
      });
      setTitle("");
      setDetail("");
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setTitle("");
    setDetail("");
    onClose();
  };

  return ReactDOM.createPortal(
    <S.Overlay onClick={handleClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Title>유저 신고</S.Title>
        <FieldWrapper>
          <Label>신고 제목</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="신고 제목을 입력하세요."
            maxLength={50}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label>신고 내용</Label>
          <Textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="신고 내용을 자세히 입력해 주세요."
            maxLength={300}
          />
        </FieldWrapper>
        <S.ButtonRow>
          <S.CancelButton onClick={handleClose} disabled={isLoading}>
            취소
          </S.CancelButton>
          <S.ConfirmButton
            onClick={handleSubmit}
            disabled={!title.trim() || !detail.trim() || isLoading}
          >
            {isLoading ? "신고 중..." : "신고"}
          </S.ConfirmButton>
        </S.ButtonRow>
      </S.Card>
    </S.Overlay>,
    document.body
  );
};

export default UserReportPopup;
