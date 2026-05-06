import React from 'react';
import theme from '../../styles/theme';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import { styles } from './style';
import { useNavigate } from 'react-router-dom';

const EumMainContainer = () => {
  
  const navigate = useNavigate();



  return (
    <>
      <div style={styles.wrapper}>
        {/* 배너 상단 큰 글씨 */}
        <div style={styles.headlineWrapper}>

          <p style={styles.headlineText}>
            손짓 하나로 <br /> 
            <span style = {{color : theme.TEXT_COLOR.primary}}>
              마음이 이어지는 곳
            </span> <br />
            이음
          </p>
        </div>

        {/* 배너 회색 작은 글씨 */}
        <div style={styles.subtitleWrapper}>
          <p style={styles.subtitleText}>
            수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
            모두를 위한 따뜻한 대화 공간이에요.
          </p>
        </div>

        {/* 배너 초록 흐림 */}
        <p style={styles.blobGreen}></p>
        {/* 배너 파란 흐림 */}
        <p style={styles.blobBlue}></p>
        {/* 배너 주황 흐림 */}
        <div style={styles.blobOrange}></div>
        {/* 배너 노랑 흐림 */}
        <div style={styles.blobYellow}></div>
        {/* 배너 보라 흐림 */}
        <div style={styles.blobPurple}></div>
        {/* 배너 핑크 흐림 */}
        <div style={styles.blobPink}></div>
        
        <div style={styles.btnchapter}>
          <button 
            style={styles.startBtn} 
            onClick={() => navigate('/community')}
          >
            지금 시작하기 →
          </button>
        </div>

        {/* 다양한 컨텐츠 챕터 */}
        <div style={styles.contentSection}>
          <div style={styles.contentTitle}>
            이음에서만 만날 수 있는 <br />
            다양한 콘텐츠를 소개합니다.
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '80px',
            gap:'24px',
            }}>
            {/* 자격검증 박스 */}
            <div style={{
              position: 'relative',
              width: '648px',
              height: '342px',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '30px',
              paddingTop: '61px',
              paddingLeft: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap:'13px',
              }}>
              <div style={{
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                backgroundColor :theme.PALETTE.secondary.main,
                borderRadius : '12px',
                width: '74px',
                height: '24px',
                }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}>
                  자격검증
                </span>
              </div>
              <div style={{
                display : 'flex',
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.bold,
                gap:'9px'
              }}>
                수어·수신호 <br />
                자격검증 도전!
              </div>
              <div style={{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                color : theme.GRAYSCALE[7]
              }}>
                내 실력을 공식으로 <br />
                인증받아보세요
              </div>
              
              {/* 자격검증 안 접수중 & 시험일 박스 */}
              <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>

                <div style={{
                  display : 'flex',
                  justifyContent:'center',
                  alignItems : 'center',
                  backgroundColor :styles.backGroundGray,
                  borderRadius : '10px',
                  width: '153px',
                  height: '29px',
                  }}>

                  {/* 첫번째 박스 */}
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.regular,
                    fontLine : theme.FONT_LINE.h11,
                    color : styles.textGray,
                    paddingRight: '9px',
                    }}>
                      2회 정기 시험
                  </span>

                  <span style={{
                    color : theme.PALETTE.black,
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.regular,
                    fontLine : theme.FONT_LINE.h11,
                  }}>|</span>
                  <span style={{
                    color : theme.PALETTE.black,
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.bold,
                    fontLine : theme.FONT_LINE.h11,
                    paddingLeft: '9px'
                    }}>
                    접수중
                  </span>
                </div>

                {/* 두번째 박스 */}
                <div style={{
                  display : 'flex',
                  justifyContent:'center',
                  alignItems : 'center',
                  backgroundColor : styles.backGroundGray,
                  borderRadius : '10px',
                  width: '153px',
                  height: '29px',
                  }}>
                    <span style={{
                      color : styles.textGray,
                      fontSize : theme.FONT_SIZE.h11,
                      fontWeight : theme.FONT_WEIGHT.regular,
                      fontLine : theme.FONT_LINE.h11,
                      paddingRight: '9px'
                      }}>
                        시험일
                    </span>
                    <span style={{
                      color : theme.PALETTE.black,
                      fontSize : theme.FONT_SIZE.h11,
                      fontWeight : theme.FONT_WEIGHT.regular,
                      fontLine : theme.FONT_LINE.h11,
                      }}>
                        |
                    </span>
                    <span style={{
                      color : theme.PALETTE.black,
                      fontSize : theme.FONT_SIZE.h11,
                      fontWeight : theme.FONT_WEIGHT.bold,
                      fontLine : theme.FONT_LINE.h11,
                      paddingLeft: '9px'
                      }}>
                        2026.05.05
                    </span>
                </div>
              </div>
                  
              <button style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  paddingTop: '23px',
                  color : theme.PALETTE.black,
                  fontSize : theme.FONT_SIZE.h10,
                  fontWeight : theme.FONT_WEIGHT.bold
                }} onClick={() => navigate('/exam')}>
                  바로가기 →
              </button>
              <img src= '/assets/image/main/exam.svg' style={{
                position: 'absolute',
                right: '80px',       // 우측 간격
                top: '50%',          // 세로 가운데
                transform: 'translateY(-50%)',
                width: '160px',
                height : '160px'
              }}/>
            </div>

            <div style={{
              width: '648px',
              height: '342px',
              backgroundColor : '#ffffff',
              borderRadius : '30px'
              }}>
                <div style={{
              position: 'relative',
              width: '648px',
              height: '342px',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '30px',
              paddingTop: '61px',
              paddingLeft: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap:'13px',
              }}>
              <div style={{
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                backgroundColor :theme.PALETTE.primary.main,
                borderRadius : '12px',
                width: '74px',
                height: '24px',
                }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}>
                  커뮤니티
                </span>
              </div>
              <div style={{
                display : 'flex',
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.bold,
                fontLine : theme.FONT_LINE.h7,
                gap:'9px'
              }}>
                함께 나누는 <br />
                수어 이야기
              </div>
              <div style={{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                color : theme.GRAYSCALE[7]
              }}>
                다양한 사람들과 <br />
                소통하고 공유해보세요
              </div>
                  
              <button style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  paddingTop: '72px',
                  color : theme.PALETTE.black,
                  fontSize : theme.FONT_SIZE.h10,
                  fontWeight : theme.FONT_WEIGHT.bold
                }} onClick={() => navigate('/community')}>
                  바로가기 →
              </button>
              <img src= '/assets/image/main/community.svg' style={{
                position: 'absolute',
                right: '80px',       // 우측 간격
                top: '50%',          // 세로 가운데
                transform: 'translateY(-50%)',
                width: '160px',
                height : '160px'
                }}/>
              </div>
            </div>
          </div>

          {/* 3개 카드 라인 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            gap:'24px',
            }}>

            <div style={{
              position: 'relative',
              width: '424px',
              height: '241px',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '30px',
              paddingTop: '30px',
              paddingLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap:'7px',
              }}>

              <div style={{
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                backgroundColor :theme.PALETTE.fourth.main,
                borderRadius : '11px',
                width: '74px',
                height: '22px',
                }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                  }}>
                  수어학습
                </span>
              </div>
              <div style={{
                display : 'flex',
                fontSize : theme.FONT_SIZE.h8,
                fontWeight : theme.FONT_WEIGHT.bold,
                fontLine : theme.FONT_LINE.h8,
                }}>
                수어 마스터 도전!
              </div>
              <div style={{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                color : theme.GRAYSCALE[7],
                marginTop : '5px'
                }}>
                눈으로 듣는 새로운 대화법, <br />
                함께 배워봐요.
              </div>
                  
              <button style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  paddingTop: '57px',
                  color : theme.PALETTE.black,
                  fontSize : theme.FONT_SIZE.h10,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}
                onClick={() => navigate('/study')}>
                  바로가기 →
              </button>
              <img src= '/assets/image/main/study.svg' style={{
                position: 'absolute',
                right: '50px',       
                top: '50%',          
                transform: 'translateY(-50%)',
                width: '120px',
                height : '120px'
              }} />
            </div>
              
            <div style={{
                position: 'relative',
                width: '424px',
                height: '241px',
                backgroundColor : theme.PALETTE.white,
                borderRadius : '30px',
                paddingTop: '30px',
                paddingLeft: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap:'7px'
              }}>
              <div style={{
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                backgroundColor :theme.PALETTE.red,
                borderRadius : '11px',
                width: '74px',
                height: '22px',
                }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                  }}>
                  응급수신호
                </span>
              </div>
              <div style={{
                display : 'flex',
                fontSize : theme.FONT_SIZE.h8,
                fontWeight : theme.FONT_WEIGHT.bold,
                fontLine : theme.FONT_LINE.h8,
                }}>
                긴급 신호, 지금 익히기!
              </div>
              <div style={{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                color : theme.GRAYSCALE[7],
                marginTop : '5px'
                }}>
                위험한 순간, 당신의 신호가 <br />
                생명을 지킵니다
              </div>
                  
              <button style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  paddingTop: '57px',
                  color : theme.PALETTE.black,
                  fontSize : theme.FONT_SIZE.h10,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}
                onClick={() => navigate('/study/chapter/sos')}>
                  바로가기 →
              </button>
              <img src= '/assets/image/main/emergency.svg' style={{
                position: 'absolute',
                right: '50px',       
                top: '50%',         
                transform: 'translateY(-50%)',
                width: '120px',
                height : '120px'
              }} />
            </div>
            <div style={{
                position: 'relative',
                width: '424px',
                height: '241px',
                backgroundColor : theme.PALETTE.white,
                borderRadius : '30px',
                paddingTop: '30px',
                paddingLeft: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap:'7px',
              }}>
              <div style={{
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                backgroundColor :theme.PALETTE.third.main,
                borderRadius : '11px',
                width: '74px',
                height: '22px',
                }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                  }}>
                  모스부호
                </span>
              </div>
              <div style={{
                display : 'flex',
                fontSize : theme.FONT_SIZE.h8,
                fontWeight : theme.FONT_WEIGHT.bold,
                fontLine : theme.FONT_LINE.h8,
                }}>
                모스부호 해독 도전!
              </div>
              <div style={{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                color : theme.GRAYSCALE[7],
                marginTop : '5px'
                }}>
                빛과 점으로 전하는 신호 <br />
                함께 풀어봐요
              </div>
                  
              <button style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  paddingTop: '55px',
                  color : theme.PALETTE.black,
                  fontSize : theme.FONT_SIZE.h10,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}
                onClick={() => navigate('/study/chapter/mors')}>
                  바로가기 →
              </button>
              <img src= '/assets/image/main/mors.svg' style={{
                position: 'absolute',
                right: '50px',       
                top: '50%',          
                transform: 'translateY(-50%)',
                width: '120px',
                height : '120px'
              }} />
            </div>
          </div>
        </div>

        {/* 커리큘럽 챕터 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          paddingTop: '110px' ,
          gap: '71px',
          }}>
          <span style={{
            fontSize : theme.FONT_SIZE.h5,
            fontWeight : theme.FONT_WEIGHT.bold,
            alignSelf: 'flex-start', 
            paddingLeft: '370px'
            }}>
              💎 커리큘럼
          </span>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '670px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '9px',
              }}>
              <div style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: theme.PALETTE.primary.main,
                width: '61px',
                height: '61px',
                borderRadius: '50%',
                color : theme.PALETTE.white,
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h7
              }}>
                1
              </div>
              <span style={{
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7,
                color: theme.PALETTE.primary.main,
                gap: '2px'
                }}>입문
              </span>

              <span style={{
                fontSize : theme.FONT_SIZE.h9,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h9,
                color: styles.textGray,
                gap: '2px'
                }}>8강
              </span>
            </div>
            
            <div style={styles.curriculumLine} />

            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: styles.curriculumGray,
                width: '61px',
                height: '61px',
                borderRadius: '50%',
                color : styles.textGray,
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7
              }}>
                2
              </div>
              <span style={{
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7,
                color : styles.textGray,
                gap: '2px'
              }}>초급</span>
              <span style={{
                fontSize : theme.FONT_SIZE.h9,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h9,
                color : styles.textGray,
              }}>12강</span>
            </div>


            <div style={styles.curriculumLine} />

            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '8px',
              }}>
              <div style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: styles.curriculumGray,
                width: '61px',
                height: '61px',
                borderRadius: '50%',
                color : styles.textGray,
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h7
              }}>
                3
              </div>
              <span style={{
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7,
                color : styles.textGray,
                gap: '2px'
                }}>
                중급
              </span>
              <span style={{
                fontSize : theme.FONT_SIZE.h9,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h9,
                color : styles.textGray,
                }}>
                12강
              </span>
            </div>

            <div style={styles.curriculumLine} />

            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: styles.curriculumGray,
                width: '61px',
                height: '61px',
                borderRadius: '50%',
                color : styles.textGray,
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h7
              }}>
                4
              </div>
              <span style={{
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7,
                color : styles.textGray,
                gap: '2px'
                }}>
                  고급
              </span>
              <span style={{
                fontSize : theme.FONT_SIZE.h9,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h9,
                color : styles.textGray,
                }}>
                  18강
              </span>
            </div>

            <div style={styles.curriculumLine} />

            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: styles.curriculumGray,
                width: '61px',
                height: '61px',
                borderRadius: '50%',
                color : styles.textGray,
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h7
              }}>
                5
              </div>
              <span style={{
                fontSize : theme.FONT_SIZE.h7,
                fontWeight : theme.FONT_WEIGHT.medium,
                fontLine : theme.FONT_LINE.h7,
                color : styles.textGray,
                gap: '2px'
                }}>
                  자격증
              </span>
              <span style={{
                fontSize : theme.FONT_SIZE.h9,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h9,
                color : styles.textGray,
                }}>
                도전
              </span>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default EumMainContainer;
