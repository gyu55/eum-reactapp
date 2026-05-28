import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const AccountInfoCard = ({ userInfo, setUserInfo, isSocialUser }) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState(userInfo.userEmail || "");
  const [userPhoneNum, setUserPhoneNum] = useState(userInfo.userPhoneNum || "");

  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const [isEmailCodeSent, setIsEmailCodeSent] = useState(false);
  const [isPhoneCodeSent, setIsPhoneCodeSent] = useState(false);

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const normalizePhone = (phone) => {
    return (phone || "").replaceAll("-", "").replaceAll(" ", "");
  };

  const handleSendEmailCode = async () => {
    if (isSocialUser) {
      alert("소셜 로그인 회원은 이메일을 변경할 수 없습니다.");
      return;
    }

    if (!userEmail.trim()) {
      alert("이메일을 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:10000/api/verifications/email/verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          memberEmail: userEmail,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("이메일 인증번호가 발송되었습니다.");
      setIsEmailCodeSent(true);
      setIsEmailVerified(false);
    } catch (error) {
      console.error(error);
      alert("이메일 인증번호 발송에 실패했습니다.");
    }
  };

  const handleVerifyEmailCode = async () => {
    if (isSocialUser) {
      alert("소셜 로그인 회원은 이메일을 변경할 수 없습니다.");
      return;
    }

    if (!emailCode.trim()) {
      alert("이메일 인증번호를 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:10000/api/verifications/email/verification-code", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          memberEmail: userEmail,
          code: emailCode,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        setIsEmailVerified(false);
        return;
      }

      alert("이메일 인증이 완료되었습니다.");
      setIsEmailVerified(true);
    } catch (error) {
      console.error(error);
      alert("이메일 인증번호 확인에 실패했습니다.");
    }
  };

  const handleSendPhoneCode = async () => {
    const phone = normalizePhone(userPhoneNum);

    if (!/^010\d{8}$/.test(phone)) {
      alert("휴대폰 번호는 01012345678 형식으로 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          memberPhone: phone,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("휴대폰 인증번호가 발송되었습니다.");
      setIsPhoneCodeSent(true);
      setIsPhoneVerified(false);
    } catch (error) {
      console.error(error);
      alert("휴대폰 인증번호 발송에 실패했습니다.");
    }
  };

  const handleVerifyPhoneCode = async () => {
    const phone = normalizePhone(userPhoneNum);

    if (!phoneCode.trim()) {
      alert("휴대폰 인증번호를 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:10000/api/verifications/phone/verification-code", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          memberPhone: phone,
          code: phoneCode,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        setIsPhoneVerified(false);
        return;
      }

      alert("휴대폰 인증이 완료되었습니다.");
      setIsPhoneVerified(true);
    } catch (error) {
      console.error(error);
      alert("휴대폰 인증번호 확인에 실패했습니다.");
    }
  };

  const handleSaveAccountInfo = async () => {
    const phone = normalizePhone(userPhoneNum);
    const emailChanged = userEmail !== userInfo.userEmail;
    const phoneChanged = phone !== normalizePhone(userInfo.userPhoneNum || "");

    if (isSocialUser && emailChanged) {
      alert("소셜 로그인 회원은 이메일을 변경할 수 없습니다.");
      return;
    }

    if (!userEmail.trim()) {
      alert("이메일을 입력해 주세요.");
      return;
    }

    if (!/^010\d{8}$/.test(phone)) {
      alert("휴대폰 번호는 01012345678 형식으로 입력해 주세요.");
      return;
    }

    if (!isSocialUser && emailChanged && !isEmailVerified) {
      alert("이메일 인증을 완료해 주세요.");
      return;
    }

    if (phoneChanged && !isPhoneVerified) {
      alert("휴대폰 인증을 완료해 주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:10000/private/api/mypage/edit/account", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userEmail: isSocialUser ? userInfo.userEmail : userEmail,
          userPhoneNum: phone,
          emailCode,
          phoneCode,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      setUserInfo({
        ...userInfo,
        userEmail: isSocialUser ? userInfo.userEmail : userEmail,
        userPhoneNum: phone,
      });

      alert("계정 정보가 저장되었습니다.");
      navigate("/mypage", { replace: true });
    } catch (error) {
      console.error(error);
      alert("계정 정보 저장에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    navigate("/mypage", { replace: true });
  };

  return (
    <S.AccountInfoSection>
      <S.SectionTitle>계정 정보</S.SectionTitle>
      <S.SectionDesc>이메일 및 연락처 정보를 수정합니다</S.SectionDesc>

      <S.AccountInfoCardBox>
        <S.AccountFieldGroup>
          <S.Field>
            <S.Label>
              이메일
              <S.Required>*</S.Required>
            </S.Label>

            {isSocialUser ? (
              <S.ReadOnlyField>{userInfo.userEmail}</S.ReadOnlyField>
            ) : (
              <>
                <S.PhoneInputRow>
                  <S.PhoneInput
                    type="email"
                    value={userEmail}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      setEmailCode("");
                      setIsEmailCodeSent(false);
                      setIsEmailVerified(false);
                    }}
                    placeholder="이메일을 입력해 주세요"
                  />

                  <S.CheckButton type="button" onClick={handleSendEmailCode}>
                    인증하기
                  </S.CheckButton>
                </S.PhoneInputRow>

                {isEmailCodeSent && (
                  <S.VerifyInputRow>
                    <S.PhoneInput
                      type="text"
                      value={emailCode}
                      onChange={(e) => {
                        setEmailCode(e.target.value);
                        setIsEmailVerified(false);
                      }}
                      placeholder="이메일 인증번호 입력"
                      disabled={isEmailVerified}
                    />

                    <S.CheckButton type="button" onClick={handleVerifyEmailCode}>
                      확인
                    </S.CheckButton>
                  </S.VerifyInputRow>
                )}
              </>
            )}

            <S.FieldDesc>
              {isSocialUser
                ? "이메일은 변경할 수 없습니다 · 소셜 로그인 계정"
                : isEmailVerified
                ? "이메일 인증이 완료되었습니다"
                : "일반 회원은 이메일을 변경할 수 있습니다"}
            </S.FieldDesc>
          </S.Field>

          <S.PhoneField>
            <S.Label>
              전화번호
              <S.Required>*</S.Required>
            </S.Label>

            <S.PhoneInputRow>
              <S.PhoneInput
                type="tel"
                value={userPhoneNum}
                onChange={(e) => {
                  setUserPhoneNum(e.target.value);
                  setPhoneCode("");
                  setIsPhoneCodeSent(false);
                  setIsPhoneVerified(false);
                }}
                placeholder="01012345678"
              />

              <S.CheckButton type="button" onClick={handleSendPhoneCode}>
                인증하기
              </S.CheckButton>
            </S.PhoneInputRow>

            {isPhoneCodeSent && (
              <S.VerifyInputRow>
                <S.PhoneInput
                  type="text"
                  value={phoneCode}
                  onChange={(e) => {
                    setPhoneCode(e.target.value);
                    setIsPhoneVerified(false);
                  }}
                  placeholder="휴대폰 인증번호 입력"
                  disabled={isPhoneVerified}
                />

                <S.CheckButton type="button" onClick={handleVerifyPhoneCode}>
                  확인
                </S.CheckButton>
              </S.VerifyInputRow>
            )}

            <S.FieldDesc>
              {isPhoneVerified
                ? "휴대폰 인증이 완료되었습니다"
                : "알림 수신 및 본인 확인에 사용됩니다"}
            </S.FieldDesc>
          </S.PhoneField>
        </S.AccountFieldGroup>

        <S.AccountDivider />

        <S.AccountBottomArea>
          <S.ButtonArea>
            <S.CancelButton type="button" onClick={handleCancel}>
              취소
            </S.CancelButton>

            <S.SaveButton type="button" onClick={handleSaveAccountInfo}>
              저장하기
            </S.SaveButton>
          </S.ButtonArea>
        </S.AccountBottomArea>
      </S.AccountInfoCardBox>
    </S.AccountInfoSection>
  );
};

export default AccountInfoCard;