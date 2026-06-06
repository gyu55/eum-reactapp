import React, { useState } from "react";
import { ActionBtn } from "../../communityStyle";
import { useChatContext } from "../../context/ChatContext";
import useAuthStore from "../../../../store/authStore";
import LoginRequiredPopup from "../../common/LoginRequiredPopup";

const CreateChatRoomButton = () => {
  const { openCreateChatRoom } = useChatContext();
  const { isAuthenticated } = useAuthStore();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowLoginPopup(true);
    } else {
      openCreateChatRoom();
    }
  };

  return (
    <>
      <LoginRequiredPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      <ActionBtn $type="submit" onClick={handleClick}>
        +채팅방 만들기
      </ActionBtn>
    </>
  );
};

export default CreateChatRoomButton;
