import { createBrowserRouter } from "react-router-dom";

import EumLayout from "../pages/layout/EumLayout";
import EumMainContainer from "../pages/main/EumMainContainer";
import ExamContainer from "../pages/exam/ExamContainer";
import LicenseNoticeContainer from "../pages/exam/info/notice/LicenseNoticeContainer";
import ExamInfoContainer from "../pages/exam/info/ExamInfoContainer";
import LicenseIntroContainer from "../pages/exam/info/intro/LicenseIntroContainer";
import ReceiptContainer from "../pages/exam/receipt/ReceiptContainer";
import ReceiptConfirmContainer from "../pages/exam/receipt/confirm/ReceiptConfirmContainer";
import ReceiptInfoContainer from "../pages/exam/receipt/info/ReceiptInfoContainer";
import ReceiptSubmitContainer from "../pages/exam/receipt/receipt/ReceiptSubmitContainer";
import ResultsContainer from "../pages/exam/results/ResultsContainer";
import CheckContainer from "../pages/exam/results/check/CheckContainer"
import LicenseContainer from "../pages/exam/results/license/LicenseContainer";
import UpdateCheckContainer from "../pages/exam/update/check/UpdateCheckContainer";
import UpdateContainer from "../pages/exam/update/UpdateContainer";
import RenewContainer from "../pages/exam/update/renew/RenewContainer";
import StudyContainer from "../pages/study/StudyContainer";
import StudyChapterContainer from "../pages/study/chapter/StudyChapterContainer";
import StudyChapterQuizContainer from "../pages/study/chapter/StudyChapterQuizContainer";
import StudyChapterComponent from "../pages/study/chapter/StudyChapterComponent";
import LearnContainer from "../pages/study/learn/LearnContainer";
import StudyAttendanceContainer from "../pages/study/attendance/StudyAttendanceContainer";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import CommunityContainer from "../pages/community/CommunityContainer";
import LoginContainer from "../pages/auth/login/LoginContainer";
import JoinContainer from "../pages/auth/join/JoinContainer";
import CommunityChatContainer from "../pages/community/chat/CommunityChatContainer";
import CommunityPostContainer from "../pages/community/post/CommunityPostContainer";
import CommunityPostWriteContainer from "../pages/community/post/write/CommunityPostWriteContainer";
import CommunityUserProfileComponent from "../pages/community/profile/CommunityUserProfileComponent";
import CertificateContainer from "../pages/exam/certificate/CertificateContainer";
import CertificateCheckContainer from "../pages/exam/certificate/check/CertificateCheckContainer";
import CertificatePrintContainer from "../pages/exam/certificate/print/CertificatePrintContainer";
import CertificateReissueContainer from "../pages/exam/certificate/reissue/CertificateReissueContainer";
import StudyExperienceContainer from "../pages/study/experience/StudyExperienceContainer";
import StudyExperienceQuizContainer from "../pages/study/experience/StudyExperienceQuizContainer";
import StudyExperienceQuizComponent from "../pages/study/experience/StudyExperienceQuizComponent";
import MyPageLearningContainer from "../pages/mypage/learning/MyPageLearningContainer";
import MyPageSettingContainer from "../pages/mypage/setting/MyPageSettingContainer";
import MyPageCertificateConfirmContainer from "../pages/mypage/certificate/confirm/MyPageCertificateConfirmContainer";
import MyPageCertificateContainer from "../pages/mypage/certificate/MyPageCertificateContainer";
import MyPageCertificateGuideContainer from "../pages/mypage/certificate/guide/MyPageCertificateGuideContainer";
import MyPageCertificateCompleteContainer from "../pages/mypage/certificate/complete/MyPageCertificateCompleteContainer";
import ConfirmAddressSearchContainer from "../pages/mypage/certificate/confirm/address-search/ConfirmAddressSearchContainer";
import StudySearchContainer from "../pages/study/search/StudySearchContainer";
import CustomServiceContainer from "../pages/customservice/CustomServiceContainer";
import CustomServiceInquireContainer from "../pages/customservice/inquire/CustomServiceInquireContainer";
import CustomServiceNoticeContainer from "../pages/customservice/notice/CustomServiceNoticeContainer";
import CustomServicePrivacyContainer from "../pages/customservice/privacy/CustomServicePrivacyContainer";
import CustomServiceResultContainer from "../pages/customservice/result/CustomServiceResultContainer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <EumLayout />,
    children: [
      { 
        path: "", 
        element: <EumMainContainer /> 
      },
      { path: "exam", 
        element: <ExamContainer />,
        children: [
          {
            path: "info",
            element: <ExamInfoContainer />,
            children: [
              {
                path: "intro",
                element: <LicenseIntroContainer />
              },
              {
                path: "notice",
                element: <LicenseNoticeContainer />
              },
            ]
          },
          {
            path: "receipt",
            element: <ReceiptContainer />,
            children: [
              {
                path : "info",
                element : <ReceiptInfoContainer />
              },
              {
                path : "submit",
                element : <ReceiptSubmitContainer />
              },
              {
                path : "confirm",
                element : <ReceiptConfirmContainer />
              },
            ]
          },
          {
            path: "results",
            element: <ResultsContainer />,
            children: [
              {
                path: "check",
                element: <CheckContainer />
              },
              {
                path: "license",
                element: <LicenseContainer />
              }
            ]
          },
          {
            path: "update",
            element: <UpdateContainer />,
            children: [
              {
                path: "check",
                element: <UpdateCheckContainer />
              },
              {
                path: "renew",
                element: <RenewContainer />
              }
            ]
          },
          {
            path: "certificate",
            element: <CertificateContainer />,
            children: [
              {
                path: "check",
                element: <CertificateCheckContainer />
              },
              {
                path: "print",
                element: <CertificatePrintContainer />
              },
              {
                path: "reissue",
                element: <CertificateReissueContainer />
              },
            ]
          }
        ]
      },
      {
        path: "study",
        element: <StudyContainer />,
        children: [
          {
            path: "experience",
            element: <StudyExperienceContainer />,
            children: [
              {
                path: ":quiz", 
                element: <StudyExperienceQuizContainer />,
                children: [
                  {
                    path: ":id",
                    element: <StudyExperienceQuizComponent />
                  }
                ]
              },
            ]
          },
          {
            path: "attendance",
            element: <StudyAttendanceContainer />
          },
          {
            path: "chapter", 
            element: <StudyChapterContainer />,
            children: [
              {
                path: ":quiz", 
                element: <StudyChapterQuizContainer />,
                children: [
                  {
                    path: ":id",
                    element: <StudyChapterComponent />
                  }
                ]
              },
            ]
          },
          {
            path: "search",
            element: <StudySearchContainer />
          },
          {
            path: "learn",
            element: <LearnContainer />
          }
        ]
      },
      {
        path: "mypage",
        element: <MyPageContainer />,
        children: [
          {
            path: "learning",
            element: <MyPageLearningContainer />
          },
          {
            path: "certificate",
            element: <MyPageCertificateContainer />,
            children: [
              {
                path: "confirm",
                element: <MyPageCertificateConfirmContainer />,
                children: [
                  {
                    path: "address-search",
                    element: <ConfirmAddressSearchContainer />
                  }
                ]
              },
              {
                path: "complete",
                element: <MyPageCertificateCompleteContainer />
              },
              {
                path: "guide",
                element: <MyPageCertificateGuideContainer />
              },
            ]
          },
          {
            path: "setting",
            element: <MyPageSettingContainer />
          },
        ]
      },
      {
        path: "community",
        element: <CommunityContainer />,
        children: [
          {
            path: "chat",
            element: <CommunityChatContainer />
          },
          {
            path: "post",
            element: <CommunityPostContainer />,
            children: [
              {
                path: "write",
                element: <CommunityPostWriteContainer />
              }
            ]
          }
        ]
      },
      {
        path: "customservice",
        element: <CustomServiceContainer />,
        children: [
          {
            path: "inquire",
            element: <CustomServiceInquireContainer />
          },
          {
            path: "notice",
            element: <CustomServiceNoticeContainer />
          },
          {
            path: "privacy",
            element: <CustomServicePrivacyContainer />
          },
          {
            path: "result",
            element: <CustomServiceResultContainer />
          },
        ]
      },
      {
         path: "community/profile/:userId",
         element: <CommunityUserProfileComponent />
      },
      {
        path: "login",
        element: <LoginContainer />
      },
      {
        path: "join",
        element: <JoinContainer />
      }
    ]
  },
])

export default router;
