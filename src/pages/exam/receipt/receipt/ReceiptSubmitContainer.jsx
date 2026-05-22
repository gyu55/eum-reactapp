import { useState, useRef, useEffect } from "react";
import * as S from "./style";

const ReceiptSubmitContainer = () => {
  const [tests, setTests] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState("");
  const [fileName, setFileName] = useState("");
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

  const handleSubmit = async () => {
    if (!selectedTestId) {
      setSubmitMsg("시험 회차를 선택해주세요.");
      setSubmitOk(false);
      return;
    }
    setSubmitLoading(true);
    setSubmitMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/test-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ testId: Number(selectedTestId) }),
      });
      const data = await res.json();
      if (res.status === 401) {
        setSubmitMsg("로그인이 필요합니다.");
        setSubmitOk(false);
      } else if (res.status === 409 || (data.message && data.message.includes("정원"))) {
        setSubmitMsg("정원이 초과되어 접수할 수 없습니다.");
        setSubmitOk(false);
      } else if (data.success) {
        setSubmitMsg("원서 접수가 완료되었습니다.");
        setSubmitOk(true);
      } else {
        setSubmitMsg(data.message || "접수에 실패했습니다.");
        setSubmitOk(false);
      }
    } catch {
      setSubmitMsg("서버 오류가 발생했습니다.");
      setSubmitOk(false);
    } finally {
      setSubmitLoading(false);
    }
  };

  const selectedTest = tests.find(t => String(t.id) === String(selectedTestId));

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>원서 작성</S.SectionTitle>
      <S.Subtitle>원서를 작성하고 접수 및 결제하세요.</S.Subtitle>

      <S.FormWrap>
        <div>
          <S.Label>시험 회차 *</S.Label>
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
            <S.Label>이름 *</S.Label>
            <S.Input placeholder="홍길동" />
          </div>
          <div>
            <S.Label>생년월일 *</S.Label>
            <S.Input placeholder="YYYY-MM-DD" />
          </div>
          <div>
            <S.Label>연락처 *</S.Label>
            <S.Input placeholder="010-0000-0000" />
          </div>
          <div>
            <S.Label>이메일 *</S.Label>
            <S.Input placeholder="example@email.com" />
          </div>
        </S.Grid>

        <div>
          <S.Label>증빙서류 첨부 *</S.Label>
          <input
            type="file"
            ref={fileRef}
            style={{ display: "none" }}
            onChange={e => setFileName(e.target.files[0]?.name || "")}
          />
          <S.FileDropZone onClick={() => fileRef.current.click()}>
            <S.FileDropText>
              {fileName ? fileName : "클릭하여 파일을 선택하세요"}
            </S.FileDropText>
            <S.FileDropSub>
              {fileName ? "다른 파일을 선택하려면 클릭하세요" : "PDF, JPG, PNG 등 지원"}
            </S.FileDropSub>
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
