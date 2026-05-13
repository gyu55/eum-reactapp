import React from 'react';
import { styles } from './style';
import ChatbotButton from '../chatbot/ChatbotButtonComponent';
import FloatingProfiles from './bannerSection/FloatingProfileComponent';
import BannerSection from './bannerSection/BannerSectionComponent';
import ContentSection from './content/ContentSectionComponent';
import CurriculumSection from './curriculum/CurriculumSectionComponent';
import ReviewSection from './reviewSection/ReviewSectionComponent';
import WordCardSection from './wordCard/WordCardSectionComponent';
import NoticeSection from './notice/NoticeSectionComponent';

const EumMainContainer = () => {
  return (
    <>
      <ChatbotButton />
      <FloatingProfiles />
      <div style={styles.wrapper}>
        <BannerSection />
        <div style={{paddingTop : '100px'}}>
          <ContentSection />
        </div>
        <CurriculumSection />
        <ReviewSection />
        <WordCardSection />
        <div style={{marginBottom:'70px'}}>
        <NoticeSection />
        </div>
      </div>
    </>
  );
};

export default EumMainContainer;