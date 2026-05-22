import styled from "styled-components";

const PRIMARY = "#4359fc";

export const PageWrap = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  padding: 60px 20px;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 420px;
`;

export const BrandLogo = styled.div`
  text-align: center;
  margin-bottom: 32px;
  cursor: pointer;
`;

export const TabRow = styled.div`
  display: flex;
  border-bottom: 1.5px solid #e0e0e0;
  margin-bottom: 28px;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 12px 0;
  background: none;
  border: none;
  border-bottom: 2.5px solid ${({ $active }) => ($active ? PRIMARY : 'transparent')};
  margin-bottom: -1.5px;
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active }) => ($active ? PRIMARY : '#aaa')};
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  transition: color 0.15s;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  color: #111;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
  font-family: 'Pretendard', sans-serif;

  &:focus { border-color: ${PRIMARY}; }
  &::placeholder { color: #bbb; }
  &:disabled { background: #f5f5f5; color: #aaa; }
`;

export const InlineRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SmallBtn = styled.button`
  padding: 13px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  background: ${({ $green }) => ($green ? '#03C75A' : PRIMARY)};
  color: #fff;
  font-family: 'Pretendard', sans-serif;
  flex-shrink: 0;

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const PrimaryBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  transition: background 0.15s;
  margin-top: 4px;

  &:hover { background: #333; }
  &:disabled { opacity: 0.4; cursor: not-allowed; background: #111; }
`;

export const SecondaryBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #fff;
  color: ${PRIMARY};
  border: 1.5px solid ${PRIMARY};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  transition: background 0.15s;

  &:hover { background: #f5f7ff; }
`;

export const Hint = styled.div`
  font-size: 13px;
  color: ${({ $ok }) => ($ok ? '#03C75A' : '#e74c3c')};
  margin-top: 6px;
`;

export const InputHint = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
`;

export const ResultBox = styled.div`
  background: #f5f7ff;
  border: 1px solid #dde3ff;
  border-radius: 12px;
  padding: 28px;
  text-align: center;
`;

export const ResultLabel = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

export const ResultEmail = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.3px;
`;

export const ResultSub = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 6px;
`;

export const BackLink = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #aaa;
  cursor: pointer;
  text-align: center;
  margin-top: 28px;
  display: block;
  width: 100%;
  font-family: 'Pretendard', sans-serif;

  &:hover { color: #555; }
`;
