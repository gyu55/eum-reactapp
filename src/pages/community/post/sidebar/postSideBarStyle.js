import styled from "styled-components";
import theme from "../../../../styles/theme";
import { FONT_FAMILY, LAYOUT, RADIUS, SURFACE } from "../../constants";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* ── Layout ── */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${LAYOUT.sidebarWidth};
  flex-shrink: 0;
`;

/* ── Back Button ── */
export const BackButton = styled.button`
  background: ${SURFACE.card};
  border: 2px solid ${GRAYSCALE[8]};
  border-radius: ${RADIUS.button};
  padding: 14px 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${PALETTE.primary.main};
    color: ${PALETTE.primary.main};
  }
`;

/* ── Card base ── */
export const Card = styled.div`
  background: ${SURFACE.card};
  border-radius: ${RADIUS.card};
  width: 100%;
`;

/* ── Author Info Card ── */
export const AuthorCard = styled(Card)`
  padding: 19px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;

export const SectionTitle = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

export const AuthorProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

export const LevelBadge = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

export const StatsRow = styled.div`
  background: ${SURFACE.section};
  border-radius: ${RADIUS.button};
  padding: 8px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const StatValue = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${PALETTE.primary.main};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

export const StatLabel = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  text-align: center;
`;

export const OutlineButton = styled.button`
  background: ${SURFACE.card};
  border: 2px solid ${PALETTE.primary.main};
  border-radius: ${RADIUS.button};
  padding: 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${PALETTE.primary.main};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${PALETTE.primary.extraLight};
  }
`;

export const FilledButton = styled.button`
  background: ${PALETTE.primary.main};
  border: none;
  border-radius: ${RADIUS.button};
  padding: 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${PALETTE.white};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: ${PALETTE.primary.dark};
  }
`;

/* ── Related Posts Card ── */
export const RelatedCard = styled(Card)`
  padding: 17px 24px 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ── Notice Card ── */
export const NoticeCard = styled(Card)`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoticeTitleText = styled.p`
  color: ${TEXT_COLOR.basic};
  margin: 0;
  width: 100%;
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ── Notice Item ── */
export const NoticeItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${SURFACE.section};
  border-radius: ${RADIUS.input};
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const NoticeItemLeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const NoticeItemBadge = styled.div`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h12};
  text-align: center;
  padding: 4px 5px;
  border-radius: 4px;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const NoticeItemTitle = styled.p`
  color: ${TEXT_COLOR.basic};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
`;

export const NoticeItemDateText = styled.p`
  color: ${GRAYSCALE[9]};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h12};
  text-align: right;
  margin: 0;
  flex-shrink: 0;
  white-space: nowrap;
`;
