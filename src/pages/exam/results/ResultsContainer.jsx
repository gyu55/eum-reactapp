import React from 'react';
import ResultsComponent from './ResultsComponent';
import { Outlet } from 'react-router-dom';

const ResultsContainer = () => {
  return (
    <div>
      합격자 발표
      <ResultsComponent />
      <Outlet />
    </div>
  );
};

export default ResultsContainer;
