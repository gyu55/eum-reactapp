import styled from "styled-components";
import theme from "../../styles/theme";
import createGlobalStyle from "styled-components";

// 학습 메인화면_style

// 크기
const fontSize = (key) => ({theme}) => theme.FONT_SIZE[key];
// 굵기
const fontWeight = (key) => ({theme}) => theme.FONT_WEIGHT[key];
// 행간
const lineHeight = (key) => ({theme}) => theme.FONT_LINE[key];
// 색
const textColor = (key) => ({theme}) => theme.PALETTE[key];



// 전체
export const StudyWrap = styled.section`
  --inner: 1320px;

  width: 100%;
  overflow: hidden;
  position: relative;
`;

// Banner
export const Banner = styled.div`
  padding-bottom: 50px;
`;
// 배너 아이콘
export const BannerIcon = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;

  span{
    position: absolute;
    display: block;
    line-height: 1;
  }
  
    // 왼쪽
    .icon1{
      top: 80px;
      left: 19%;
      font-size: 45px;
    }

    .icon2{
      top: 180px;
      left: 25%;
      font-size: 36px;
    }

    .icon3{
      top: 320px;
      left: 34%;
      font-size: 30px;
    }

    .icon4{
      top: 350px;
      left: 25%;
      font-size: 20px;
    }
    
    .icon5{
      top: 450px;
      left: 18%;
      font-size: 38px;
    }

    // 오른쪽
    .icon6{
      top: 80px;
      right: 19%;
      font-size: 48px;
    }

    .icon7{
      top: 190px;
      right: 26%;
      font-size: 32px;
    }

    .icon8{
      top: 310px;
      right: 33%;
      font-size: 19px;
    }

    .icon9{
      top: 390px;
      right: 24%;
      font-size: 23px;
    }

    .icon10{
      top: 460px;
      right: 15%;
      font-size: 38px;
    }


`;

// 배너 Content
export const BannerContent = styled.div`
  position: relative;
  min-height: 530px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  .top-icon{
    font-size: ${fontSize("h4")};
    margin-bottom: 14px;
  }
  
  .title{
    margin: 0 0 30px;
    font-size: ${fontSize("h2")};
    font-weight: ${fontWeight("bold")};
    color: #1a1a1a;
  }
  
  .desc,
  .desc1{
    margin: 0;
    width: 320px;
    font-size: ${fontSize("h8")};
    font-weight: ${fontWeight("medium")};
    line-height: ${lineHeight("h8")};
    color: #1a1a1a;
  }
  
  .desc1{
    margin-bottom: 70px;
  }

  .link{
    color: #1a1a1a;
    text-decoration: none;
    font-size: ${fontSize("h8")};
    font-weight: ${fontWeight("medium")};
  }
`;

// 카테고리
export const Category = styled.div`
  padding: 120px 0 120px;
  background-color: #f7f7fb;

  // 1번줄
  .one-row{
    width: min(var(--inner), calc(100% - 48px));
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 24px;
    
    .attendCheck{
      position: relative;
      background: #ffffff;
      border-radius: 30px;
      box-sizing: border-box;
      overflow: hidden;

      height: 342px;
      padding: 79px 0 0 81px;

      .attendCheck1{
        width: fit-content;
        margin: 0 0 28px;
        padding: 7px 19px;
        border-radius: 999px;
        background: #129d1b;
        color: ${textColor("white")};
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("bold")};
        line-height: 1;
      }

      .attendCheckLink{
        display: block;
        margin-bottom: 28px;
        color: ${textColor("black")};
        text-decoration: none;
        font-size: ${fontSize("h5")};
        font-weight: ${fontWeight("bold")};
        line-height: 1.15;
      }

      .attendCheckImg{
        position: absolute;
        top: 73px;
        right: 82px;

        width: 200px;
        height: 209px;
        border-radius: 50%;
        background: #f7f7fb;
        object-fit: contain;
        padding: 10px;
        box-sizing: border-box;
      }

      .attendCheck2{
        margin: 0 0 78px;
        color: #666;
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("regular")};
      };

      .oneButton {
        border: none;
        background: transparent;
        padding: 0;
        color: ${textColor("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
        cursor: pointer;
      }
    }
    
    .ohQuiz{
      position: relative;
      background: #ffffff;
      border-radius: 30px;
      box-sizing: border-box;
      overflow: hidden;

      height: 342px;
      padding: 79px 0 0 81px;

      .ohQuiz1{
        width: fit-content;
        margin: 0 0 28px;
        padding: 7px 19px;
        border-radius: 999px;
        background: #4359fc;
        color: ${textColor("white")};
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("bold")};
        line-height: 1;
      }

      .ohQuizLink{
        display: block;
        margin-bottom: 28px;
        color: ${textColor("black")};
        text-decoration: none;
        font-size: ${fontSize("h5")};
        font-weight: ${fontWeight("bold")};
        line-height: 1.15;
      }

      .ohQuizImg{
        position: absolute;
        top: 73px;
        right: 82px;

        width: 200px;
        height: 209px;
        border-radius: 50%;
        background: #f7f7fb;
        object-fit: contain;
        padding: 10px;
        box-sizing: border-box;
      }

      .ohQuiz2{
        margin: 0 0 78px;
        color: #666;
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("regular")};
      }

      .oneButton{
        border: none;
        background: transparent;
        padding: 0;
        color: ${textColor("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
        cursor: pointer;
      }
    }
  }
  
  // 2번줄
  .two-row{
    width: min(var(--inner), calc(100% - 48px));
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 24px;
    
    grid-template-columns: repeat(3, 1fr);

    .signLearn{
      position: relative;
      background: #ffffff;
      border-radius: 30px;
      box-sizing: border-box;
      overflow: hidden;

      height: 241px;
      padding: 52px 0 0 50px;

      .signLearn1{
        width: fit-content;
        margin: 0 0 20px;
        padding: 6px 16px;
        border-radius: 999px;
        color: ${textColor("white")};
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("bold")};
        line-height: 1;
        background: #ffc22d;
      }

      .signLearnLink{
        display: block;
        margin-bottom: 16px;
        text-decoration: none;
        color: ${textColor("black")};
        font-size: ${fontSize("h8")};
        font-weight: ${fontWeight("bold")};
        line-height: 1.2;
      }

      .signLearnImg{
        position: absolute;
        top: 51px;
        right: 52px;

        width: 105px;
        height: 110px;
        border-radius: 45px;
        background: #f7f7fb;
        object-fit: contain;
        padding: 13px;
        box-sizing: border-box;
      }

      .signLearn2{
        margin: 0 0 32px;
        color: #666;
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("regular")};
      }

      .twoButton{
        border: none;
        background: transparent;
        padding: 0;
        color: ${fontSize("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
        cursor: pointer;
      }
    }

    .emergency{
      position: relative;
      background: #ffffff;
      border-radius: 30px;
      box-sizing: border-box;
      overflow: hidden;

      height: 241px;
      padding: 52px 0 0 50px;

      .emergency1{
        width: fit-content;
        margin: 0 0 20px;
        padding: 6px 16px;
        border-radius: 999px;
        color: ${textColor("white")};
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("bold")};
        line-height: 1;
        background: #ff4b4b;
      }

      .emergencyLink{
        display: block;
        margin-bottom: 16px;
        text-decoration: none;
        color: ${textColor("black")};
        font-size: ${fontSize("h8")};
        font-weight: ${fontWeight("bold")};
        line-height: 1.2;
      }

      .emergencyImg{
        position: absolute;
        top: 51px;
        right: 52px;

        width: 105px;
        height: 110px;
        border-radius: 45px;
        background: #f7f7fb;
        object-fit: contain;
        padding: 13px;
        box-sizing: border-box;
      }

      .emergency2{
        margin: 0 0 32px;
        color: #666;
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("regular")};
      }

      .twoButton{
        border: none;
        background: transparent;
        padding: 0;
        color: ${fontSize("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
        cursor: pointer;
      }
    }

    .mors{
      position: relative;
      background: #ffffff;
      border-radius: 30px;
      box-sizing: border-box;
      overflow: hidden;

      height: 241px;
      padding: 52px 0 0 50px;

      .mors1{
        width: fit-content;
        margin: 0 0 20px;
        padding: 6px 16px;
        border-radius: 999px;
        color: ${textColor("white")};
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("bold")};
        line-height: 1;
        background: #b84cff;
      }

      .morsLink{
        display: block;
        margin-bottom: 16px;
        text-decoration: none;
        color: ${textColor("black")};
        font-size: ${fontSize("h8")};
        font-weight: ${fontWeight("bold")};
        line-height: 1.2;
      }

      .morsImg{
        position: absolute;
        top: 51px;
        right: 52px;

        width: 105px;
        height: 110px;
        border-radius: 45px;
        background: #f7f7fb;
        object-fit: contain;
        padding: 13px;
        box-sizing: border-box;
      }

      .mors2{
        margin: 0 0 32px;
        color: #666;
        font-size: ${fontSize("h11")};
        font-weight: ${fontWeight("regular")};
      }

      .twoButton{
        border: none;
        background: transparent;
        padding: 0;
        color: ${fontSize("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
        cursor: pointer;
      }
    }
  }
`;

// 검색
export const Search = styled.div`
  width: min(var(--inner), calc(100% - 48px));
  margin: 0 auto;
  padding: 250px 0 250px;
  text-align: center;
  
  .title{
    padding: 0 0 50px;
    color: ${textColor("black")};
    font-size: ${fontSize("h4")};
    font-weight: ${fontWeight("bold")};
  }
  
  .input{
    width: 939px;
    height: 66px;
    border: 1.5px solid #D9D9D9;
    border-radius: 32px;
    padding: 0 28px;
    box-sizing: border-box;
    outline: none;
    color: ${textColor("black")};
    font-size: ${fontSize("h10")};
  }

  .searchLink{
    display: inline-flex;
    width: 63px;
    height: 47px;
    margin-left: -93px;
    border-radius: 32px;
    background: #4359fc;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    color: ${textColor("white")};
    font-size: ${fontSize("h10")};
    font-weight: ${fontWeight("bold")};
    vertical-align: middle;
  }

  .searchText{
    margin: 44px 0 64px;
    color: #555;
    font-size: ${fontSize("h11")};
    font-weight: ${fontWeight("regular")};
    word-spacing: 34px;
  }

  .wordGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 74px;
    margin-bottom: 86px;

    .wordItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
  
      .wordIcon{
        height: 44px;
        font-size: 40px;
        line-height: 1;
      }
      .wordText{
        margin: 0;
        color: #1a1a1a;
        font-size: ${fontSize("h9")};
        font-weight: ${fontWeight("bold")};
      }
    }
  }

  .searchButton{
    border: none;
    background: transparent;
    color: #666;
    font-size: ${fontSize("h8")};
    font-weight: ${fontWeight("bold")};
    cursor: pointer;
  }
`;

// 영상
export const Video = styled.div`
  width: min(var(--inner), calc(100% - 48px));
  margin: 0 auto;
  padding-bottom: 250px;
  text-align: center;

  .title{
    margin: 0 0 22px;
    color: ${textColor("black")};
    font-size: ${fontSize("h4")};
    font-weight: ${fontWeight("bold")};
  }

  .blueText{
    color: #4359FC;
  }

  .desc{
    margin: 0 0 70px;
    color: ${textColor("black")};
    font-size: ${fontSize("h10")};
    font-weight: ${fontWeight("medium")};
  }

  .videoTaps{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 50px;

    .tapsButton{
      height: 36px;
      padding: 0 18px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      cursor: pointer;

      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;

      .videoImg{
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
      
      .tapText{
        color: ${textColor("black")};
        font-size: ${fontSize("h10")};
        font-weight: ${fontWeight("bold")};
      }
    }
  }

  .videoCards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 59px;
    margin-bottom: 70px;

    .image{
      width: 400px;
      height: 337px;
      border-radius: 20px;
      background: #f2f2f2;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #777;
    }
  }

  .videoButton{
    height: 35px;
    padding: 0 20px;
    cursor: pointer;
    color: #666;
    font-size: ${fontSize("h8")};
    font-weight: ${fontWeight("bold")};
  }
`;

