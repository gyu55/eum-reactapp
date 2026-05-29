import { useState, useEffect } from "react";
import * as S from "./style";

const TYPE_MAP = { renew: "갱신", reissue: "재발급" };
const RECEIVE_MAP = { online: "온라인", delivery: "배송" };
const STATUS_LABEL = { processing: "처리중", cancelled: "취소됨" };

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const UpdateCheckComponent = () => {
  const [applications, setApplications] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [certNoInput, setCertNoInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:10000/api/cert-renew", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const list = data.data || [];
          setApplications(list);
          setFiltered(list);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    const result = applications.filter((row) => {
      const noMatch = certNoInput ? (row.certNo || "").includes(certNoInput) : true;
      const nameMatch = nameInput ? (row.certName || "").includes(nameInput) : true;
      return noMatch && nameMatch;
    });
    setFiltered(result);
  };

  const handleCancel = (id) => {
    if (!window.confirm("신청을 취소하시겠습니까?")) return;
    fetch(`http://localhost:10000/api/cert-renew/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updated = applications.map((row) =>
            row.id === id ? { ...row, certRenewStatus: "cancelled" } : row
          );
          setApplications(updated);
          setFiltered(updated);
        }
      });
  };

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>신청 현황 조회</S.SectionTitle>
      <S.SearchRow>
        <S.SearchInput
          $flex={2}
          placeholder="자격증 번호 예: SL-2023-001234"
          value={certNoInput}
          onChange={(e) => setCertNoInput(e.target.value)}
        />
        <S.SearchInput
          $flex={1}
          placeholder="성명"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <S.SearchBtn onClick={handleSearch}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {loading ? (
        <div>조회 중...</div>
      ) : filtered !== null && (
        <S.StyledTable>
          <thead>
            <S.TheadRow>
              {["자격증 번호", "유형", "신청일", "신청인", "수령 방법", "상태", ""].map((col) => (
                <S.Th key={col}>{col}</S.Th>
              ))}
            </S.TheadRow>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <S.Td colSpan={7} style={{ textAlign: "center" }}>신청 내역이 없습니다.</S.Td>
              </tr>
            ) : (
              filtered.map((row) => (
                <tr key={row.id}>
                  <S.NumberTd>{row.certNo || "-"}</S.NumberTd>
                  <S.Td>{TYPE_MAP[row.certRenewType] || row.certRenewType}</S.Td>
                  <S.Td>{formatDate(row.certRenewCreateAt)}</S.Td>
                  <S.Td>{row.certName || "-"}</S.Td>
                  <S.Td>{RECEIVE_MAP[row.certReceiveType] || row.certReceiveType || "-"}</S.Td>
                  <S.Td>
                    <S.StatusBadge $status={row.certRenewStatus}>
                      {STATUS_LABEL[row.certRenewStatus] || row.certRenewStatus}
                    </S.StatusBadge>
                  </S.Td>
                  <S.Td>
                    {row.certRenewStatus === "processing" && (
                      <S.CancelBtn onClick={() => handleCancel(row.id)}>취소</S.CancelBtn>
                    )}
                  </S.Td>
                </tr>
              ))
            )}
          </tbody>
        </S.StyledTable>
      )}
    </S.Wrapper>
  );
};

export default UpdateCheckComponent;
