import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../style';
import CustomServiceNoticeWriteComponent from './CustomServiceNoticeWriteComponent';
import * as S from "./style";

const CustomServiceNoticeWriteContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch('http://localhost:10000/api/notice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          noticeTitle:    formData.title,
          noticeContent:  formData.content,
          noticeCategory: formData.category,
          noticePinned:   formData.pinned ? 1 : 0,
          noticeFileUrl:  formData.fileUrl || 'default.jpg',
          userId:         formData.userId,
        }),
      });
      if (!res.ok) throw new Error('등록 실패');
      navigate('/customservice/notice');
    } catch (err) {
      console.error('등록 에러:', err);
      alert('등록에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    navigate('/customservice/notice');
  };

  return (
  <>
    <S.HeroCard>
      <div>
        <S.HeroBadge>고객지원</S.HeroBadge>
        <S.HeroTitle>공지사항</S.HeroTitle>
        <S.HeroSub>이음 서비스의 새로운 소식과 업데이트를 확인하세요.</S.HeroSub>
      </div>
      <S.HeroIllust>
        <img src="/assets/image/customService/noticeIcon.svg" alt="" style={{ width: "80px" }} />
      </S.HeroIllust>
    </S.HeroCard>
    <CustomServiceNoticeWriteComponent
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  </>
);
};

export default CustomServiceNoticeWriteContainer;