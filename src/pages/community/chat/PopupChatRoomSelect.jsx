import React from "react";
import {
  SelectPageBg,
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  MinimizeBtn,
  SelectCloseBtn,
  SelectBody,
} from "./ChatStyle";
import SelectRoomListPanel from "./popupChat/SelectRoomListPanel";
import SelectOngoingPanel from "./popupChat/SelectOngoingPanel";
import { useChatContext } from "../context/ChatContext";

const minimizeVUrl =
  "https://www.figma.com/api/mcp/asset/44666575-71f6-416e-a884-3df8697b8a6e";
const closeVUrl =
  "https://www.figma.com/api/mcp/asset/4b5d23e6-44b7-4a45-8a8f-9ed805ef3301";

const PopupChatRoomSelect = () => {
  const { handleSelectMinimize, handleSelectClose } = useChatContext();

  return (
    <SelectPageBg>
      <SelectPopup>
        <SelectHeader>
          <HeaderTitle>채팅방 선택</HeaderTitle>
          <HeaderBtns>
            <MinimizeBtn onClick={handleSelectMinimize}>
              <img src={minimizeVUrl} alt="최소화" />
            </MinimizeBtn>
            <SelectCloseBtn onClick={handleSelectClose}>
              <img src={closeVUrl} alt="닫기" />
            </SelectCloseBtn>
          </HeaderBtns>
        </SelectHeader>

        <SelectBody>
          <SelectRoomListPanel />
          <SelectOngoingPanel />
        </SelectBody>
      </SelectPopup>
    </SelectPageBg>
  );
};

export default PopupChatRoomSelect;
