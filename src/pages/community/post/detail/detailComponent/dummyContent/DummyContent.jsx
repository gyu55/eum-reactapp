import React from "react";
import {
  BlockQuote,
  BodyText,
  EmojiItem,
  HighlightWord,
  ImageArea,
  ImageBox,
  ImageCaption,
  Paragraph,
} from "../../postDetailStyle";
import theme from "../../../../../../styles/theme";

const { GRAYSCALE } = theme;

const S = {
  BlockQuote,
  BodyText,
  EmojiItem,
  HighlightWord,
  ImageArea,
  ImageBox,
  ImageCaption,
  Paragraph,
};

const DummyContent = () => {
  return (
    <div>
      <S.BodyText>
        <S.Paragraph>안녕하세요! 이음 커뮤니티 여러분 😊</S.Paragraph>

        <S.Paragraph>
          드디어 제가 <S.HighlightWord>수어 알파벳 마스터</S.HighlightWord> 도전을
          완료했어요! 1달 전부터 시작해서 매일 꾸준히 연습한 결과를 오늘
          공유하려고 합니다.
        </S.Paragraph>

        <S.Paragraph>
          처음엔 정말 막막했어요. 손 모양 하나하나가 너무 헷갈리고, 특히
          비슷하게 생긴 ㄱ, ㄴ, ㄷ 같은 자음들은 진짜 무슨 차이인지 한참을 봐야
          했어요. 그런데 이음 앱의 <S.HighlightWord>수형 연습 기능</S.HighlightWord>{" "}
          을 사용하면서 카메라로 직접 내 손을 인식하니까 훨씬 빨리 늘더라고요!
        </S.Paragraph>

        <S.BlockQuote>
          <p style={{ margin: 0 }}>
            "처음 2주는 그냥 인풋 기간이라고 생각하고 무조건 보기만 했어요.
          </p>
          <p style={{ margin: 0 }}>
            3주차부터 직접 따라 하면서 피드백 받으니 확실히 달랐어요."
          </p>
        </S.BlockQuote>

        <S.Paragraph>
          특히 제가 추천하는 방법은{" "}
          <S.HighlightWord>하루 15분, 같은 시간에 연습하기</S.HighlightWord> 예요.
          출근 전 아침 7시에 딱 알람 맞춰서 이음 앱 열고 오늘의 학습 하는 게
          습관이 됐어요. 한 달 동안 단 하루도 빠지지 않고 연속 30일 달성! 🎉
        </S.Paragraph>

        <S.Paragraph>
          아래에 제가 오늘 촬영한 수어 알파벳 영상 썸네일을 첨부했어요.
          <br />
          영상은 조만간 수어 영상 게시판에도 올릴 예정이에요. 다들 응원해
          주세요! 💪
        </S.Paragraph>

        <S.ImageArea>
          <S.ImageBox>
            <S.EmojiItem>🤟</S.EmojiItem>
            <S.EmojiItem>✌️</S.EmojiItem>
            <S.EmojiItem>👌</S.EmojiItem>
            <S.EmojiItem>🤙</S.EmojiItem>
            <S.EmojiItem>👍</S.EmojiItem>
          </S.ImageBox>
          <S.ImageCaption $color={GRAYSCALE[9]}>
            수어 알파벳 연습 영상 스틸컷 (촬영: 2025.03.08)
          </S.ImageCaption>
        </S.ImageArea>
      </S.BodyText>
    </div>
  );
};

export default DummyContent;
