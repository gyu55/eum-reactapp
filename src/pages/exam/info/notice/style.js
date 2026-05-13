import styled from "styled-components";

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

export const PurposeText = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.9;
  margin-bottom: 28px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

export const OverviewCard = styled.div`
  background: #f5f7ff;
  border-radius: 10px;
  padding: 16px 20px;
`;

export const OverviewLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #888;
  margin-bottom: 6px;
`;

export const OverviewValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #222;
`;
