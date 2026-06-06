import theme from "../../../../../styles/theme";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  getPostById,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const { PALETTE } = theme;

const PostContent = ({ postId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/community";

  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);

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

  const handleDeleteConfirm = async () => {
    try {
      await deletePost(postId);
      setDeletePopupOpen(false);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
    }
  };

  useEffect(() => {
    if (!postId) return;

    console.log("postId:", postId);

    getPostById(postId)
      .then(({ data }) => {
        console.log("게시글 데이터:", data);
        setPost(data);
        setLikeCount(data.likeCount ?? 0);
        setLiked(data.isLiked ?? false);
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, [postId]);

  const authorLevel = post?.userLevel ?? "Lv.1";

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

  // 아직 post 데이터가 없을 때
  if (!post)
    return (
      <div>
        <PostContentSkeleton />
      </div>
    );

  // 게시글 데이터 분리 (post 데이터 생기고 난 뒤)
  const {
    id,
    postTitle,
    // postContent — useEffect에서 post?.postContent로 직접 참조
    postReadCount,
    postCreateAt,
    postTag,
    userNickname,
    userProfile,
    // commentCount,
    // isLiked,
    isOwner,
  } = post;

  const handleEditClick = () => {
    navigate("/community/post/write", {
      state: {
        mode: "edit",
        postId: id,
        postTitle,
        postContent: post.postContent,
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
              <S.LevelBadge>{authorLevel}</S.LevelBadge>
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
                <S.IconButton aria-label="게시글 수정" onClick={handleEditClick}>
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
              <S.IconButton danger aria-label="게시글 신고">
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
    </div>
  );
};

export default PostContent;
