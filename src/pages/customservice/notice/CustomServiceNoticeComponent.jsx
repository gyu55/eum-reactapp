import React from "react";
import * as S from "./style";
import { CATEGORY_STYLE } from "./constants";

const CustomServiceNoticeComponent = ({
  notice,
  isLoading,
  error,
  onBack,
  isAdmin,
  onDelete,
  onEdit,
}) => {
  if (isLoading) return <S.LoadingBox>불러오는 중...</S.LoadingBox>;
  if (error)     return <S.ErrorBox>{error}</S.ErrorBox>;
  if (!notice)   return null;

  const catStyle = CATEGORY_STYLE[notice.noticeCategory] || {};

  return (
    <S.DetailWrap>
      <S.DetailCategoryBadge $category={notice.noticeCategory}>
        {notice.noticeCategory}
      </S.DetailCategoryBadge>

      <S.DetailTitle>{notice.noticeTitle}</S.DetailTitle>

      <S.DetailMeta>
        작성자 : 이음 운영팀 &nbsp;&nbsp; 작성일 : {notice.noticeCreateAt ? notice.noticeCreateAt.slice(0, 10).replaceAll("-", ".") : ""}
      </S.DetailMeta>

      <S.Divider />

      <S.DetailContent>{notice.noticeContent}</S.DetailContent>

      <S.DividerBottom />

      <S.DetailFooter>
        <S.BackLink onClick={onBack}>← 목록으로 돌아가기</S.BackLink>

        {isAdmin && (
          <S.AdminBtnRow>
            <S.EditBtn onClick={onEdit}>수정</S.EditBtn>
            <S.DeleteBtn onClick={onDelete}>삭제</S.DeleteBtn>
          </S.AdminBtnRow>
        )}
      </S.DetailFooter>
    </S.DetailWrap>
  );
};

export default CustomServiceNoticeComponent;