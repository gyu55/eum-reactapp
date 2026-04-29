import React from 'react';
import { Link } from 'react-router-dom';

const LicenseNoticeComponent = () => {
  return (
    <div>
      <h1>자격증 공지사항</h1>
      <Link to="/eum/exam">← 시험으로</Link>
    </div>
  );
};

export default LicenseNoticeComponent;
