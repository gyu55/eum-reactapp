// 학습 퀴즈 임시데이터: 백엔드 연결 전 문제 풀이 화면 확인용 데이터
export const learnQuizMockMap = {
  greeting: {
    id: "greeting",
    title: "인사말 배우기",
    totalCount: 3,
    questions: [
      {
        id: 1,
        title: "다음 수어 표현의 의미로 알맞은 것을 고르세요.",
        targetWord: "미안합니다",
        hint: "사과와 양해를 구할 때 사용하는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "안녕하세요", desc: "처음 만났을 때 쓰는 인사", icon: "👋" },
          { id: "b", label: "미안합니다", desc: "사과할 때 쓰는 표현", icon: "🙏", correct: true },
          { id: "c", label: "감사합니다", desc: "고마움을 전하는 표현", icon: "🤟" },
        ],
        feedback: {
          correct: "좋아요. 사과와 양해를 구하는 표현을 잘 골랐어요.",
          incorrect: "아쉬워요. 이 표현은 미안한 마음을 전할 때 사용해요.",
          reviewTitle: "미안합니다",
          reviewDesc: "상대에게 사과하거나 양해를 구할 때 쓰는 기본 수어 표현입니다.",
        },
      },
      {
        id: 2,
        title: "고마움을 전할 때 사용하는 표현은 무엇일까요?",
        targetWord: "감사합니다",
        hint: "도움을 받았을 때 자주 사용하는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "감사합니다", desc: "고마운 마음을 전해요", icon: "🙌", correct: true },
          { id: "b", label: "괜찮아요", desc: "상대방을 안심시켜요", icon: "🙂" },
          { id: "c", label: "도와주세요", desc: "도움을 요청해요", icon: "🆘" },
        ],
        feedback: {
          correct: "정답이에요. 감사 표현은 일상 대화에서 정말 자주 쓰여요.",
          incorrect: "다시 확인해볼까요? 고마움을 전하는 표현을 찾아야 해요.",
          reviewTitle: "감사합니다",
          reviewDesc: "도움을 받았거나 고마운 마음을 표현할 때 사용하는 수어입니다.",
        },
      },
      {
        id: 3,
        title: '다음 중 어느 수어가 "안녕하세요"인가요?',
        targetWord: "안녕하세요",
        hint: "카드의 손 모양을 보고 알맞은 수어를 골라보세요.",
        exp: 10,
        options: [
          { id: "a", label: "감사합니다", desc: "고마움을 전하는 수어", icon: "🤲" },
          { id: "b", label: "미안해요", desc: "사과할 때 쓰는 수어", icon: "🙏" },
          { id: "c", label: "안녕하세요", desc: "인사를 전하는 수어", icon: "👋", correct: true },
        ],
        feedback: {
          correct: '한 손을 들어 좌우로 흔드는 동작이 "안녕하세요"예요.',
          incorrect: '정답은 "안녕하세요" — 한 손을 들어 좌우로 흔드는 동작이에요.',
          reviewTitle: "안녕하세요",
          reviewDesc: "카드를 보고 동작을 따라해보세요. 이후 퀴즈가 나와요!",
          action: "한 손을 들어\n좌우로 흔들어요",
          situation: "처음 만났을 때,\n헤어질 때도 사용",
        },
      },
    ],
  },
  signal: {
    id: "signal",
    title: "수신호 배우기",
    totalCount: 2,
    questions: [
      {
        id: 1,
        title: "도움이 필요할 때 사용할 수 있는 기본 수신호는 무엇일까요?",
        targetWord: "도움 요청",
        hint: "위험하거나 도움이 필요할 때 쓰는 신호예요.",
        exp: 10,
        options: [
          { id: "a", label: "도움 요청", desc: "상대에게 도움을 알려요", icon: "▲", correct: true },
          { id: "b", label: "완료 알림", desc: "작업이 끝났음을 알려요", icon: "✓" },
          { id: "c", label: "대기 요청", desc: "잠시 기다려 달라고 알려요", icon: "…" },
        ],
        feedback: {
          correct: "좋아요. 도움이 필요할 때 쓰는 수신호를 잘 골랐어요.",
          incorrect: "아쉬워요. 위험하거나 도움이 필요한 상황을 떠올려보세요.",
          reviewTitle: "도움 요청",
          reviewDesc: "도움이 필요하거나 위험을 알려야 할 때 사용하는 기본 수신호입니다.",
          action: "손을 높게 들어\n천천히 흔들어요",
          situation: "도움이 필요할 때,\n위험을 알려야 할 때 사용",
        },
      },
      {
        id: 2,
        title: "작업이 끝났음을 알릴 때 어울리는 수신호는 무엇일까요?",
        targetWord: "완료 알림",
        hint: "상대에게 상태가 끝났다는 것을 알려주는 신호예요.",
        exp: 10,
        options: [
          { id: "a", label: "도움 요청", desc: "위험 상황을 알려요", icon: "▲" },
          { id: "b", label: "완료 알림", desc: "작업 완료를 알려요", icon: "✓", correct: true },
          { id: "c", label: "위치 안내", desc: "장소를 알려요", icon: "◆" },
        ],
        feedback: {
          correct: "정답이에요. 완료 알림은 상태를 짧게 전달할 때 좋아요.",
          incorrect: "다시 확인해볼까요? 끝났음을 알리는 신호를 찾아야 해요.",
          reviewTitle: "완료 알림",
          reviewDesc: "상대에게 작업이나 확인이 끝났다는 것을 알려주는 기본 수신호입니다.",
          action: "손을 앞으로 내밀고\n완료 표시를 만들어요",
          situation: "작업이 끝났을 때,\n상태를 알려야 할 때 사용",
        },
      },
    ],
  },
  sos: {
    id: "sos",
    title: "응급수신호 배우기",
    totalCount: 2,
    questions: [
      {
        id: 1,
        title: "위험한 상황에서 가장 먼저 사용할 수 있는 응급수신호는 무엇일까요?",
        targetWord: "도움 요청",
        hint: "멀리 있는 사람에게 위험을 빠르게 알려야 해요.",
        exp: 10,
        options: [
          { id: "a", label: "도움 요청", desc: "위험 상황을 알려요", icon: "▲", correct: true },
          { id: "b", label: "대기 요청", desc: "잠시 기다려 달라고 알려요", icon: "…" },
          { id: "c", label: "완료 알림", desc: "상황이 끝났음을 알려요", icon: "✓" },
        ],
        feedback: {
          correct: "좋아요. 위험 상황에서는 도움 요청 신호를 먼저 보내요.",
          incorrect: "아쉬워요. 위험을 알릴 때는 도움 요청 신호가 가장 먼저예요.",
          reviewTitle: "도움 요청",
          reviewDesc: "위급한 상황에서 주변 사람에게 도움을 요청하는 응급수신호입니다.",
          action: "손을 높이 들고\n크게 흔들어요",
          situation: "위험을 알릴 때,\n도움이 급히 필요할 때 사용",
        },
      },
      {
        id: 2,
        title: "상대에게 즉시 멈추라고 알릴 때 어울리는 응급수신호는 무엇일까요?",
        targetWord: "정지 요청",
        hint: "움직임을 멈추고 상황을 확인해야 할 때 쓰는 신호예요.",
        exp: 10,
        options: [
          { id: "a", label: "위치 안내", desc: "장소를 알려요", icon: "◆" },
          { id: "b", label: "정지 요청", desc: "멈추라는 뜻을 전해요", icon: "■", correct: true },
          { id: "c", label: "완료 알림", desc: "작업 완료를 알려요", icon: "✓" },
        ],
        feedback: {
          correct: "정답이에요. 정지 요청은 즉시 멈춰야 하는 상황에 사용해요.",
          incorrect: "다시 확인해볼까요? 멈추라는 뜻을 전하는 신호를 찾아야 해요.",
          reviewTitle: "정지 요청",
          reviewDesc: "위험을 막기 위해 상대에게 즉시 멈추라고 알리는 응급수신호입니다.",
          action: "손바닥을 앞으로 보이고\n멈춤을 표시해요",
          situation: "위험한 이동을 막을 때,\n주의가 필요할 때 사용",
        },
      },
    ],
  },
  review: {
    id: "review",
    title: "오늘의 복습",
    totalCount: 1,
    questions: [
      {
        id: 1,
        title: "오늘 배운 인사 표현 중 사과를 뜻하는 것은?",
        targetWord: "미안합니다",
        hint: "양해를 구할 때 사용하는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "감사합니다", desc: "고마움을 전해요", icon: "🙌" },
          { id: "b", label: "미안합니다", desc: "사과할 때 사용해요", icon: "🙏", correct: true },
          { id: "c", label: "안녕하세요", desc: "처음 만났을 때 인사해요", icon: "👋" },
        ],
        feedback: {
          correct: "좋아요. 복습까지 잘 해냈어요.",
          incorrect: "다시 보면 금방 기억날 거예요.",
          reviewTitle: "미안합니다",
          reviewDesc: "사과와 양해를 구하는 기본 표현입니다.",
        },
      },
    ],
  },
};

export const getLearnQuiz = (type = "greeting") => learnQuizMockMap[type] || learnQuizMockMap.greeting;
