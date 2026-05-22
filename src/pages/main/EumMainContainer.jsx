import React from 'react';
import { styles } from './style';
import * as S from "./style.js";
import ChatbotButton from '../chatbot/ChatbotButtonComponent';
import FloatingProfiles from './bannerSection/FloatingProfileComponent';
import BannerSection from './bannerSection/BannerSectionComponent';
import ContentSection from './content/ContentSectionComponent';
import ReviewSection from './reviewSection/ReviewSectionComponent';
import WordCardSection from './wordCard/WordCardSection.jsx';
import NoticeSection from './notice/NoticeSectionComponent';
import CurriculumSection from './curriculum/CurriculumSection';

const EumMainContainer = () => {
  return (
    <>
      <ChatbotButton />
      <FloatingProfiles />
      <S.Wrapper>
        <BannerSection />
        <ContentSection />
        <CurriculumSection />
        <ReviewSection />
        <WordCardSection />
        <S.BottomSpacer>
          <NoticeSection />
        </S.BottomSpacer>
      </S.Wrapper>
    </>
  );
};

export default EumMainContainer;