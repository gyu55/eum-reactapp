import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RelatedPostCard from "../RelatedPostCard";
import stripHtml from "../../../functions/stripHtml";
import { RelatedCard, SectionTitle } from "../postSideBarStyle";

const SidePopularPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const res = await fetch(
          "http://localhost:10000/api/posts?page=1&order=read_count",
          { credentials: "include" },
        );
        const data = await res.json();
        setPosts(data.data?.posts || []);
      } catch {}
    };
    fetchPopularPosts();
  }, []);

  return (
    <RelatedCard>
      <SectionTitle>인기 게시글</SectionTitle>
      {posts.map((post) => (
        <RelatedPostCard
          key={post.id}
          title={post.postTitle}
          description={stripHtml(post.postContent)}
          likes={post.likeCount}
          comments={post.commentCount}
          onClick={() => navigate(`/community/post/${post.id}`)}
        />
      ))}
    </RelatedCard>
  );
};

export default SidePopularPosts;
