import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";
import useTossPayment from "../../../../hooks/useTossPayment";

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

const ReceiptSubmitContainer = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useLoginCheck();
  const { requestPayment } = useTossPayment();
  const [tests, setTests] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]); // 실제 File 객체 배열
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitOk, setSubmitOk] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:10000/api/tests", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.success) setTests(data.data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.userName || "");
      setPhone(user.userPhoneNum || "");
      setEmail(user.userEmail || "");
      setBirth(user.userBirth || "");
    }
  }, [user]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFiles(prev => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const handleFileRemove = (i) => {
    setFiles(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async () => {
    if (!selectedTestId) {
      setSubmitMsg("시험 회차를 선택해주세요.");
      return;
    }

    setSubmitLoading(true);
    setSubmitMsg("");

    // 1단계: 원서 접수
    let referenceId;
    try {
      const formData = new FormData();
      formData.append("testId", selectedTestId);
      files.forEach(file => formData.append("files", file));

      const res = await fetch("http://localhost:10000/api/test-applications", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();

      if (res.status === 409 || (data.message && data.message.includes("정원"))) {
        setSubmitMsg("정원이 초과되어 접수할 수 없습니다.");
        setSubmitLoading(false);
        return;
      }
      if (!data.success) {
        setSubmitMsg(data.message || "접수에 실패했습니다.");
        setSubmitLoading(false);
        return;
      }
      referenceId = data.data;
    } catch {
      setSubmitMsg("서버에 연결할 수 없습니다.");
      setSubmitLoading(false);
      return;
    }

    // 2단계: 결제 요청
    try {
      await requestPayment({
        amount: selectedTest.testPrice,
        orderName: selectedTest.testTitle,
        customerName: name,
        paymentType: "TEST_APPLY",
        referenceId,
      });
    } catch (e) {
      console.error("[결제 오류]", e);
      if (e?.message && !e.message.includes("취소")) {
        setSubmitMsg(e.message || "결제 요청 중 오류가 발생했습니다.");
      }
      setSubmitLoading(false);
    }
  };

  const selectedTest = tests.find(t => String(t.id) === String(selectedTestId));

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>원서 작성</S.SectionTitle>
      <S.Subtitle>원서를 작성하고 접수 및 결제하세요.</S.Subtitle>
      <LoginGuard message="시험 접수는 로그인 후 이용 가능합니다." />
    </S.Wrapper>
  );

  if (submitOk && selectedTest) {
    return (
      <S.Wrapper>
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
          <S.DoneTitle>원서 접수가 완료되었습니다!</S.DoneTitle>
          <S.DoneInfoBox>
            <S.DoneInfoRow>
              <S.DoneInfoLabel>시험 회차</S.DoneInfoLabel>
              <span>{selectedTest.testTitle}</span>
            </S.DoneInfoRow>
            <S.DoneInfoRow>
              <S.DoneInfoLabel>시험 일자</S.DoneInfoLabel>
              <span>{new Date(selectedTest.testDate).toLocaleDateString("ko-KR")}</span>
            </S.DoneInfoRow>
            <S.DoneInfoRow>
              <S.DoneInfoLabel>시험 장소</S.DoneInfoLabel>
              <span>{selectedTest.testLocation}</span>
            </S.DoneInfoRow>
            <S.DoneInfoRow>
              <S.DoneInfoLabel>응시료</S.DoneInfoLabel>
              <span>{selectedTest.testPrice.toLocaleString()}원</span>
            </S.DoneInfoRow>
          </S.DoneInfoBox>
          <S.ConfirmBtn onClick={() => navigate("/exam/receipt/info/confirm")}>
            접수 내역 확인하기
          </S.ConfirmBtn>
        </S.DoneWrap>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>원서 작성</S.SectionTitle>
      <S.Subtitle>원서를 작성하고 접수 및 결제하세요.</S.Subtitle>

      <S.FormWrap>
        <div>
          <S.Label>시험 회차 <span>*</span></S.Label>
          <S.Select value={selectedTestId} onChange={e => { setSelectedTestId(e.target.value); setSubmitMsg(""); }}>
            <option value="">시험 회차를 선택하세요</option>
            {tests.map(t => (
              <option key={t.id} value={t.id}>
                {t.testTitle} ({new Date(t.testDate).toLocaleDateString("ko-KR")})
              </option>
            ))}
          </S.Select>
        </div>

        {selectedTest && (
          <S.InfoBox>
            <S.InfoRow><S.InfoLabel>시험 장소</S.InfoLabel><span>{selectedTest.testLocation}</span></S.InfoRow>
            <S.InfoRow><S.InfoLabel>응시료</S.InfoLabel><span>{selectedTest.testPrice.toLocaleString()}원</span></S.InfoRow>
            <S.InfoRow><S.InfoLabel>정원</S.InfoLabel><span>{selectedTest.testLimit}명</span></S.InfoRow>
          </S.InfoBox>
        )}

        <S.Grid>
          <div>
            <S.Label>이름</S.Label>
            <S.Input
              value={name}
              readOnly
            />
          </div>
          <div>
            <S.Label>생년월일</S.Label>
            <S.Input
              value={birth}
              readOnly
              style={{ letterSpacing: "1px" }}
            />
          </div>
          <div>
            <S.Label>연락처</S.Label>
            <S.Input
              value={phone}
              readOnly
              style={{ letterSpacing: "1px" }}
            />
          </div>
          <div>
            <S.Label>이메일</S.Label>
            <S.Input
              value={email}
              readOnly
            />
          </div>
        </S.Grid>

        <div>
          <S.Label>증빙서류 첨부 <span>*</span></S.Label>
          <input
            type="file"
            multiple
            ref={fileRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {files.map((file, i) => (
            <S.FilePreviewRow key={i} style={{ marginBottom: 8 }}>
              <span>📄</span>
              <S.FilePreviewName>{file.name}</S.FilePreviewName>
              <S.FileRemoveBtn onClick={() => handleFileRemove(i)} title="파일 제거">
                ✕
              </S.FileRemoveBtn>
            </S.FilePreviewRow>
          ))}
          <S.FileDropZone onClick={() => { fileRef.current.value = ""; fileRef.current.click(); }}>
            <S.FileDropText>클릭하여 파일을 선택하세요</S.FileDropText>
            <S.FileDropSub>PDF, JPG, PNG 등 지원</S.FileDropSub>
          </S.FileDropZone>
        </div>

        {submitMsg && (
          <div style={{ fontSize: 13, color: submitOk ? "#03C75A" : "#e74c3c", textAlign: "center" }}>
            {submitMsg}
          </div>
        )}

        <S.SubmitBtn onClick={handleSubmit} disabled={submitLoading}>
          {submitLoading ? "처리 중..." : "원서접수 및 결제하기"}
        </S.SubmitBtn>
      </S.FormWrap>
    </S.Wrapper>
  );
};

export default ReceiptSubmitContainer;
