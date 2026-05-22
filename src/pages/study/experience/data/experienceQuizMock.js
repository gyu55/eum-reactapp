// 체험 퀴즈 임시데이터: 백엔드 연결 전 화면 확인용 문제 목록
export const experienceQuizMock = {
  sign: {
    title: "기본 인사 수어",
    desc: "처음 만나는 사람에게 전하는 기본 인사 표현을 맞혀보세요.",
    questions: [
      {
        id: "sign-1",
        category: "기본 인사 표현",
        gesture: "👋",
        question: "손을 흔드는 수어의 뜻은?",
        options: [
          { id: "a", label: "A", text: "미안해요", correct: false },
          { id: "b", label: "B", text: "잘가요", correct: false },
          { id: "c", label: "C", text: "안녕하세요", correct: true },
          { id: "d", label: "D", text: "감사합니다.", correct: false },
        ],
        explanation: "손을 흔드는 수어는 인사를 표현할 때 자주 사용해요.",
      },
      {
        id: "sign-2",
        question: "상대에게 감사한 마음을 전할 때 쓰는 표현은?",
        options: [
          { id: "a", label: "A", text: "괜찮아요", correct: false },
          { id: "b", label: "B", text: "고맙습니다", correct: true },
          { id: "c", label: "C", text: "안녕히 가세요", correct: false },
          { id: "d", label: "D", text: "도와주세요", correct: false },
        ],
        explanation: "감사의 마음은 '고맙습니다' 표현으로 전할 수 있어요.",
      },
      {
        id: "sign-3",
        question: "실수했을 때 상대에게 전하는 말로 가장 알맞은 것은?",
        options: [
          { id: "a", label: "A", text: "축하합니다", correct: false },
          { id: "b", label: "B", text: "반갑습니다", correct: false },
          { id: "c", label: "C", text: "미안합니다", correct: true },
          { id: "d", label: "D", text: "잘 먹겠습니다", correct: false },
        ],
        explanation: "실수나 사과가 필요한 상황에서는 '미안합니다'를 사용해요.",
      },
    ],
  },
  sos: {
    title: "응급 수신호",
    desc: "도움이 필요한 상황에서 쓸 수 있는 기본 신호를 확인해요.",
    questions: [
      {
        id: "sos-1",
        question: "위급한 상황에서 주변 사람에게 가장 먼저 알려야 하는 말은?",
        options: [
          { id: "a", label: "A", text: "잠시만요", correct: false },
          { id: "b", label: "B", text: "도와주세요", correct: true },
          { id: "c", label: "C", text: "괜찮습니다", correct: false },
          { id: "d", label: "D", text: "다음에 봐요", correct: false },
        ],
        explanation: "위급한 순간에는 주변에 도움 요청 의사를 빠르게 전달해야 해요.",
      },
      {
        id: "sos-2",
        question: "응급 상황을 설명할 때 가장 중요한 정보는?",
        options: [
          { id: "a", label: "A", text: "현재 위치", correct: true },
          { id: "b", label: "B", text: "좋아하는 음식", correct: false },
          { id: "c", label: "C", text: "어제 날씨", correct: false },
          { id: "d", label: "D", text: "취미 활동", correct: false },
        ],
        explanation: "구조 요청에는 현재 위치를 정확히 알리는 것이 매우 중요해요.",
      },
      {
        id: "sos-3",
        question: "아픈 부위를 알릴 때 필요한 표현은?",
        options: [
          { id: "a", label: "A", text: "기뻐요", correct: false },
          { id: "b", label: "B", text: "배고파요", correct: false },
          { id: "c", label: "C", text: "여기가 아파요", correct: true },
          { id: "d", label: "D", text: "재미있어요", correct: false },
        ],
        explanation: "아픈 부위를 직접 가리키며 상태를 알리는 표현이 필요해요.",
      },
    ],
  },
  morse: {
    title: "모스부호 입문",
    desc: "점과 선으로 만들어지는 간단한 신호를 읽어보세요.",
    questions: [
      {
        id: "morse-1",
        question: "모스부호에서 짧은 신호를 보통 무엇이라고 부를까요?",
        options: [
          { id: "a", label: "A", text: "점", correct: true },
          { id: "b", label: "B", text: "원", correct: false },
          { id: "c", label: "C", text: "면", correct: false },
          { id: "d", label: "D", text: "칸", correct: false },
        ],
        explanation: "모스부호는 짧은 신호인 점과 긴 신호인 선을 조합해요.",
      },
      {
        id: "morse-2",
        question: "모스부호에서 긴 신호를 보통 무엇이라고 부를까요?",
        options: [
          { id: "a", label: "A", text: "점", correct: false },
          { id: "b", label: "B", text: "선", correct: true },
          { id: "c", label: "C", text: "말", correct: false },
          { id: "d", label: "D", text: "글", correct: false },
        ],
        explanation: "긴 신호는 선으로 표현하며, 점과 함께 문자를 만들어요.",
      },
      {
        id: "morse-3",
        question: "긴급 구조 신호로 널리 알려진 모스부호는?",
        options: [
          { id: "a", label: "A", text: "ABC", correct: false },
          { id: "b", label: "B", text: "SOS", correct: true },
          { id: "c", label: "C", text: "LOL", correct: false },
          { id: "d", label: "D", text: "YES", correct: false },
        ],
        explanation: "SOS는 긴급 상황을 알리는 대표적인 모스부호 신호예요.",
      },
    ],
  },
};
