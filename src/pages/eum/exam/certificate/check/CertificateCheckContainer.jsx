import React from 'react';
import CertificateCheckComponent from './CertificateCheckComponent';
import { Outlet } from 'react-router-dom';

const CertificateCheckContainer = () => {
  return (
    <>
      <CertificateCheckComponent />
      <Outlet />
    </>
  );
};

export default CertificateCheckContainer;
