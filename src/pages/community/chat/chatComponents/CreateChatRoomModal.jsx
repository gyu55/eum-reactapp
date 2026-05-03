import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faComments, faXmark } from "@fortawesome/free-solid-svg-icons";
import { colors, fonts, radius } from "../../constants";

// ─── Popup ───────────────────────────────────────────────────────────────────

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
`;

// ─── Top Bar ──────────────────────────────────────────────────────────────────

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitlePill = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 12px 20px;
`;

const TitleIconWrap = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textWhite};
  font-size: 26px;
`;

const TitleTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleMain = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
  color: ${colors.textWhite};
  margin: 0;
  letter-spacing: -0.4px;
`;

const TitleSub = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
  margin: 0;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.border};
  border: none;
  border-radius: 6px;
  padding: 11px 12px;
  cursor: pointer;
  color: ${colors.textMain};
  font-size: 16px;
`;

// ─── Form Card ────────────────────────────────────────────────────────────────

const FormCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 20px 60px 60px;
  display: flex;
  flex-direction: column;
`;

const SectionLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.primary};
  margin: 0 0 8px;
  letter-spacing: -0.2px;
`;

const FormInputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const FormBottomArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

// ─── Field Group ──────────────────────────────────────────────────────────────

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const FieldTitleRow = styled.div`
  display: flex;
  align-items: center;
`;

const FieldLabel = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const RequiredMark = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.primary};
`;

const OptionalLabel = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin-left: 4px;
`;

// ─── Input / Textarea ─────────────────────────────────────────────────────────

const InputField = styled.input`
  width: 100%;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 12px 24px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${colors.textSub};
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 100px;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 12px 24px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${colors.textSub};
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;

// ─── Tag Input ────────────────────────────────────────────────────────────────

const TagInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  width: 100%;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 10px 24px;
  box-sizing: border-box;
  min-height: 46px;
  cursor: text;

  &:focus-within {
    border-color: ${colors.primary};
  }
`;

const TagBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${colors.primaryLight};
  color: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 2px 10px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.sm};
`;

const TagRemoveBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${colors.primary};
  font-size: 10px;
  display: flex;
  align-items: center;
  line-height: 1;
`;

const InlineTagInput = styled.input`
  border: none;
  outline: none;
  font-family: ${fonts.family};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  flex: 1;
  min-width: 120px;
  background: transparent;
  line-height: 22px;
  padding: 0;

  &::placeholder {
    color: ${colors.textSub};
  }
`;

// ─── Divider ─────────────────────────────────────────────────────────────────

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 20px 0 4px;
  width: 100%;
`;

// ─── Max Users ────────────────────────────────────────────────────────────────

const MaxUsersRow = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const MaxUsersInput = styled.input`
  width: 172px;
  flex-shrink: 0;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 12px 24px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${colors.textSub};
  }

  &:focus {
    border-color: ${colors.primary};
  }

  &:disabled {
    background: ${colors.bgSection};
    cursor: not-allowed;
  }
`;

const UnlimitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UnlimitText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  margin: 0;
  line-height: 22px;
  letter-spacing: -0.28px;
  white-space: nowrap;
`;

// ─── Toggle ───────────────────────────────────────────────────────────────────

const ToggleTrack = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 100px;
  background: ${({ $on }) => ($on ? colors.primary : colors.border)};
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: 3px;
  left: ${({ $on }) => ($on ? "21px" : "3px")};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${colors.textWhite};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

// ─── Upload Area ──────────────────────────────────────────────────────────────

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 165px;
  width: 100%;
  background: ${colors.bgSection};
  border: 2px dashed ${colors.border};
  border-radius: ${radius.input};
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const UploadIconWrap = styled.div`
  font-size: 28px;
  color: ${colors.textSub};
`;

const UploadMainText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  margin: 0;
  text-align: center;
`;

const UploadSubText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
  text-align: center;
`;

const UploadBtnWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const UploadBtn = styled.button`
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.sm};
  padding: 8px 30px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  cursor: pointer;
  white-space: nowrap;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ThumbnailPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${radius.input};
  object-fit: cover;
  border: 1px solid ${colors.border};
`;

// ─── Submit ───────────────────────────────────────────────────────────────────

const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.input};
  padding: 10px 80px;
  width: 288px;
  cursor: pointer;
`;

const SubmitBtnIcon = styled.div`
  font-size: 18px;
  color: ${colors.textWhite};
`;

const SubmitBtnText = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.textWhite};
  white-space: nowrap;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const CreateChatRoomModal = ({ onClose, onSubmit }) => {
  const [roomName, setRoomName] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [maxUsers, setMaxUsers] = useState("");
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() && tags.length < 5) {
      e.preventDefault();
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    onSubmit?.({
      roomName,
      roomDesc,
      tags,
      maxUsers: isUnlimited ? null : Number(maxUsers),
      thumbnailFile,
    });
  };

  return (
    <Popup>
      <TopBar>
        <TitlePill>
          <TitleIconWrap>
            <FontAwesomeIcon icon={faComments} />
          </TitleIconWrap>
          <TitleTextGroup>
            <TitleMain>새로운 채팅방 만들기</TitleMain>
            <TitleSub>수어 학습 커뮤니티에 새 공간을 만들어보세요</TitleSub>
          </TitleTextGroup>
        </TitlePill>
        <CloseBtn onClick={onClose} aria-label="닫기">
          <FontAwesomeIcon icon={faXmark} />
        </CloseBtn>
      </TopBar>

      <FormCard>
        <SectionLabel>기본 정보</SectionLabel>

        <FormInputsArea>
          <FieldGroup>
            <FieldTitleRow>
              <FieldLabel>방 이름</FieldLabel>
              <RequiredMark>*</RequiredMark>
            </FieldTitleRow>
            <InputField
              type="text"
              placeholder="이름을 입력해주세요"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldTitleRow>
              <FieldLabel>방 소개</FieldLabel>
              <RequiredMark>*</RequiredMark>
            </FieldTitleRow>
            <TextareaField
              placeholder="방 소개를 입력해주세요"
              value={roomDesc}
              onChange={(e) => setRoomDesc(e.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldTitleRow>
              <FieldLabel>태그</FieldLabel>
            </FieldTitleRow>
            <TagInputWrap>
              {tags.map((tag, i) => (
                <TagBadge key={i}>
                  #{tag}
                  <TagRemoveBtn onClick={() => handleRemoveTag(i)} aria-label="태그 삭제">
                    <FontAwesomeIcon icon={faXmark} />
                  </TagRemoveBtn>
                </TagBadge>
              ))}
              {tags.length < 5 && (
                <InlineTagInput
                  placeholder={tags.length === 0 ? "태그 입력 후 Enter, 최대 5개" : ""}
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                />
              )}
            </TagInputWrap>
          </FieldGroup>
        </FormInputsArea>

        <Divider />

        <SectionLabel>채팅방 설정</SectionLabel>

        <FormBottomArea>
          <FieldGroup>
            <FieldTitleRow>
              <FieldLabel>최대 참여 인원</FieldLabel>
              <RequiredMark>*</RequiredMark>
            </FieldTitleRow>
            <MaxUsersRow>
              <MaxUsersInput
                type="number"
                placeholder="인원수 입력"
                value={maxUsers}
                onChange={(e) => setMaxUsers(e.target.value)}
                disabled={isUnlimited}
              />
              <UnlimitRow>
                <ToggleTrack
                  $on={isUnlimited}
                  onClick={() => setIsUnlimited((prev) => !prev)}
                  role="switch"
                  aria-checked={isUnlimited}
                >
                  <ToggleThumb $on={isUnlimited} />
                </ToggleTrack>
                <UnlimitText>제한 없음 (최대 999명)</UnlimitText>
              </UnlimitRow>
            </MaxUsersRow>
          </FieldGroup>

          <FieldGroup>
            <FieldTitleRow>
              <FieldLabel>대표 썸네일</FieldLabel>
              <OptionalLabel>(선택)</OptionalLabel>
            </FieldTitleRow>
            <UploadArea onClick={handleUploadAreaClick}>
              <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
              />
              {thumbnailPreview ? (
                <ThumbnailPreview src={thumbnailPreview} alt="썸네일 미리보기" />
              ) : (
                <>
                  <UploadIconWrap>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </UploadIconWrap>
                  <UploadMainText>파일을 드래그하거나 클릭해서 첨부하세요</UploadMainText>
                  <UploadSubText>JPG, PNG 지원 · 파일당 최대 10MB</UploadSubText>
                  <UploadBtnWrap>
                    <UploadBtn type="button">이미지 첨부</UploadBtn>
                  </UploadBtnWrap>
                </>
              )}
            </UploadArea>
          </FieldGroup>
        </FormBottomArea>

        <SubmitArea>
          <SubmitBtn type="button" onClick={handleSubmit}>
            <SubmitBtnIcon>
              <FontAwesomeIcon icon={faComments} />
            </SubmitBtnIcon>
            <SubmitBtnText>채팅방 만들기</SubmitBtnText>
          </SubmitBtn>
        </SubmitArea>
      </FormCard>
    </Popup>
  );
};

export default CreateChatRoomModal;
