// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import PostContent from "../component/post/PostContent";
// import CommentSection from "../component/post/CommentSection";
// import PostSidebar from "../component/sidebar/PostSidebar";
// import FloatingChatButton from "../component/common/FloatingChatButton";
// import theme from "../styles/theme";
// import {
//   FONT_FAMILY,
//   FONT_SIZE_EXT,
//   SURFACE,
//   ALPHA,
//   PALETTE_EXT,
//   RADIUS,
//   LAYOUT,
// } from "../constants";

import styled from "styled-components";
import theme from "../../../../styles/theme";
import {
  ALPHA,
  FONT_FAMILY,
  FONT_SIZE_EXT,
  LAYOUT,
  PALETTE_EXT,
  RADIUS,
  SURFACE,
} from "../../constants";
import { useNavigate } from "react-router-dom";
import PostContent from "./detailComponent/PostContent";
import CommentSection from "./detailComponent/CommentSection";
import FloatingChatButton from "../../common/FloatingChatButton";
import PostSidebar from "./sidebar/PostSidebar";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const logoSignImg =
  "https://www.figma.com/api/mcp/asset/f1c1ea36-5c4a-4dae-997d-7df6c8877438";
const youtubeLogoImg =
  "https://www.figma.com/api/mcp/asset/e073444c-42eb-42c6-b15c-dc04466d31c2";
const naverLogoImg =
  "https://www.figma.com/api/mcp/asset/cb0bac58-70c1-41df-b8d5-9259540bfbab";
const instagramLogoImg =
  "https://www.figma.com/api/mcp/asset/af47c64f-cc7f-4bc0-b21a-1841ec9e5861";

/* ── Page wrapper ── */
const Page = styled.div`
  background: ${SURFACE.section};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* ══ Breadcrumb ══ */
const BreadcrumbBar = styled.div`
  padding: 0 300px;
  height: ${LAYOUT.breadcrumbHeight};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Crumb = styled.span`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${({ current }) => (current ? TEXT_COLOR.basic : GRAYSCALE[9])};
  white-space: nowrap;
  cursor: ${({ current }) => (current ? "default" : "pointer")};
`;

const CrumbSep = styled.span`
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
`;

/* ══ Main Content ══ */
const ContentArea = styled.main`
  flex: 1;
  /* padding: 20px 300px 60px; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  box-sizing: border-box;
`;

const MainSection = styled.div`
  width: 984px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

/* ══ Footer ══ */
const Footer = styled.footer`
  background: ${PALETTE_EXT.primaryFooter};
  padding: 40px 300px;
  box-sizing: border-box;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FooterLink = styled.a`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.medium};
  font-size: ${FONT_SIZE.h9};
  color: ${PALETTE.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinkDivider = styled.div`
  width: 1px;
  height: 11px;
  background: ${ALPHA.white30};
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialBtn = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid ${ALPHA.white30};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  &:hover {
    border-color: ${PALETTE.white};
  }
`;

const FooterInfoLabel = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE_EXT.h9_5};
  color: ${PALETTE.white};
  letter-spacing: -0.48px;
  margin: 0 0 12px 0;
`;

const FooterInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const FooterInfo = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE_EXT.h10_5};
  color: ${PALETTE.white};
  margin: 0;
  white-space: nowrap;
`;

const PostDetailPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <BreadcrumbBar>
        <Crumb>홈</Crumb>
        <CrumbSep>›</CrumbSep>
        <Crumb>커뮤니티</Crumb>
        <CrumbSep>›</CrumbSep>
        <Crumb>학습 인증</Crumb>
        <CrumbSep>›</CrumbSep>
        <Crumb current>
          수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌
        </Crumb>
      </BreadcrumbBar>

      <ContentArea>
        <MainSection>
          <PostContent />
          <CommentSection />
        </MainSection>

        <PostSidebar />
      </ContentArea>

      <Footer>
        <FooterTop>
          <FooterLinks>
            <FooterLink>개인정보처리방침</FooterLink>
            <FooterLinkDivider />
            <FooterLink>서비스 이용약관</FooterLink>
          </FooterLinks>
          <SocialLinks>
            <SocialBtn href="#" aria-label="유튜브">
              <img src={youtubeLogoImg} alt="YouTube" />
            </SocialBtn>
            <SocialBtn href="#" aria-label="네이버">
              <img src={naverLogoImg} alt="Naver" />
            </SocialBtn>
            <SocialBtn href="#" aria-label="인스타그램">
              <img src={instagramLogoImg} alt="Instagram" />
            </SocialBtn>
          </SocialLinks>
        </FooterTop>

        <FooterInfoLabel>INFO.</FooterInfoLabel>
        <FooterInfoRow>
          <FooterInfo>주식회사 이음</FooterInfo>
          <FooterInfo>대표 : 노규호 외 4명</FooterInfo>
          <FooterInfo>사업자등록번호 : 123-45-67890</FooterInfo>
        </FooterInfoRow>
        <FooterInfoRow style={{ marginTop: "8px" }}>
          <FooterInfo>주소 : 서울특별시 마포구 백범로 130</FooterInfo>
          <FooterInfo>광고·제휴문의 : code-kine@gmail.com</FooterInfo>
        </FooterInfoRow>
      </Footer>

      <FloatingChatButton />
    </Page>
  );
};

export default PostDetailPage;
