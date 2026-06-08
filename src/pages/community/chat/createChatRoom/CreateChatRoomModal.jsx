import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faComments,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useChatContext } from "../../context/ChatContext";
import {
  getChatRoomInfo,
  insertChatRoom,
  updateChatRoom,
} from "../../communityApi/chatApi";
import * as S from "./createChatRoomModalStyle";

const CreateChatRoomModal = ({ mode = "create", onDragMouseDown }) => {
  const isUpdate = mode === "update";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      chatRoomName: "",
      chatRoomDetail: "",
      chatRoomLimit: "",
    },
  });

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);

  const {
    closeCreateRoomPopup,
    closeUpdateRoomPopup,
    createChatRoom,
    updateRoom,
    chatRoomDTO,
  } = useChatContext();

  // update 모드: 기존 채팅방 정보를 폼 초기값으로 세팅
  useEffect(() => {
    if (!isUpdate || !chatRoomDTO) return;
    const limit = chatRoomDTO.chatRoomLimit;
    const unlimited = !limit || limit >= 100;
    reset({
      chatRoomName: chatRoomDTO.chatRoomName ?? "",
      chatRoomDetail: chatRoomDTO.chatRoomDetail ?? "",
      chatRoomLimit: unlimited ? "" : String(limit),
    });
    setIsUnlimited(unlimited);
  }, [isUpdate, chatRoomDTO, reset]);

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

  const handleFormSubmit = async (formData) => {
    const chatRoomRequestDTO = {
      chatRoomName: formData.chatRoomName,
      chatRoomType: "그룹",
      chatRoomProfile: thumbnailFile ? thumbnailFile.name : "default.jpg",
      chatRoomDetail: formData.chatRoomDetail,
      chatRoomLimit: isUnlimited ? 100 : Number(formData.chatRoomLimit),
    };

    if (isUpdate) {
      await updateChatRoom({ id: chatRoomDTO.id, ...chatRoomRequestDTO });
      updateRoom();
    } else {
      const chatRoomId = await insertChatRoom(chatRoomRequestDTO);
      const newChatRoomDTO = await getChatRoomInfo(chatRoomId);
      createChatRoom(newChatRoomDTO);
    }
  };

  const handleClose = isUpdate ? closeUpdateRoomPopup : closeCreateRoomPopup;

  return (
    <S.ChatRoomCreatePopup>
        <S.TopBar onMouseDown={onDragMouseDown} style={{ cursor: "grab", userSelect: "none" }}>
          <S.TitlePill>
            <S.TitleIconWrap>
              <FontAwesomeIcon icon={faComments} />
            </S.TitleIconWrap>
            <S.TitleTextGroup>
              <S.TitleMain>
                {isUpdate ? "채팅방 수정하기" : "새로운 채팅방 만들기"}
              </S.TitleMain>
              <S.TitleSub>
                {isUpdate
                  ? "채팅방 정보를 수정해보세요"
                  : "수어 학습 커뮤니티에 새 공간을 만들어보세요"}
              </S.TitleSub>
            </S.TitleTextGroup>
          </S.TitlePill>
          <S.CloseBtn onClick={handleClose} aria-label="닫기">
            <FontAwesomeIcon icon={faXmark} />
          </S.CloseBtn>
        </S.TopBar>

        <S.FormCard>
          <S.SectionLabel>기본 정보</S.SectionLabel>

          <S.FormInputsArea>
            <S.FieldGroup>
              <S.FieldTitleRow>
                <S.FieldLabel>방 이름</S.FieldLabel>
                <S.RequiredMark>*</S.RequiredMark>
              </S.FieldTitleRow>
              <S.InputField
                type="text"
                placeholder="이름을 입력해주세요"
                {...register("chatRoomName", {
                  required: "방 이름을 입력해주세요",
                })}
              />
              {errors.chatRoomName && (
                <S.ErrorText>{errors.chatRoomName.message}</S.ErrorText>
              )}
            </S.FieldGroup>

            <S.FieldGroup>
              <S.FieldTitleRow>
                <S.FieldLabel>방 소개</S.FieldLabel>
                <S.RequiredMark>*</S.RequiredMark>
              </S.FieldTitleRow>
              <S.TextareaField
                placeholder="방 소개를 입력해주세요"
                {...register("chatRoomDetail", {
                  required: "방 소개를 입력해주세요",
                })}
              />
              {errors.chatRoomDetail && (
                <S.ErrorText>{errors.chatRoomDetail.message}</S.ErrorText>
              )}
            </S.FieldGroup>

            <S.FieldGroup>
              <S.FieldTitleRow>
                <S.FieldLabel>태그</S.FieldLabel>
              </S.FieldTitleRow>
              <S.TagInputWrap>
                {tags.map((tag, i) => (
                  <S.TagBadge key={i}>
                    #{tag}
                    <S.TagRemoveBtn
                      onClick={() => handleRemoveTag(i)}
                      aria-label="태그 삭제"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </S.TagRemoveBtn>
                  </S.TagBadge>
                ))}
                {tags.length < 5 && (
                  <S.InlineTagInput
                    placeholder={
                      tags.length === 0 ? "태그 입력 후 Enter, 최대 5개" : ""
                    }
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                  />
                )}
              </S.TagInputWrap>
            </S.FieldGroup>
          </S.FormInputsArea>

          <S.Divider />

          <S.SectionLabel>채팅방 설정</S.SectionLabel>

          <S.FormBottomArea>
            <S.FieldGroup>
              <S.FieldTitleRow>
                <S.FieldLabel>최대 참여 인원</S.FieldLabel>
                <S.RequiredMark>*</S.RequiredMark>
              </S.FieldTitleRow>
              <S.MaxUsersRow>
                <S.MaxUsersInput
                  type="number"
                  placeholder="인원수 입력"
                  {...register("chatRoomLimit", {
                    validate: (value) =>
                      isUnlimited || value !== "" || "인원수를 입력해주세요",
                  })}
                  disabled={isUnlimited}
                />
                {errors.chatRoomLimit && (
                  <S.ErrorText>{errors.chatRoomLimit.message}</S.ErrorText>
                )}
                <S.UnlimitRow>
                  <S.ToggleTrack
                    $on={isUnlimited}
                    onClick={() => setIsUnlimited((prev) => !prev)}
                    role="switch"
                    aria-checked={isUnlimited}
                  >
                    <S.ToggleThumb $on={isUnlimited} />
                  </S.ToggleTrack>
                  <S.UnlimitText>제한 없음 (최대 100명)</S.UnlimitText>
                </S.UnlimitRow>
              </S.MaxUsersRow>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.FieldTitleRow>
                <S.FieldLabel>대표 썸네일</S.FieldLabel>
                <S.OptionalLabel>(선택)</S.OptionalLabel>
              </S.FieldTitleRow>
              <S.UploadArea onClick={handleUploadAreaClick}>
                <S.HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                />
                {thumbnailPreview ? (
                  <S.ThumbnailPreview
                    src={thumbnailPreview}
                    alt="썸네일 미리보기"
                  />
                ) : (
                  <>
                    <S.UploadIconWrap>
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </S.UploadIconWrap>
                    <S.UploadMainText>
                      파일을 드래그하거나 클릭해서 첨부하세요
                    </S.UploadMainText>
                    <S.UploadSubText>
                      JPG, PNG 지원 · 파일당 최대 10MB
                    </S.UploadSubText>
                    <S.UploadBtnWrap>
                      <S.UploadBtn type="button">이미지 첨부</S.UploadBtn>
                    </S.UploadBtnWrap>
                  </>
                )}
              </S.UploadArea>
            </S.FieldGroup>
          </S.FormBottomArea>

          <S.SubmitArea>
            <S.SubmitBtn type="button" onClick={handleSubmit(handleFormSubmit)}>
              <S.SubmitBtnIcon>
                <FontAwesomeIcon icon={faComments} />
              </S.SubmitBtnIcon>
              <S.SubmitBtnText>
                {isUpdate ? "수정하기" : "채팅방 만들기"}
              </S.SubmitBtnText>
            </S.SubmitBtn>
          </S.SubmitArea>
        </S.FormCard>
    </S.ChatRoomCreatePopup>
  );
};

export default CreateChatRoomModal;
