import {
  NoticeItemWrapper,
  NoticeItemLeftArea,
  NoticeItemBadge,
  NoticeItemTitle,
  NoticeItemDateText,
} from "../postSideBarStyle";

const S = {
  NoticeItemWrapper,
  NoticeItemLeftArea,
  NoticeItemBadge,
  NoticeItemTitle,
  NoticeItemDateText,
};

const NoticeItem = ({ title = "공지 제목", date = "3/8" }) => {
  return (
    <S.NoticeItemWrapper>
      <S.NoticeItemLeftArea>
        <S.NoticeItemBadge>공</S.NoticeItemBadge>
        <S.NoticeItemTitle>{title}</S.NoticeItemTitle>
      </S.NoticeItemLeftArea>
      <S.NoticeItemDateText>{date}</S.NoticeItemDateText>
    </S.NoticeItemWrapper>
  );
};

export default NoticeItem;
