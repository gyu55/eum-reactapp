import React from "react";
import { Navigate } from "react-router-dom";
import PostWrite from "./PostWrite";
import useAuthStore from "../../../../store/authStore";

const CommunityPostWriteContainer = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <PostWrite />
    </div>
  );
};

export default CommunityPostWriteContainer;
