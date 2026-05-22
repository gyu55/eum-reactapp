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
import ReceiptGuideContainer from "../pages/exam/receipt/guide/ReceiptGuideContainer";
import ReceiptSubmitContainer from "../pages/exam/receipt/receipt/ReceiptSubmitContainer";
import ResultsContainer from "../pages/exam/results/ResultsContainer";
import CheckContainer from "../pages/exam/results/check/CheckContainer"
import LicenseContainer from "../pages/exam/results/license/LicenseContainer";
import UpdateCheckContainer from "../pages/exam/update/check/UpdateCheckContainer";
import UpdateContainer from "../pages/exam/update/UpdateContainer";
import RenewContainer from "../pages/exam/update/renew/RenewContainer";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import CommunityContainer from "../pages/community/CommunityContainer";
import LoginContainer from "../pages/auth/login/LoginContainer";
import JoinContainer from "../pages/auth/join/JoinContainer";
import SocialJoinContainer from "../pages/auth/social-join/SocialJoinContainer";
import CommunityChatContainer from "../pages/community/chat/CommunityChatContainer";
import CommunityPostContainer from "../pages/community/post/CommunityPostContainer";
import CommunityPostWriteContainer from "../pages/community/post/write/CommunityPostWriteContainer";
import CommunityUserProfileComponent from "../pages/community/profile/CommunityUserProfileComponent";
import PostDetailPage from "../pages/community/post/detail/PostDetailPage";
import UserWritePostList from "../pages/community/profile/filter/UserWritePostList";
import UserWriteComment from "../pages/community/profile/filter/UserWriteComment";
import UserClickedLike from "../pages/community/profile/filter/UserClickedLike";
import CertificateContainer from "../pages/exam/certificate/CertificateContainer";
import CertificateCheckContainer from "../pages/exam/certificate/check/CertificateCheckContainer";
import CertificatePrintContainer from "../pages/exam/certificate/print/CertificatePrintContainer";
import CertificateReissueContainer from "../pages/exam/certificate/reissue/CertificateReissueContainer";
import MyPageLearningContainer from "../pages/mypage/learning/MyPageLearningContainer";
import MyPageSettingContainer from "../pages/mypage/setting/MyPageSettingContainer";
import MyPageCertificateConfirmContainer from "../pages/mypage/certificate/confirm/MyPageCertificateConfirmContainer";
import MyPageCertificateContainer from "../pages/mypage/certificate/MyPageCertificateContainer";
import MyPageCertificateGuideContainer from "../pages/mypage/certificate/guide/MyPageCertificateGuideContainer";
import MyPageCertificateCompleteContainer from "../pages/mypage/certificate/complete/MyPageCertificateCompleteContainer";
import ConfirmAddressSearchContainer from "../pages/mypage/certificate/confirm/address-search/ConfirmAddressSearchContainer";
import CustomServiceContainer from "../pages/customservice/CustomServiceContainer";
import CustomServiceInquireContainer from "../pages/customservice/inquire/CustomServiceInquireContainer";
import CustomServiceNoticeContainer from "../pages/customservice/notice/CustomServiceNoticeContainer";
import CustomServicePrivacyContainer from "../pages/customservice/privacy/CustomServicePrivacyContainer";
import CustomServiceResultContainer from "../pages/customservice/result/CustomServiceResultContainer";
import MyPageEditContainer from "../pages/mypage/edit/MyPageEditContainer";
import MyPageWithdrawContainer from "../pages/mypage/withdraw/MyPageWithdrawContainer";
import CustomServiceNoticeListContainer from '../pages/customservice/notice/list/CustomServiceNoticeListContainer';
import CustomServiceNoticeWriteContainer from '../pages/customservice/notice/write/CustomServiceNoticeWriteContainer';
import CustomServiceNoticeEditContainer from "../pages/customservice/notice/edit/CustomServiceNoticeEditContainer";
import StudyRefactorContainer from "../pages/studyRefactor/StudyContainer";
import StudyRefactorComponent from "../pages/studyRefactor/StudyComponent";
import StudyRefactorExperienceContainer from "../pages/studyRefactor/experience/StudyExperienceContainer";
import StudyRefactorExperienceComponent from "../pages/studyRefactor/experience/StudyExperienceComponent";
import StudyRefactorExperienceQuizContainer from "../pages/studyRefactor/experience/StudyExperienceQuizContainer";
import StudyRefactorExperienceQuizComponent from "../pages/studyRefactor/experience/StudyExperienceQuizComponent";
import StudyRefactorAttendanceContainer from "../pages/studyRefactor/attendance/StudyAttendanceContainer";
import StudyRefactorChapterContainer from "../pages/studyRefactor/chapter/StudyChapterContainer";
import StudyRefactorChapterComponent from "../pages/studyRefactor/chapter/StudyChapterComponent";
import StudyRefactorChapterQuizContainer from "../pages/studyRefactor/chapter/StudyChapterQuizContainer";
import StudyRefactorChapterQuizComponent from "../pages/studyRefactor/chapter/StudyChapterQuizComponent";
import StudyRefactorChapterResultContainer from "../pages/studyRefactor/chapter/StudyChapterResultContainer";
import StudyRefactorSearchContainer from "../pages/studyRefactor/search/StudySearchContainer";
import StudyRefactorLearnContainer from "../pages/studyRefactor/learn/LearnContainer";
import StudyRefactorLearnComponent from "../pages/studyRefactor/learn/LearnComponent";
import StudyRefactorLearnAlphabetContainer from "../pages/studyRefactor/learn/LearnAlphabetContainer";
import StudyRefactorLearnQuizContainer from "../pages/studyRefactor/learn/LearnQuizContainer";
import StudyRefactorLearnQuizComponent from "../pages/studyRefactor/learn/LearnQuizComponent";
import FindAccountContainer from "../pages/auth/find-account/FindAccountContainer";

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
                path: "info",
                element: <ReceiptInfoContainer />,
                children: [
                  {
                    path: "guide",
                    element: <ReceiptGuideContainer />
                  },
                  {
                    path: "submit",
                    element: <ReceiptSubmitContainer />
                  },
                  {
                    path: "confirm",
                    element: <ReceiptConfirmContainer />
                  },
                ]
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
        element: <StudyRefactorContainer />,
        children: [
          {
            index: true,
            element: <StudyRefactorComponent />
          },
          {
            path: "experience",
            element: <StudyRefactorExperienceContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorExperienceComponent />
              },
              {
                path: ":quiz",
                element: <StudyRefactorExperienceQuizContainer />,
                children: [
                  {
                    path: "questions/:id",
                    element: <StudyRefactorExperienceQuizComponent />
                  }
                ]
              }
            ]
          },
          {
            path: "attendance",
            element: <StudyRefactorAttendanceContainer />
          },
          {
            path: "chapter",
            element: <StudyRefactorChapterContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorChapterComponent />
              },
              {
                path: ":quiz",
                element: <StudyRefactorChapterQuizContainer />,
                children: [
                  {
                    index: true,
                    element: <StudyRefactorChapterQuizComponent />
                  },
                  {
                    path: "questions/:id",
                    element: <StudyRefactorChapterQuizComponent />
                  },
                  {
                    path: "result",
                    element: <StudyRefactorChapterResultContainer />
                  }
                ]
              }
            ]
          },
          {
            path: "search",
            element: <StudyRefactorSearchContainer />
          },
          {
            path: "learn",
            element: <StudyRefactorLearnContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorLearnComponent />
              },
              {
                path: "alphabet",
                element: <StudyRefactorLearnAlphabetContainer />
              },
              {
                path: "quiz/:type",
                element: <StudyRefactorLearnQuizContainer />,
                children: [
                  {
                    path: "questions/:id",
                    element: <StudyRefactorLearnQuizComponent />
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: "study-preview",
        element: <StudyRefactorContainer />,
        children: [
          {
            index: true,
            element: <StudyRefactorComponent />
          },
          {
            path: "experience",
            element: <StudyRefactorExperienceContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorExperienceComponent />
              },
              {
                path: ":quiz",
                element: <StudyRefactorExperienceQuizContainer />,
                children: [
                  {
                    path: "questions/:id",
                    element: <StudyRefactorExperienceQuizComponent />
                  }
                ]
              }
            ]
          },
          {
            path: "attendance",
            element: <StudyRefactorAttendanceContainer />
          },
          {
            path: "chapter",
            element: <StudyRefactorChapterContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorChapterComponent />
              },
              {
                path: ":quiz",
                element: <StudyRefactorChapterQuizContainer />,
                children: [
                  {
                    index: true,
                    element: <StudyRefactorChapterQuizComponent />
                  },
                  {
                    path: "questions/:id",
                    element: <StudyRefactorChapterQuizComponent />
                  },
                  {
                    path: "result",
                    element: <StudyRefactorChapterResultContainer />
                  }
                ]
              }
            ]
          },
          {
            path: "search",
            element: <StudyRefactorSearchContainer />
          },
          {
            path: "learn",
            element: <StudyRefactorLearnContainer />,
            children: [
              {
                index: true,
                element: <StudyRefactorLearnComponent />
              },
              {
                path: "alphabet",
                element: <StudyRefactorLearnAlphabetContainer />
              },
              {
                path: "quiz/:type",
                element: <StudyRefactorLearnQuizContainer />,
                children: [
                  {
                    path: "questions/:id",
                    element: <StudyRefactorLearnQuizComponent />
                  }
                ]
              }
            ]
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
          {
            path: "edit",
            element: <MyPageEditContainer />
          },
          {
            path: "withdraw",
            element: <MyPageWithdrawContainer />
          }  
        ]
      },
      {
        path: "community",
        element: <CommunityContainer />,
        children: [
          {
            index: true,
            element: <CommunityPostContainer />
          },
          {
            path: "chat",
            element: <CommunityChatContainer />
          }
        ]
      },
      {
        path: "community/post/write",
        element: <CommunityPostWriteContainer />
      },
      {
        path: "community/post/:id",
        element: <PostDetailPage />
      },
      {
        path: "customservice",
        element: <CustomServiceContainer />,
        children: [
          {
            path: "notice",
            element: <CustomServiceNoticeListContainer />,
            children: [
              {
                path: ":id",
                element: <CustomServiceNoticeContainer />
              },
              {
                path: ":id/edit",
                element: <CustomServiceNoticeEditContainer />
              },
            ]
          },
          {
            path: "notice/write",  
            element: <CustomServiceNoticeWriteContainer />
          },
          {
            path: "inquire",
            element: <CustomServiceInquireContainer />
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
        element: <CommunityUserProfileComponent />,
        children: [
          {
            path: "writed-post",
            element: <UserWritePostList />
          },
          {
            path: "writed-comment",
            element: <UserWriteComment />
          },
          {
            path: "liked-post",
            element: <UserClickedLike />
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    element: <LoginContainer />
  },
  {
    path: "/join",
    element: <JoinContainer />
  },
  {
    path: "/social-join",
    element: <SocialJoinContainer />
  },
  {
    path: "/find-account",
    element: <FindAccountContainer />
  },
])

export default router;
