import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const AccountInfoCard = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();

  const [userPhoneNum, setUserPhoneNum] = useState(
    userInfo.userPhoneNum || ""
  );

  const [verificationCode, setVerificationCode] = useState("");

  const [isVerified, setIsVerified] = useState(false);

  // 휴대폰 인증번호 발송
  const handleSendVerificationCode = async () => {
    const onlyNumberPhone =
      userPhoneNum.replace(/-/g, "").trim();

    if (!/^01[016789]\d{7,8}$/.test(onlyNumberPhone)) {
      alert("휴대폰 번호를 확인해주세요.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:10000/api/sms/phone/verification-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberPhone: onlyNumberPhone,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("인증번호가 발송되었습니다.");
    } catch (error) {
      console.error(error);
      alert("인증번호 발송에 실패했습니다.");
    }
  };

  // 인증번호 확인
  const handleVerifyCode = async () => {
    if (!verificationCode.trim()) {
      alert("인증번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:10000/api/sms/phone/verification-code/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberPhone: userPhoneNum.replace(/-/g, ""),
            code: verificationCode,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      setIsVerified(true);

      alert("휴대폰 인증이 완료되었습니다.");
    } catch (error) {
      console.error(error);
      alert("인증 확인에 실패했습니다.");
    }
  };

  // 계정 정보 저장
  const handleSaveAccountInfo = async () => {
    if (!userPhoneNum.trim()) {
      alert("전화번호를 입력해 주세요.");
      return;
    }

    if (!isVerified) {
      alert("휴대폰 인증을 완료해주세요.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:10000/private/api/mypage/edit/account",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            userEmail: userInfo.userEmail,
            userPhoneNum,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      // 프론트 상태 즉시 반영
      setUserInfo({
        ...userInfo,
        userPhoneNum,
      });

      alert("계정 정보가 저장되었습니다.");

      navigate("/mypage");
    } catch (error) {
      console.error(error);
      alert("계정 정보 저장에 실패했습니다.");
    }
  };

  // 입력값 초기화
  const handleCancel = () => {
    setUserPhoneNum(userInfo.userPhoneNum || "");
    setVerificationCode("");
    setIsVerified(false);
  };

  return (
    <S.AccountInfoSection>
      {/* 섹션 제목 */}
      <S.SectionTitle>
        계정 정보
      </S.SectionTitle>

      {/* 섹션 설명 */}
      <S.SectionDesc>
        이메일 및 연락처 정보를 수정합니다
      </S.SectionDesc>

      <S.AccountInfoCardBox>
        <S.AccountFieldGroup>
          <S.Field>
            <S.Label>
              이메일
              <S.Required>*</S.Required>
            </S.Label>

            {/* 이메일은 변경 불가 */}
            <S.ReadOnlyField>
              {userInfo.userEmail}
            </S.ReadOnlyField>

            <S.FieldDesc>
              이메일은 변경할 수 없습니다 · 소셜 로그인 계정
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
                  setIsVerified(false);
                }}
                placeholder="01012345678"
              />

              <S.CheckButton
                type="button"
                onClick={handleSendVerificationCode}
              >
                인증하기
              </S.CheckButton>
            </S.PhoneInputRow>

            {/* 인증번호 입력 */}
            <S.PhoneInputRow
              style={{ marginTop: "12px" }}
            >
              <S.PhoneInput
                type="text"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(e.target.value)
                }
                placeholder="인증번호 입력"
              />

              <S.CheckButton
                type="button"
                onClick={handleVerifyCode}
              >
                확인
              </S.CheckButton>
            </S.PhoneInputRow>

            <S.FieldDesc>
              알림 수신 및 본인 확인에 사용됩니다
            </S.FieldDesc>
          </S.PhoneField>
        </S.AccountFieldGroup>

        <S.AccountDivider />

        <S.AccountBottomArea>
          <S.ButtonArea>
            <S.CancelButton
              type="button"
              onClick={handleCancel}
            >
              취소
            </S.CancelButton>

            <S.SaveButton
              type="button"
              onClick={handleSaveAccountInfo}
            >
              저장하기
            </S.SaveButton>
          </S.ButtonArea>
        </S.AccountBottomArea>
      </S.AccountInfoCardBox>
    </S.AccountInfoSection>
  );
};

export default AccountInfoCard;