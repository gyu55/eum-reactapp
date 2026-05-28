import { useState, useEffect } from "react";
import * as S from "./style";

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
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetch("http://localhost:10000/api/test-applications/my-results", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const passed = data.data.filter(
            r => r.testResultPoint != null && r.testResultPoint >= PASS_SCORE
          );
          setResults(passed);
          if (passed.length > 0) setSelectedId(String(passed[0].testApplyId));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <S.EmptyMsg>불러오는 중...</S.EmptyMsg>;

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
const CertCard = ({ cert }) => (
  <div>
    <S.CertCardWrap>
      <S.CertHeader>합 격 증</S.CertHeader>
      <S.CertBody>
        <S.CertNo>{cert.no}</S.CertNo>
        <S.CertFieldRow>
          <div>
            <S.CertFieldLabel>성명</S.CertFieldLabel>
            <S.CertFieldValue>{cert.name}</S.CertFieldValue>
          </div>
          <div>
            <S.CertFieldLabel>생년월일</S.CertFieldLabel>
            <S.CertFieldValue>{cert.birth}</S.CertFieldValue>
          </div>
        </S.CertFieldRow>
        <S.CertTextBlock>
          위 사람은 수어통역사 자격시험 {cert.grade}에<br />합격하였음을 증명합니다.
        </S.CertTextBlock>
        <S.CertFooter>
          <S.CertDate>{cert.date}</S.CertDate>
          <S.CertOrg>이음</S.CertOrg>
        </S.CertFooter>
      </S.CertBody>
    </S.CertCardWrap>
  </div>
);

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
