import { useRef, useState, useEffect } from "react";
import * as S from "./style";
import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";

const isExpired = (expireAt) => expireAt && new Date(expireAt) < new Date();

const formatKorDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
};

const CertificatePrintComponent = () => {
  const { isLoggedIn, user } = useLoginCheck();
  const certRef   = useRef(null);
  const [selectedId, setSelectedId] = useState("");
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetch("http://localhost:10000/private/api/edu-certs/me", { credentials: "include" })
      .then(res => res.json())
      .then(data => { if (data.success) setCerts(data.data); })
      .catch(() => {});
  }, [isLoggedIn]);

  const selected = certs.find(c => String(c.id) === selectedId);

  const name  = user?.userName  || user?.userNickname || "OOO";
  const birth = user?.userBirth ? user.userBirth.replace(/-/g, ".") : "0000.00.00";

  const expired = selected ? isExpired(selected.eduCertExpireAt) : false;
  const cert = selected && !expired
    ? {
        no: `No. ${String(selected.id).padStart(6, "0")}`,
        course: selected.eduTitle,
        date: formatKorDate(selected.eduCertCreateAt),
        name,
        birth,
      }
    : null;

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>수료증 출력</S.SectionTitle>
      <LoginGuard message="수료증 출력은 로그인 후 이용 가능합니다." />
    </S.Wrapper>
  );

  const handlePrint = () => {
    if (!cert) return;
    const logoUrl = `${window.location.origin}/assets/image/layout/logo.svg`;
    const win = window.open("", "_blank", "width=680,height=860");
    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>수료증</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #e8e8e8;
    }
    .wrap {
      border: 1.5px solid #aaa;
      background: #fff;
      width: 520px;
      padding: 48px 56px 44px;
      position: relative;
      overflow: hidden;
    }
    .watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      opacity: 0.07;
      pointer-events: none;
    }
    .title {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: 0.5em;
      color: #111;
      padding-bottom: 20px;
      border-bottom: 2.5px solid #111;
      margin-bottom: 10px;
      position: relative;
    }
    .no { font-size: 11px; color: #999; text-align: right; margin: 12px 0 20px; position: relative; }
    .field { display: flex; align-items: baseline; border-bottom: 1px solid #bbb; padding: 11px 0; gap: 16px; position: relative; }
    .label { font-size: 13px; color: #555; min-width: 90px; }
    .value { font-size: 16px; font-weight: 700; color: #111; }
    .text-block {
      font-size: 15px; color: #222; line-height: 2.2;
      text-align: center;
      padding: 32px 0 28px;
      position: relative;
    }
    .footer { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 10px; position: relative; }
    .date-org { flex: 1; text-align: center; }
    .date { font-size: 14px; color: #333; margin-bottom: 10px; }
    .org { font-size: 16px; font-weight: 700; color: #111; }
    .seal { opacity: 0.85; flex-shrink: 0; }
    @media print { body { background: #fff; min-height: unset; } }
  </style>
</head>
<body>
  <div class="wrap">
    <img class="watermark" src="${logoUrl}" alt="" />
    <div class="title">수 료 증</div>
    <div class="no">${cert.no}</div>
    <div class="field"><span class="label">성  명</span><span class="value">${cert.name}</span></div>
    <div class="field"><span class="label">생년월일</span><span class="value">${cert.birth}</span></div>
    <div class="field"><span class="label">과 정 명</span><span class="value">${cert.course}</span></div>
    <div class="text-block">
      위 사람은 상기 과정을 수료하였음을<br>증명합니다.
    </div>
    <div class="footer">
      <div class="date-org">
        <div class="date">${cert.date}</div>
        <div class="org">이음</div>
      </div>
      <svg class="seal" width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="86" height="86" fill="none" stroke="#c0392b" stroke-width="3.5"/>
        <rect x="7" y="7" width="76" height="76" fill="none" stroke="#c0392b" stroke-width="1.5"/>
        <rect x="7" y="7" width="76" height="16" fill="#c0392b"/>
        <rect x="7" y="67" width="76" height="16" fill="#c0392b"/>
        <text x="45" y="19" font-family="'Malgun Gothic',sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="5">이음협회</text>
        <text x="28" y="48" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">수</text>
        <text x="62" y="48" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">료</text>
        <text x="28" y="66" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">인</text>
        <text x="62" y="66" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">증</text>
        <text x="45" y="79" font-family="'Malgun Gothic',sans-serif" font-size="9" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">수어통역사교육</text>
      </svg>
    </div>
  </div>
</body>
</html>`);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <S.Wrapper>
      <S.SectionTitle>수료증 출력</S.SectionTitle>
      <S.Subtitle>출력할 수료증을 선택하세요.</S.Subtitle>

      <S.SelectRow>
        <S.CertSelect
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        >
          <option value="">수료증을 선택해주세요</option>
          {certs.map(c => (
            <option key={c.id} value={c.id}>
              {c.eduTitle} ({formatKorDate(c.eduCertCreateAt)}){isExpired(c.eduCertExpireAt) ? " [만료]" : ""}
            </option>
          ))}
        </S.CertSelect>
      </S.SelectRow>

      {!selectedId ? (
        <S.EmptyMsg>수료증을 선택하면 미리보기가 표시됩니다.</S.EmptyMsg>
      ) : expired ? (
        <S.EmptyMsg style={{ color: "#e74c3c" }}>
          만료된 수료증은 출력할 수 없습니다. (만료일: {formatKorDate(selected.eduCertExpireAt)})
        </S.EmptyMsg>
      ) : (
        <>
          <S.CertCardWrap ref={certRef}>
            <S.CertWatermark>
              <img src="/assets/image/layout/logo.svg" alt="" style={{ width: "100%" }} />
            </S.CertWatermark>
            <S.CertHeader>수 료 증</S.CertHeader>
            <S.CertBody>
              <S.CertNo>{cert.no}</S.CertNo>
              <S.CertFieldRow>
                <S.CertFieldLabel>성  명</S.CertFieldLabel>
                <S.CertFieldValue>{cert.name}</S.CertFieldValue>
              </S.CertFieldRow>
              <S.CertFieldRow>
                <S.CertFieldLabel>생년월일</S.CertFieldLabel>
                <S.CertFieldValue>{cert.birth}</S.CertFieldValue>
              </S.CertFieldRow>
              <S.CertFieldRow>
                <S.CertFieldLabel>과 정 명</S.CertFieldLabel>
                <S.CertFieldValue>{cert.course}</S.CertFieldValue>
              </S.CertFieldRow>
              <S.CertTextBlock>
                위 사람은 상기 과정을 수료하였음을<br />증명합니다.
              </S.CertTextBlock>
              <S.CertFooter>
                <S.CertDate>
                  {cert.date}<br />
                  <S.CertOrg>이음</S.CertOrg>
                </S.CertDate>
                <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.85, flexShrink: 0 }}>
                  <rect x="2" y="2" width="86" height="86" fill="none" stroke="#c0392b" strokeWidth="3.5"/>
                  <rect x="7" y="7" width="76" height="76" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
                  <rect x="7" y="7" width="76" height="16" fill="#c0392b"/>
                  <rect x="7" y="67" width="76" height="16" fill="#c0392b"/>
                  <text x="45" y="19" fontFamily="'Malgun Gothic',sans-serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="5">이음협회</text>
                  <text x="28" y="48" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">수</text>
                  <text x="62" y="48" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">료</text>
                  <text x="28" y="66" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">인</text>
                  <text x="62" y="66" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">증</text>
                  <text x="45" y="79" fontFamily="'Malgun Gothic',sans-serif" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="1">수어통역사교육</text>
                </svg>
              </S.CertFooter>
            </S.CertBody>
          </S.CertCardWrap>

          <S.PrintBtnWrap>
            <S.PrintBtn onClick={handlePrint}>출력하기 (PDF)</S.PrintBtn>
          </S.PrintBtnWrap>
        </>
      )}
    </S.Wrapper>
  );
};

export default CertificatePrintComponent;
