import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./sideNoticeStyle";

const formatDate = (iso) => {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

export default function SideNotice() {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(
          "http://localhost:10000/api/notice?offset=0&size=4",
          { credentials: "include" },
        );
        const data = await res.json();
        setNotices(data.notices || []);
      } catch {}
    };
    fetchNotices();
  }, []);

  return (
    <S.Card>
      <S.Title>공지사항</S.Title>
      <S.NoticeList>
        {notices.map(({ id, noticeTitle, noticeCreateAt }) => (
          <S.NoticeItem
            key={id}
            onClick={() => navigate(`/customservice/notice/${id}`)}
          >
            <S.ItemLeft>
              <S.Tag>공</S.Tag>
              <S.NoticeTitle>{noticeTitle}</S.NoticeTitle>
            </S.ItemLeft>
            <S.DateText>{formatDate(noticeCreateAt)}</S.DateText>
          </S.NoticeItem>
        ))}
      </S.NoticeList>
      <S.MoreLink onClick={() => navigate("/customservice/notice")}>
        공지 더 보기
      </S.MoreLink>
    </S.Card>
  );
}
