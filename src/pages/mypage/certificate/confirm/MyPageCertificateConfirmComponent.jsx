import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import S from "./style";

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return String(date).split("T")[0].replaceAll("-", ".");
};

const getAddressValue = (address, keyList) => {
  for (const key of keyList) {
    if (address?.[key]) {
      return address[key];
    }
  }

  return "";
};

const MyPageCertificateConfirmComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state || {};
  const selectedAddress = state.selectedAddress || null;

  const [userInfo, setUserInfo] = useState(null);
  const [certificateList, setCertificateList] = useState([]);
  const [selectedTestResultId, setSelectedTestResultId] = useState(state.testResultId || "");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [receiveType, setReceiveType] = useState("우편수령");
  const [detailAddress, setDetailAddress] = useState(state.detailAddress || "");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postcode = getAddressValue(selectedAddress, ["zipCode", "zipNo", "postcode"]);
  const roadAddress = getAddressValue(selectedAddress, ["roadAddress", "roadAddr"]);
  const jibunAddress = getAddressValue(selectedAddress, ["jibunAddress", "jibunAddr"]);
  const buildingName = getAddressValue(selectedAddress, ["building", "buildingName", "bdNm"]);

  const fullRoadAddress = buildingName
    ? `${roadAddress} ${buildingName}`
    : roadAddress;

  useEffect(() => {
    const getConfirmData = async () => {
      try {
        const [userResponse, certificateResponse] = await Promise.all([
          fetch("http://localhost:10000/private/api/mypage/edit", {
            method: "GET",
            credentials: "include",
          }),
          fetch("http://localhost:10000/private/api/mypage/certificates", {
            method: "GET",
            credentials: "include",
          }),
        ]);

        const userResult = await userResponse.json();
        const certificateResult = await certificateResponse.json();

        if (!userResult.success) {
          alert(userResult.message);
          return;
        }

        if (!certificateResult.success) {
          alert(certificateResult.message);
          return;
        }

        const availableList = (certificateResult.data?.certificateList || []).filter(
          (certificate) => certificate.canApply
        );

        setUserInfo(userResult.data);
        setCertificateList(availableList);

        if (!selectedTestResultId && availableList.length > 0) {
          setSelectedTestResultId(availableList[0].testResultId);
        }
      } catch (error) {
        console.error(error);
        alert("신청 정보를 불러오지 못했습니다.");
      }
    };

    getConfirmData();
  }, [selectedTestResultId]);

  useEffect(() => {
    if (!selectedTestResultId) {
      return;
    }

    const getCertificateDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:10000/private/api/mypage/certificates/${selectedTestResultId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!result.success) {
          alert(result.message);
          return;
        }

        setSelectedCertificate(result.data);
      } catch (error) {
        console.error(error);
        alert("선택한 자격증 정보를 불러오지 못했습니다.");
      }
    };

    getCertificateDetail();
  }, [selectedTestResultId]);

  const cancelCertRenew = async (certRenewId) => {
    if (!certRenewId) {
      return;
    }

    try {
      await fetch(`http://localhost:10000/api/cert-renew/${certRenewId}`, {
        method: "DELETE",
        credentials: "include",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const requestCertificatePayment = async (certRenewId) => {
    const readyRes = await fetch("http://localhost:10000/api/payments/ready", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentType: "CERT_ISSUE",
        referenceId: certRenewId,
        paymentAmount: 5000,
        orderName: "실물 자격증 발급 수수료",
      }),
    });

    const readyData = await readyRes.json();

    if (!readyData.success) {
      throw new Error(readyData.message || "결제 준비에 실패했습니다.");
    }

    const { orderId } = readyData.data;

    const successUrl = `${window.location.origin}/payment/success?paymentType=CERT_ISSUE&referenceId=${certRenewId}`;
    const failUrl = `${window.location.origin}/payment/fail?paymentType=CERT_ISSUE&referenceId=${certRenewId}`;

    const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);

    await tossPayments.requestPayment("카드", {
      amount: 5000,
      orderId,
      orderName: "실물 자격증 발급 수수료",
      customerName: userInfo?.userName || "",
      successUrl,
      failUrl,
    });
  };

  const handleAddressClick = () => {
    navigate("/mypage/certificate/confirm/address-search", {
      state: {
        testResultId: selectedTestResultId,
        selectedAddress,
        detailAddress,
      },
    });
  };

  const handleCancelClick = () => {
    navigate("/mypage/certificate");
  };

  const handleSubmitClick = async () => {
    let createdCertRenewId = null;

    if (!selectedCertificate) {
      alert("신청할 자격증을 선택해주세요.");
      return;
    }

    if (!selectedCertificate.canApply) {
      alert("이미 실물 신청이 진행 중인 자격증입니다.");
      return;
    }

    if (!selectedAddress) {
      alert("주소를 먼저 선택해주세요.");
      return;
    }

    if (!detailAddress.trim()) {
      alert("상세 주소를 입력해주세요.");
      return;
    }

    if (!isAgreed) {
      alert("동의 및 확인 항목을 체크해주세요.");
      return;
    }

    const certAddress = `${fullRoadAddress}, ${detailAddress.trim()}`;

    const requestBody = {
      testResultId: selectedCertificate.testResultId,
      certReceiveType: receiveType,
      certName: userInfo?.userName || "",
      certPhone: userInfo?.userPhoneNum || "",
      certPostcode: postcode,
      certRoadAddress: fullRoadAddress,
      certJibunAddress: jibunAddress,
      certDetailAddress: detailAddress.trim(),
      certAddress,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:10000/private/api/mypage/certificates/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      createdCertRenewId = result.data?.certRenewId;

      if (!createdCertRenewId) {
        alert("신청 정보가 정상적으로 생성되지 않았습니다.");
        return;
      }

      await requestCertificatePayment(createdCertRenewId);
    } catch (error) {
      console.error(error);
      await cancelCertRenew(createdCertRenewId);
      alert("결제 요청 중 오류가 발생했습니다. 신청 정보는 취소 처리되었습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!userInfo || !selectedCertificate) {
    return null;
  }

  return (
    <S.ConfirmWrapper>
      <S.ConfirmTopDesc>
        선택한 자격증의 실물 발급 신청 정보를 확인하고 접수할 수 있어요.
      </S.ConfirmTopDesc>

      <S.ConfirmSection $first>
        <S.SelectedCertificateCard>
          <S.InputRow $columns="216px 216px">
            <S.Field>
              <S.Label>선택 자격증</S.Label>

              <S.Select
                value={selectedTestResultId}
                onChange={(e) => setSelectedTestResultId(Number(e.target.value))}
              >
                {certificateList.map((certificate) => (
                  <option key={certificate.testResultId} value={certificate.testResultId}>
                    {certificate.testTitle}
                  </option>
                ))}
              </S.Select>
            </S.Field>

            <S.Field>
              <S.Label>취득일자</S.Label>
              <S.Input value={formatDate(selectedCertificate.acquiredAt)} readOnly />
            </S.Field>
          </S.InputRow>
        </S.SelectedCertificateCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>신청자 정보 확인</S.ConfirmSectionTitle>
        <S.ConfirmSectionDesc>
          신청 전에 본인 정보를 확인해주세요.
        </S.ConfirmSectionDesc>

        <S.ApplicantCard>
          <S.InputRow $columns="1fr 1fr 1fr">
            <S.Field>
              <S.Label>이름</S.Label>
              <S.Input value={userInfo.userName || ""} readOnly />
            </S.Field>

            <S.Field>
              <S.Label>이메일</S.Label>
              <S.Input value={userInfo.userEmail || ""} readOnly />
            </S.Field>

            <S.Field>
              <S.Label>전화번호</S.Label>
              <S.Input value={userInfo.userPhoneNum || ""} readOnly />
            </S.Field>
          </S.InputRow>
        </S.ApplicantCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>수령 정보 입력</S.ConfirmSectionTitle>
        <S.ConfirmSectionDesc>
          실물 자격증을 받을 정보를 입력해주세요.
        </S.ConfirmSectionDesc>

        <S.DeliveryCard>
          <S.AddressSearchRow>
            <S.Field>
              <S.Label>수령 방법</S.Label>
              <S.Select
                value={receiveType}
                onChange={(e) => setReceiveType(e.target.value)}
              >
                <option value="우편수령">우편수령</option>
                <option value="센터수령">센터수령</option>
              </S.Select>
            </S.Field>

            <S.Field>
              <S.Label>우편번호</S.Label>
              <S.Input value={postcode} placeholder="우편번호" readOnly />
            </S.Field>

            <S.AddressButton type="button" onClick={handleAddressClick}>
              주소 검색
            </S.AddressButton>
          </S.AddressSearchRow>

          <S.AddressField>
            <S.Label>주소</S.Label>
            <S.Input
              value={fullRoadAddress}
              placeholder="주소를 검색해주세요."
              readOnly
            />
          </S.AddressField>

          <S.AddressField>
            <S.Label>상세 주소</S.Label>
            <S.Input
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              placeholder="상세 주소를 입력해주세요."
            />
          </S.AddressField>
        </S.DeliveryCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>신청 전 확인사항</S.ConfirmSectionTitle>

        <S.NoticeCard>
          <S.NoticeText>
            · 신청 후 상태는 미신청에서 신청대기, 진행중, 완료 순으로 변경됩니다.
          </S.NoticeText>
          <S.NoticeText>
            · 입력한 주소 정보가 정확해야 정상적으로 수령할 수 있습니다.
          </S.NoticeText>
          <S.NoticeText>
            · 발급 일정은 내부 처리 상황에 따라 달라질 수 있습니다.
          </S.NoticeText>
          <S.NoticeText>
            · 실물 자격증 발급 신청은 5,000원의 발급 수수료가 발생합니다.
          </S.NoticeText>
        </S.NoticeCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>동의 및 확인</S.ConfirmSectionTitle>

        <S.AgreeCard>
          <S.AgreeRow>
            <S.AgreeInput
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            입력한 정보를 확인했으며, 실물 자격증 신청 절차와 안내사항을 이해했습니다.
          </S.AgreeRow>
        </S.AgreeCard>
      </S.ConfirmSection>

      <S.ButtonArea>
        <S.CancelButton type="button" onClick={handleCancelClick}>
          취소
        </S.CancelButton>

        <S.SubmitButton
          type="button"
          onClick={handleSubmitClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? "처리 중" : "신청 완료"}
        </S.SubmitButton>
      </S.ButtonArea>
    </S.ConfirmWrapper>
  );
};

export default MyPageCertificateConfirmComponent;