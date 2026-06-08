import theme from "../../../../../styles/theme";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  deletePost,
  requestPostLike,
  cancelPostLike,
} from "../../../communityApi/postApi";
import * as S from "../postDetailStyle";
import { DEFAULT_IMAGES } from "../../../constants";
import PostContentSkeleton from "./PostContentSkeleton";
import modifyIcon from "../../../assets/icon/modify-grey.svg";
import deleteIcon from "../../../assets/icon/trash-can-red.svg";
import PostAlertPopup from "../../postComponents/PostAlertPopup";
import PostReportPopup from "../../../common/PostReportPopup";
import LoginRequiredPopup from "../../../common/LoginRequiredPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useAuthStore from "../../../../../store/authStore";

const { PALETTE } = theme;

const PostContent = ({ post, postId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/community";
  const { isAuthenticated } = useAuthStore();

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [reportPopupOpen, setReportPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);

  const handleReportClick = () => {
    if (!isAuthenticated) {
      setLoginPopupOpen(true);
    } else {
      setReportPopupOpen(true);
    }
  };

  const contentEditor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
    editable: false,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (contentEditor && post?.postContent) {
      contentEditor.commands.setContent(post.postContent);
    }
  }, [contentEditor, post?.postContent]);

  useEffect(() => {
    if (post) {
      setLikeCount(post.likeCount ?? 0);
      setLiked(post.isLiked ?? false);
    }
  }, [post]);

  const handleDeleteConfirm = async () => {
    try {
      await deletePost(postId);
      setDeletePopupOpen(false);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
    }
  };

  // 게시글 좋아요 버튼 누르는 함수
  const clickPostLike = async () => {
    const prevLiked = liked;
    const prevCount = likeCount;

    setLiked(!prevLiked);
    setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);

    try {
      prevLiked
        ? await cancelPostLike(post.id)
        : await requestPostLike(post.id);
    } catch (e) {
      setLiked(prevLiked);
      setLikeCount(prevCount);
    }
  };

  if (!post)
    return (
      <div>
        <PostContentSkeleton />
      </div>
    );

  const {
    id,
    postTitle,
    postContent,
    postReadCount,
    postCreateAt,
    postTag,
    userNickname,
    userProfile,
    userLevel = "Lv.1",
    isOwner,
  } = post;

  const handleEditClick = () => {
    navigate("/community/post/write", {
      state: {
        mode: "edit",
        postId: id,
        postTitle,
        postContent,
        postTag,
      },
    });
  };

  return (
    <div>
      <S.PostContentWrapper>
        <S.PostTitle>{postTitle}</S.PostTitle>

        {/* 게시글 작성자 정보 */}
        <S.AuthorRow>
          <S.AuthorAvatar
            src={userProfile}
            alt={userNickname}
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
            }}
          />
          <S.AuthorMeta>
            <S.AuthorName>{userNickname}</S.AuthorName>
            <S.AuthorSubRow>
              <S.LevelBadge>{userLevel}</S.LevelBadge>
              <S.MetaText>
                · {postCreateAt} · 조회 {postReadCount}
              </S.MetaText>
            </S.AuthorSubRow>
          </S.AuthorMeta>
        </S.AuthorRow>

        {/* 구분선 */}
        <S.Divider />

        {/* 게시글 몸체 */}
        <S.TiptapViewerWrapper>
          <EditorContent editor={contentEditor} />
        </S.TiptapViewerWrapper>
        {/* <S.TagRow>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagRow> */}

        {/* 접근성 도구 */}
        <S.AccessibilityBox>
          <S.AccessibilityLabel $color={PALETTE.primary.main}>
            접근성 도구
          </S.AccessibilityLabel>
          <S.AccessBtn variant="blue" pos="180px">
            수어로 보기
          </S.AccessBtn>
          <S.AccessBtn variant="green" pos="466px">
            글 읽어주기
          </S.AccessBtn>
        </S.AccessibilityBox>

        {/* 게시글 관련 액션 버튼 // 추후 컴포넌트로 분리 생각 */}
        <S.ActionRow>
          {/* 좋아요 버튼 */}
          <S.LikeButton liked={liked} onClick={clickPostLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.ActionButtons>
            <S.IconButton aria-label="링크 복사">
              <img
                src={DEFAULT_IMAGES.linkIcon}
                alt="링크"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGES.linkIcon;
                }}
              />
            </S.IconButton>

            {isOwner ? (
              <>
                <S.IconButton
                  aria-label="게시글 수정"
                  onClick={handleEditClick}
                >
                  <img src={modifyIcon} alt="수정" />
                </S.IconButton>
                <S.IconButton
                  danger
                  aria-label="게시글 삭제"
                  onClick={() => setDeletePopupOpen(true)}
                >
                  <img src={deleteIcon} alt="삭제" />
                </S.IconButton>
              </>
            ) : (
              <S.IconButton danger aria-label="게시글 신고" onClick={handleReportClick}>
                <img
                  src={DEFAULT_IMAGES.reportIcon}
                  alt="신고"
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_IMAGES.reportIcon;
                  }}
                />
              </S.IconButton>
            )}
          </S.ActionButtons>
        </S.ActionRow>
      </S.PostContentWrapper>

      {/* 댓글 섹션 */}
      {/* <CommentSection /> */}

      <PostAlertPopup
        isOpen={deletePopupOpen}
        onClose={() => setDeletePopupOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
      <PostReportPopup
        isOpen={reportPopupOpen}
        onClose={() => setReportPopupOpen(false)}
        postId={postId}
      />
      <LoginRequiredPopup
        isOpen={loginPopupOpen}
        onClose={() => setLoginPopupOpen(false)}
      />
    </div>
  );
};

export default PostContent;
