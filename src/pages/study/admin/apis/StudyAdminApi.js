const BASE_URL = "http://localhost:10000";

const requestJson = async (url, options = {}, errorMessage = "요청에 실패했어요.") => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || errorMessage);
    }

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const registerSignWordToLearn = ({ eduId, signWordId, wordsType }) =>
  requestJson(
    `${BASE_URL}/api/edu-word-maps/from-sign-word`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eduId, signWordId, wordsType }),
    },
    "학습 단어 등록에 실패했어요."
  );
