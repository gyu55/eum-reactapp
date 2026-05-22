// 오답 리뷰 컴포넌트: 결과 화면의 틀린 문제 요약
import * as S from "../style";

const WrongAnswerReview = ({ items = [] }) => {
  return (
    <S.WrongAnswerReview>
      <strong>오답 리뷰</strong>
      {items.length === 0 ? (
        <p>틀린 문제가 없어요. 아주 좋아요!</p>
      ) : (
        items.map((item) => <p key={item.id}>{item.question}</p>)
      )}
    </S.WrongAnswerReview>
  );
};

export default WrongAnswerReview;
