import { useState } from "react";
import * as S from "./style";
import { DUMMY_RESULTS } from "../../results/check/CheckComponent";
import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";

const PASS_SCORE = 60;

const CERT_OPTIONS = DUMMY_RESULTS
  .filter(r => r.testResultPoint != null && r.testResultPoint >= PASS_SCORE)
  .map(r => ({
    certNo: `제${String(r.testApplyId).padStart(4, "0")}호`,
    title: r.testTitle,
    label: r.testTitle,
  }));

const RenewComponent = () => {
  const { isLoggedIn, user } = useLoginCheck();

  const [type, setType] = useState("renew");
  const [selectedCertNo, setSelectedCertNo] = useState("");
  const [receiveType, setReceiveType] = useState("online");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({});
  const [shaking, setShaking] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [apiMsg, setApiMsg] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(false);

  const showForm = selectedCertNo !== "";

  const triggerShake = (fields) => {
    setShaking(new Set(fields));
    setTimeout(() => setShaking(new Set()), 450);
  };

  const handleSubmit = async () => {
    const newErrors = {};
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
          certNo: CERT_OPTIONS.find(o => o.certNo === selectedCertNo)?.title || selectedCertNo,
          certName: user?.userName || "",
          certPhone: user?.userEmail || "",
          certAddress: receiveType === "delivery" ? address.trim() : null,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setApiSuccess(true);
        setApiMsg("신청이 완료되었습니다.");
        setSelectedCertNo("");
        setAddress("");
        setReceiveType("online");
        setErrors({});
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

  if (isLoggedIn === null) return null;

  if (!isLoggedIn) {
    return (
      <S.Wrapper>
        <S.SectionTitle style={{ marginBottom: 6 }}>자격증 갱신 / 재발급 신청</S.SectionTitle>
        <S.Subtitle>자격증 갱신으로 재발급을 신청할 수 있습니다.</S.Subtitle>
        <LoginGuard message="자격증 갱신·재발급 신청은 로그인 후 이용 가능합니다." />
      </S.Wrapper>
    );
  }

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
                  onChange={() => { setType(opt.value); setSelectedCertNo(""); }}
                />
                <S.RadioText $active={type === opt.value}>{opt.label}</S.RadioText>
              </S.RadioLabel>
            ))}
          </S.RadioRow>
        </div>

        <div>
          <S.Label>자격증 선택 <span>*</span></S.Label>
          {CERT_OPTIONS.length === 0 ? (
            <div style={{ fontSize: 13, color: "#aaa", padding: "10px 0" }}>
              보유한 자격증이 없습니다.
            </div>
          ) : (
            <S.Select
              value={selectedCertNo}
              onChange={e => { setSelectedCertNo(e.target.value); setErrors({}); setApiMsg(null); }}
            >
              <option value="">자격증을 선택해주세요</option>
              {CERT_OPTIONS.map(opt => (
                <option key={opt.certNo} value={opt.certNo}>{opt.label}</option>
              ))}
            </S.Select>
          )}
        </div>

        {showForm && (
          <>
            <S.StepDivider />

            <S.Grid>
              <div>
                <S.Label>자격증 이름</S.Label>
                <S.ReadonlyInput value={CERT_OPTIONS.find(o => o.certNo === selectedCertNo)?.title || ""} readOnly />
              </div>
              <div>
                <S.Label>성명</S.Label>
                <S.ReadonlyInput value={user?.userName || ""} readOnly />
              </div>
            </S.Grid>

            <div>
              <S.Label>이메일</S.Label>
              <S.ReadonlyInput value={user?.userEmail || ""} readOnly />
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
                  onChange={(e) => { setAddress(e.target.value); setErrors(prev => ({ ...prev, address: "" })); }}
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
          </>
        )}

      </S.FormWrap>
    </S.Wrapper>
  );
};

export default RenewComponent;
