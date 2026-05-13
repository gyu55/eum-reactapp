import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { styles } from './style';
import CustomServiceSidebar from './CustomServiceSidebar';

const BREADCRUMB_MAP = {
  '/customservice/notice':  '공지사항',
  '/customservice/inquire': '1:1 문의',
  '/customservice/result':  '문의 결과',
  '/customservice/privacy': '개인정보 처리방침',
};

const CustomServiceContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentLabel = BREADCRUMB_MAP[location.pathname] || '고객지원';

  return (
    <div style={styles.page}>
      <div style={styles.main}>

        {/* 브레드크럼 */}
        <div style={styles.breadcrumb}>
          <span style={styles.breadcrumbLink}>홈</span>
          <span style={styles.breadcrumbSep}>&gt;</span>
          <span style={styles.breadcrumbLink}>고객지원</span>
          <span style={styles.breadcrumbSep}>&gt;</span>
          <span style={styles.breadcrumbActive}>{currentLabel}</span>
        </div>

        {/* 사이드바 + 콘텐츠 */}
        <div style={styles.contentLayout}>
          <CustomServiceSidebar />
          <div style={styles.contentArea}>
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomServiceContainer;
