import React from "react";
import ReportPopup from "./ReportPopup";
import { postChatRoomReport } from "../communityApi/reportApi";

const ChatRoomReportPopup = ({ isOpen, onClose, chatRoomId }) => (
  <ReportPopup
    isOpen={isOpen}
    onClose={onClose}
    title="채팅방 신고"
    onSubmit={({ title, detail }) =>
      postChatRoomReport({
        chatRoomReportTitle: title,
        chatRoomReportDetail: detail,
        chatRoomId,
      })
    }
  />
);

export default ChatRoomReportPopup;
