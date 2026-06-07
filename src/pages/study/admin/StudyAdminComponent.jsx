import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchLearnList, fetchWordsByLearnId } from "../apis/LearnApi";
import { fetchSignWords } from "../apis/SignWordApi";
import { registerSignWordToLearn } from "./apis/StudyAdminApi";
import * as S from "./style";

const PAGE_SIZE = 20;

const getWordsType = (learn) => {
  const title = learn?.eduTitle || "";
  if (title.includes("기초")) return "기초";
  if (title.includes("중급")) return "중급";
  if (title.includes("고급")) return "고급";
  return title || "기초";
};

const StudyAdminComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [learnList, setLearnList] = useState([]);
  const [selectedLearnId, setSelectedLearnId] = useState(null);
  const [registeredWords, setRegisteredWords] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingId, setIsSavingId] = useState(null);
  const [message, setMessage] = useState("");

  const selectedLearn = useMemo(
    () => learnList.find((learn) => Number(learn.id) === Number(selectedLearnId)),
    [learnList, selectedLearnId]
  );

  const registeredSignWordIds = useMemo(
    () => new Set(registeredWords.map((word) => Number(word.signWordId)).filter(Boolean)),
    [registeredWords]
  );

  const loadRegisteredWords = useCallback(async (learnId) => {
    if (!learnId) return;

    try {
      const words = await fetchWordsByLearnId(learnId);
      setRegisteredWords(words || []);
    } catch {
      setRegisteredWords([]);
    }
  }, []);

  const loadSignWords = useCallback(async ({ nextPage = 1, nextKeyword = "", append = false } = {}) => {
    setIsLoading(true);
    setMessage("");

    try {
      const data = await fetchSignWords(nextKeyword, nextPage, PAGE_SIZE);
      const list = data || [];

      setResults((prev) => (append ? [...prev, ...list] : list));
      setPageNo(nextPage);
      setActiveKeyword(nextKeyword);
      setHasMore(list.length >= PAGE_SIZE);

      if (list.length === 0 && !append) {
        setMessage(nextKeyword ? "검색 결과가 없어요." : "불러올 수어 단어가 없어요.");
      }
    } catch {
      if (!append) setResults([]);
      setMessage(nextKeyword ? "수어 검색에 실패했어요." : "전체 수어 목록을 불러오지 못했어요.");
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadLearnList = async () => {
      try {
        const learns = await fetchLearnList();
        setLearnList(learns || []);
        setSelectedLearnId(learns?.[0]?.id || null);
      } catch {
        setMessage("학습 목록을 불러오지 못했어요.");
      }
    };

    loadLearnList();
    loadSignWords({ nextPage: 1, nextKeyword: "", append: false });
  }, [loadSignWords]);

  useEffect(() => {
    loadRegisteredWords(selectedLearnId);
  }, [loadRegisteredWords, selectedLearnId]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const nextKeyword = keyword.trim();
    await loadSignWords({ nextPage: 1, nextKeyword, append: false });
  };

  const handleShowAll = async () => {
    setKeyword("");
    await loadSignWords({ nextPage: 1, nextKeyword: "", append: false });
  };

  const handleLoadMore = async () => {
    if (isLoading || !hasMore) return;
    await loadSignWords({ nextPage: pageNo + 1, nextKeyword: activeKeyword, append: true });
  };

  const handleRegister = async (signWord) => {
    if (!selectedLearn) {
      setMessage("학습 단계를 먼저 선택해 주세요.");
      return;
    }

    const signWordId = signWord.id;
    setIsSavingId(signWordId);
    setMessage("");

    try {
      await registerSignWordToLearn({
        eduId: selectedLearn.id,
        signWordId,
        wordsType: getWordsType(selectedLearn),
      });

      await loadRegisteredWords(selectedLearn.id);
      setMessage(`${signWord.signWordTitle} 등록 완료`);
    } catch (error) {
      setMessage(error.message || "학습 단어 등록에 실패했어요.");
    } finally {
      setIsSavingId(null);
    }
  };

  return (
    <S.AdminPage>
      <S.Header>
        <S.Kicker>학습 관리자</S.Kicker>
        <S.Title>OpenAPI 수어를 학습 단어로 등록해요</S.Title>
        <S.Desc>전체 수어 목록을 둘러보거나 검색해서 기초, 중급, 고급 학습에 연결할 수 있어요.</S.Desc>
      </S.Header>

      <S.Panel>
        <S.SectionTitle>학습 단계 선택</S.SectionTitle>
        <S.LearnTabs>
          {learnList.map((learn) => (
            <S.LearnTab
              key={learn.id}
              type="button"
              $active={Number(selectedLearnId) === Number(learn.id)}
              onClick={() => setSelectedLearnId(learn.id)}
            >
              {learn.eduTitle}
            </S.LearnTab>
          ))}
        </S.LearnTabs>
      </S.Panel>

      <S.Panel>
        <S.SectionTitle>수어 검색</S.SectionTitle>
        <S.SearchForm onSubmit={handleSearch}>
          <S.SearchInput
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="예: 호랑이, 병원, 도와주세요"
          />
          <S.SearchButton type="submit" disabled={isLoading}>
            {isLoading ? "불러오는 중" : "검색"}
          </S.SearchButton>
          <S.ShowAllButton type="button" onClick={handleShowAll} disabled={isLoading}>
            전체 보기
          </S.ShowAllButton>
        </S.SearchForm>
        {message && <S.Message>{message}</S.Message>}
      </S.Panel>

      <S.ContentGrid>
        <S.ResultPanel>
          <S.ResultHeader>
            <S.SectionTitle>{activeKeyword ? `"${activeKeyword}" 검색 결과` : "전체 수어 목록"}</S.SectionTitle>
            <S.ResultCount>{results.length}개 표시 중</S.ResultCount>
          </S.ResultHeader>

          <S.CardGrid>
            {results.map((item) => {
              const isRegistered = registeredSignWordIds.has(Number(item.id));
              return (
                <S.SignWordCard key={item.id}>
                  <S.Thumb src={item.signWordThumbnailUrl || item.signWordImages} alt={item.signWordTitle} />
                  <S.CardBody>
                    <S.Category>{item.signWordCategory || "분류 정보 없음"}</S.Category>
                    <S.CardTitle>{item.signWordTitle}</S.CardTitle>
                    <S.CardDesc>{item.signWordDescription || "설명이 없어요."}</S.CardDesc>
                    <S.RegisterButton
                      type="button"
                      disabled={isRegistered || isSavingId === item.id}
                      onClick={() => handleRegister(item)}
                    >
                      {isRegistered ? "등록됨" : isSavingId === item.id ? "등록 중" : "학습에 등록"}
                    </S.RegisterButton>
                  </S.CardBody>
                </S.SignWordCard>
              );
            })}
          </S.CardGrid>

          {hasMore && results.length > 0 && (
            <S.LoadMoreButton type="button" onClick={handleLoadMore} disabled={isLoading}>
              {isLoading ? "불러오는 중" : "더보기"}
            </S.LoadMoreButton>
          )}
        </S.ResultPanel>

        <S.RegisteredPanel>
          <S.SectionTitle>현재 등록된 단어</S.SectionTitle>
          <S.RegisteredList>
            {registeredWords.length === 0 && <S.Empty>아직 등록된 단어가 없어요.</S.Empty>}
            {registeredWords.map((word) => (
              <S.RegisteredItem key={word.eduWordMapId || word.id}>
                <span>{word.wordsTitle}</span>
                <small>{word.wordsType}</small>
              </S.RegisteredItem>
            ))}
          </S.RegisteredList>
        </S.RegisteredPanel>
      </S.ContentGrid>
    </S.AdminPage>
  );
};

export default StudyAdminComponent;
