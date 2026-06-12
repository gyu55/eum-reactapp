import styled from "styled-components";
import theme from "../../../../styles/theme";
import UserReportButton from "../../report/userreport/UserReportButton";
import { blockUser } from "../../communityApi/blockingApi";
import useConfirm from "../../common/useConfirm";

// 신고 안내 박스 전용 — theme에 없는 amber 계열 색상
const NOTICE_BG = "#fff7ed";
const NOTICE_TEXT_DARK = "#92400e";

const UserReportBlock = ({ userId, onBlock }) => {
  const { confirm, ConfirmPopupComponent } = useConfirm();

  const handleBlockClick = async () => {
    const confirmed = await confirm("이 유저를 차단하시겠습니까?");
    if (confirmed) {
      await blockUser(userId);
      onBlock?.();
    }
  };

  return (
    <Card>
      <NoticeBox>
        <NoticeBar />
        <NoticeContent>
          <NoticeTitle>⚠️ 신고 및 차단</NoticeTitle>
          <NoticeBody>
            <span>부적절한 활동이 확인되면</span>
            <span>신고해 주세요. 운영팀이 검토합니다.</span>
          </NoticeBody>
        </NoticeContent>
      </NoticeBox>
      <UserReportButton userId={userId} />
      <BlockButton onClick={handleBlockClick}>이 유저 차단하기</BlockButton>
      {ConfirmPopupComponent}
    </Card>
  );
};

export default UserReportBlock;

const Card = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 312px;
  box-sizing: border-box;
`;

const NoticeBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 72px;
  background: ${NOTICE_BG};
  border-radius: 2px 16px 16px 2px;
  overflow: hidden;
`;

const NoticeBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: ${theme.PALETTE.warning.main};
  border-radius: 2px;
`;

const NoticeContent = styled.div`
  padding: 12px 0 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NoticeTitle = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.warning.main};
  line-height: normal;
  white-space: nowrap;
`;

const NoticeBody = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${NOTICE_TEXT_DARK};
  line-height: normal;
  white-space: nowrap;
`;

const BlockButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: 10px;
  border: 2px solid ${theme.GRAYSCALE[8]};
  background: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.GRAYSCALE[9]};
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;
