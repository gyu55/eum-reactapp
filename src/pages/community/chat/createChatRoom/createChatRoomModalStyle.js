import styled from "styled-components";
import theme from "../../../../styles/theme";
import { PageBg } from "../ChatStyle";

// ─── Popup ───────────────────────────────────────────────────────────────────

export const ChatRoomCreatePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.GRAYSCALE[8]};
    border-radius: 3px;
  }
`;

// ─── 배경 ───────────────────────────────────────────────────────────────────
export const CreateChatPageBg = styled(PageBg)``;

// ─── Top Bar ──────────────────────────────────────────────────────────────────

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitlePill = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 100px;
  padding: 12px 20px;
`;

export const TitleIconWrap = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.PALETTE.white};
  font-size: 26px;
`;

export const TitleTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleMain = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h8};
  color: ${theme.PALETTE.white};
  margin: 0;
  letter-spacing: -0.4px;
`;

export const TitleSub = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.PALETTE.white};
  margin: 0;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.GRAYSCALE[8]};
  border: none;
  border-radius: 6px;
  padding: 11px 12px;
  cursor: pointer;
  color: ${theme.TEXT_COLOR.basic};
  font-size: 16px;
`;

// ─── Form Card ────────────────────────────────────────────────────────────────

export const FormCard = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 20px 60px 32px;
  display: flex;
  flex-direction: column;
`;

export const SectionLabel = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.PALETTE.primary.main};
  margin: 0 0 8px;
  letter-spacing: -0.2px;
`;

export const FormInputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const FormBottomArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

// ─── Field Group ──────────────────────────────────────────────────────────────

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const FieldTitleRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldLabel = styled.span`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const RequiredMark = styled.span`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.PALETTE.primary.main};
`;

export const OptionalLabel = styled.span`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[9]};
  letter-spacing: -0.2px;
  margin-left: 4px;
`;

// ─── Input / Textarea ─────────────────────────────────────────────────────────

export const InputField = styled.input`
  width: 100%;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

export const TextareaField = styled.textarea`
  width: 100%;
  height: 100px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

// ─── Tag Input ────────────────────────────────────────────────────────────────

export const TagInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  width: 100%;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  padding: 10px 24px;
  box-sizing: border-box;
  min-height: 46px;
  cursor: text;

  &:focus-within {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

export const TagBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  border-radius: 100px;
  padding: 2px 10px;
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: ${theme.FONT_SIZE.h10};
`;

export const TagRemoveBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${theme.PALETTE.primary.main};
  font-size: 10px;
  display: flex;
  align-items: center;
  line-height: 1;
`;

export const InlineTagInput = styled.input`
  border: none;
  outline: none;
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  flex: 1;
  min-width: 120px;
  background: transparent;
  line-height: 22px;
  padding: 0;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }
`;

// ─── Divider ─────────────────────────────────────────────────────────────────

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
  margin: 20px 0 4px;
  width: 100%;
`;

// ─── Max Users ────────────────────────────────────────────────────────────────

export const MaxUsersRow = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const MaxUsersInput = styled.input`
  width: 172px;
  flex-shrink: 0;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }

  &:disabled {
    background: ${theme.GRAYSCALE[10]};
    cursor: not-allowed;
  }
`;

export const UnlimitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UnlimitText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  line-height: 22px;
  letter-spacing: -0.28px;
  white-space: nowrap;
`;

// ─── Toggle ───────────────────────────────────────────────────────────────────

export const ToggleTrack = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 100px;
  background: ${({ $on }) =>
    $on ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
`;

export const ToggleThumb = styled.div`
  position: absolute;
  top: 3px;
  left: ${({ $on }) => ($on ? "21px" : "3px")};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${theme.PALETTE.white};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

// ─── Upload Area ──────────────────────────────────────────────────────────────

export const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 120px;
  width: 100%;
  background: ${theme.GRAYSCALE[10]};
  border: 2px dashed ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const UploadIconWrap = styled.div`
  font-size: 28px;
  color: ${theme.GRAYSCALE[9]};
`;

export const UploadMainText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  text-align: center;
`;

export const UploadSubText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  text-align: center;
`;

export const UploadBtnWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const UploadBtn = styled.button`
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 10px;
  padding: 8px 30px;
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  cursor: pointer;
  white-space: nowrap;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ThumbnailPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid ${theme.GRAYSCALE[8]};
`;

// ─── Error Text ───────────────────────────────────────────────────────────────

export const ErrorText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  color: #e53e3e;
  margin: 2px 0 0;
  letter-spacing: -0.2px;
`;

// ─── Submit ───────────────────────────────────────────────────────────────────

export const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${theme.PALETTE.primary.main};
  border: none;
  border-radius: 8px;
  padding: 10px 80px;
  width: 288px;
  cursor: pointer;
`;

export const SubmitBtnIcon = styled.div`
  font-size: 18px;
  color: ${theme.PALETTE.white};
`;

export const SubmitBtnText = styled.span`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.PALETTE.white};
  white-space: nowrap;
`;
