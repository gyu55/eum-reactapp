import useLoginCheck from "../../../../hooks/useLoginCheck";
import LoginGuard from "../../../../components/common/LoginGuard";
import LicenseComponent from "./LicenseComponent";

const LicenseContainer = () => {
  const { isLoggedIn } = useLoginCheck();

  if (isLoggedIn === null) return null;
  if (!isLoggedIn) return <LoginGuard message="합격증 발급은 로그인 후 이용 가능합니다." />;

  return <LicenseComponent />;
};

export default LicenseContainer;
