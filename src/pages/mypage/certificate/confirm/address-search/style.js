import styled from "styled-components";
import theme from "../../../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 주소 검색 페이지 CSS */

/* 전체 페이지 */
S.AddressWrapper = styled.div`
  width: 1050px;

  margin-top: 28px;
`;

/* 상단 제목 */
S.AddressTitle = styled.h2`
  margin: 0 0 5px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 상단 설명 */
S.AddressDesc = styled.p`
  margin: 0 0 18px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 전체 카드 */
S.AddressCard = styled.div`
  width: 1050px;

  padding: 28px 22px 16px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 검색 영역 */
S.SearchArea = styled.div`
  display: flex;
  gap: 14px;
`;

/* 검색 인풋 */
S.SearchInput = styled.input`
  flex: 1;
  height: 52px;

  padding: 0 18px;
  box-sizing: border-box;

  border: 1px solid #d9dcec;
  border-radius: 10px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  outline: none;

  &::placeholder {
    color: #666666;
  }
`;

/* 검색 버튼 */
S.SearchButton = styled.button`
  width: 160px;
  height: 52px;

  border: none;
  border-radius: 10px;

  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #ffffff;

  cursor: pointer;
`;

/* 검색 안내 박스 */
S.SearchGuideBox = styled.div`
  height: 60px;

  margin-top: 18px;
  padding: 13px 18px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 10px;
  background: #f8f9fc;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

/* 안내 묶음 */
S.SearchGuideGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* 안내 제목 */
S.SearchGuideTitle = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 안내 문구 */
S.SearchGuideText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 오른쪽 예시 문구 */
S.SearchGuideExample = styled.p`
  margin: 0;
  align-self: end;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 검색 결과 상단 */
S.ResultTop = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 20px;
`;

/* 검색 결과 제목 */
S.ResultTitle = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 검색 개수 */
S.ResultCount = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 결과 헤더 */
S.ResultHeader = styled.div`
  height: 42px;

  margin-top: 14px;

  display: grid;
  grid-template-columns: 130px 1.4fr 1.4fr 100px;
  align-items: center;

  padding: 0 18px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 8px;
  background: #f8f9fc;
`;

/* 결과 헤더 텍스트 */
S.ResultHeaderText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  &:last-child {
    text-align: center;
  }
`;

/* 결과 행 */
S.ResultRow = styled.div`
  height: 82px;

  margin-top: 12px;

  display: grid;
  grid-template-columns: 130px 1.4fr 1.4fr 100px;
  align-items: center;

  padding: 0 18px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 10px;
  background: #ffffff;
`;

/* 우편번호 */
S.ZipCodeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 도로명 주소 */
S.RoadAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* 주소 텍스트 */
S.AddressText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  line-height: 1.4;
`;

/* 선택 버튼 영역 */
S.SelectButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 선택 버튼 */
S.SelectButton = styled.button`
  width: 74px;
  height: 38px;

  border: 1px solid #4359fc;
  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#4359fc" : "#ffffff")};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${({ $selected }) => ($selected ? "#ffffff" : "#000000")};

  cursor: pointer;
`;

/* 하단 안내 */
S.BottomGuideBox = styled.div`
  margin-top: 24px;
  padding: 18px;

  border-radius: 12px;
  background: #f8f9fc;
`;

/* 하단 안내 제목 */
S.BottomGuideTitle = styled.p`
  margin: 0 0 8px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 하단 안내 문구 */
S.BottomGuideText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  line-height: 1.6;
`;

/* 하단 버튼 영역 */
S.AddressButtonArea = styled.div`
  margin-top: 16px;
  padding-bottom: 16px;

  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

/* 닫기 버튼 */
S.CancelButton = styled.button`
  width: 74px;
  height: 38px;

  border: 1px solid #d9dcec;
  border-radius: 10px;

  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: pointer;
`;

/* 확인 버튼 */
S.ConfirmButton = styled.button`
  width: 74px;
  height: 38px;

  border: none;
  border-radius: 10px;

  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #ffffff;

  cursor: pointer;
`;

export default S;