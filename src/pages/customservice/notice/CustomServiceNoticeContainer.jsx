import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styles } from '../style';
import CustomServiceNoticeComponent from './CustomServiceNoticeComponent';

// 더미 데이터 (백엔드 연동 전까지만 사용)
const DUMMY_NOTICES = [
  { id: "pin1", pinned: true,  category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05", content: "이음 서비스 이용약관이 2026년 5월 5일부로 개정됩니다.\n\n주요 변경 사항을 반드시 확인해 주시기 바랍니다." },
  { id: "pin2", pinned: true,  category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05", content: "이음 커뮤니티 채팅방이 새롭게 오픈되었습니다.\n\n다양한 학습 정보를 공유해 보세요!" },
  { id: 7,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05", content: "어린이날을 맞아 특별 이벤트를 진행합니다.\n\n참여하시면 다양한 혜택을 드립니다." },
  { id: 6,      pinned: false, category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05", content: "이음 서비스 이용약관이 개정됩니다." },
  { id: 5,      pinned: false, category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05", content: "커뮤니티 채팅방이 오픈되었습니다." },
  { id: 4,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05", content: "어린이날 특별 이벤트에 참여하세요." },
  { id: 3,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05", content: "어린이날 특별 이벤트에 참여하세요." },
  { id: 2,      pinned: false, category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05", content: "이음 서비스 이용약관이 개정됩니다." },
  { id: 1,      pinned: false, category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05", content: "커뮤니티 채팅방이 오픈되었습니다." },
];

const CustomServiceNoticeContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice]   = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    // TODO: 백엔드 연동 시 fetch로 교체
    // const res = await fetch(`/api/notices/${id}`);
    // const data = await res.json();
    const found = DUMMY_NOTICES.find((n) => String(n.id) === String(id));
    if (found) {
      setNotice(found);
    } else {
      setError('공지사항을 찾을 수 없습니다.');
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {/* 히어로 카드 */}
      <div style={styles.heroCard}>
        <div>
          <div style={styles.heroBadge()}>고객지원</div>
          <h1 style={styles.heroTitle}>공지사항</h1>
          <p style={styles.heroSub}>이음 서비스의 새로운 소식과 업데이트를 확인하세요.</p>
        </div>
        <div style={styles.heroIllust}>
          <span style={{ fontSize: 36 }}>📣</span>
        </div>
      </div>

      <CustomServiceNoticeComponent
        notice={notice}
        isLoading={isLoading}
        error={error}
        onBack={() => navigate('/customservice/notice')}
      />
    </>
  );
};

export default CustomServiceNoticeContainer;
