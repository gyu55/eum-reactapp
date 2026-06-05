import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PRIMARY = "#4359fc";

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

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
`;

const Sub = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 28px;
`;

const InfoBox = styled.div`
  background: #f5f7ff;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 28px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;
  padding: 4px 0;
`;

const InfoLabel = styled.span`
  color: #999;
`;

const Btn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const ErrMsg = styled.div`
  font-size: 13px;
  color: #e74c3c;
  margin-bottom: 16px;
`;

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = Number(searchParams.get("amount"));
  const paymentType = searchParams.get("paymentType");
  const referenceId = Number(searchParams.get("referenceId"));

  const [status, setStatus] = useState("loading");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:10000/api/payments/confirm", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount, paymentType, referenceId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("done");
        } else {
          setStatus("error");
          setErrMsg(data.message || "결제 확인에 실패했습니다.");
        }
      })
      .catch(() => {
        setStatus("error");
        setErrMsg("서버와 연결할 수 없습니다.");
      });
  }, [paymentKey, orderId, amount, paymentType, referenceId]);

  const goHome = () => {
    if (paymentType === "TEST_APPLY") {
      navigate("/exam/receipt/info/confirm");
    } else if (paymentType === "CERT_RENEW") {
      navigate("/exam/update/check");
    } else if (paymentType === "CERT_REISSUE") {
      navigate("/exam/certificate/reissue");
    } else if (paymentType === "CERT_ISSUE") {
      navigate("/mypage/certificate/complete", {
        state: {
          certRenewId: referenceId,
        },
      });
    } else {
      navigate("/");
    }
  };

  const newExpiryDate = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
  })();

  if (status === "loading") {
    return (
      <Wrap>
        <Card>
          <Icon>⏳</Icon>
          <Title>결제 확인 중...</Title>
        </Card>
      </Wrap>
    );
  }

  if (status === "error") {
    return (
      <Wrap>
        <Card>
          <Icon>!</Icon>
          <Title>결제 확인 실패</Title>
          <ErrMsg>{errMsg}</ErrMsg>
          <Btn onClick={() => navigate(-1)}>돌아가기</Btn>
        </Card>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Card>
        <Icon>✓</Icon>
        <Title>결제가 완료되었습니다</Title>
        <Sub>정상적으로 처리되었습니다.</Sub>
        <InfoBox>
          <InfoRow>
            <InfoLabel>주문번호</InfoLabel>
            <span>{orderId}</span>
          </InfoRow>
          <InfoRow>
            <InfoLabel>결제금액</InfoLabel>
            <span>{amount.toLocaleString()}원</span>
          </InfoRow>
          {paymentType === "CERT_REISSUE" && (
            <InfoRow>
              <InfoLabel>새 만료일</InfoLabel>
              <span style={{ color: PRIMARY, fontWeight: 700 }}>{newExpiryDate}</span>
            </InfoRow>
          )}
        </InfoBox>
        <Btn onClick={goHome}>확인</Btn>
      </Card>
    </Wrap>
  );
};

export default PaymentSuccessPage;