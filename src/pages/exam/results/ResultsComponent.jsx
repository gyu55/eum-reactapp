import React from 'react';
import { Link } from 'react-router-dom';

const ResultsComponent = () => {
  return (
    <div>
      <div><Link to="/exam/results/check" preventScrollReset>합격 조회</Link></div>
      <div><Link to="/exam/results/license" preventScrollReset>자격증 조회</Link></div>
    </div>
  );
};

export default ResultsComponent;
