import React from 'react';
import CertificateReissueComponent from './CertificateReissueComponent';
import { Outlet } from 'react-router-dom';

const CertificateReissueContainer = () => {
  return (
    <>
      <CertificateReissueComponent />
      <Outlet />
    </>
    
  );
};

export default CertificateReissueContainer;
