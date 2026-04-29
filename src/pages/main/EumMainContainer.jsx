import React from 'react';
import theme from '../../styles/theme';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const EumMainContainer = () => {
  return (
    <>
      <div style={{
        overflowX: 'hidden',
        overflow: 'hidden',   // ← 추가
        position: 'relative', // ← 추가
        width: '100%',
      }}>
        {/* 배너 상단 큰 글씨 */}
        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'flex-end',
        marginTop: '223px',
        
        }}>
          <p style={{fontSize: theme.FONT_SIZE.h1, 
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            FONT_LINE: theme.FONT_LINE.h1,
            letterSpacing: '-0.02em'
          }}>
            손짓 하나로 <br /> 
            <span style = {{color : theme.TEXT_COLOR.primary}}>
              마음이 이어지는 곳
            </span> <br />
            이음
          </p>
        </div>

        {/* 배너 회색 작은 글씨 */}
        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'flex-end',
        marginTop: '36px'
        
        }}>
          <p style={{
            fontSize: theme.FONT_SIZE.h7, 
            fontWeight: theme.FONT_WEIGHT.regular, 
            color: theme.GRAYSCALE[7], 
            textAlign:'center',
            FONT_LINE: theme.FONT_LINE.h7,
            letterSpacing: '-0.02em'
            }}>
            수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
            모두를 위한 따뜻한 대화 공간이에요.
          </p>
        </div>


        {/* 배너 초록 흐림 */}
        <div style={{
          position: 'absolute',
          left: '281px',   // X값
          top: '759px',    // Y값
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          backgroundColor: '#A8F0D8',
          filter: 'blur(87px)',
          opacity:'0.25'
        }}>
        </div>

        {/* 배너 파란 흐림 */}
        <div style={{
          position: 'absolute',
          left: '71px',   // X값
          top: '159px',    // Y값
          width: '416px',
          height: '416px',
          borderRadius: '50%',
          backgroundColor: '#7EB8FF',
          filter: 'blur(116px)',
          opacity:'0.3'
        }}>
        </div>

        {/* 배너 주황 흐림 */}
        <div style={{
          position: 'absolute',
          left: '750px',   // X값
          top: '119px',    // Y값
          width: '283px',
          height: '283px',
          borderRadius: '50%',
          backgroundColor: '#FFBF80',
          filter: 'blur(116px)',
          opacity:'0.3'
        }}>
        </div>

        {/* 배너 노랑 흐림 */}
        <div style={{
          position: 'absolute',
          left: '942px',   // X값
          top: '850px',    // Y값
          width: '288px',
          height: '288px',
          borderRadius: '50%',
          backgroundColor: '#FFD96B',
          filter: 'blur(87px)',
          opacity:'0.25'
        }}>
        </div>

        {/* 배너 보라 흐림 */}
        <div style={{
          position: 'absolute',
          left: '1477px',   // X값
          top: '590px',    // Y값
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          backgroundColor: '#C4A8FF',
          filter: 'blur(102px)',
          opacity:'0.3'
        }}>
        </div>
        <div style={{
          position: 'absolute',
          left: '1497px',   // X값
          top: '148px',    // Y값
          width: '288px',
          height: '288px',
          borderRadius: '50%',
          backgroundColor: '#FBC8FF',
          filter: 'blur(87px)',
          opacity:'0.25'
        }}>
        </div>
        
        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        marginTop: '36px',
        marginBottom:'435px',
        }}>

          <button style={{
            backgroundColor : theme.PALETTE.primary.main,
            color: theme.PALETTE.white,
            fontSize: theme.FONT_SIZE.h7,
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            padding: '20px 50px',
            borderRadius : '50px',
            letterSpacing: '-0.02em',
            height:'60px',
            width:'250px',
            whiteSpace: 'nowrap',
            display : 'flex',
            justifyContent: 'center',
            alignContent:'center',
            alignItems:'center',
            }}>
            지금 시작하기 →
          </button>
        </div>

        <div style={{
          display : 'flex',
          justifyContent: 'center',
          maxHeight:'1000px',
          minHeight:'1221px',
          backgroundColor: theme.GRAYSCALE[10]
        }}>
          <span style={{ 
            textAlign:'center', 
            letterSpacing: '-0.02em',
            FONT_LINE : theme.FONT_LINE.h4,
            fontSize: theme.FONT_SIZE.h3,
            fontWeight: theme.FONT_WEIGHT.bold,
            paddingTop: '108px'
            }}>
            이음에서만 만날 수 있는 <br />
            다양한 콘텐츠를 소개합니다.
          </span>
        </div>

      </div>
    </>
  );
};

export default EumMainContainer;
