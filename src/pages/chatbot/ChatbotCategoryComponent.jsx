import React, { useRef, useEffect } from "react";
import * as S from "./style.js";
import { BotMessage } from "./ChatbotMessage.jsx";
import { CATEGORIES, timeNow } from "./constants.js";

const ChatbotCategory = ({ onSelectCategory }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <S.CategoryArea>
      <BotMessage text="안녕하세요! 이음 도우미입니다.&#10;무엇을 도와드릴까요?" time={timeNow()}>
        <S.CategoryList style={{ marginTop: "10px" }}>
          {CATEGORIES.map((cat) => (
            <S.CategoryBtn key={cat.id} onClick={() => onSelectCategory(cat)}>
              <S.CategoryIcon src={cat.icon}></S.CategoryIcon>
              <div>
                <S.CategoryLabel>{cat.label}</S.CategoryLabel>
                <S.CategoryDesc>{cat.desc}</S.CategoryDesc>
              </div>
            </S.CategoryBtn>
          ))}
        </S.CategoryList>
      </BotMessage>
      <div ref={bottomRef} />
    </S.CategoryArea>
  );
};

export default ChatbotCategory;