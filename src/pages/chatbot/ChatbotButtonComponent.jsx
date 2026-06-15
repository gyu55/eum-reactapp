import React, { useState } from "react";
import ChatbotModal from "./ChatbotModalComponent";
import * as S from "./style.js";

const ChatbotButton = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <S.ChatBtn
        $hovered={isHovered}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <S.IconCircle>
          <img
            src="/assets/image/chatbot/chatbot_waving.gif"
            style={{ width: "30px", height: "35px" }}
          />
        </S.IconCircle>
        <S.BtnLabel $hovered={isHovered}>이음 도우미</S.BtnLabel>
      </S.ChatBtn>

      {isOpen && <ChatbotModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotButton;
