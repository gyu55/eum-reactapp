import { useState } from "react";
import * as S from "./style";
import useVerificationTimer from "../../../hooks/useVerificationTimer";


const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};

export default function SocialJoinComponent() {
  const [userNickname, setUserNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [smsLoading, setSmsLoading] = useState(false);
  const [smsMsg, setSmsMsg] = useState("");
  const smsTimer = useVerificationTimer();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [done, setDone] = useState(false);

  const handleSendCode = async () => {
    const memberPhone = phone.replace(/\D/g, "");
    if (!memberPhone) return;
    // 테스트 시: 아래 두 줄 주석 해제, 실서비스 시 주석 처리
    setCodeSent(true); setCodeVerified(true); setSmsMsg("(테스트) 인증 생략"); smsTimer.start(); return;
    setSmsLoading(true);
    setSmsMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberPhone }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeSent(true);
        setSmsMsg("인증번호가 발송되었습니다.");
      } else {
        setSmsMsg(data.message || "발송에 실패했습니다.");
      }
    } catch {
      setSmsMsg("서버 오류가 발생했습니다.");
    } finally {
      setSmsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    const memberPhone = phone.replace(/\D/g, "");
    if (!memberPhone || !verifyCode) return;
    // 테스트 시: 아래 두 줄 주석 해제, 실서비스 시 주석 처리
    setCodeVerified(true); setSmsMsg("(테스트) 인증 완료"); return;
    setSmsLoading(true);
    setSmsMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberPhone, code: verifyCode }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeVerified(true);
        setSmsMsg("인증이 완료되었습니다.");
      } else {
        setSmsMsg(data.message || "인증번호가 올바르지 않습니다.");
      }
    } catch {
      setSmsMsg("서버 오류가 발생했습니다.");
    } finally {
      setSmsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!codeVerified) {
      setSubmitMsg("핸드폰 인증을 완료해주세요.");
      return;
    }
    setSubmitLoading(true);
    setSubmitMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/auth/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userNickname: userNickname.trim() || null,
          userPhoneNum: phone.replace(/\D/g, ""),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setSubmitMsg(data.message || "회원가입에 실패했습니다.");
      }
    } catch {
      setSubmitMsg("서버 오류가 발생했습니다.");
    } finally {
      setSubmitLoading(false);
    }
  };

  if (done) {
    return (
      <S.PageWrap>
        <S.FormBox>
          <S.Logo src="/assets/image/layout/logo.svg" alt="이음" />
          <S.Card>
            <S.DoneWrap>
              <S.CheckCircle>
                <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26" r="24" stroke="#4359fc" strokeWidth="2.5" />
                  <path
                    d="M14 26l9 9 15-15"
                    stroke="#4359fc"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </S.CheckCircle>
              <S.DoneTitle>회원가입이 완료되었습니다!</S.DoneTitle>
              <S.DoneSub>이음과 함께 새로운 소통을 시작해보세요.</S.DoneSub>
              <S.SubmitBtn onClick={() => { window.location.href = "/"; }}>
                시작하기
              </S.SubmitBtn>
            </S.DoneWrap>
          </S.Card>
        </S.FormBox>
      </S.PageWrap>
    );
  }

  return (
    <S.PageWrap>
      <S.FormBox>
        <S.Logo src="/assets/image/layout/logo.svg" alt="이음" />
        <S.Card>
          <S.SectionTitle>추가 정보 입력</S.SectionTitle>

          <S.SectionBlock>
            <S.BlockTitle>닉네임</S.BlockTitle>
            <S.Label>닉네임 (선택)</S.Label>
            <S.Input
              placeholder="닉네임을 입력하세요 (미입력 시 기본값 사용)"
              value={userNickname}
              onChange={e => setUserNickname(e.target.value)}
            />
          </S.SectionBlock>

          <S.SectionBlock>
            <S.BlockTitle>핸드폰 인증</S.BlockTitle>
            <S.Label>핸드폰 번호 *</S.Label>
            <S.InlineRow>
              <S.Input
                placeholder="010-0000-0000"
                style={{ flex: 1, letterSpacing: "1px" }}
                value={phone}
                onChange={e => setPhone(formatPhone(e.target.value))}
                disabled={codeVerified}
              />
              <S.SmallBtn
                onClick={handleSendCode}
                disabled={smsLoading || codeVerified || smsTimer.isRunning || !phone}
              >
                {smsTimer.isRunning ? smsTimer.format() : "인증 발송"}
              </S.SmallBtn>
              {smsTimer.isRunning && !codeVerified && (
                <S.SmallBtn onClick={() => { handleSendCode(); smsTimer.start(); }}>
                  재전송
                </S.SmallBtn>
              )}
            </S.InlineRow>
            {codeSent && !codeVerified && (
              <div style={{ marginTop: 8 }}>
                <S.Label>인증번호</S.Label>
                <S.InlineRow>
                  <S.Input
                    placeholder="인증번호를 입력하세요"
                    style={{ flex: 1 }}
                    value={verifyCode}
                    onChange={e => setVerifyCode(e.target.value)}
                  />
                  <S.SmallBtn $green onClick={handleVerifyCode} disabled={smsLoading}>
                    확인
                  </S.SmallBtn>
                </S.InlineRow>
              </div>
            )}
            {smsMsg && <S.StatusMsg $success={codeVerified}>{smsMsg}</S.StatusMsg>}
          </S.SectionBlock>

          {submitMsg && <S.ErrorMsg>{submitMsg}</S.ErrorMsg>}

          <S.SubmitBtn onClick={handleSubmit} disabled={submitLoading}>
            {submitLoading ? "처리 중..." : "이음 시작하기"}
          </S.SubmitBtn>
        </S.Card>
      </S.FormBox>
    </S.PageWrap>
  );
}
