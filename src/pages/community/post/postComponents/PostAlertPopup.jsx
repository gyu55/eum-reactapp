import React from "react";
import * as S from "../../common/alertPopupStyle";

const PostAlertPopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div>
      <S.Overlay onClick={onClose}>
        <S.Card onClick={(e) => e.stopPropagation()}>
          <S.Title>게시글을 삭제하시겠습니까?</S.Title>
          <S.InfoBox>
            <S.InfoLabel>
              삭제 시 아래 정보가 영구적으로 사라집니다.
            </S.InfoLabel>
            <S.InfoList>
              <S.InfoItem>게시글 내용</S.InfoItem>
              <S.InfoItem>게시글에 달린 모든 댓글</S.InfoItem>
            </S.InfoList>
          </S.InfoBox>
          <S.ButtonRow>
            <S.CancelButton onClick={onClose}>아니오</S.CancelButton>
            <S.ConfirmButton onClick={onConfirm}>예</S.ConfirmButton>
          </S.ButtonRow>
        </S.Card>
      </S.Overlay>
    </div>
  );
};

export default PostAlertPopup;
