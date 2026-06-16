// ?숈뒿 API ?대떦: ?숈뒿 紐⑸줉, ?⑥뼱, ?곸긽, ?꾨즺 ?곹깭 ?붿껌
const BASE_URL = "http://localhost:10000";

const requestJson = async (url, options = {}, errorMessage = "?붿껌???ㅽ뙣?덉뒿?덈떎.") => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

// ?숈뒿 紐⑸줉 議고쉶
export const fetchLearnList = async () =>
  requestJson(`${BASE_URL}/api/edus`, {}, "?숈뒿 紐⑸줉 議고쉶 ?ㅽ뙣");

// ?숈뒿蹂??⑥뼱 紐⑸줉 議고쉶
export const fetchWordsByLearnId = async (learnId) =>
  requestJson(`${BASE_URL}/api/words/edu/${learnId}`, {}, "?숈뒿 ?⑥뼱 議고쉶 ?ㅽ뙣");

// ?숈뒿蹂??쒕뜡 ?⑥뼱 紐⑸줉 議고쉶
export const fetchRandomWordsByLearnId = async (learnId, limit = 5) =>
  requestJson(`${BASE_URL}/api/words/edu/${learnId}/random?limit=${limit}`, {}, "?숈뒿 ?쒕뜡 ?⑥뼱 議고쉶 ?ㅽ뙣");

// ?숈뒿 ?곸긽 議고쉶
export const fetchEduVideoById = async (eduVideoId) =>
  requestJson(`${BASE_URL}/api/edu-videos/${eduVideoId}`, {}, "?숈뒿 ?곸긽 議고쉶 ?ㅽ뙣");

// ?숈뒿 ?꾩껜 ?⑥뼱 媛쒖닔 議고쉶
export const fetchLearnTotalWordCount = async (learnId) =>
  requestJson(`${BASE_URL}/api/word-studies/edus/${learnId}/total-count`, {}, "?숈뒿 ?꾩껜 ?⑥뼱 媛쒖닔 議고쉶 ?ㅽ뙣");

// ?숈뒿 ?꾨즺 ?⑥뼱 媛쒖닔 議고쉶
export const fetchLearnCompletedWordCount = async ({ userId, learnId }) =>
  requestJson(`${BASE_URL}/api/word-studies/users/${userId}/edus/${learnId}/completed-count`, {}, "?숈뒿 ?꾨즺 ?⑥뼱 媛쒖닔 議고쉶 ?ㅽ뙣");

// ?ㅻ뒛 ?꾨즺???⑥뼱 媛쒖닔 議고쉶
export const fetchTodayCompletedWordCount = async (userId) =>
  requestJson(`${BASE_URL}/api/word-studies/users/${userId}/today-completed-count`, {}, "?ㅻ뒛 ?꾨즺 ?⑥뼱 媛쒖닔 議고쉶 ?ㅽ뙣");

// ?숈뒿 ?쒖옉 湲곕줉 ???
export const startLearn = async (learnId) =>
  requestJson(
    BASE_URL + "/private/api/edu-starts/edus/" + learnId,
    {
      method: "POST",
      credentials: "include",
    },
    "?숈뒿 ?쒖옉 湲곕줉 ????ㅽ뙣"
  );

// ?숈뒿 ?⑥뼱 ?꾨즺 ???
export const finishLearnWord = async ({ userId, eduWordMapId }) =>
  requestJson(
    `${BASE_URL}/api/word-studies`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, eduWordMapId }),
    },
    "?⑥뼱 ?숈뒿 ?꾨즺 ????ㅽ뙣"
  );

// ?숈뒿 ?꾨즺 ?щ? 議고쉶
export const getEduStartCompleted = ({ userId, eduId }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/completed`,
    {},
    "?숈뒿 ?몄뀡 ?꾨즺 ?щ? 議고쉶 ?ㅽ뙣"
  );

// ?숈뒿 ?쒕뜡 臾몄젣 ?명듃 ?꾨즺 泥섎━
export const completeEduStart = ({ userId, eduId, eduStartTime = 0 }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/complete?eduStartTime=${eduStartTime}`,
    {
      method: "PATCH",
    },
    "?숈뒿 ?몄뀡 ?꾨즺 泥섎━ ?ㅽ뙣"
  );

// ?숈뒿 濡쒕뱶留??대깽??蹂댁긽 ?섎졊
// ?숈뒿 ?몄뀡 臾몄젣 ???寃곌낵 諛섏쁺
export const recordLearnProgress = ({ userId, eduId, isCorrect }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/progress`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCorrect }),
    },
    "?숈뒿 ?몄뀡 臾몄젣 ???寃곌낵 諛섏쁺 ?ㅽ뙣"
  );

export const claimRoadmapReward = ({ userId, eduId }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/roadmap-reward`,
    {
      method: "POST",
    },
    "?숈뒿 濡쒕뱶留??대깽??蹂댁긽 ?섎졊 ?ㅽ뙣"
  );

