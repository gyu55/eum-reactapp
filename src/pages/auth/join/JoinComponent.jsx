import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import useVerificationTimer from "../../../hooks/useVerificationTimer";

const steps = ["약관동의", "회원정보 입력", "가입완료"];

const formatBirth = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
};

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};

const AGREE_ITEMS = [
  { id: "terms", label: "[필수] 이음 서비스 이용약관에 동의합니다." },
  { id: "privacy", label: "[필수] 개인정보 수집 및 이용에 동의합니다." },
  { id: "marketing", label: "[선택] 마케팅 정보 수신에 동의합니다." },
];

export default function JoinComponent() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formStep, setFormStep] = useState(0);
  const advanceTo = (step) => setFormStep(prev => Math.max(prev, step));

  const [birth, setBirth] = useState("");

  // 1단계: 약관동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [agrees, setAgrees] = useState({ terms: false, privacy: false, marketing: false });

  // 2단계: 회원정보
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [smsLoading, setSmsLoading] = useState(false);
  const [smsMsg, setSmsMsg] = useState("");
  const smsTimer = useVerificationTimer();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgrees({ terms: checked, privacy: checked, marketing: checked });
  };

  const handleAgreeItem = (id, checked) => {
    const next = { ...agrees, [id]: checked };
    setAgrees(next);
    setAgreeAll(Object.values(next).every(Boolean));
  };

  const handleForm = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSendCode = async () => {
    const memberPhone = phone.replace(/\D/g, "");
    if (!memberPhone) return;
    setSmsLoading(true);
    setSmsMsg("");
    // 테스트 시: SMS 발송 생략
    setCodeSent(true); setSmsMsg("(테스트) 인증 생략"); setSmsLoading(false); smsTimer.start(); return;
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
    setSmsLoading(true);
    setSmsMsg("");
    // 테스트 시: 인증코드 확인 생략
    setCodeVerified(true); setSmsMsg("(테스트) 인증 완료"); setSmsLoading(false); return;
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
    if (!form.userName || !form.userEmail || !form.userPassword) {
      setSubmitMsg("필수 항목을 모두 입력해주세요.");
      return;
    }
    if (form.userPassword !== form.confirmPassword) {
      setSubmitMsg("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!codeVerified) {
      setSubmitMsg("핸드폰 인증을 완료해주세요.");
      return;
    }
    setSubmitLoading(true);
    setSubmitMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: form.userName,
          userEmail: form.userEmail,
          userPassword: form.userPassword,
          userBirth: birth,
          userPhoneNum: phone.replace(/\D/g, ""),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCurrentStep(2);
      } else {
        setSubmitMsg(data.message || "회원가입에 실패했습니다.");
      }
    } catch {
      setSubmitMsg("서버 오류가 발생했습니다.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <S.PageWrap>
      <S.Hero>
        <S.Logo src="/assets/image/layout/logo.svg" alt="이음" onClick={() => navigate("/")} />
        <S.HeroTitle>이음과 함께<br />새로운 소통을 시작해보세요</S.HeroTitle>
        <S.StepBar>
          {steps.map((name, i) => (
            <div key={name} style={{ display: "flex", alignItems: "center" }}>
              <S.StepItem>
                <S.StepCircle $active={i <= currentStep}>{i + 1}</S.StepCircle>
                <S.StepName $active={i <= currentStep}>{name}</S.StepName>
              </S.StepItem>
              {i < steps.length - 1 && <S.StepLine />}
            </div>
          ))}
        </S.StepBar>
      </S.Hero>

      <S.ContentArea>

        {/* 1단계: 약관동의 */}
        {currentStep === 0 && (
          <S.FormCard>
            <S.SectionTitle>서비스 이용약관</S.SectionTitle>
            <S.SectionBlock>
              <S.AgreeAll>
                <input
                  type="checkbox"
                  checked={agreeAll}
                  onChange={e => handleAgreeAll(e.target.checked)}
                />
                전체 동의
              </S.AgreeAll>
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
                {AGREE_ITEMS.map(item => (
                  <S.AgreeItem key={item.id}>
                    <S.AgreeLeft>
                      <input
                        type="checkbox"
                        checked={agrees[item.id]}
                        onChange={e => handleAgreeItem(item.id, e.target.checked)}
                      />
                      {item.label}
                    </S.AgreeLeft>
                    <S.ViewLink>보기</S.ViewLink>
                  </S.AgreeItem>
                ))}
              </div>
            </S.SectionBlock>

            <S.SubmitBtn
              onClick={() => setCurrentStep(1)}
              disabled={!agrees.terms || !agrees.privacy}
              style={{ opacity: (!agrees.terms || !agrees.privacy) ? 0.4 : 1 }}
            >
              다음
            </S.SubmitBtn>
          </S.FormCard>
        )}

        {/* 2단계: 회원정보 입력 및 핸드폰 인증 */}
        {currentStep === 1 && (
          <S.FormCard>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* 이름 */}
              <S.AnimatedField>
                <S.Label>이름 <span>*</span></S.Label>
                <S.Input
                  name="userName"
                  placeholder="이름을 입력하세요"
                  value={form.userName}
                  onChange={e => {
                    handleForm(e);
                    if (e.target.value.trim().length >= 2) advanceTo(1);
                  }}
                />
              </S.AnimatedField>

              {/* 생년월일 */}
              {formStep >= 1 && (
                <S.AnimatedField>
                  <S.Label>생년월일 <span>*</span></S.Label>
                  <S.Input
                    placeholder="YYYY-MM-DD"
                    style={{ letterSpacing: "1px" }}
                    value={birth}
                    onChange={e => {
                      const v = formatBirth(e.target.value);
                      setBirth(v);
                      if (v.length === 10) advanceTo(2);
                    }}
                  />
                </S.AnimatedField>
              )}

              {/* 이메일 */}
              {formStep >= 2 && (
                <S.AnimatedField>
                  <S.Label>아이디 (이메일) <span>*</span></S.Label>
                  <S.Input
                    name="userEmail"
                    placeholder="example@email.com"
                    value={form.userEmail}
                    onChange={e => {
                      handleForm(e);
                      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) advanceTo(3);
                    }}
                  />
                </S.AnimatedField>
              )}

              {/* 비밀번호 */}
              {formStep >= 3 && (
                <S.AnimatedField>
                  <S.Label>비밀번호 <span>*</span></S.Label>
                  <S.Input
                    type="password"
                    name="userPassword"
                    placeholder="8자 이상 입력하세요"
                    value={form.userPassword}
                    onChange={e => {
                      handleForm(e);
                      if (e.target.value.length >= 8) advanceTo(4);
                    }}
                  />
                </S.AnimatedField>
              )}

              {/* 비밀번호 확인 */}
              {formStep >= 4 && (
                <S.AnimatedField>
                  <S.Label>비밀번호 확인 <span>*</span></S.Label>
                  <S.Input
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={form.confirmPassword}
                    onChange={e => {
                      handleForm(e);
                      if (e.target.value && form.userPassword === e.target.value) advanceTo(5);
                    }}
                  />
                  {form.confirmPassword && (
                    <S.FieldHint $ok={form.userPassword === form.confirmPassword}>
                      {form.userPassword === form.confirmPassword ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                    </S.FieldHint>
                  )}
                </S.AnimatedField>
              )}

              {/* 핸드폰 인증 */}
              {formStep >= 5 && (
                <S.AnimatedField>
                  <S.Label>핸드폰 번호 <span>*</span></S.Label>
                  <S.InlineRow>
                    <S.Input
                      placeholder="010-0000-0000"
                      style={{ flex: 1, letterSpacing: "1px" }}
                      value={phone}
                      onChange={e => setPhone(formatPhone(e.target.value))}
                      disabled={codeVerified}
                    />
                    <S.SmallBtn
                      onClick={() => { handleSendCode(); }}
                      disabled={smsLoading || codeVerified || smsTimer.isRunning}
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
                      <S.Label>인증번호 <span>*</span></S.Label>
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
                  {smsMsg && (
                    <S.FieldHint $ok={codeVerified}>{smsMsg}</S.FieldHint>
                  )}
                </S.AnimatedField>
              )}

            </div>

            {submitMsg && (
              <div style={{ fontSize: 13, color: "#e74c3c", marginTop: 12, textAlign: "center" }}>
                {submitMsg}
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <S.SubmitBtn
                onClick={() => setCurrentStep(0)}
                style={{ background: "#fff", color: "#4359fc", border: "1.5px solid #4359fc", flex: 1 }}
              >
                이전
              </S.SubmitBtn>
              {formStep >= 5 && (
                <S.SubmitBtn onClick={handleSubmit} disabled={submitLoading} style={{ flex: 2 }}>
                  {submitLoading ? "처리 중..." : "이음 시작하기"}
                </S.SubmitBtn>
              )}
            </div>
          </S.FormCard>
        )}

        {/* 3단계: 가입완료 */}
        {currentStep === 2 && (
          <S.FormCard>
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
              <S.SubmitBtn onClick={() => navigate("/login")} style={{ maxWidth: 240, margin: "0 auto" }}>
                로그인하러 가기
              </S.SubmitBtn>
            </S.DoneWrap>
          </S.FormCard>
        )}

      </S.ContentArea>
    </S.PageWrap>
  );
}
