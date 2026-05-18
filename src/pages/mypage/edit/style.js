import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, FONT_WEIGHT } = theme;

const S = {};

/* EditLayout CSS */

/* 정보수정 레이아웃 */
S.EditLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px;

  margin-left: 8px;
`;

/* 왼쪽 영역 */
S.EditMainArea = styled.div`
  width: 1001px;
`;

/* 오른쪽 영역 */
S.EditSideArea = styled.div`
  width: 312px;
  margin-top: 74px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ProfileCard CSS */

/* 섹션 제목 */
S.SectionTitle = styled.h2`
  margin: 24px 0 8px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 섹션 설명 */
S.SectionDesc = styled.p`
  margin: 0 0 10px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 기본 프로필 섹션 */
S.ProfileSection = styled.div`
  width: 991px;
`;

/* 기본 프로필 카드 */
S.ProfileEditCard = styled.div`
  width: 991px;
  min-height: 606px;
  padding: 30px 27px 32px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 프로필 상단 */
S.ProfileTop = styled.div`
  display: flex;
  align-items: flex-start;
`;

/* 프로필 이미지 */
S.ProfileImageBox = styled.div`
  width: 88px;
  height: 88px;
  flex-shrink: 0;

  border-radius: 18px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 이미지 설명 */
S.ProfileImageInfo = styled.div`
  margin-left: 23px;
`;

/* 프로필 사진 제목 */
S.ProfileImageTitle = styled.p`
  margin: 0 0 10px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 업로드 설명 */
S.UploadDesc = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.6;
  color: #9ca3af;
`;

/* 사진 버튼 영역 */
S.ImageButtonArea = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 17px;
`;

/* 사진 변경 버튼 */
S.ImageChangeButton = styled.button`
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
S.ImageDeleteButton = styled.button`
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
S.FormArea = styled.div`
  margin-top: 26px;
`;

/* 2열 입력 그룹 */
S.FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 456px 1fr;
  column-gap: 14px;
`;

/* 입력 묶음 */
S.Field = styled.div`
  width: 456px;
`;

/* 닉네임 영역 */
S.NicknameField = styled.div`
  width: 458px;
`;

/* 라벨 */
S.Label = styled.label`
  display: flex;
  align-items: center;
  gap: 3px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 필수 표시 */
S.Required = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ef4444;
`;

/* 입력 박스 */
S.Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  box-sizing: border-box;

  border: 1px solid #e5e7eb;
  border-radius: 10px;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  &:focus {
    outline: none;
    border-color: #e5e7eb;
  }
`;

/* 닉네임 입력 줄 */
S.NicknameInputRow = styled.div`
  display: grid;
  grid-template-columns: 363px 81px;
  column-gap: 14px;
`;

/* 닉네임 입력 */
S.NicknameInput = styled(S.Input)`
  width: 363px;
`;

/* 확인 버튼 */
S.CheckButton = styled.button`
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
S.IntroArea = styled.div`
  margin-top: 22px;
`;

/* 자기소개 라벨 */
S.IntroLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

/* 선택 뱃지 */
S.OptionalBadge = styled.span`
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
S.IntroTextarea = styled.textarea`
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
S.CountText = styled.p`
  margin: 11px 0 0;
  text-align: right;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
`;

/* 추가정보 구분선 */
S.ExtraDivider = styled.div`
  position: relative;
  margin-top: 57px;

  height: 1px;
  background: #d9d9d9;
`;

/* 추가정보 라벨 */
S.ExtraLabel = styled.div`
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

/* 추가정보 영역 */
S.ExtraFormArea = styled.div`
  margin-top: 28px;
`;

/* 셀렉트 래퍼 */
S.SelectWrapper = styled.div`
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
S.Select = styled.select`
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
S.BottomDivider = styled.div`
  margin-top: 26px;
  height: 1px;
  background: #f3f4f6;
`;

/* 하단 영역 */
S.BottomArea = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 필수 안내 */
S.RequiredGuide = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #9ca3af;
`;

/* 버튼 묶음 */
S.ButtonArea = styled.div`
  display: flex;
  gap: 8px;
`;

/* 취소 버튼 */
S.CancelButton = styled.button`
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
S.SaveButton = styled.button`
  width: 113px;
  height: 37px;

  border: none;
  border-radius: 10px;
  background: #4359fc;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
`;

/* AccountInfoCard CSS */

/* 계정 정보 섹션 */
S.AccountInfoSection = styled.div`
  width: 1001px;
  margin-top: 16px;
`;

/* 계정 정보 카드 */
S.AccountInfoCardBox = styled.div`
  width: 1001px;
  height: 213px;
  padding: 17px 27px 21px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 계정 정보 입력 영역 */
S.AccountFieldGroup = styled.div`
  display: grid;
  grid-template-columns: 456px 1fr;
  column-gap: 14px;
`;

/* 전화번호 영역 */
S.PhoneField = styled.div`
  width: 551px;
`;

/* 전화번호 입력 줄 */
S.PhoneInputRow = styled.div`
  display: grid;
  grid-template-columns: 363px 81px;
  column-gap: 14px;
`;

/* 전화번호 입력 */
S.PhoneInput = styled(S.Input)`
  width: 363px;
`;

/* 계정 설명 */
S.FieldDesc = styled.p`
  margin: 7px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 계정 정보 구분선 */
S.AccountDivider = styled.div`
  margin-top: 24px;
  height: 1px;
  background: #f3f4f6;
`;

/* 계정 정보 버튼 영역 */
S.AccountBottomArea = styled.div`
  margin-top: 18px;

  display: flex;
  justify-content: flex-end;
`;

/* PasswordChangeCard CSS */

/* 비밀번호 섹션 */
S.PasswordSection = styled.div`
  width: 1001px;
  margin-top: 16px;
`;

/* 비밀번호 카드 */
S.PasswordCardBox = styled.div`
  width: 1001px;
  height: 323px;
  padding: 31px 27px 0;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 현재 비밀번호 영역 */
S.PasswordFullField = styled.div`
  width: 951px;
`;

/* 비밀번호 입력 그룹 */
S.PasswordFieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 26px;
`;

/* 비밀번호 입력 묶음 */
S.PasswordField = styled.div`
  width: 466px;
`;

/* 비밀번호 입력 */
S.PasswordInput = styled(S.Input)`
  width: 100%;
`;

/* 비밀번호 강도 바 */
S.PasswordStrengthBar = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 13px;
`;

/* 비밀번호 강도 막대 */
S.PasswordStrengthItem = styled.div`
  width: 151px;
  height: 4px;

  border-radius: 999px;
  background: #f3f4f6;
`;

/* 비밀번호 안내 */
S.PasswordDesc = styled.p`
  margin: 7px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 비밀번호 구분선 */
S.PasswordDivider = styled.div`
  margin-top: 23px;
  height: 1px;
  background: #f3f4f6;
`;

/* 비밀번호 하단 */
S.PasswordBottomArea = styled.div`
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 비밀번호 권장 문구 */
S.PasswordGuide = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* 회원 탈퇴 영역 */
S.EditWithdrawArea = styled.div`
  width: 1001px;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`;

/* ProfilePreviewCard CSS */

/* 미리보기 카드 */
S.PreviewCardBox = styled.div`
  width: 312px;
  height: 300px;
  padding: 18px 20px 21px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 미리보기 제목 */
S.PreviewTitle = styled.p`
  margin: 0 0 15px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 미리보기 내부 박스 */
S.PreviewInnerBox = styled.div`
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
S.PreviewProfileImage = styled.div`
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
S.PreviewUserName = styled.p`
  margin: 13px 0 0;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.black};
  color: #333333;
`;

/* 레벨 버튼 */
S.PreviewLevelButton = styled.button`
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

/* 소개 */
S.PreviewIntro = styled.p`
  margin: 17px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.5;
  text-align: center;
  color: #9ca3af;
`;

/* 안내 문구 */
S.PreviewGuideText = styled.p`
  margin: 16px 0 0;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;
`;

/* ProfileGuideCard CSS */

/* 작성 안내 카드 */
S.GuideCardBox = styled.div`
  width: 312px;
  height: 220px;
  padding: 23px 20px 22px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 작성 안내 제목 */
S.GuideTitle = styled.p`
  margin: 0 0 17px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 작성 안내 목록 */
S.GuideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

/* 작성 안내 행 */
S.GuideItem = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.4;
  color: #9ca3af;
`;

/* 강조 텍스트 */
S.GuideStrong = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;
`;

/* SecurityGuideCard CSS */

/* 보안 안내 카드 */
S.SecurityCardBox = styled.div`
  width: 312px;
  min-height: 218px;
  padding: 23px 20px 22px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 보안 안내 제목 */
S.SecurityTitle = styled.p`
  margin: 0 0 14px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 개인정보 보호 박스 */
S.SecurityNoticeBox = styled.div`
  width: 272px;
  height: 80px;
  padding: 12px 14px;
  box-sizing: border-box;

  border-left: 3px solid #ff8004;
  border-radius: 10px;
  background: #fff7ed;
`;

/* 개인정보 보호 제목 */
S.SecurityNoticeTitle = styled.p`
  margin: 0 0 10px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #ff8004;
`;

/* 개인정보 보호 설명 */
S.SecurityNoticeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  line-height: 1.5;
  color: #92400e;
`;

/* 접속 정보 영역 */
S.SecurityAccessInfo = styled.div`
  margin-top: 17px;
`;

/* 접속 정보 줄 */
S.SecurityAccessRow = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.light};
  color: #9ca3af;

  & + & {
    margin-top: 10px;
  }
`;

/* 접속 정보 값 */
S.SecurityAccessValue = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

export default S;