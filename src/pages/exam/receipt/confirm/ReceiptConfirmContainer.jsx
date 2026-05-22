import { useState, useEffect } from "react";
import * as S from "./style";

const ReceiptConfirmContainer = () => {
  const [applies, setApplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancelingId, setCancelingId] = useState(null);

  const handleCancel = async (id) => {
    if (!window.confirm("접수를 취소하시겠습니까?")) return;
    setCancelingId(id);
    try {
      const res = await fetch(`http://localhost:10000/api/test-apply/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setApplies(prev => prev.filter(a => a.id !== id));
      } else {
        alert(data.message || "취소에 실패했습니다.");
      }
    } catch {
      alert("서버 오류가 발생했습니다.");
    } finally {
      setCancelingId(null);
    }
  };

  useEffect(() => {
    fetch("http://localhost:10000/api/test-apply/my", { credentials: "include" })
      .then(res => {
        if (res.status === 401) throw new Error("login");
        return res.json();
      })
      .then(data => {
        if (data.success) setApplies(data.data);
        else setError("목록을 불러오지 못했습니다.");
      })
      .catch(err => {
        setError(err.message === "login" ? "로그인이 필요합니다." : "서버 오류가 발생했습니다.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>접수 내역 조회</S.SectionTitle>

      {loading && (
        <div style={{ fontSize: 13, color: "#aaa", textAlign: "center", padding: "32px 0" }}>
          불러오는 중...
        </div>
      )}

      {error && (
        <div style={{ fontSize: 13, color: "#e74c3c", textAlign: "center", padding: "32px 0" }}>
          {error}
        </div>
      )}

      {!loading && !error && applies.length === 0 && (
        <div style={{ fontSize: 13, color: "#aaa", textAlign: "center", padding: "32px 0" }}>
          접수 내역이 없습니다.
        </div>
      )}

      {!loading && applies.length > 0 && (
        <>
          <S.StyledTable>
            <thead>
              <S.TheadRow>
                {["시험 회차", "시험 일자", "접수 일시", "상태", ""].map((col, i) => (
                  <S.Th key={i}>{col}</S.Th>
                ))}
              </S.TheadRow>
            </thead>
            <tbody>
              {applies.map((row, i) => (
                <tr key={i}>
                  <S.Td $dark>{row.testTitle}</S.Td>
                  <S.Td>{new Date(row.testDate).toLocaleDateString("ko-KR")}</S.Td>
                  <S.Td>{new Date(row.testApplyAt).toLocaleDateString("ko-KR")}</S.Td>
                  <S.Td>
                    <S.StatusBadge>접수완료</S.StatusBadge>
                  </S.Td>
                  <S.Td>
                    <S.CancelBtn
                      onClick={() => handleCancel(row.id)}
                      disabled={cancelingId === row.id}
                    >
                      {cancelingId === row.id ? "취소 중..." : "접수취소"}
                    </S.CancelBtn>
                  </S.Td>
                </tr>
              ))}
            </tbody>
          </S.StyledTable>
          <S.Note>※ 취소 신청 후 환불은 3~5 영업일 이내 처리됩니다.</S.Note>
        </>
      )}
    </S.Wrapper>
  );
};

export default ReceiptConfirmContainer;
