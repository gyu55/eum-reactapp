import styled from "styled-components";
import { PRIMARY, RED, GRAY, TEXT_BLACK } from "../style";

export const Wrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

export const Required = styled.span`
  color: ${RED};
  margin-left: 3px;
`;

export const CategoryRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CategoryBtn = styled.button`
  padding: 7px 18px;
  border-radius: 20px;
  border: 1.5px solid ${({ $active }) => ($active ? PRIMARY : "#e0e0ea")};
  background: ${({ $active }) => ($active ? PRIMARY : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;
  height: 120px;
  resize: vertical;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const CharCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: #aaa;
  margin-top: 6px;
`;

export const FileDropZone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border-radius: 10px;
  border: 1.5px dashed #d0d0e0;
  background: #fafafa;
  font-size: 13px;
  color: #aaa;
  cursor: pointer;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
`;

export const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f5f5f7;
  font-size: 13px;
  color: #555;
  gap: 10px;
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

export const FileThumb = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1px solid #e0e0ea;
`;

export const FileName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileRemoveBtn = styled.button`
  border: none;
  background: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background: ${PRIMARY};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }
`;

/* ── Hero ── */

export const HeroCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${TEXT_BLACK};
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 12px;
  color: ${GRAY};
  margin: 0;
`;

export const HeroIllust = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eef0ff 0%, #dde1ff 100%);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
