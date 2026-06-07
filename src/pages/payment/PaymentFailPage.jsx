import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f7;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 48px 40px;
  width: 100%;
  max-width: 440px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
`;

const Icon = styled.div`font-size: 48px; margin-bottom: 16px;`;
const Title = styled.div`font-size: 20px; font-weight: 700; color: #111; margin-bottom: 8px;`;
const Sub = styled.div`font-size: 14px; color: #e74c3c; margin-bottom: 28px;`;

const Btn = styled.button`
  background: #4359fc;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const PaymentFailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const message = searchParams.get("message") || "결제가 취소되었거나 실패했습니다.";
  const paymentType = searchParams.get("paymentType");
  const referenceId = searchParams.get("referenceId");

  const [cancelMessage, setCancelMessage] = useState("");

  useEffect(() => {
    if (!referenceId) return;

    const rollback = async () => {
      try {
        if (paymentType === "TEST_APPLY") {
          await fetch(`http://localhost:10000/api/test-applications/${referenceId}`, {
            method: "DELETE",
            credentials: "include",
          });
        } else if (paymentType === "CERT_ISSUE") {
          await fetch(`http://localhost:10000/api/cert-renew/${referenceId}`, {
            method: "DELETE",
            credentials: "include",
          });
          setCancelMessage("실물 신청 정보는 취소 처리되었습니다.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    rollback();
  }, [paymentType, referenceId]);

  return (
    <Wrap>
      <Card>
        <Icon>❌</Icon>
        <Title>결제에 실패했습니다</Title>
        <Sub>
          {message}
          {cancelMessage && (
            <>
              <br />
              {cancelMessage}
            </>
          )}
        </Sub>
        <Btn onClick={() => navigate("/mypage/certificate")}>마이페이지로 돌아가기</Btn>
      </Card>
    </Wrap>
  );
};

export default PaymentFailPage;