import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, FONT_WEIGHT } = theme;

/* 전체 영역 */
export const EditWrapper = styled.div`
  margin-top: 48px;
`;

/* 정보수정 레이아웃 */
export const EditLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px;

  margin-left: 8px;
`;

/* 정보수정 왼쪽 영역 */
export const EditMainArea = styled.div`
  width: 1001px;
`;

/* 오른쪽 사이드 영역 */
export const EditSideArea = styled.div`
  width: 312px;
  margin-top: 74px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;


/* 프로필 카드 CSS */


/* 섹션 제목 */
export const SectionTitle = styled.h2`
  margin: 24px 0 8px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 섹션 설명 */
export const SectionDesc = styled.p`
  margin: 0 0 10px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 기본 프로필 카드 */
export const ProfileEditCard = styled.div`
  width: 991px;
  min-height: 606px;
  padding: 30px 27px 32px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 기본 프로필 섹션 */
export const ProfileSection = styled.div`
  width: 991px;
  margin-left: 0;
`;

/* 프로필 상단 */
export const ProfileTop = styled.div`
  display: flex;
  align-items: flex-start;
`;

/* 프로필 이미지 */
export const ProfileImageBox = styled.div`
  width: 88px;
  height: 88px;
  flex-shrink: 0;

  border-radius: 18px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;
`;

/* 이미지 설명 영역 */
export const ProfileImageInfo = styled.div`
  margin-left: 23px;
`;

/* 프로필 사진 제목 */
export const ProfileImageTitle = styled.p`
  margin: 0 0 10px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 업로드 설명 */
export const UploadDesc = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.6;
  color: #9ca3af;
`;

/* 사진 버튼 영역 */
export const ImageButtonArea = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 17px;
`;

/* 사진변경 버튼 */
export const ImageChangeButton = styled.button`
  width: 94px;
  height: 30px;

  border: 1px solid #4359fc;
  border-radius: 8px;
  background: ${PALETTE.white};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 삭제 버튼 */
export const ImageDeleteButton = styled.button`
  width: 55px;
  height: 30px;

  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: ${PALETTE.white};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
`;

/* 입력 영역 */
export const FormArea = styled.div`
  margin-top: 26px;
`;

/* 2열 입력 그룹 */
export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 456px 1fr;
  column-gap: 14px;
`;

/* 입력 묶음 */
export const Field = styled.div`
  width: 456px;
`;

/* 닉네임 입력 묶음 */
export const NicknameField = styled.div`
  width: 458px;
`;

/* 라벨 */
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 3px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 필수 표시 */
export const Required = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ef4444;
`;

/* 입력 박스 */
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  font-family: "Pretendard";

  &:focus {
    outline: none;
    border-color: #e5e7eb;
  }
`;

/* 닉네임 입력 줄 */
export const NicknameInputRow = styled.div`
  display: grid;
  grid-template-columns: 363px 81px;
  column-gap: 14px;
`;

/* 닉네임 입력 */
export const NicknameInput = styled(Input)`
  width: 363px;
`;

/* 중복 확인 버튼 */
export const CheckButton = styled.button`
  width: 81px;
  height: 44px;

  border: 1px solid #4359fc;
  border-radius: 10px;
  background: ${PALETTE.white};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 자기소개 영역 */
export const IntroArea = styled.div`
  margin-top: 22px;
`;

/* 자기소개 라벨 줄 */
export const IntroLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

/* 선택 뱃지 */
export const OptionalBadge = styled.span`
  width: 34px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #f3f4f5;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.medium};
  color: #9ca3af;
`;

/* 자기소개 입력 */
export const IntroTextarea = styled.textarea`
  width: 928px;
  height: 90px;
  padding: 14px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};
  resize: none;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  outline: none;

  &:focus {
    border-color: #e5e7eb;
    background: ${PALETTE.white};
  }

  &::placeholder {
    font-family: "Pretendard";
    color: #9ca3af;
  }
`;

/* 글자 수 */
export const CountText = styled.p`
  margin: 11px 0 0;
  text-align: right;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
`;

/* 추가정보 구분선 */
export const ExtraDivider = styled.div`
  position: relative;
  margin-top: 57px;

  height: 1px;
  background: #d9d9d9;
`;

/* 추가정보 라벨 */
export const ExtraLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #f9fafb;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
`;

/* 추가정보 입력 영역 */
export const ExtraFormArea = styled.div`
  margin-top: 28px;
`;

/* 셀렉트 래퍼 */
export const SelectWrapper = styled.div`
  position: relative;

  width: 456px;
  height: 44px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 14px;

    width: 8px;
    height: 8px;

    border-right: 2px solid #6b7280;
    border-bottom: 2px solid #6b7280;

    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }

  &:hover {
    background: #f2f2f2;
  }

  &:focus-within {
    background: #e6e6e6;
  }
`;

/* 셀렉트 박스 */
export const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 0 40px 0 14px;
  box-sizing: border-box;

  border: none;
  background: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  cursor: pointer;
  outline: none;
`;

/* 하단 구분선 */
export const BottomDivider = styled.div`
  margin-top: 26px;
  height: 1px;
  background: #f3f4f6;
`;

/* 하단 버튼 영역 */
export const BottomArea = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 필수 안내 */
export const RequiredGuide = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
`;

/* 버튼 묶음 */
export const ButtonArea = styled.div`
  display: flex;
  gap: 8px;
`;

/* 취소 버튼 */
export const CancelButton = styled.button`
  width: 75px;
  height: 39px;

  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: ${PALETTE.white};

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
`;

/* 저장 버튼 */
export const SaveButton = styled.button`
  width: 113px;
  height: 37px;

  border: none;
  border-radius: 10px;
  background: #4359fc;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
`;

/* 계정정보 카드CSS */

/* 계정 정보 섹션 */
export const AccountInfoSection = styled.div`
  width: 1001px;
  margin-top: 16px;
`;

/* 계정 정보 카드 */
export const AccountInfoCardBox = styled.div`
  width: 1001px;
  height: 213px;
  padding: 17px 27px 21px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 계정 정보 입력 영역 */
export const AccountFieldGroup = styled.div`
  display: grid;
  grid-template-columns: 456px 1fr;
  column-gap: 14px;
`;

/* 전화번호 영역 */
export const PhoneField = styled.div`
  width: 551px;
`;

/* 전화번호 입력 줄 */
export const PhoneInputRow = styled.div`
  display: grid;
  grid-template-columns: 363px 81px;
  column-gap: 14px;
`;

/* 전화번호 입력 */
export const PhoneInput = styled(Input)`
  width: 363px;
`;

/* 계정 설명 */
export const FieldDesc = styled.p`
  margin: 7px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 계정 정보 하단 구분선 */
export const AccountDivider = styled.div`
  margin-top: 24px;
  height: 1px;
  background: #f3f4f6;
`;

/* 계정 정보 버튼 영역 */
export const AccountBottomArea = styled.div`
  margin-top: 18px;

  display: flex;
  justify-content: flex-end;
`;

/* 비밀번호 변경CSS */

/* 비밀번호 변경 섹션 */
export const PasswordSection = styled.div`
  width: 1001px;
  margin-top: 16px;
`;

/* 비밀번호 변경 카드 */
export const PasswordCardBox = styled.div`
  width: 1001px;
  height: 323px;
  padding: 31px 27px 0;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 현재 비밀번호 영역 */
export const PasswordFullField = styled.div`
  width: 951px;
`;

/* 비밀번호 입력 그룹 */
export const PasswordFieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 26px;
`;

/* 비밀번호 입력 묶음 */
export const PasswordField = styled.div`
  width: 466px;
`;

/* 비밀번호 입력 */
export const PasswordInput = styled(Input)`
  width: 100%;
`;

/* 비밀번호 안내 바 */
export const PasswordStrengthBar = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 13px;
`;

/* 비밀번호 안내 막대 */
export const PasswordStrengthItem = styled.div`
  width: 151px;
  height: 4px;

  border-radius: 999px;
  background: #f3f4f6;
`;

/* 비밀번호 안내 문구 */
export const PasswordDesc = styled.p`
  margin: 7px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 비밀번호 하단 구분선 */
export const PasswordDivider = styled.div`
  margin-top: 23px;
  height: 1px;
  background: #f3f4f6;
`;

/* 비밀번호 하단 영역 */
export const PasswordBottomArea = styled.div`
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 비밀번호 권장 문구 */
export const PasswordGuide = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 회원 탈퇴 영역 */
export const EditWithdrawArea = styled.div`
  width: 1001px;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`;

/* 프로필 미리보기 CSS */

/* 프로필 미리보기 카드 */
export const PreviewCardBox = styled.div`
  width: 312px;
  height: 300px;
  padding: 18px 20px 21px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 미리보기 제목 */
export const PreviewTitle = styled.p`
  margin: 0 0 15px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 미리보기 내부 박스 */
export const PreviewInnerBox = styled.div`
  width: 272px;
  height: 230px;
  padding-top: 11px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #f3f4f6;
  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 미리보기 프로필 이미지 */
export const PreviewProfileImage = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 16px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 미리보기 이름 */
export const PreviewUserName = styled.p`
  margin: 13px 0 0;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.black};
  color: #333333;
`;

/* 미리보기 레벨 버튼 */
export const PreviewLevelButton = styled.button`
  width: 84px;
  height: 17px;
  margin-top: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;
  background: ${PALETTE.primary.extraLight};
  cursor: pointer;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #4359fc;
`;

/* 미리보기 소개 */
export const PreviewIntro = styled.p`
  margin: 17px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.5;
  text-align: center;
  color: #9ca3af;
`;

/* 미리보기 안내 */
export const PreviewGuideText = styled.p`
  margin: 16px 0 0;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 작성 안내 카드 CSS */
export const GuideCardBox = styled.div`
  width: 312px;
  height: 220px;
  padding: 23px 20px 22px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 작성 안내 제목 */
export const GuideTitle = styled.p`
  margin: 0 0 17px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 작성 안내 목록 */
export const GuideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

/* 작성 안내 행 */
export const GuideItem = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.4;
  color: #9ca3af;
`;

/* 작성 안내 강조 */
export const GuideStrong = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
`;

/* 보안 안내 카드 CSS */

/* 보안 안내 카드 */
export const SecurityCardBox = styled.div`
  width: 312px;
  min-height: 218px;
  padding: 23px 20px 22px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 보안 안내 제목 */
export const SecurityTitle = styled.p`
  margin: 0 0 14px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 개인정보 보호 박스 */
export const SecurityNoticeBox = styled.div`
  width: 272px;
  height: 80px;
  padding: 12px 14px;
  box-sizing: border-box;

  border-left: 3px solid #ff8004;
  border-radius: 10px;
  background: #fff7ed;
`;

/* 개인정보 보호 제목 */
export const SecurityNoticeTitle = styled.p`
  margin: 0 0 10px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ff8004;
`;

/* 개인정보 보호 설명 */
export const SecurityNoticeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.5;
  color: #92400e;
`;

/* 접속 정보 영역 */
export const SecurityAccessInfo = styled.div`
  margin-top: 17px;
`;

/* 접속 정보 줄 */
export const SecurityAccessRow = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;

  & + & {
    margin-top: 10px;
  }
`;

/* 접속 정보 값 */
export const SecurityAccessValue = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;