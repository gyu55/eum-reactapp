import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import useVerificationTimer from "../../../hooks/useVerificationTimer";

const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;

const maskEmail = (email) => {
  const [local, domain] = email.split('@');
  const visible = local.slice(0, 3);
  const masked = '*'.repeat(Math.max(local.length - 3, 3));
  return `${visible}${masked}@${domain}`;
};

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};

/* ── SMS 인증 관련 함수 (테스트 시 주석 처리된 부분 참고) ── */
const sendVerificationCode = async (phone, setLoading, setMsg, setSent) => {
  const memberPhone = phone.replace(/\D/g, "");
  if (!memberPhone) return;
  setLoading(true);
  setMsg("");
  // 테스트 시: 아래 주석 해제 → 인증 없이 바로 완료 처리
  setSent(true); setMsg("(테스트) 인증 생략"); setLoading(false); return;
  try {
    const res = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memberPhone }),
    });
    const data = await res.json();
    if (data.success) {
      setSent(true);
      setMsg("인증번호가 발송되었습니다.");
    } else {
      setMsg(data.message || "발송에 실패했습니다.");
    }
  } catch {
    setMsg("서버 오류가 발생했습니다.");
  } finally {
    setLoading(false);
  }
};

const verifyCode = async (phone, code, setLoading, setMsg, setVerified) => {
  const memberPhone = phone.replace(/\D/g, "");
  if (!memberPhone || !code) return;
  setLoading(true);
  setMsg("");
  // 테스트 시: 아래 주석 해제 → 인증 없이 바로 완료 처리
  setVerified(true); setMsg("(테스트) 인증 완료"); setLoading(false); return;
  try {
    const res = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memberPhone, code }),
    });
    const data = await res.json();
    if (data.success) {
      setVerified(true);
      setMsg("인증이 완료되었습니다.");
    } else {
      setMsg(data.message || "인증번호가 올바르지 않습니다.");
    }
  } catch {
    setMsg("서버 오류가 발생했습니다.");
  } finally {
    setLoading(false);
  }
};

export default function FindAccountComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || "email");
  const emailTimer = useVerificationTimer();
  const pwTimer    = useVerificationTimer();

  /* ── 이메일 찾기 상태 ── */
  const [emailStep, setEmailStep] = useState(1);
  const [emailName, setEmailName] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [emailCodeSent, setEmailCodeSent] = useState(false);
  const [emailCodeVerified, setEmailCodeVerified] = useState(false);
  const [emailResult, setEmailResult] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);

  /* ── 비밀번호 찾기 상태 ── */
  const [pwStep, setPwStep] = useState(1);
  const [pwEmail, setPwEmail] = useState("");
  const [pwPhone, setPwPhone] = useState("");
  const [pwCode, setPwCode] = useState("");
  const [pwCodeSent, setPwCodeSent] = useState(false);
  const [pwCodeVerified, setPwCodeVerified] = useState(false);
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [pwLoading, setPwLoading] = useState(false);

  useEffect(() => { if (emailCodeVerified) emailTimer.reset(); }, [emailCodeVerified]);
  useEffect(() => { if (pwCodeVerified) pwTimer.reset(); }, [pwCodeVerified]);

  const handleFindEmail = async () => {
    if (!emailName || !emailCodeVerified) return;
    setEmailLoading(true);
    setEmailMsg("");
    try {
      const res = await fetch(`http://localhost:10000/api/users/email?userName=${encodeURIComponent(emailName)}&userPhoneNum=${emailPhone.replace(/\D/g, "")}`, {
        method: "GET",
        credentials: "include",
      });
      const { success, data, message } = await res.json();
      if (success) {
        setEmailResult(data.userEmail);
        setEmailStep(2);
      } else {
        setEmailMsg(message || "일치하는 계정을 찾을 수 없습니다.");
      }
    } catch {
      setEmailMsg("서버 오류가 발생했습니다.");
    } finally {
      setEmailLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!PASSWORD_REGEX.test(newPw)) {
      setPwMsg("비밀번호 형식이 올바르지 않습니다.");
      return;
    }
    if (newPw !== confirmPw) {
      setPwMsg("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPwLoading(true);
    setPwMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/users/password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: pwEmail, newPassword: newPw }),
      });
      const data = await res.json();
      if (data.success) {
        setPwStep(3);
      } else {
        setPwMsg(data.message || "비밀번호 변경에 실패했습니다.");
      }
    } catch {
      setPwMsg("서버 오류가 발생했습니다.");
    } finally {
      setPwLoading(false);
    }
  };

  const switchTab = (t) => {
    setTab(t);
    if (t === "email") {
      setPwStep(1); setPwEmail(""); setPwPhone(""); setPwCode("");
      setPwCodeSent(false); setPwCodeVerified(false);
      setNewPw(""); setConfirmPw(""); setPwMsg("");
    } else {
      setEmailStep(1); setEmailName(""); setEmailPhone(""); setEmailCode("");
      setEmailCodeSent(false); setEmailCodeVerified(false);
      setEmailResult(""); setEmailMsg("");
    }
  };

  return (
    <S.PageWrap>
      <S.Box>
        <S.BrandLogo onClick={() => navigate("/login")}>
          <img src="/assets/image/layout/logo.svg" alt="이음" style={{ height: 32 }} />
        </S.BrandLogo>

        <S.TabRow>
          <S.Tab $active={tab === "email"} onClick={() => switchTab("email")}>이메일 찾기</S.Tab>
          <S.Tab $active={tab === "password"} onClick={() => switchTab("password")}>비밀번호 찾기</S.Tab>
        </S.TabRow>

        {/* ── 이메일 찾기 ── */}
        {tab === "email" && (
          <>
            {emailStep === 1 && (
              <S.Section>
                <div>
                  <S.Label>이름</S.Label>
                  <S.Input
                    placeholder="이름을 입력하세요"
                    value={emailName}
                    onChange={e => setEmailName(e.target.value)}
                  />
                </div>
                <div>
                  <S.Label>핸드폰 번호</S.Label>
                  <S.InlineRow>
                    <S.Input
                      placeholder="010-0000-0000"
                      style={{ flex: 1, letterSpacing: "1px" }}
                      value={emailPhone}
                      onChange={e => setEmailPhone(formatPhone(e.target.value))}
                      disabled={emailCodeVerified}
                    />
                    <S.SmallBtn
                      onClick={() => { sendVerificationCode(emailPhone, setEmailLoading, setEmailMsg, setEmailCodeSent); emailTimer.start(); }}
                      disabled={emailLoading || emailCodeVerified || emailTimer.isRunning}
                    >
                      {emailTimer.isRunning ? emailTimer.format() : "인증 발송"}
                    </S.SmallBtn>
                    {emailTimer.isRunning && !emailCodeVerified && (
                      <S.SmallBtn onClick={() => { sendVerificationCode(emailPhone, setEmailLoading, setEmailMsg, setEmailCodeSent); emailTimer.start(); }}>
                        재전송
                      </S.SmallBtn>
                    )}
                  </S.InlineRow>
                </div>
                {emailCodeSent && !emailCodeVerified && (
                  <div>
                    <S.Label>인증번호</S.Label>
                    <S.InlineRow>
                      <S.Input
                        placeholder="인증번호를 입력하세요"
                        style={{ flex: 1 }}
                        value={emailCode}
                        onChange={e => setEmailCode(e.target.value)}
                      />
                      <S.SmallBtn $green
                        onClick={() => verifyCode(emailPhone, emailCode, setEmailLoading, setEmailMsg, setEmailCodeVerified)}
                        disabled={emailLoading}
                      >
                        확인
                      </S.SmallBtn>
                    </S.InlineRow>
                  </div>
                )}
                {emailMsg && <S.Hint $ok={emailCodeVerified && !emailMsg.includes("찾을 수 없") && !emailMsg.includes("오류")}>{emailMsg}</S.Hint>}
                <S.PrimaryBtn
                  onClick={handleFindEmail}
                  disabled={!emailName || !emailCodeVerified || emailLoading}
                >
                  {emailLoading ? "조회 중..." : "이메일 찾기"}
                </S.PrimaryBtn>
              </S.Section>
            )}

            {emailStep === 2 && (
              <S.Section>
                <S.ResultBox>
                  <S.ResultLabel>회원님의 이메일</S.ResultLabel>
                  <S.ResultEmail>{maskEmail(emailResult)}</S.ResultEmail>
                </S.ResultBox>
                <S.PrimaryBtn onClick={() => navigate("/login")}>로그인하러 가기</S.PrimaryBtn>
                <S.SecondaryBtn onClick={() => switchTab("password")}>비밀번호 찾기</S.SecondaryBtn>
              </S.Section>
            )}
          </>
        )}

        {/* ── 비밀번호 찾기 ── */}
        {tab === "password" && (
          <>
            {pwStep === 1 && (
              <S.Section>
                <div>
                  <S.Label>이메일</S.Label>
                  <S.Input
                    placeholder="example@email.com"
                    value={pwEmail}
                    onChange={e => setPwEmail(e.target.value)}
                  />
                </div>
                <div>
                  <S.Label>핸드폰 번호</S.Label>
                  <S.InlineRow>
                    <S.Input
                      placeholder="010-0000-0000"
                      style={{ flex: 1, letterSpacing: "1px" }}
                      value={pwPhone}
                      onChange={e => setPwPhone(formatPhone(e.target.value))}
                      disabled={pwCodeVerified}
                    />
                    <S.SmallBtn
                      onClick={() => { sendVerificationCode(pwPhone, setPwLoading, setPwMsg, setPwCodeSent); pwTimer.start(); }}
                      disabled={pwLoading || pwCodeVerified || pwTimer.isRunning}
                    >
                      {pwTimer.isRunning ? pwTimer.format() : "인증 발송"}
                    </S.SmallBtn>
                    {pwTimer.isRunning && !pwCodeVerified && (
                      <S.SmallBtn onClick={() => { sendVerificationCode(pwPhone, setPwLoading, setPwMsg, setPwCodeSent); pwTimer.start(); }}>
                        재전송
                      </S.SmallBtn>
                    )}
                  </S.InlineRow>
                </div>
                {pwCodeSent && !pwCodeVerified && (
                  <div>
                    <S.Label>인증번호</S.Label>
                    <S.InlineRow>
                      <S.Input
                        placeholder="인증번호를 입력하세요"
                        style={{ flex: 1 }}
                        value={pwCode}
                        onChange={e => setPwCode(e.target.value)}
                      />
                      <S.SmallBtn $green
                        onClick={() => verifyCode(pwPhone, pwCode, setPwLoading, setPwMsg, setPwCodeVerified)}
                        disabled={pwLoading}
                      >
                        확인
                      </S.SmallBtn>
                    </S.InlineRow>
                  </div>
                )}
                {pwMsg && <S.Hint $ok={pwCodeVerified}>{pwMsg}</S.Hint>}
                <S.PrimaryBtn
                  onClick={() => { if (pwCodeVerified) { setPwStep(2); setPwMsg(""); } }}
                  disabled={!pwEmail || !pwCodeVerified}
                >
                  다음
                </S.PrimaryBtn>
              </S.Section>
            )}

            {pwStep === 2 && (
              <S.Section>
                <div>
                  <S.Label>새 비밀번호</S.Label>
                  <S.Input
                    type="password"
                    placeholder="8자 이상 입력하세요"
                    value={newPw}
                    onChange={e => setNewPw(e.target.value)}
                  />
                  <S.InputHint>8자 이상, 영문·숫자·특수문자(!@#$%^&*) 사용 가능</S.InputHint>
                  {newPw && !PASSWORD_REGEX.test(newPw) && (
                    <S.Hint $ok={false}>8자 이상, 허용된 특수문자(!@#$%^&*)만 사용 가능합니다.</S.Hint>
                  )}
                </div>
                <div>
                  <S.Label>비밀번호 확인</S.Label>
                  <S.Input
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={confirmPw}
                    onChange={e => setConfirmPw(e.target.value)}
                  />
                  {confirmPw && (
                    <S.Hint $ok={newPw === confirmPw}>
                      {newPw === confirmPw ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                    </S.Hint>
                  )}
                </div>
                {pwMsg && <S.Hint $ok={false}>{pwMsg}</S.Hint>}
                <S.PrimaryBtn
                  onClick={handleResetPassword}
                  disabled={pwLoading || !newPw || !confirmPw}
                >
                  {pwLoading ? "처리 중..." : "비밀번호 변경"}
                </S.PrimaryBtn>
              </S.Section>
            )}

            {pwStep === 3 && (
              <S.Section>
                <S.ResultBox>
                  <S.ResultLabel>비밀번호가 변경되었습니다.</S.ResultLabel>
                  <S.ResultSub>새 비밀번호로 로그인해 주세요.</S.ResultSub>
                </S.ResultBox>
                <S.PrimaryBtn onClick={() => navigate("/login")}>로그인하러 가기</S.PrimaryBtn>
              </S.Section>
            )}
          </>
        )}

        <S.BackLink onClick={() => navigate("/login")}>← 로그인으로 돌아가기</S.BackLink>
      </S.Box>
    </S.PageWrap>
  );
}
