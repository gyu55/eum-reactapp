import React from 'react';
import { Link } from 'react-router-dom';

const UpdateComponent = () => {
  return (
    <div>
      <h1>갱신페이지</h1>
      <div><Link to="/exam/update/check">갱신 조회</Link></div>
      <div><Link to="/exam/update/renew">자격증 갱신</Link></div>
    </div>
  );
};

export default UpdateComponent;
