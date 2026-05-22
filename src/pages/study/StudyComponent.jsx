// 학습 홈 화면 컴포넌트: 메인 카드, 검색 진입, 로그인 필요 기능 분기담당
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudyAttendancePopup from "./attendance/StudyAttendancePopup";
import { useStudyUser } from "./hooks/useStudyUser";
import * as S from "./style";

// 배너 주변 장식 아이콘 목록
const floatingIcons = [
  { className: "icon1", label: "🤝" },
  { className: "icon2", label: "💬" },
  { className: "icon3", label: "🤙" },
  { className: "icon4", label: "✨" },
  { className: "icon5", label: "🫶" },
  { className: "icon6", label: "🤟" },
  { className: "icon7", label: "💙" },
  { className: "icon8", label: "✨" },
  { className: "icon9", label: "🌸" },
  { className: "icon10", label: "👐" },
];

// 홈 주요 기능 카드 목록
const featureCards = [
  {
    type: "large",
    label: "출석체크",
    title: "출석체크",
    desc: "매일매일 출석해요!",
    image: "/assets/image/attendCheck.png",
    tone: "green",
    action: "popup",
    requiresLogin: true,
  },
  {
    type: "large",
    label: "오! 퀴즈",
    title: "오! 퀴즈",
    desc: "알아두면 좋을 퀴즈",
    image: "/assets/image/quiz.png",
    tone: "blue",
    to: "/study/chapter",
    requiresLogin: true,
  },
  {
    label: "수어학습",
    title: "수어 학습",
    desc: "눈으로 듣는 새로운 대화법",
    image: "/assets/image/signLearn.png",
    tone: "yellow",
    to: "/study/learn",
    requiresLogin: true,
  },
  {
    label: "응급수신호",
    title: "응급수신호",
    desc: "위험을 알리는 방법",
    image: "/assets/image/emergency.png",
    tone: "red",
    to: "/study/learn/quiz/sos/questions/1",
    requiresLogin: true,
  },
  {
    label: "모스부호",
    title: "모스부호",
    desc: "빛과 점으로 전하는 신호",
    image: "/assets/image/mors.png",
    tone: "purple",
    to: "/study/chapter/morse",
    requiresLogin: true,
  },
];

// 검색 섹션에 보여줄 추천 단어 목록
const wordItems = [
  { icon: "😊", text: "기쁨" },
  { icon: "🎪", text: "놀이" },
  { icon: "❤️", text: "사랑" },
  { icon: "🤔", text: "질문" },
  { icon: "🧑‍🤝‍🧑", text: "친구" },
  { icon: "🍚", text: "밥" },
  { icon: "💧", text: "물" },
  { icon: "☀️", text: "날씨" },
  { icon: "👨‍👩‍👧", text: "가족" },
  { icon: "🏫", text: "학교" },
  { icon: "💼", text: "일" },
  { icon: "🚌", text: "버스" },
];

// 영상 카테고리 탭 목록
const videoTabs = [
  { label: "수어", image: "/assets/image/signLearn.png" },
  { label: "수신호", image: "/assets/image/emergency.png" },
  { label: "모스부호", image: "/assets/image/mors.png" },
];

// 유튜브썸네일생성: 유튜브 영상 ID로 카드 썸네일 주소 만드는
const getYoutubeThumbnail = (videoId) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

// 오늘의 단어 영상 카드 목록
const videoCards = [
  {
    category: "숫자",
    title: "1부터 1000까지 세어보기 수화 지숫자",
    views: "유튜브",
    youtubeUrl: "https://youtu.be/1JyJwc_Hd8U?si=BqFaG4FwoDnjfE8b",
    thumbnail: getYoutubeThumbnail("1JyJwc_Hd8U"),
  },
  {
    category: "수어",
    title: '지문자로 한글이름 써보기 "내 이름을 수화로?"',
    views: "유튜브",
    youtubeUrl: "https://youtu.be/1IDTB4KQ-Fk?si=vmVMI9osUms7xrvO",
    thumbnail: getYoutubeThumbnail("1IDTB4KQ-Fk"),
  },
  {
    category: "알파벳",
    title: "미국 수어 알파벳(ABC) 핑거스펠링 배우기",
    views: "유튜브",
    youtubeUrl: "https://youtu.be/hRzXnPTW8jY?si=uC7DBkjdD4MHMOTN",
    thumbnail: getYoutubeThumbnail("hRzXnPTW8jY"),
  },
];

const StudyComponent = () => {
  const navigate = useNavigate();
  const { isGuest } = useStudyUser();
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  // 로그인 해야하는 서비스들 alert
  const requireLogin = (callback) => {
    if (isGuest) {
      alert("로그인이 필요한 서비스입니다.");

      return;
    }

    callback();
  };

  // 검색어 -> 검색 페이지
  const handleSearch = (event) => {
    event.preventDefault();

    navigate("/study/search", { state: { keyword } });
  };

  // 로그인 필요한 링크 이동
  const handleProtectedLink = (event, path) => {
    event.preventDefault();

    requireLogin(() => navigate(path));
  };

  // 기능 카드를 눌렀을 때 실행
  const handleCardClick = (card) => {
    const openCard = () => {
      if (card.action === "popup") {
        setIsAttendanceOpen(true);

        return;
      }

      navigate(card.to);
    };

    if (card.requiresLogin) {
      requireLogin(openCard);

      return;
    }

    openCard();
  };

  // 출석 상세 화면이동
  const handleAttendanceDetail = () => {
    requireLogin(() => {
      setIsAttendanceOpen(false);

      navigate("/study/attendance");
    });
  };

  return (
    <S.HomeWrap>
      <S.Banner>
        <S.BannerIcon aria-hidden="true">
          {floatingIcons.map((icon) => (
            <span key={icon.className} className={icon.className}>
              {icon.label}
            </span>
          ))}
        </S.BannerIcon>

        <S.BannerContent>
          <p className="heroIcons">👋 ✌️</p>
          <h1>지금 바로 배워보세요!</h1>
          <p>회원가입 없이 다양한 언어표현을 재미있게 체험할 수 있어요</p>
          <Link to="/study/experience">지금 체험하기 😶‍🌫️🤖👻 →</Link>
        </S.BannerContent>
      </S.Banner>

      <S.CategoryBand>
        <S.CategoryGrid>
          {featureCards.map((card) => (
            <S.CategoryCard
              key={card.title}
              type="button"
              $large={card.type === "large"}
              $tone={card.tone}
              onClick={() => handleCardClick(card)}
            >
              <span className="badge">{card.label}</span>
              <strong>{card.title}</strong>
              <p>{card.desc}</p>
              <span className="go">바로가기 →</span>
              <img src={card.image} alt={`${card.title} 아이콘`} />
            </S.CategoryCard>
          ))}
        </S.CategoryGrid>
      </S.CategoryBand>

      <S.SearchArea>
        <h2>찾고 싶은 단어를 검색하세요</h2>
        <S.SearchForm onSubmit={handleSearch}>
          <input
            type="text"
            value={keyword}
            placeholder="단어를 입력하세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button type="submit">검색</button>
        </S.SearchForm>

        <div className="categories">
          {["전체", "일상", "가족", "음식", "날씨", "감정", "숫자", "색깔", "동물"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <S.WordGrid>
          {wordItems.map((word) => (
            <S.WordItem key={word.text}>
              <span>{word.icon}</span>
              <strong>{word.text}</strong>
            </S.WordItem>
          ))}
        </S.WordGrid>

        <S.ActionLink to="/study/search">더 많은 단어 보기 →</S.ActionLink>
      </S.SearchArea>

      <S.VideoArea>
        <h2>
          바로 배우는 <span>오늘의 단어</span> 영상
        </h2>
        <p className="desc">매일 업데이트되는 짧은 학습 영상을 만나보세요.</p>

        <S.VideoTabs>
          {videoTabs.map((tab) => (
            <button type="button" key={tab.label} onClick={() => requireLogin(() => navigate("/study/learn"))}>
              <img src={tab.image} alt="" />
              {tab.label}
            </button>
          ))}
        </S.VideoTabs>

        <S.VideoGrid>
          {videoCards.map((video) => (
            <S.VideoCard key={video.title} href={video.youtubeUrl} target="_blank" rel="noreferrer">
              <div>
                <span>{video.category}</span>
                <strong>{video.title}</strong>
                <p>{video.views}에서 보기</p>
              </div>
              <figure>
                <img src={video.thumbnail} alt={`${video.title} 썸네일`} />
                <span className="play">▶</span>
              </figure>
            </S.VideoCard>
          ))}
        </S.VideoGrid>

        <S.ActionLink to="/study/learn" onClick={(event) => handleProtectedLink(event, "/study/learn")}>
          더 많은 영상 보기 →
        </S.ActionLink>
      </S.VideoArea>

      {isAttendanceOpen && (
        <StudyAttendancePopup
          onClose={() => setIsAttendanceOpen(false)}
          onDetail={handleAttendanceDetail}
        />
      )}
    </S.HomeWrap>
  );
};

export default StudyComponent;
