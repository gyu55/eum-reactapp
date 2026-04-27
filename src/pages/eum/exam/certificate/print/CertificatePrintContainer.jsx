import React from 'react';
import CertificatePrintComponent from './CertificatePrintComponent';
import { Outlet } from 'react-router-dom';

const CertificatePrintContainer = () => {
  return (
    <>
      <CertificatePrintComponent />
      <Outlet />
    </>
  );
};

export default CertificatePrintContainer;
