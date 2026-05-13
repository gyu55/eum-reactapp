import React from 'react';
import { styles } from '../style';
import CustomServicePrivacyComponent from './CustomServicePrivacyComponent';

const CustomServicePrivacyContainer = () => {
  return (
    <>
      {/* 히어로 카드 */}
      <div style={styles.heroCard}>
        <div>
          <div style={styles.heroBadge()}>고객지원</div>
          <h1 style={styles.heroTitle}>개인정보 처리방침</h1>
          <p style={styles.heroSub}>시행일 : 2026.05.05</p>
        </div>
        <div style={styles.heroIllust}>
          <span style={{ display:'flex' }}>
            <img src="/assets/image/customService/eumServiceIcon.svg" alt="" />
          </span>
        </div>
      </div>

      <CustomServicePrivacyComponent />
    </>
  );
};

export default CustomServicePrivacyContainer;
