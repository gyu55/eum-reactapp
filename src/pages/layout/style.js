import theme from "../../styles/theme";

export const styles = {

  header : {
    position:'fixed',
    left : 0,
    top : 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    height: '80px',
    borderBottom: `1px solid ${theme.GRAYSCALE[8]}`,
    backgroundColor: theme.GRAYSCALE[10],
    zIndex: 1
  },

  logoNav : {  
    position: 'absolute',
    left : '300px',
    display: 'flex',
    gap:'112px', 
    whiteSpace: 'nowrap',
  },

  studyNav : {
    fontSize: theme.FONT_SIZE.h9, 
    fontWeight: theme.FONT_WEIGHT.bold,
    color: theme.PALETTE.primary.dark,
    textDecoration:'none'
    
  },

  examNav : {
    fontSize: theme.FONT_SIZE.h9, 
    fontWeight: theme.FONT_WEIGHT.bold, 
    color: theme.PALETTE.primary.dark,
    textDecoration:'none'
  },

  communityNav : {
    fontSize: theme.FONT_SIZE.h9, 
    fontWeight: theme.FONT_WEIGHT.bold, 
    color: theme.PALETTE.primary.dark,
    textDecoration:'none'
  },

  customserviceNav : {
    fontSize: theme.FONT_SIZE.h9, 
    fontWeight: theme.FONT_WEIGHT.bold, 
    color: theme.PALETTE.primary.dark,
    textDecoration:'none'
  },

  loginNav : {
    position:'absolute',
    left : '1120px',
    border: `solid 1.5px ${theme.TEXT_COLOR.primary}`,
    color: theme.PALETTE.primary.main,
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.bold, 
    textAlign:'center',
    padding: '10px 16px',
    borderRadius : '10px',
    letterSpacing: '-0.02em', 
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '88px',
    height : '32px'
  },

  login : {
            fontSize: theme.FONT_SIZE.h9, 
            fontWeight: theme.FONT_WEIGHT.bold, 
            color: theme.PALETTE.primary.main,
            textDecoration:'none'
  },

  joinNav : {
    position:'absolute',
    left : '1232px',
    backgroundColor : theme.PALETTE.primary.main,
    color: theme.PALETTE.white,
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.bold, 
    textAlign:'center',
    padding: '10px 16px',
    borderRadius : '10px',
    letterSpacing: '-0.02em', 
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '88px',
    height : '32px'
  },

  join : {
            fontSize: theme.FONT_SIZE.h9, 
            fontWeight: theme.FONT_WEIGHT.bold,
            color: theme.PALETTE.white,
            textDecoration:'none',
          }

}