import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TAG_ON_PRIMARY } from "../../constants";
import PostContent from "./detailComponent/PostContent";
import PostSidebar from "../sidebar/component/PostSidebar";
import { Page, ContentArea, ColumnBlock } from "../../communityStyle";
import {
  BreadcrumbBar,
  BreadcrumbPath,
  CategoryTag,
  Crumb,
  CrumbSep,
  PostBodyWrapper,
  PostHeader,
} from "./postDetailStyle";
import CommentSection from "../../comment/CommentSection";
import { getPostById } from "../../communityApi/postApi";

const S = {
  Page,
  ContentArea,
  ColumnBlock,
  BreadcrumbBar,
  BreadcrumbPath,
  CategoryTag,
  Crumb,
  CrumbSep,
  PostBodyWrapper,
  PostHeader,
};

const PostDetailPage = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!postId) return;

    getPostById(postId)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, [postId]);

  return (
    <S.Page>
      {/* <S.BreadcrumbBar>
        <S.Crumb>홈</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb>커뮤니티</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb>학습 인증</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb current>
          수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌
        </S.Crumb>
      </S.BreadcrumbBar> */}
      <S.ContentArea>
        {/* 좌측 9개 메인 영역 */}
        <S.ColumnBlock gap="0px">
          {/* 헤더 */}
          <S.PostHeader>
            <S.CategoryTag>{post?.postTag}</S.CategoryTag>
            <S.BreadcrumbPath $color={TAG_ON_PRIMARY.text}>
              {post ? `이음 커뮤니티 › ${post.postTag}` : ""}
            </S.BreadcrumbPath>
          </S.PostHeader>

          {/* 감싸는 카드 */}
          <S.PostBodyWrapper>
            <PostContent post={post} postId={postId} />
            <CommentSection postId={postId} />
          </S.PostBodyWrapper>
        </S.ColumnBlock>

        {/* 우측 3개 사이드 바 영역 */}
        <PostSidebar />
      </S.ContentArea>
    </S.Page>
  );
};

export default PostDetailPage;
