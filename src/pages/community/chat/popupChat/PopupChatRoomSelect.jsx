import React from "react";
import {
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  SelectBody,
  LeaveBtn,
  MinimizeBtn,
  CloseBtn,
  Header,
} from "../ChatStyle";
import SelectRoomListPanel from "./listPanel/SelectRoomListPanel";
import SelectOngoingPanel from "./centerBody/SelectOngoingPanel";
import { useChatContext } from "../../context/ChatContext";
import minusIcon from "../../assets/chat/minus_icon.svg";
import closeIcon from "../../assets/chat/close_icon.svg";

const S = {
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  Header,
  SelectBody,
  LeaveBtn,
  MinimizeBtn,
  CloseBtn,
};

// 채팅방 헤더 버튼
const PopupChatRoomSelect = ({ onDragMouseDown }) => {
  const { minimizeView, closeView } = useChatContext();

  return (
    <S.SelectPopup>
      <S.Header onMouseDown={onDragMouseDown} style={{ cursor: "grab", userSelect: "none" }}>
          <S.HeaderTitle>채팅방 선택</S.HeaderTitle>
          <S.HeaderBtns>
            <S.MinimizeBtn onClick={minimizeView}>
              <img src={minusIcon} alt="최소화" />
            </S.MinimizeBtn>
            <S.CloseBtn onClick={closeView}>
              <img src={closeIcon} alt="닫기" />
            </S.CloseBtn>
          </S.HeaderBtns>
        </S.Header>

        <S.SelectBody>
          <SelectRoomListPanel />
          <SelectOngoingPanel />
        </S.SelectBody>
    </S.SelectPopup>
  );
};

export default PopupChatRoomSelect;
