import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";
import LicenseComponent from "./LicenseComponent";
import * as S from "./style";

const LicenseContainer = () => {
  const { isLoggedIn } = useLoginCheck();

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>합격증 조회</S.SectionTitle>
      <LoginGuard message="합격증 발급은 로그인 후 이용 가능합니다." />
    </S.Wrapper>
  );

  return <LicenseComponent />;
};

export default LicenseContainer;
