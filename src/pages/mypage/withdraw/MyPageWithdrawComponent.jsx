import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WithdrawNoticeCard from "./components/WithdrawNoticeCard";
import WithdrawReasonCard from "./components/WithdrawReasonCard";
import ConfirmWithdrawCard from "./components/ConfirmWithdrawCard";

import S from "./style";

const MyPageWithdrawComponent = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [withdrawDetail, setWithdrawDetail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isEmailCodeSent, setIsEmailCodeSent] = useState(false);
  const [withdrawAgree, setWithdrawAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialProvider = String(userInfo?.socialMemberProvider || "").toLowerCase();

  const isSocialUser =
    socialProvider === "google" ||
    socialProvider === "kakao" ||
    socialProvider === "naver";

  // 회원 유형 확인을 위해 회원 정보를 조회
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage/edit", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (!result.success) {
          alert(result.message);
          navigate("/mypage", { replace: true });
          return;
        }

        setUserInfo(result.data);
      } catch (error) {
        console.error(error);
        alert("회원 정보를 불러오지 못했습니다.");
        navigate("/mypage", { replace: true });
      }
    };

    getUserInfo();
  }, [navigate]);

  // 소셜 회원 이메일 인증번호 발송
  const handleSendEmailCode = async () => {
    if (!userInfo?.userEmail) {
      alert("회원 이메일 정보를 찾을 수 없습니다.");
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
          memberEmail: userInfo.userEmail,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("이메일 인증번호가 발송되었습니다.");
      setIsEmailCodeSent(true);
      setEmailCode("");
      setWithdrawAgree(false);
    } catch (error) {
      console.error(error);
      alert("이메일 인증번호 발송에 실패했습니다.");
    }
  };

  // 회원탈퇴 요청 전 입력값 검증
  const validateWithdrawForm = () => {
    if (!selectedReason) {
      alert("탈퇴 사유를 선택해 주세요.");
      return false;
    }

    if (selectedReason === "기타" && !withdrawDetail.trim()) {
      alert("기타 사유를 입력해 주세요.");
      return false;
    }

    if (isSocialUser) {
      if (!isEmailCodeSent) {
        alert("이메일 인증번호를 발송해 주세요.");
        return false;
      }

      if (!emailCode.trim()) {
        alert("이메일 인증번호를 입력해 주세요.");
        return false;
      }
    } else if (!userPassword.trim()) {
      alert("비밀번호를 입력해 주세요.");
      return false;
    }

    if (!withdrawAgree) {
      alert("탈퇴 유의사항 확인에 동의해 주세요.");
      return false;
    }

    return true;
  };

  // 회원탈퇴 API 요청
  const handleWithdrawSubmit = async () => {
    if (!validateWithdrawForm() || isSubmitting) {
      return;
    }

    if (!window.confirm("정말 회원탈퇴를 진행하시겠습니까?")) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:10000/private/api/mypage/withdraw", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          withdrawReason: selectedReason,
          withdrawDetail: selectedReason === "기타" ? withdrawDetail : null,
          userPassword: isSocialUser ? null : userPassword,
          emailCode: isSocialUser ? emailCode : null,
          withdrawAgree,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("회원탈퇴가 완료되었습니다.");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
      alert("회원탈퇴 처리에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!userInfo) {
    return null;
  }

  return (
    <S.WithdrawWrapper>
      <S.WithdrawIntroText>
        계정을 삭제하기 전에 아래 내용을 꼭 확인해주세요.
      </S.WithdrawIntroText>

      <WithdrawNoticeCard />

      <WithdrawReasonCard
        selectedReason={selectedReason}
        setSelectedReason={setSelectedReason}
        withdrawDetail={withdrawDetail}
        setWithdrawDetail={setWithdrawDetail}
      />

      <ConfirmWithdrawCard
        userInfo={userInfo}
        isSocialUser={isSocialUser}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        emailCode={emailCode}
        setEmailCode={setEmailCode}
        isEmailCodeSent={isEmailCodeSent}
        withdrawAgree={withdrawAgree}
        setWithdrawAgree={setWithdrawAgree}
        onSendEmailCode={handleSendEmailCode}
        onWithdrawSubmit={handleWithdrawSubmit}
        isSubmitting={isSubmitting}
      />
    </S.WithdrawWrapper>
  );
};

export default MyPageWithdrawComponent;