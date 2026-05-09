import React, { useState } from 'react';
import theme from '../../styles/theme';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import { styles } from './style';
import { useNavigate } from 'react-router-dom';

const EumMainContainer = () => {
  
  const navigate = useNavigate();
  const WordCard = ({ card }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: hovered ? '22.08vw' : '16.25vw',
        height: '21.3vh',
        backgroundColor: hovered ? theme.PALETTE.fourth.main : theme.PALETTE.white,
        borderRadius: '20px',
        border: hovered ? 'none' : `1px solid ${theme.GRAYSCALE[2]}`,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <span style={{
        fontSize: '32px'
        }}>
          {card.emoji}
      </span>
      <span style={{ 
        fontSize: theme.FONT_SIZE.h7, 
        fontWeight: theme.FONT_WEIGHT.bold,
        color: hovered ? theme.PALETTE.white : theme.PALETTE.black
        }}>
          {card.title}
      </span>
      <span style={{
        fontSize: theme.FONT_SIZE.h10, 
        color: hovered ? theme.PALETTE.white : styles.textGray 
        }}>
          {card.sub}
      </span>

      {!hovered && card.tag && (
        <span style={{
          display: 'inline-flex',
          backgroundColor: styles.backGroundGray,
          borderRadius: '20px',
          padding: '2px 10px',
          fontSize: theme.FONT_SIZE.h11,
          fontWeight: theme.FONT_WEIGHT.regular,
          width: 'fit-content',
        }}>{card.tag}</span>
      )}

      {hovered && card.desc && (
        <>
          <span style={{ fontSize: theme.FONT_SIZE.h11, color: theme.PALETTE.white }}>{card.desc}</span>
          <button style={{
            marginTop: 'auto',
            border: `solid 1px ${theme.PALETTE.white}`,
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: theme.FONT_SIZE.h10,
            fontWeight: theme.FONT_WEIGHT.bold,
            fontLine : theme.FONT_LINE.h10,
            color : theme.PALETTE.white ,
            cursor: 'pointer',
            width: 'fit-content',
          }}>▶ 영상으로 보기</button>
        </>
      )}
    </div>
  )
}

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
          }}>
          <span style={{
            fontSize : theme.FONT_SIZE.h5,
            fontWeight : theme.FONT_WEIGHT.bold,
            alignSelf: 'flex-start', 
            paddingLeft: '370px',
            marginBottom:'71px'
            }}>
              💎 커리큘럼
          </span>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '670px',
            marginBottom: '25px'
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

          <div style={{
            width : '1096px',
            height: '355px',
            borderRadius:'50px',
            border:`solid 1px ${theme.PALETTE.primary.main}`,
            marginBottom : '150px',
            paddingTop: '35px',
            paddingLeft: '66px',
            paddingBottom : '40px',
            display :'flex',
            flexDirection :'column',
          }}>
            <span style={{
              fontSize : theme.FONT_SIZE.h7,
              fontWeight : theme.FONT_WEIGHT.medium,
              fontLine : theme.FONT_LINE.h7,
              marginBottom: '14px'
            }}>
              이음 커리큘럼 소개
            </span>
            <span style={{
              marginBottom:'10px',
              fontSize : theme.FONT_SIZE.h4,
              fontWeight: theme.FONT_WEIGHT.bold,
              fontLine : theme.FONT_LINE.h4,
              color : theme.TEXT_COLOR.primary
              }}>
                입문부터 자격증까지
            </span>
            <span style={{
              marginBottom : '5px',
              fontSize : theme.FONT_SIZE.h10,
              fontWeight : theme.FONT_WEIGHT.regular,
              fontLine : theme.FONT_LINE.h10,
              color : theme.PALETTE.black
              }}>
                총 5단계 · 50강 · 평균 수료 기간 6개월
            </span>
            <div style={{
              display: 'flex',
              gap : '9px',
              fontSize : theme.FONT_SIZE.h10,
              fontWeight : theme.FONT_WEIGHT.medium,
              fontLine : theme.FONT_LINE.h10,
              color : theme.GRAYSCALE[7]
              }}>
              <span>#무료시작</span>
              <span>#단계별학습</span>
              <span>#라이브참여</span>
              <span>#자격증</span>
              <span>#커뮤니티</span>
            </div>
            <div style={{
              display : 'flex',
              gap : '20px',
              alignSelf : 'center',
              marginTop : 'auto'
            }}>
              <p style={{
                width : '200px',
                height : '60px',
                borderRadius : '40px',
                backgroundColor: theme.PALETTE.primary.main,
                display : 'flex',
                justifyContent : 'center',
                textAlign : 'center'
              }}>
                <button style={{
                  color : theme.PALETTE.white,
                  fontSize : theme.FONT_SIZE.h8,
                  fontWeight : theme.FONT_WEIGHT.bold,
                  fontLine : theme.FONT_LINE.h8
                  }}
                  onClick={() => navigate('/study/experience')}>
                  무료로 시작하기 →
                </button>
              </p>
              <p style={{
                width : '200px',
                height : '60px',
                borderRadius : '40px',
                border : `solid 1px ${theme.PALETTE.primary.main}`,
                display : 'flex',
                justifyContent : 'center',
                textAlign : 'center'
                }}>
                <button style={{
                  color : theme.PALETTE.primary.main,
                  fontSize : theme.FONT_SIZE.h8,
                  fontWeight : theme.FONT_WEIGHT.medium,
                  fontLine : theme.FONT_LINE.h8
                  }}>
                  커리큘럼 보기
                </button>  
              </p>              
            </div>
          </div>
        </div>

        {/* 이음에서 달라진 이야기들 챕터 */}
        <div style={{
          width : '100%',
          height : '61.85vh',
          backgroundColor: styles.backGroundGray,
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center',
          textAlign : 'center',
          paddingTop : '12.04vh',
          }}>
          <p style={{
            display :'flex',
            flexDirection : 'column',
            marginBottom : '2.04vh'
            }}>
            <span style={{
              fontSize : theme.FONT_SIZE.h3,
              fontWeight : theme.FONT_WEIGHT.bold,
              fontLine : theme.FONT_LINE.h3
              }}>
              이음에서 달라진 이야기들
            </span>
            <span style={{
              fontSize : theme.FONT_SIZE.h9,
              fontWeight : theme.FONT_WEIGHT.light,
              fontLine : theme.FONT_LINE.h9,
              color : styles.textGray,
              marginTop : '2.04vh'
            }}>
              42,000명이 이음과 함께 수어를 배웠습니다.
            </span>
          </p>
          <div style = {{
            display : 'flex',
            justifyContent : 'center',
            gap : '1.25vw',
            marginTop: '4.91vh'
            }}>
            {/* 첫번째 카드 */}
            <p style={{
              width : '22.08vw',
              height : '24.07vh',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '20px',
              }}>
              <div style={{
                textAlign : 'left',
                marginTop : '3.7vh',
                marginLeft : '2.08vw'
              }}>
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
              </div>
              <span style = {{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h10,
                textAlign : 'left',
                marginTop: '1.39vh',
                marginLeft : '2.08vw'
                }}>
                "농인 친구가 생겼을 때 <br />
                정말 소통하고 싶었는데, <br />
                이음 덕분에 이제 제법 대화할 수 있게 됐어요."
              </span>
              <p style={{
                display : 'flex',
                marginTop: '4vh',
                marginLeft : '2.08vw',
                gap : '15px'
                }}>
                <img style={{
                display:'flex',
                width: '2.19vw',
                height: 'auto',
                
                }} src="/assets/image/main/dummyUserProfileImg1.svg"/>
                <p style={{
                  display:'flex',
                  flexDirection:'column', 
                  textAlign : 'left',
                  marginTop : '3px'
                  }}>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.bold,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    김지연
                  </span>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.regular,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    초급 수료 · 직장인
                  </span>
                </p>
              </p>
            </p>

            {/* 두번째 카드 */}
            <p style={{
              width : '22.08vw',
              height : '24.07vh',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '20px',
              }}>
              <div style={{
                textAlign : 'left',
                marginTop : '3.7vh',
                marginLeft : '2.08vw'
              }}>
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
              </div>
              <span style = {{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h10,
                textAlign : 'left',
                marginTop: '1.39vh',
                marginLeft : '2.08vw'
                }}>
                "수어 통역사 자격증을 준비하면서 <br />
                이음을 알게 됐어요. <br />
                한 번에 합격했습니다!"
              </span>
              <p style={{
                display : 'flex',
                marginTop: '4vh',
                marginLeft : '2.08vw',
                gap : '15px'
                }}>
                <img style={{
                display:'flex',
                width: '2.19vw',
                height: 'auto',
                
                }} src="/assets/image/main/dummyUserProfileImg2.svg"/>
                <p style={{
                  display:'flex',
                  flexDirection:'column', 
                  textAlign : 'left',
                  marginTop : '3px'
                  }}>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.bold,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    박정우
                  </span>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.regular,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    자격증 취득 · 대학생
                  </span>
                </p>
              </p>
            </p>

            {/* 세번째 카드 */}
            <p style={{
              width : '22.08vw',
              height : '24.07vh',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '20px',
              }}>
              <div style={{
                textAlign : 'left',
                marginTop : '3.7vh',
                marginLeft : '2.08vw'
              }}>
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
                <img src="/assets/image/main/starIcon.svg" alt="star" />
              </div>
              <span style = {{
                display: 'flex',
                fontSize : theme.FONT_SIZE.h10,
                fontWeight : theme.FONT_WEIGHT.regular,
                fontLine : theme.FONT_LINE.h10,
                textAlign : 'left',
                marginTop: '1.39vh',
                marginLeft : '2.08vw'
                }}>
                "매일 퀴즈로 습관을 만들 수 있어서 좋아요. <br />
                수어가 즐거운 일상이 됐습니다."
              </span>
              <p style={{
                display : 'flex',
                marginTop: '6vh',
                marginLeft : '2.08vw',
                gap : '15px'
                }}>
                <img style={{
                display:'flex',
                width: '2.19vw',
                height: 'auto',
                
                }} src="/assets/image/main/dummyUserProfileImg3.svg"/>
                <p style={{
                  display:'flex',
                  flexDirection:'column', 
                  textAlign : 'left',
                  marginTop : '3px'
                  }}>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.bold,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    이수아
                  </span>
                  <span style={{
                    fontSize : theme.FONT_SIZE.h11,
                    fontWeight : theme.FONT_WEIGHT.regular,
                    fontLine : theme.FONT_LINE.h11
                    }}>
                    입문 수료· 주부
                  </span>
                </p>
              </p>
            </p>
          </div>

        </div>

        {/* 매일 새로운 수어 단어 하나씩 챕터 */}
        <div >
          <p style={{ 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '110px' ,
          gap:'3px'
          }}>
            <span style={{
              fontSize : theme.FONT_SIZE.h5,
              fontWeight : theme.FONT_WEIGHT.bold,
              alignSelf: 'flex-start', 
              paddingLeft: '370px',
              }}>
              매일 새로운
            </span>

            <span style = {{
              display : 'flex',
              fontSize : theme.FONT_SIZE.h5,
              fontWeight : theme.FONT_WEIGHT.bold,
              color : theme.PALETTE.primary.main
              }}>
              수어 단어
            </span>

            <span style = {{
              fontSize : theme.FONT_SIZE.h5,
              fontWeight : theme.FONT_WEIGHT.bold,
              }}>
              하나씩
            </span>
          </p>
          {/* 오늘의 수어 카드 섹션 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent : 'center',
            gap: '1.25vw',
            marginTop: '5vh',
            
            }}>
            {[
              { emoji: '🙏', title: '감사합니다', sub: 'Thank you', desc: '두 손을 모아 공손하게 감사의 뜻을 전합니다', tag: '예의표현' },
              { emoji: '👋', title: '안녕하세요', sub: 'Hello / Good morning', desc: '한 손을 들어 가볍게 흔들며 인사합니다', tag: '인사' },
              { emoji: '👍', title: '사랑해', sub: 'I love you', desc: '엄지, 검지, 소지를 펴고 흔드는 동작으로 표현합니다', tag: '애정표현' },
            ].map((card, index) => (
              <WordCard key={index} card={card} />
            ))}
          </div>
        </div>
        <div>

        </div>




      </div>
    </>
  );
};
export default EumMainContainer;
