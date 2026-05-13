import styled from "styled-components";

const PRIMARY = "#4359fc";
const CERT_GREEN = "#4eca80";

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

export const Subtitle = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 24px;
`;

export const CertCard = styled.div`
  border: 1.5px solid #d0f0e0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 420px;
  margin: 0 auto 24px;
`;

export const CertHeader = styled.div`
  background: ${CERT_GREEN};
  color: #fff;
  text-align: center;
  padding: 18px 0 14px;
  letter-spacing: 0.3em;
  font-size: 20px;
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
  gap: 24px;
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
  color: ${CERT_GREEN};
`;

export const PrintBtnWrap = styled.div`
  text-align: center;
`;

export const PrintBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
