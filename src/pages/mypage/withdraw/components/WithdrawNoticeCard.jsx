import React from "react";

import {
  WithdrawSection,
  WithdrawSectionTitle,
  WithdrawNoticeCard,
  WithdrawNoticeList,
  WithdrawNoticeItem,
} from "../style";

const noticeList = [
  "탈퇴 시 프로필 및 계정 정보는 삭제됩니다.",
  "작성한 게시글과 댓글은 정책에 따라 유지될 수 있습니다.",
  "자격증 수강 신청 내역 및 혜택은 탈퇴 시 소멸됩니다.",
  "탈퇴 후 계정 복구는 어려울 수 있습니다.",
];

const WithdrawNoticeCardComponent = () => {
  return (
    <WithdrawSection>
      <WithdrawSectionTitle>탈퇴 시 유의사항</WithdrawSectionTitle>

      <WithdrawNoticeCard>
        <WithdrawNoticeList>
          {noticeList.map((notice) => (
            <WithdrawNoticeItem key={notice}>
              · {notice}
            </WithdrawNoticeItem>
          ))}
        </WithdrawNoticeList>
      </WithdrawNoticeCard>
    </WithdrawSection>
  );
};

export default WithdrawNoticeCardComponent;