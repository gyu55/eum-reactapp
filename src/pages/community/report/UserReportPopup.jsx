import React from "react";
import ReportPopup from "./ReportPopup";
import { postUserReport } from "../communityApi/userReportApi";

const UserReportPopup = ({ isOpen, onClose, reportingUserId }) => (
  <ReportPopup
    isOpen={isOpen}
    onClose={onClose}
    title="유저 신고"
    onSubmit={({ title, detail }) =>
      postUserReport({ userReportTitle: title, userReportDetail: detail, reportingUserId })
    }
  />
);

export default UserReportPopup;
