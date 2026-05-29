import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { DUMMY_RESULTS } from "../check/CheckComponent";

const PASS_SCORE = 60;

// 비로그인: 수험번호+생년월일로 조회
const GuestView = () => {
  const [cert, setCert] = useState(null);

  const handleSearch = () => {
    setCert({
      no: "제2025-01-0001호",
      name: "OOO",
      birth: "0000.00.00",
      grade: "2급",
      date: "2025년 3월 20일",
    });
  };

  return (
    <>
      <S.SearchRow>
        <S.SearchInput $flex={2} placeholder="수험번호 예: 2025-01-00001" />
        <S.SearchInput $flex={1} placeholder="생년월일 YYYYMMDD" />
        <S.SearchBtn onClick={handleSearch}>조회하기</S.SearchBtn>
      </S.SearchRow>

      {cert && <CertCard cert={cert} />}
    </>
  );
};

// 로그인: 합격한 시험 선택 후 합격증 발급
const MyLicenseView = ({ user }) => {
  const passed = DUMMY_RESULTS.filter(
    r => r.testResultPoint != null && r.testResultPoint >= PASS_SCORE
  );
  const [results] = useState(passed);
  const [selectedId, setSelectedId] = useState("");

  if (results.length === 0) return (
    <S.EmptyMsg>발급 가능한 합격증이 없습니다.</S.EmptyMsg>
  );

  const selected = results.find(r => String(r.testApplyId) === selectedId);

  const cert = selected ? {
    no: `제${String(selected.testApplyId).padStart(4, "0")}호`,
    name: user.userName || user.userNickname || "-",
    birth: user.userBirth ? user.userBirth.replace(/-/g, ".") : "-",
    grade: selected.testTitle,
    date: new Date(selected.testDate).toLocaleDateString("ko-KR", {
      year: "numeric", month: "long", day: "numeric"
    }),
  } : null;

  return (
    <>
      <S.SelectRow>
        <S.CertSelect
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        >
          <option value="">시험을 선택해주세요</option>
          {results.map(r => (
            <option key={r.testApplyId} value={r.testApplyId}>
              {r.testTitle} ({new Date(r.testDate).toLocaleDateString("ko-KR")})
            </option>
          ))}
        </S.CertSelect>
      </S.SelectRow>

      {cert && <CertCard cert={cert} />}
    </>
  );
};

// 공통 합격증 카드
const CertCard = ({ cert }) => {
  const certRef = useRef(null);

  const handlePrint = () => {
    const logoUrl = `${window.location.origin}/assets/image/layout/logo.svg`;
    const win = window.open("", "_blank", "width=680,height=860");
    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>합격증</title>
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
    @media print {
      body { background: #fff; min-height: unset; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <img class="watermark" src="${logoUrl}" alt="" />
    <div class="title">합 격 증</div>
    <div class="no">${cert.no}</div>
    <div class="field"><span class="label">성  명</span><span class="value">${cert.name}</span></div>
    <div class="field"><span class="label">생년월일</span><span class="value">${cert.birth}</span></div>
    <div class="field"><span class="label">자격 등급</span><span class="value">${cert.grade}</span></div>
    <div class="text-block">
      위 사람은 수어통역사 자격시험에<br>합격하였음을 증명합니다.
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
        <text x="28" y="48" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">합</text>
        <text x="62" y="48" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">격</text>
        <text x="28" y="66" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">인</text>
        <text x="62" y="66" font-family="'Malgun Gothic',sans-serif" font-size="21" font-weight="bold" fill="#c0392b" text-anchor="middle">증</text>
        <text x="45" y="79" font-family="'Malgun Gothic',sans-serif" font-size="9" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">수어통역사자격</text>
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
    <div>
      <S.CertCardWrap ref={certRef}>
        <S.CertWatermark>
          <img src="/assets/image/layout/logo.svg" alt="" style={{ width: "100%" }} />
        </S.CertWatermark>
        <S.CertHeader>합 격 증</S.CertHeader>
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
            <S.CertFieldLabel>자격 등급</S.CertFieldLabel>
            <S.CertFieldValue>{cert.grade}</S.CertFieldValue>
          </S.CertFieldRow>
          <S.CertTextBlock>
            위 사람은 수어통역사 자격시험에<br />합격하였음을 증명합니다.
          </S.CertTextBlock>
          <S.CertFooter>
            <S.CertDate>
              {cert.date}<br />
              <S.CertOrg>이음</S.CertOrg>
            </S.CertDate>
            <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.85, flexShrink: 0}}>
              <rect x="2" y="2" width="86" height="86" fill="none" stroke="#c0392b" strokeWidth="3.5"/>
              <rect x="7" y="7" width="76" height="76" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
              <rect x="7" y="7" width="76" height="16" fill="#c0392b"/>
              <rect x="7" y="67" width="76" height="16" fill="#c0392b"/>
              <text x="45" y="19" fontFamily="'Malgun Gothic',sans-serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="5">이음협회</text>
              <text x="28" y="48" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">합</text>
              <text x="62" y="48" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">격</text>
              <text x="28" y="66" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">인</text>
              <text x="62" y="66" fontFamily="'Malgun Gothic',sans-serif" fontSize="21" fontWeight="bold" fill="#c0392b" textAnchor="middle">증</text>
              <text x="45" y="79" fontFamily="'Malgun Gothic',sans-serif" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="1">수어통역사자격</text>
            </svg>
          </S.CertFooter>
        </S.CertBody>
      </S.CertCardWrap>
      <S.PrintBtnWrap>
        <S.PrintBtn onClick={handlePrint}>출력하기 (PDF)</S.PrintBtn>
      </S.PrintBtnWrap>
    </div>
  );
};

const LicenseComponent = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:10000/private/api/users/me", { credentials: "include" })
      .then(res => (res.ok ? res.json() : null))
      .then(data => { if (data?.success) setUser(data.data); })
      .catch(() => {})
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 16 }}>합격증 조회</S.SectionTitle>
      {authLoading ? null : user ? <MyLicenseView user={user} /> : <GuestView />}
    </S.Wrapper>
  );
};

export default LicenseComponent;
