import React from 'react';
import * as S from "./style.js";
import ChatbotButton from '../chatbot/ChatbotButtonComponent';
import FloatingProfiles from './bannerSection/FloatingProfileComponent';
import BannerSection from './bannerSection/BannerSectionComponent';
import ContentSection from './content/ContentSectionComponent';
import ReviewSectionContainer from './reviewSection/ReviewSectionContainer';  // ← 수정
import WordCardContainer from './wordCard/WordCardContainer.jsx';
import NoticeSectionContainer from './notice/NoticeSectionContainer';          // ← 수정
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
        <ReviewSectionContainer />                                              
        <WordCardContainer />
        <S.BottomSpacer>
          <NoticeSectionContainer />                                      
        </S.BottomSpacer>
      </S.Wrapper>
    </>
  );
};

export default EumMainContainer;