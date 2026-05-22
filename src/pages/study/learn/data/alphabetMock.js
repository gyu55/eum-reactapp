// 문자 학습 임시데이터: 백엔드 연결 전 한글 자모 학습 화면 확인용 데이터
export const alphabetHandImageUrl = "https://www.figma.com/api/mcp/asset/9ffc9818-567f-497f-998b-4db4b5cb5998";

export const alphabetMenus = [
  { id: "learn", label: "학습", icon: "◆", to: "/study/learn" },
  { id: "letter", label: "문자", icon: "韓", active: true },
  { id: "signal", label: "수신호", icon: "▲", to: "/study/learn", activeType: "signal" },
  { id: "profile", label: "프로필", icon: "👤", to: "/mypage/learning" },
  { id: "more", label: "더 보기", icon: "⋯" },
];

export const alphabetQuests = [
  { id: 1, icon: "⚡", title: "10 EXP 획득하기", current: 0, total: 10, reward: "🎁" },
  { id: 2, icon: "🤟", title: "자모 카드 5개 확인", current: 2, total: 5, reward: "🎁" },
  { id: 3, icon: "⏱", title: "10분 동안 학습하기", current: 0, total: 10, reward: "🎁" },
];

export const alphabetSections = [
  {
    id: "basic-consonant",
    title: "기본 자음",
    letters: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
  },
  {
    id: "double-consonant",
    title: "쌍자음",
    letters: ["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"],
  },
  {
    id: "basic-vowel",
    title: "기본 모음",
    letters: ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"],
  },
  {
    id: "compound-vowel",
    title: "이중 모음",
    letters: ["ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ"],
  },
];

export const alphabetInfoMap = {
  ㄱ: { name: "기역", sound: "[ g / k ]", desc: ["가장 기본적인 자음이에요.", '"가다"의 첫소리에 쓰여요.'] },
  ㄴ: { name: "니은", sound: "[ n ]", desc: ["혀끝을 윗잇몸에 붙여 내는 소리예요.", '"나무"의 첫소리에 쓰여요.'] },
  ㄷ: { name: "디귿", sound: "[ d / t ]", desc: ["짧고 또렷하게 시작하는 자음이에요.", '"다리"의 첫소리에 쓰여요.'] },
  ㄹ: { name: "리을", sound: "[ r / l ]", desc: ["혀를 가볍게 굴리듯 표현하는 소리예요.", '"라디오"의 첫소리에 쓰여요.'] },
  ㅁ: { name: "미음", sound: "[ m ]", desc: ["입술을 붙여 내는 부드러운 소리예요.", '"마음"의 첫소리에 쓰여요.'] },
  ㅏ: { name: "아", sound: "[ a ]", desc: ["밝고 열린 느낌의 기본 모음이에요.", '"아기"의 첫소리에 쓰여요.'] },
  ㅓ: { name: "어", sound: "[ eo ]", desc: ["입을 자연스럽게 열어 내는 모음이에요.", '"어머니"의 첫소리에 쓰여요.'] },
  ㅗ: { name: "오", sound: "[ o ]", desc: ["입술을 둥글게 모아 내는 모음이에요.", '"오리"의 첫소리에 쓰여요.'] },
  ㅜ: { name: "우", sound: "[ u ]", desc: ["입술을 앞으로 모아 내는 모음이에요.", '"우산"의 첫소리에 쓰여요.'] },
  ㅣ: { name: "이", sound: "[ i ]", desc: ["입을 옆으로 당기며 내는 모음이에요.", '"이름"의 첫소리에 쓰여요.'] },
};

export const getAlphabetInfo = (letter) => ({
  letter,
  name: alphabetInfoMap[letter]?.name || "글자",
  sound: alphabetInfoMap[letter]?.sound || "[ sound ]",
  desc: alphabetInfoMap[letter]?.desc || ["한글 자모를 손 모양과 함께 익혀요.", "카드를 넘기며 반복 학습해보세요."],
  imageUrl: alphabetHandImageUrl,
});
