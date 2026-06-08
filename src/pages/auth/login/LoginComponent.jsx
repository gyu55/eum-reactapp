import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function LoginComponent() {
  const navigate = useNavigate();

  const [saveId, setSaveId] = useState(() => !!localStorage.getItem("savedEmail"));
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("savedEmail");
    if (saved) setUserEmail(saved);
  }, []);

  const handleSocialLogin = (provider) => {
    window.location.href = `http://localhost:10000/oauth2/authorization/${provider}`;
  };

  const handleLogin = async () => {
    if (!userEmail || !userPassword) {
      setLoginMsg("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    setLoginLoading(true);
    setLoginMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userEmail, userPassword, socialUserProvider: "local", autoLogin })
      });
      const data = await res.json();
      if (data.success) {
        if (saveId) localStorage.setItem("savedEmail", userEmail);
        else localStorage.removeItem("savedEmail");
        window.location.href = "/";
      } else {
        setLoginMsg("이메일 또는 비밀번호를 확인해주세요.");
      }
    } catch {
      setLoginMsg("서버 오류가 발생했습니다.");
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <S.PageWrap>
      <S.FormBox>
        <S.Logo src="/assets/image/layout/logo.svg" alt="이음" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />

        <S.InputGroup>
          <S.Input
            placeholder="아이디 (이메일)"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
          />
          <S.Input
            type="password"
            placeholder="비밀번호"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
          />
        </S.InputGroup>

        <S.AutoLoginRow>
          <S.AutoLoginCheckbox
            id="save-id"
            type="checkbox"
            checked={saveId}
            onChange={e => {
              setSaveId(e.target.checked);
              if (!e.target.checked) localStorage.removeItem("savedEmail");
            }}
          />
          <S.AutoLoginLabel htmlFor="save-id">아이디 저장</S.AutoLoginLabel>
          <div style={{ flex: 1 }} />
          <S.AutoLoginCheckbox
            id="auto-login"
            type="checkbox"
            checked={autoLogin}
            onChange={e => setAutoLogin(e.target.checked)}
          />
          <S.AutoLoginLabel htmlFor="auto-login">자동로그인</S.AutoLoginLabel>
        </S.AutoLoginRow>

        {loginMsg && <S.ErrorMsg>{loginMsg}</S.ErrorMsg>}

        <S.LoginBtn onClick={handleLogin} disabled={loginLoading}>
          {loginLoading ? "로그인 중..." : "로그인"}
        </S.LoginBtn>

        <S.SubLinks>
          <span onClick={() => navigate("/join")}>회원가입</span>
          <span onClick={() => navigate("/find-account")}>이메일/비밀번호 찾기</span>
        </S.SubLinks>

        <S.Divider>또는</S.Divider>

        <S.SocialSection>
          <S.SocialTitle>다른 계정으로 로그인</S.SocialTitle>
          <S.SocialBtnRow>
            <S.SocialCircle $bg="#FEE500" $color="#3C1E1E" onClick={() => handleSocialLogin("kakao")}>
              K
            </S.SocialCircle>
            <S.SocialCircle $bg="#03C75A" $color="#fff" onClick={() => handleSocialLogin("naver")}>
              N
            </S.SocialCircle>
            <S.SocialCircle $bg="#fff" $outline onClick={() => handleSocialLogin("google")}>
              <img src="https://www.google.com/favicon.ico" alt="G" style={{ width: 18, height: 18 }} />
            </S.SocialCircle>
          </S.SocialBtnRow>
        </S.SocialSection>
      </S.FormBox>
    </S.PageWrap>
  );
}
