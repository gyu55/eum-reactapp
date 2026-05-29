import React from 'react';
import { Link } from 'react-router-dom';

const CertificateComponent = () => {
  return (
    <div>
      <h1>수료증 페이지</h1>
      <div><Link to="/exam/certificate/check" preventScrollReset>수료증 조회</Link></div>
      <div><Link to="/exam/certificate/print" preventScrollReset>수료증 출력</Link></div>
      <div><Link to="/exam/certificate/reissue" preventScrollReset>수료증 재발급</Link></div>
    </div>
  );
};

export default CertificateComponent;
