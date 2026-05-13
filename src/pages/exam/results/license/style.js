import styled from "styled-components";

const PRIMARY = "#4359fc";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 28px 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin: 0 0 14px;
  letter-spacing: -0.3px;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  flex: ${({ $flex }) => $flex ?? 1};
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
`;

export const SearchBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

export const CertCardWrap = styled.div`
  border: 1.5px solid #e0e4ff;
  border-radius: 12px;
  overflow: hidden;
  max-width: 420px;
  margin: 0 auto;
`;

export const CertHeader = styled.div`
  background: ${PRIMARY};
  color: #fff;
  text-align: center;
  padding: 20px 0 16px;
  letter-spacing: 0.3em;
  font-size: 22px;
  font-weight: 700;
`;

export const CertBody = styled.div`
  padding: 24px 32px;
  background: #fff;
`;

export const CertNo = styled.div`
  font-size: 12px;
  color: #888;
  text-align: right;
  margin-bottom: 16px;
`;

export const CertFieldRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
`;

export const CertFieldLabel = styled.div`
  font-size: 11px;
  color: #aaa;
`;

export const CertFieldValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin-top: 4px;
`;

export const CertTextBlock = styled.div`
  font-size: 13px;
  color: #333;
  line-height: 1.9;
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-bottom: 16px;
`;

export const CertFooter = styled.div`
  text-align: center;
`;

export const CertDate = styled.div`
  font-size: 13px;
  color: #444;
  margin-bottom: 6px;
`;

export const CertOrg = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const PrintBtnWrap = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const PrintBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
