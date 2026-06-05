import { useState } from "react";
import * as S from "./style";
import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";
import useVerificationTimer from "../../../../hooks/useVerificationTimer";
import useTossPayment from "../../../../hooks/useTossPayment";

const DUMMY_CERTS = [
  { id: 1, no: "CL-2025-00456", course: "수어통역 기초과정", issueDate: "2025.02.28", expiryDate: "2025.08.27" },
  { id: 2, no: "CL-2024-00123", course: "수어통역 심화과정", issueDate: "2024.08.15", expiryDate: "2025.02.14" },
  { id: 3, no: "CL-2024-00089", course: "수어통역 전문과정", issueDate: "2024.03.10", expiryDate: "2024.09.09" },
];

const FEE = 5000;

const maskEmail = (email) => {
  if (!email) return "";
  const [id, domain] = email.split("@");
  return id.slice(0, 3) + "***@" + domain;
};

const maskPhone = (phone) => {
  if (!phone) return "";
  return phone.replace(/(\d{3})-?(\d{2})\d{2}-?(\d{4})/, "$1-$2**-$3");
};


// ── 단계별 모달 ────────────────────────────────────────────
const ReissueModal = ({ user, cert, onClose }) => {
  const { requestPayment }        = useTossPayment();
  const [step, setStep]           = useState("verify"); // "verify" | "payment"
  const [method, setMethod]       = useState("");
  const [codeSent, setCodeSent]   = useState(false);
  const [code, setCode]           = useState("");
  const codeTimer = useVerificationTimer();
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError]     = useState("");

  const handleSend = () => {
    if (!method) return;
    // TODO: 실제 인증번호 전송 API 연동 후 아래 주석 해제
    // const endpoint = method === "email"
    //   ? "/api/auth/send-email-code"
    //   : "/api/auth/send-phone-code";
    // await fetch(endpoint, { method: "POST", credentials: "include" });
    setCodeSent(true);
    codeTimer.start();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ── 단계별 타이틀 ─────────────────────────────────────
  const titles = { verify: "본인확인", payment: "재발급 결제" };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal>
        <S.ModalHeader>
          <S.ModalTitle>{titles[step]}</S.ModalTitle>
          {step !== "done" && (
            <S.ModalClose onClick={onClose}>✕</S.ModalClose>
          )}
        </S.ModalHeader>

        {/* ── Step 1: 본인확인 ── */}
        {step === "verify" && (
          <>
            <S.ModalSub>인증 방법을 선택하고 본인 확인을 진행하세요.</S.ModalSub>

            <S.MethodCards>
              <S.MethodCard
                type="button"
                $selected={method === "email"}
                onClick={() => { setMethod("email"); setCodeSent(false); setCode(""); }}
              >
                <S.MethodIcon>✉️</S.MethodIcon>
                <S.MethodLabel $selected={method === "email"}>이메일 인증</S.MethodLabel>
                <S.MethodValue>{maskEmail(user?.userEmail)}</S.MethodValue>
              </S.MethodCard>

              <S.MethodCard
                type="button"
                $selected={method === "phone"}
                onClick={() => { setMethod("phone"); setCodeSent(false); setCode(""); }}
              >
                <S.MethodIcon>📱</S.MethodIcon>
                <S.MethodLabel $selected={method === "phone"}>핸드폰 인증</S.MethodLabel>
                <S.MethodValue>{maskPhone(user?.userPhoneNum)}</S.MethodValue>
              </S.MethodCard>
            </S.MethodCards>

            {method && (
              <>
                <S.CodeRow>
                  <S.CodeInput
                    placeholder="인증번호 6자리"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    maxLength={6}
                  />
                  <S.SendBtn type="button" onClick={handleSend} disabled={codeTimer.isRunning}>
                    {codeTimer.isRunning ? codeTimer.format() : "인증번호 전송"}
                  </S.SendBtn>
                  {codeTimer.isRunning && (
                    <S.SendBtn type="button" onClick={() => { handleSend(); codeTimer.start(); }}>
                      재전송
                    </S.SendBtn>
                  )}
                </S.CodeRow>

                {codeSent && code.length === 6 && (
                  <S.VerifyBtn type="button" onClick={() => setStep("payment")}>
                    (테스트용 인증완료)
                  </S.VerifyBtn>
                )}
              </>
            )}
          </>
        )}

        {/* ── Step 2: 결제 ── */}
        {step === "payment" && (
          <>
            <S.ModalSub>재발급 수수료를 결제하면 신청이 완료됩니다.</S.ModalSub>

            <S.PaymentBox>
              <S.PaymentRow>
                <span>과정명</span>
                <span>{cert.course}</span>
              </S.PaymentRow>
              <S.PaymentRow>
                <span>수료번호</span>
                <span>{cert.no}</span>
              </S.PaymentRow>
              <S.PaymentRow>
                <span>발급일</span>
                <span>{cert.issueDate}</span>
              </S.PaymentRow>
              <S.PaymentRow>
                <span>재발급 수수료</span>
                <S.PaymentTotal>{FEE.toLocaleString()}원</S.PaymentTotal>
              </S.PaymentRow>
            </S.PaymentBox>

            {payError && (
              <div style={{ fontSize: 12, color: "#e53e3e", marginBottom: 10 }}>
                {payError}
              </div>
            )}

            <S.PayBtn
              type="button"
              disabled={payLoading}
              onClick={async () => {
                setPayError("");
                setPayLoading(true);
                try {
                  await requestPayment({
                    amount: FEE,
                    orderName: `수료증 재발급 - ${cert.course}`,
                    customerName: user?.userName || "이름없음",
                    paymentType: "CERT_REISSUE",
                    referenceId: cert.id,
                  });
                } catch (e) {
                  if (!e?.message?.includes("취소")) {
                    setPayError(e.message || "결제 요청 중 오류가 발생했습니다.");
                  }
                } finally {
                  setPayLoading(false);
                }
              }}
            >
              {payLoading ? "처리 중..." : "결제하기"}
            </S.PayBtn>
          </>
        )}

      </S.Modal>
    </S.Overlay>
  );
};

// ── 메인 컴포넌트 ──────────────────────────────────────────
const CertificateReissueComponent = () => {
  const { isLoggedIn, user } = useLoginCheck();
  const [selectedId, setSelectedId] = useState("");
  const [showModal, setShowModal]   = useState(false);

  const selectedCert = DUMMY_CERTS.find(c => String(c.id) === selectedId);

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>수료증 재발급 신청</S.SectionTitle>
      <LoginGuard message="재발급 신청은 로그인 후 이용 가능합니다." />
    </S.Wrapper>
  );

  return (
    <S.Wrapper>
      <S.SectionTitle>수료증 재발급 신청</S.SectionTitle>
      <S.Subtitle>재발급 신청할 수료증을 선택하세요.</S.Subtitle>

      <S.CertList>
        {DUMMY_CERTS.map(cert => {
          const selected = String(cert.id) === selectedId;
          return (
            <S.CertItem key={cert.id} $selected={selected}>
              <S.RadioInput
                type="radio"
                name="cert"
                value={cert.id}
                checked={selected}
                onChange={() => setSelectedId(String(cert.id))}
              />
              <S.CertItemInfo>
                <S.CertItemName $selected={selected}>{cert.course}</S.CertItemName>
                <S.CertItemMeta>{cert.no}</S.CertItemMeta>
                <S.CertItemMeta>발급일 {cert.issueDate} · 만료일 {cert.expiryDate}</S.CertItemMeta>
              </S.CertItemInfo>
            </S.CertItem>
          );
        })}
      </S.CertList>

      <S.FeeText>
        재발급 수수료: <strong>5,000원</strong>
        &nbsp;(재발급 후 180일간 출력 가능)
      </S.FeeText>

      <S.ConfirmBtn disabled={!selectedId} onClick={() => setShowModal(true)}>
        본인확인
      </S.ConfirmBtn>

      {showModal && (
        <ReissueModal
          user={user}
          cert={selectedCert}
          onClose={() => setShowModal(false)}
        />
      )}
    </S.Wrapper>
  );
};

export default CertificateReissueComponent;
