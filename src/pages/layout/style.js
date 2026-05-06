import theme from "../../styles/theme";

export const styles = {

  header: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    height: '80px',
    borderBottom: `1px solid ${theme.GRAYSCALE[8]}`,
    backgroundColor: theme.GRAYSCALE[10],
    zIndex: 1
  },

  logoNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '112px',
  },

  contentNav: {
    fontSize: theme.FONT_SIZE.h9,
    fontWeight: theme.FONT_WEIGHT.bold,
    color: theme.PALETTE.primary.dark,
    textDecoration: 'none'
  },

  rightNav: {
    border: `solid 1.5px ${theme.TEXT_COLOR.primary}`,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '88px',
    height: '32px'
  },

  rigthBorderNav: {
    fontSize: theme.FONT_SIZE.h9,
    fontWeight: theme.FONT_WEIGHT.bold,
    color: theme.PALETTE.primary.main,
    textDecoration: 'none'
  },

  rigthBackGroundNav: {
    backgroundColor: theme.PALETTE.primary.main,
    color: theme.PALETTE.white,
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.bold,
    textAlign: 'center',
    padding: '10px 16px',
    borderRadius: '10px',
    letterSpacing: '-0.02em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '88px',
    height: '32px',
    border: 'none',
    cursor: 'pointer',
  },

  join: {
    fontSize: theme.FONT_SIZE.h9,
    fontWeight: theme.FONT_WEIGHT.bold,
    color: theme.PALETTE.white,
    textDecoration: 'none',
  }
}