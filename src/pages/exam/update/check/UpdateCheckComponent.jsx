import { useState, useEffect } from "react";
import * as S from "./style";
import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";

const TYPE_MAP = { renew: "갱신", reissue: "재발급" };
const RECEIVE_MAP = { online: "온라인", delivery: "배송" };
const STATUS_LABEL = { processing: "처리 중", completed: "처리 완료", cancelled: "취소됨", rejected: "반려" };

const mapLabel = (map, val) => (val ? map[val.toLowerCase()] : null) ?? val ?? "-";

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const UpdateCheckComponent = () => {
  const { isLoggedIn } = useLoginCheck();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:10000/api/cert-renew", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setApplications(data.data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = (id) => {
    if (!window.confirm("신청을 취소하시겠습니까?")) return;
    fetch(`http://localhost:10000/api/cert-renew/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setApplications((prev) =>
            prev.map((row) => row.id === id ? { ...row, certRenewStatus: "cancelled" } : row)
          );
        }
      });
  };

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>신청 현황 조회</S.SectionTitle>
      <LoginGuard message="신청 현황 조회는 로그인 후 이용 가능합니다." />
    </S.Wrapper>
  );

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>신청 현황 조회</S.SectionTitle>

      {loading ? (
        <div>조회 중...</div>
      ) : (
        <S.StyledTable>
          <thead>
            <S.TheadRow>
              {["자격증 이름", "유형", "신청일", "신청인", "수령 방법", "상태", ""].map((col) => (
                <S.Th key={col}>{col}</S.Th>
              ))}
            </S.TheadRow>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <S.Td colSpan={7} style={{ textAlign: "center" }}>신청 내역이 없습니다.</S.Td>
              </tr>
            ) : (
              applications.map((row) => (
                <tr key={row.id}>
                  <S.NumberTd>{row.certNo || "-"}</S.NumberTd>
                  <S.Td>{mapLabel(TYPE_MAP, row.certRenewType)}</S.Td>
                  <S.Td>{formatDate(row.certRenewCreateAt)}</S.Td>
                  <S.Td>{row.certName || "-"}</S.Td>
                  <S.Td>{mapLabel(RECEIVE_MAP, row.certReceiveType)}</S.Td>
                  <S.Td>
                    <S.StatusBadge $status={row.certRenewStatus?.toLowerCase()}>
                      {mapLabel(STATUS_LABEL, row.certRenewStatus)}
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
