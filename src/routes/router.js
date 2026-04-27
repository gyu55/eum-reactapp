import { createBrowserRouter } from "react-router-dom";

import EumLayout from "../pages/eum/layout/EumLayout";
import EumMainContainer from "../pages/eum/main/EumMainContainer";
import ExamContainer from "../pages/eum/exam/ExamContainer";
import LicenseNoticeContainer from "../pages/eum/exam/info/notice/LicenseNoticeContainer";
import ExamInfoContainer from "../pages/eum/exam/info/ExamInfoContainer";
import LicenseIntroContainer from "../pages/eum/exam/info/intro/LicenseIntroContainer";
import ReceiptContainer from "../pages/eum/exam/receipt/ReceiptContainer";
import ReceiptConfirmContainer from "../pages/eum/exam/receipt/confirm/ReceiptConfirmContainer";
import ReceiptInfoContainer from "../pages/eum/exam/receipt/info/ReceiptInfoContainer";
import ReceiptSubmitContainer from "../pages/eum/exam/receipt/receipt/ReceiptSubmitContainer";
import ResultsContainer from "../pages/eum/exam/results/ResultsContainer";
import CheckContainer from "../pages/eum/exam/results/check/CheckContainer"
import LicenseContainer from "../pages/eum/exam/results/license/LicenseContainer";
import UpdateCheckContainer from "../pages/eum/exam/update/check/UpdateCheckContainer";
import UpdateContainer from "../pages/eum/exam/update/UpdateContainer";
import RenewContainer from "../pages/eum/exam/update/renew/RenewContainer";
import StudyContainer from "../pages/eum/study/StudyContainer";
import StudyChapterContainer from "../pages/eum/study/chapter/StudyChapterContainer";
import StudyChapterQuizContainer from "../pages/eum/study/chapter/StudyChapterQuizContainer";
import StudyChapterComponent from "../pages/eum/study/chapter/StudyChapterComponent";
import LearnContainer from "../pages/eum/study/learn/LearnContainer";
import StudyAttendanceContainer from "../pages/eum/study/attendance/StudyAttendanceContainer";
import MyPageContainer from "../pages/eum/mypage/MyPageContainer";
import CommunityContainer from "../pages/eum/community/CommunityContainer";
import LoginContainer from "../pages/eum/auth/login/LoginContainer";
import JoinContainer from "../pages/eum/auth/join/JoinContainer";
import CommunityChatContainer from "../pages/eum/community/chat/CommunityChatContainer";
import CommunityPostContainer from "../pages/eum/community/post/CommunityPostContainer";
import CommunityPostWriteContainer from "../pages/eum/community/post/write/CommunityPostWriteContainer";
import CommunityUserProfileComponent from "../pages/eum/community/profile/CommunityUserProfileComponent";
import CertificateContainer from "../pages/eum/exam/certificate/CertificateContainer";
import CertificateCheckContainer from "../pages/eum/exam/certificate/check/CertificateCheckContainer";
import CertificatePrintContainer from "../pages/eum/exam/certificate/print/CertificatePrintContainer";
import CertificateReissueContainer from "../pages/eum/exam/certificate/reissue/CertificateReissueContainer";
import StudyExperienceContainer from "../pages/eum/study/experience/StudyExperienceContainer";
import StudyExperienceQuizContainer from "../pages/eum/study/experience/StudyExperienceQuizContainer";
import StudyExperienceQuizComponent from "../pages/eum/study/experience/StudyExperienceQuizComponent";
import MyPageLearningContainer from "../pages/eum/mypage/learning/MyPageLearningContainer";
import MyPageSettingContainer from "../pages/eum/mypage/setting/MyPageSettingContainer";
import MyPageCertificateConfirmContainer from "../pages/eum/mypage/certificate/confirm/MyPageCertificateConfirmContainer";
import MyPageCertificateContainer from "../pages/eum/mypage/certificate/MyPageCertificateContainer";
import MyPageCertificateGuideContainer from "../pages/eum/mypage/certificate/guide/MyPageCertificateGuideContainer";
import MyPageCertificateCompleteContainer from "../pages/eum/mypage/certificate/complete/MyPageCertificateCompleteContainer";
import ConfirmAddressSearchContainer from "../pages/eum/mypage/certificate/confirm/address-search/ConfirmAddressSearchContainer";
import StudySearchContainer from "../pages/eum/study/search/StudySearchContainer";


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
