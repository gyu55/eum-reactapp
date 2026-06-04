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
  margin: 0 0 6px;
  letter-spacing: -0.3px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 24px;
`;

export const CertCardWrap = styled.div`
  border: 1.5px solid #c8c8c8;
  background: #fff;
  width: 480px;
  margin: 0 auto;
  padding: 40px 48px 36px;
  position: relative;
  overflow: hidden;
`;

export const CertWatermark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  opacity: 0.07;
  pointer-events: none;
  user-select: none;
`;

export const CertHeader = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.45em;
  color: #111;
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 2px solid #111;
`;

export const CertBody = styled.div``;

export const CertNo = styled.div`
  font-size: 11px;
  color: #888;
  text-align: right;
  margin-bottom: 20px;
`;

export const CertFieldRow = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  gap: 12px;
`;

export const CertFieldLabel = styled.div`
  font-size: 13px;
  color: #555;
  min-width: 80px;
  flex-shrink: 0;
`;

export const CertFieldValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  flex: 1;
`;

export const CertTextBlock = styled.div`
  font-size: 14px;
  color: #222;
  line-height: 2.2;
  text-align: center;
  padding: 28px 0 24px;
`;

export const CertFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
`;

export const CertDate = styled.div`
  font-size: 13px;
  color: #444;
  text-align: center;
  flex: 1;
`;

export const CertOrg = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111;
`;

export const SelectRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  align-items: center;
`;

export const CertSelect = styled.select`
  flex: 1;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 14px center;
  appearance: none;
  cursor: pointer;
`;

export const EmptyMsg = styled.div`
  font-size: 13px;
  color: #aaa;
  text-align: center;
  padding: 32px 0;
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
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
