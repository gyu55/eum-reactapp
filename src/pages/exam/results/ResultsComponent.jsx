import React from 'react';
import { Link } from 'react-router-dom';

const ResultsComponent = () => {
  return (
    <div>
      <div><Link to="/exam/results/check">합격 조회</Link></div>
      <div><Link to="/exam/results/license">자격증 조회</Link></div>
    </div>
  );
};

export default ResultsComponent;
