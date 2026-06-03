import * as S from "./userCommentCardSkeletonStyle";

const UserCommentCardSkeleton = () => {
  return (
    <div>
      <S.Wrapper>
        <S.MidRow>
          <S.AvatarBlock />
          <S.TextArea>
            <S.NicknameBlock />
            <S.ContentLine />
            <S.ContentLine $width="70%" />
          </S.TextArea>
        </S.MidRow>

        <S.Divider />

        <S.StateRow>
          <S.DateBlock />
          <S.ReactionsRow>
            <S.StatBlock />
            <S.StatBlock />
          </S.ReactionsRow>
        </S.StateRow>
      </S.Wrapper>
    </div>
  );
};

export default UserCommentCardSkeleton;
