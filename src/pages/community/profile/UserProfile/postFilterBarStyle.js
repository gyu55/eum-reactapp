import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const SearchRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 536px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
  background: transparent;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const TypeTab = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[10]};
  cursor: pointer;
  flex-shrink: 0;
`;

export const TabIconLabel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const TabIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const TabLabel = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${({ $active }) =>
    $active ? theme.PALETTE.white : theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

export const CountBadge = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 100px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: normal;
  color: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

export const Spacer = styled.div`
  flex: 1;
  min-width: 1px;
`;

export const SortGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

export const SortButton = styled.button`
  padding: 6px 16px;
  border-radius: 10px;
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.extraLight : theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: normal;
  color: ${theme.GRAYSCALE[9]};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;
