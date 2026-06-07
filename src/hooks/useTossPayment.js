const CLIENT_KEY = process.env.REACT_APP_TOSS_CLIENT_KEY;

const useTossPayment = () => {
  const requestPayment = async ({ amount, orderName, customerName, paymentType, referenceId }) => {
    // /api/payments/ready 호출 → orderId 발급
    const readyRes = await fetch("http://localhost:10000/api/payments/ready", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentType, referenceId, paymentAmount: amount, orderName }),
    });
    const readyData = await readyRes.json();
    if (!readyData.success) throw new Error(readyData.message || "결제 준비에 실패했습니다.");

    const { orderId } = readyData.data;

    const successUrl = `${window.location.origin}/payment/success?paymentType=${paymentType}&referenceId=${referenceId}`;
    const failUrl    = `${window.location.origin}/payment/fail?paymentType=${paymentType}&referenceId=${referenceId}`;

    console.log("[Toss 파라미터]", { amount, orderId, orderName, customerName, successUrl, failUrl });

    if (!window.TossPayments) throw new Error("Toss SDK가 로드되지 않았습니다. 페이지를 새로고침 해주세요.");
    const tossPayments = window.TossPayments(CLIENT_KEY);
    await tossPayments.requestPayment("카드", {
      amount,
      orderId,
      orderName,
      customerName,
      successUrl,
      failUrl,
    });
  };

  return { requestPayment };
};

export default useTossPayment;
