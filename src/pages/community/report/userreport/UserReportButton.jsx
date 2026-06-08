import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";
import useAuthStore from "../../../../store/authStore";
import LoginRequiredPopup from "../../common/LoginRequiredPopup";
import UserReportPopup from "../UserReportPopup";
import { RADIUS } from "../../constants";

const ReportButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: ${RADIUS.sm};
  border: 2px solid ${theme.PALETTE.warning.main};
  background: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.warning.main};
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;

const UserReportButton = ({ userId }) => {
  const { isAuthenticated } = useAuthStore();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showReportPopup, setShowReportPopup] = useState(false);

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowLoginPopup(true);
    } else {
      setShowReportPopup(true);
    }
  };

  return (
    <>
      <LoginRequiredPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      <UserReportPopup
        isOpen={showReportPopup}
        onClose={() => setShowReportPopup(false)}
        reportingUserId={userId}
      />
      <ReportButton onClick={handleClick}>이 유저 신고하기</ReportButton>
    </>
  );
};

export default UserReportButton;
