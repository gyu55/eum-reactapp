import styled from "styled-components"
import theme from "../../styles/theme"
import EumMainContainer from "./EumMainContainer"

const curriculumGray = "#E0E0EF"
const backGroundGray = "#F7F7FB"
const textGray = "#888888"
const dailyGray = "#9090B0"
const clickDailyGray = "#90909B"
const dailyBorderGray = "#EEEFFE"
const noticeGray = "#aaa"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const BottomSpacer = styled.div`
  margin-bottom: 70px;
`;

export const styles = {
  
  backGroundGray,
  textGray,
  curriculumGray,
  dailyGray,
  clickDailyGray,
  dailyBorderGray,
  noticeGray,

// 최상위 wrapper
  wrapper: {
    width: '100%',
    minHeight: "100vh",
  },

  // 배너 헤드라인 wrapper
  headlineWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
    marginTop: '15vh',
  },

  // 배너 헤드라인 텍스트 
  headlineText: {
    fontSize: theme.FONT_SIZE.h1,
    fontWeight: theme.FONT_WEIGHT.bold,
    FONT_LINE: theme.FONT_LINE.h1,
    textAlign: 'center',
  },

  // 배너 서브타이틀 wrapper
  subtitleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
    marginTop: '3.33vh',
    
  },

  // 배너 서브타이틀 텍스트
  subtitleText: {
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.regular,
    color: theme.GRAYSCALE[7],
    FONT_LINE:theme.FONT_LINE.h7,
    textAlign: 'center',
    paddingTop:'3.33vh',
    paddingBottom:'5.93vh'
  },


  // 각 블롭 개별 속성
  blobGreen: {
    position: 'absolute',  
    borderRadius: '50%',  
    left: '-80',
    top: '-60',
    width: '320px',
    height: '320px',
    backgroundColor: '#A8F0D8',
    filter: 'blur(87px)',
    opacity: '0.25',
    zIndex: -1,
  },

  blobBlue: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '-80px',
    top: '100px',
    width: '416px',
    height: '416px',
    backgroundColor: '#7EB8FF',
    filter: 'blur(116px)',
    opacity: '0.3',
    zIndex: -1,
  },

  blobOrange: {
    position: 'absolute', 
    borderRadius: '50%',
    right: '50vw',
    top: '57px',
    width: '283px',
    height: '283px',
    backgroundColor: '#FFBF80',
    filter: 'blur(116px)',
    opacity: '0.3',
    zIndex: -1,
  },

  blobYellow: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '60vw',
    top: '688px',
    width: '288px',
    height: '288px',
    backgroundColor: '#FFD96B',
    filter: 'blur(87px)',
    opacity: '0.25',
    paddingBottom : '105px',
    zIndex: -1,
  },

  blobPurple: {
    position: 'absolute', 
    borderRadius: '50%',
    top: '540px',
    right: '-150px',
    width: '384px',
    height: '384px',
    backgroundColor: '#C4A8FF',
    filter: 'blur(102px)',
    opacity: '0.3',
    zIndex: -1,
  },

  blobPink: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '85vw',
    top: '135px',
    width: '288px',
    height: '288px',
    backgroundColor: '#FBC8FF',
    filter: 'blur(87px)',
    opacity: '0.25',
    zIndex: -1,
  },

  btnchapter : {
    display : 'flex',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    marginTop: '3.33vh',
    marginBottom:'23.15vh',
  },

  startBtn : {
    backgroundColor : theme.PALETTE.primary.main,
    color: theme.PALETTE.white,
    fontSize: theme.FONT_SIZE.h8,
    fontWeight: theme.FONT_WEIGHT.bold,
    fontLine: theme.FONT_LINE.h8,
    textAlign:'center',
    padding: '20px 50px',
    borderRadius : '50px',
    height:'60px',
    width: 'clamp(140px, 13.02vw, 220px)',
    whiteSpace: 'nowrap',
    display : 'flex',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
  },

  // 두번째 챕터
  // 콘텐츠 소개 섹션
  contentSection: {
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    maxHeight: '1000px',
    minHeight: '1100px',
    backgroundColor: theme.GRAYSCALE[10],
    marginTop:'80px'
  },

  // 콘텐츠 소개 타이틀 
  contentTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '-0.02em',
    paddingTop: '108px',
    marginBottom: '84px',
    FONT_LINE : theme.FONT_LINE.h4,
    fontSize: theme.FONT_SIZE.h3,
    fontWeight: theme.FONT_WEIGHT.bold,
  },


  curriculumLine : {
    flex: 1,
    height: '5px',
    backgroundColor : curriculumGray,
    marginTop: '28px',
  }
}