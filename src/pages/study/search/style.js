// 검색스타일: 수어 검색 화면의 검색창, 필터, 목록, 상세 카드 스타일을 담당합니다.
import styled from "styled-components";

export const SearchWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 86px 24px 96px;
  background: #fff;
  color: #222;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 96px 16px 64px;
  }
`;

export const SearchHero = styled.div`
  width: min(900px, 100%);
  margin: 0 auto;
  text-align: center;
`;

export const Kicker = styled.p`
  margin: 0 0 12px;
  color: #4d5cff;
  font-size: 15px;
  font-weight: 800;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 27px;
  font-weight: 900;
  line-height: 1.32;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Desc = styled.p`
  width: min(560px, 100%);
  margin: 16px auto 0;
  color: #6e7280;
  font-size: 16px;
  line-height: 1.65;
`;

export const SearchForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 74px;
  align-items: center;
  width: min(860px, 100%);
  margin: 36px auto 0;
  border-bottom: 1.5px solid #7d8494;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 64px;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  left: 7px;
  top: 50%;
  width: 21px;
  height: 21px;
  color: #6c7280;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SearchInput = styled.input`
  height: 50px;
  padding: 0 18px 0 48px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #222;
  font-size: 15px;
  outline: none;

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: #a3a7b3;
  }
`;

export const SearchButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #4359fc;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #3545f5;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(67, 89, 252, 0.22);
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryShell = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 8px;
  width: min(940px, 100%);
  margin: 24px auto 0;
`;

export const CategoryArrowButton = styled.button`
  width: 18px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: #4359fc;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #3545f5;
  }

  &:focus-visible {
    outline: 2px solid rgba(67, 89, 252, 0.22);
    outline-offset: 2px;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 38px;
  min-width: 0;
  padding: 0 2px 5px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  cursor: grab;
  user-select: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }
`;

export const CategoryButton = styled.button`
  position: relative;
  min-height: 34px;
  flex: 0 0 auto;
  padding: 0 3px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: ${({ $active }) => ($active ? "#4359fc" : "#333")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 800 : 600)};
  cursor: pointer;
  transition: color 0.2s ease;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    border-radius: 999px;
    background: #4359fc;
    content: "";
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0.3)});
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  &:hover {
    color: #4359fc;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const SearchContent = styled.div`
  width: min(1120px, 100%);
  margin: 42px auto 0;
`;

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ContentTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 900;
`;

export const ResultCount = styled.span`
  color: #4d5cff;
  font-size: 15px;
  font-weight: 900;
`;

export const SearchNotice = styled.p`
  margin: 0 0 16px;
  padding: 12px 16px;
  border: 1px solid #dfe3ff;
  border-radius: 8px;
  background: #f1f3ff;
  color: #4d5cff;
  font-size: 14px;
  font-weight: 800;
`;

export const ResultList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultItemButton = styled.button`
  position: relative;
  display: grid;
  grid-template-columns: 118px 1fr;
  gap: 18px;
  width: 100%;
  min-height: 154px;
  padding: 18px 18px 44px;
  border: 1px solid #e5e8f2;
  border-radius: 14px;
  background: #fff;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 14px 34px rgba(41, 48, 88, 0.05);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #4d5cff;
    box-shadow: 0 16px 34px rgba(77, 92, 255, 0.12);
    transform: translateY(-4px);
  }

  &:focus-visible {
    outline: 3px solid rgba(77, 92, 255, 0.24);
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 76px 1fr;
    gap: 14px;
    min-height: 112px;
    padding: 14px;
  }
`;

export const ResultThumbWrap = styled.div`
  width: 118px;
  height: 118px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 12px;
  background: transparent;
  color: #a3a7b3;
  font-size: 11px;
  text-align: center;

  @media (max-width: 768px) {
    width: 76px;
    height: 76px;
  }
`;

export const ResultThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ResultText = styled.div`
  min-width: 0;
  align-self: start;
`;

export const ResultCategory = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: #eef1ff;
  color: #4d5cff;
  font-size: 12px;
  font-weight: 900;
`;

export const ResultWord = styled.strong`
  display: block;
  margin-top: 10px;
  color: #222;
  font-size: 21px;
  font-weight: 900;
  line-height: 1.3;
`;

export const ResultDesc = styled.p`
  margin: 8px 0 0;
  color: #707684;
  font-size: 14px;
  line-height: 1.55;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ResultActionText = styled.span`
  position: absolute;
  right: 18px;
  bottom: 16px;
  color: #4d5cff;
  font-size: 13px;
  font-weight: 900;
`;

export const DetailCard = styled.article`
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BackButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border: 1px solid #dde1ef;
  border-radius: 8px;
  background: #fff;
  color: #424756;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    border-color: #4d5cff;
    color: #4d5cff;
  }
`;

export const DetailPager = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PagerButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border: 1px solid #dde1ef;
  border-radius: 8px;
  background: #fff;
  color: #424756;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;

  &:disabled {
    color: #b9bdc8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border-color: #4d5cff;
    color: #4d5cff;
  }
`;

export const PagerCount = styled.span`
  color: #7a7f8e;
  font-size: 13px;
  font-weight: 800;
`;

export const DetailBody = styled.div`
  display: grid;
  grid-template-columns: minmax(420px, 560px) minmax(460px, 1fr);
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 0;
  padding: 0;
  border: 1px solid #e5e8f2;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 42px rgba(41, 48, 88, 0.08);

  @media (max-width: 768px) {
    min-height: 0;
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 520px;
  border-radius: 18px;
  object-fit: cover;
  background: #f7f8ff;
`;

export const DetailVideo = styled.video`
  width: 100%;
  height: auto;
  min-height: 0;
  aspect-ratio: 700 / 466;
  border-radius: 18px;
  background: #f7f8ff;
  object-fit: contain;
`;

export const MediaPlaceholder = styled.div`
  width: 100%;
  min-height: 520px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  border-radius: 18px;
  background: #f7f8ff;
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
  font-size: 14px;

  span {
    font-size: 18px;
  }

  p {
    width: 170px;
    margin: 0;
    line-height: 1.5;
  }
`;

export const DetailInfo = styled.div`
  min-width: 0;
  padding: 22px;
  border: 1px solid #d7dae8;
  border-radius: 18px;
  background: #fff;
`;

export const DetailTitle = styled.h2`
  display: inline;
  margin: 0;
  color: #4359fc;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DetailDesc = styled.p`
  margin: 8px 0 18px;
  padding: 16px 18px;
  border-radius: 8px;
  background: #f7f8ff;
  color: #666;
  font-size: 16px;
  line-height: 25px;
`;

export const ExampleBox = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr auto;
  align-items: center;
  gap: 14px;
  margin: 8px 0 18px;
  padding: 14px;
  border-radius: 8px;
  background: #f7f8ff;
  color: #555b68;
  font-size: 14px;
  line-height: 20px;

  p {
    margin: 2px 0 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 52px 1fr;
  }
`;

export const ExampleLabel = styled.strong`
  margin-bottom: 5px;
  display: block;
  color: #222;
  font-size: 14px;
  font-weight: 900;
`;

export const SourceThumb = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  color: #aaa;
  font-size: 8px;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SourceButton = styled.a`
  min-width: 82px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #4359fc;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

export const StepTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 800;

  span {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #4359fc;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const MeaningBox = styled.div`
  margin-bottom: 18px;
  padding: 12px 18px;
  border-radius: 8px;
  background: #f7f8ff;
`;

export const DetailCategoryText = styled.p`
  margin: 4px 0 0;
  color: #666;
  font-size: 12px;
  line-height: 20px;
`;

export const EmptyBox = styled.div`
  display: grid;
  place-items: center;
  gap: 8px;
  min-height: 220px;
  border: 1px dashed #cdd2e3;
  border-radius: 8px;
  background: #fff;
  color: #7a7f8e;
  text-align: center;

  strong {
    color: #222;
    font-size: 18px;
  }
`;
