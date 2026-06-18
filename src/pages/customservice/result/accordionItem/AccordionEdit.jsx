import React, { useState, useRef } from "react";
import * as S from "../style";
import InquireDonePopup from "../../common/InquireDonePopup";

const AccordionEdit = ({ result, showEditInput, setShowEditInput, onEdit, onDelete }) => {
  const [editContent, setEditContent]         = useState(result.inquireContent);
  const [editFile, setEditFile]               = useState(null);
  const [editFilePreview, setEditFilePreview] = useState(result.inquireFileUrl || null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const fileInputRef                          = useRef(null);

  const handleSubmit = async () => {
    if (!editContent.trim()) return alert("내용을 입력해주세요.");
    if (editContent.trim().length < 10) return alert("내용을 최소 10자 이상 입력해주세요.");
    await onEdit(result.id, result.inquireTitle, editContent, editFile);
    setShowEditInput(false);
    setEditFile(null);
    setEditFilePreview(null);
  };

  const handleDelete = async () => {
    await onDelete(result.id);
    setShowDeletePopup(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setEditFile(file);
    if (file.type.startsWith("image/")) {
      setEditFilePreview(URL.createObjectURL(file));
    } else {
      setEditFilePreview(null);
    }
  };

  const handleFileRemove = () => {
    if (editFilePreview) URL.revokeObjectURL(editFilePreview);
    setEditFile(null);
    setEditFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      <InquireDonePopup
        isOpen={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        title="문의를 삭제하시겠습니까?"
        sub="삭제된 문의는 복구할 수 없습니다."
        buttonText="삭제하기"
        onConfirm={handleDelete}
        showCheck={false}
      />

      <S.AnswerBtnWrap>
        {!showEditInput ? (
          <S.AnswerBtnRow>
            <S.AnswerBtn onClick={(e) => { e.stopPropagation(); setShowEditInput(true); }}>
              수정하기
            </S.AnswerBtn>
            <S.CancelBtn onClick={(e) => { e.stopPropagation(); setShowDeletePopup(true); }}>
              삭제하기
            </S.CancelBtn>
          </S.AnswerBtnRow>
        ) : (
          <S.AnswerInputWrap>
            <S.AnswerTextarea
              placeholder="내용을 입력해주세요. (최소 10자)"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />

            <S.FileDropZone onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                onClick={(e) => e.stopPropagation()}
              />
              + 파일 첨부 (클릭해서 선택)
            </S.FileDropZone>

            {editFilePreview && !editFile && (
              <S.FileItem onClick={(e) => e.stopPropagation()}>
                <S.FileInfo>
                  {result.inquireFileUrl.split(",").map((url, i) => (
                    <S.FileThumb key={i} src={`http://localhost:10000${url.trim()}`} alt={`첨부 이미지 ${i + 1}`} />
                  ))}
                </S.FileInfo>
                <S.FileRemoveBtn onClick={(e) => { e.stopPropagation(); setEditFilePreview(null); }}>✕</S.FileRemoveBtn>
              </S.FileItem>
            )}

            {editFile && (
              <S.FileItem onClick={(e) => e.stopPropagation()}>
                <S.FileInfo>
                  {editFilePreview && <S.FileThumb src={editFilePreview} alt={editFile.name} />}
                  <S.FileName>{editFile.name}</S.FileName>
                </S.FileInfo>
                <S.FileRemoveBtn onClick={(e) => { e.stopPropagation(); handleFileRemove(); }}>✕</S.FileRemoveBtn>
              </S.FileItem>
            )}

            <S.AnswerBtnRow>
              <S.CancelBtn onClick={(e) => { e.stopPropagation(); setShowEditInput(false); handleFileRemove(); }}>
                취소
              </S.CancelBtn>
              <S.ConfirmBtn onClick={(e) => { e.stopPropagation(); handleSubmit(); }}>
                수정완료
              </S.ConfirmBtn>
            </S.AnswerBtnRow>
          </S.AnswerInputWrap>
        )}
      </S.AnswerBtnWrap>
    </>
  );
};

export default AccordionEdit;