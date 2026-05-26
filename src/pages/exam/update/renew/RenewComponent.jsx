import { useState } from "react";
import * as S from "./style";

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};

const RenewComponent = () => {
  const [type, setType] = useState("renew");
  const [receiveType, setReceiveType] = useState("online");
  const [certNo, setCertNo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({});
  const [shaking, setShaking] = useState(new Set());

  const [loading, setLoading] = useState(false);
  const [apiMsg, setApiMsg] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(false);

  const clearFieldError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const triggerShake = (fields) => {
    setShaking(new Set(fields));
    setTimeout(() => setShaking(new Set()), 450);
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!certNo.trim()) newErrors.certNo = "자격증 번호를 입력해 주세요.";
    if (!name.trim()) newErrors.name = "성명을 입력해 주세요.";
    if (!phone.trim()) newErrors.phone = "연락처를 입력해 주세요.";
    if (receiveType === "delivery" && !address.trim()) newErrors.address = "배송 주소를 입력해 주세요.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      triggerShake(Object.keys(newErrors));
      return;
    }

    setLoading(true);
    setApiMsg(null);

    try {
      const res = await fetch("http://localhost:10000/api/cert-renew", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          certRenewType: type,
          certReceiveType: receiveType,
          certNo: certNo.trim(),
          certName: name.trim(),
          certPhone: phone.trim(),
          certAddress: receiveType === "delivery" ? address.trim() : null,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setApiSuccess(true);
        setApiMsg("신청이 완료되었습니다.");
        setCertNo("");
        setName("");
        setPhone("");
        setAddress("");
        setType("renew");
        setReceiveType("online");
        setErrors({});
      } else if (res.status === 401) {
        setApiSuccess(false);
        setApiMsg("로그인이 필요합니다.");
      } else {
        setApiSuccess(false);
        setApiMsg(data.message || "신청 중 오류가 발생했습니다.");
      }
    } catch {
      setApiSuccess(false);
      setApiMsg("서버에 연결할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>자격증 갱신 / 재발급 신청</S.SectionTitle>
      <S.Subtitle>자격증 갱신으로 재발급을 신청할 수 있습니다.</S.Subtitle>

      <S.FormWrap>
        <div>
          <S.Label>신청 유형 <span>*</span></S.Label>
          <S.RadioRow>
            {[
              { value: "renew", label: "갱신 (유효기간 연장)" },
              { value: "reissue", label: "재발급 (분실/훼손)" },
            ].map((opt) => (
              <S.RadioLabel key={opt.value}>
                <S.RadioInput
                  type="radio"
                  name="type"
                  value={opt.value}
                  checked={type === opt.value}
                  onChange={() => setType(opt.value)}
                />
                <S.RadioText $active={type === opt.value}>{opt.label}</S.RadioText>
              </S.RadioLabel>
            ))}
          </S.RadioRow>
        </div>

        <S.Grid>
          <div>
            <S.Label>자격증 번호 <span>*</span></S.Label>
            <S.Input
              placeholder="예: SL-2023-001234"
              value={certNo}
              $shake={shaking.has("certNo")}
              onChange={(e) => { setCertNo(e.target.value); clearFieldError("certNo"); }}
            />
            {errors.certNo && <S.FieldError>{errors.certNo}</S.FieldError>}
          </div>
          <div>
            <S.Label>성명 <span>*</span></S.Label>
            <S.Input
              placeholder="홍길동"
              value={name}
              $shake={shaking.has("name")}
              onChange={(e) => { setName(e.target.value); clearFieldError("name"); }}
            />
            {errors.name && <S.FieldError>{errors.name}</S.FieldError>}
          </div>
        </S.Grid>

        <div>
          <S.Label>연락처 <span>*</span></S.Label>
          <S.Input
            placeholder="010-0000-0000"
            value={phone}
            $shake={shaking.has("phone")}
            onChange={(e) => { setPhone(formatPhone(e.target.value)); clearFieldError("phone"); }}
          />
          {errors.phone && <S.FieldError>{errors.phone}</S.FieldError>}
        </div>

        <div>
          <S.Label>수령 방법 <span>*</span></S.Label>
          <S.RadioRow>
            {[
              { value: "online", label: "인터넷 발급 (PDF)" },
              { value: "delivery", label: "실물 배송" },
            ].map((opt) => (
              <S.RadioLabel key={opt.value}>
                <S.RadioInput
                  type="radio"
                  name="receiveType"
                  value={opt.value}
                  checked={receiveType === opt.value}
                  onChange={() => setReceiveType(opt.value)}
                />
                <S.RadioText $active={receiveType === opt.value}>{opt.label}</S.RadioText>
              </S.RadioLabel>
            ))}
          </S.RadioRow>
          {receiveType === "online" && (
            <S.ReceiveNote>신청 완료 후 등록된 이메일로 PDF 파일이 발송됩니다.</S.ReceiveNote>
          )}
        </div>

        {receiveType === "delivery" && (
          <div>
            <S.Label>배송 주소 <span>*</span></S.Label>
            <S.Input
              placeholder="주소를 입력해 주세요"
              value={address}
              $shake={shaking.has("address")}
              onChange={(e) => { setAddress(e.target.value); clearFieldError("address"); }}
            />
            {errors.address && <S.FieldError>{errors.address}</S.FieldError>}
          </div>
        )}

        <S.FeeText>
          갱신 수수료: 10,000원 | 재발급 수수료: 20,000원
          <S.FeeNote>결제는 카드/계좌이체/가상계좌로 가능합니다.</S.FeeNote>
        </S.FeeText>

        {apiMsg && (
          <S.MsgBox $success={apiSuccess}>{apiMsg}</S.MsgBox>
        )}

        <S.SubmitBtn onClick={handleSubmit} disabled={loading}>
          {loading ? "신청 중..." : "갱신 신청 및 결제하기"}
        </S.SubmitBtn>
      </S.FormWrap>
    </S.Wrapper>
  );
};

export default RenewComponent;
