import React from 'react';
import CertificateComponent from './CertificateComponent';
import { Outlet } from 'react-router-dom';

const CertificateContainer = () => {
  return (
    <>
      <CertificateComponent />
      <Outlet />
    </>
  );
};

export default CertificateContainer;
