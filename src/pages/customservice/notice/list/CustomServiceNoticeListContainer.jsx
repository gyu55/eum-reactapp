import React, { useState, useEffect } from "react";
import CustomServiceNoticeListComponent from "./CustomServiceNoticeListComponent";
import PageHeroCard from "../../common/pageHeroCard";
import { useNavigate, useParams, Outlet } from "react-router-dom";

const TABS = ["전체", "공지", "업데이트", "이벤트"];
const ITEMS_PER_PAGE = 10;

const fetchNoticesAPI = async ({ category, page, size }) => {
  const offset = (page - 1) * size;
  const params = new URLSearchParams({ offset, size });
  if (category) params.append("noticeCategory", category);

  const res = await fetch(`http://localhost:10000/api/notice?${params}`, {
    credentials: "include",
  });
  const data = await res.json();
  return {
    notices:    data.notices,
    totalPages: Math.ceil(data.total / size) || 1,
  };
};

const CustomServiceNoticeListContainer = () => {
  const navigate                      = useNavigate();
  const { id }                        = useParams();
  const isDetail                      = id && id !== "write";
  const [notices, setNotices]         = useState([]);
  const [activeTab, setActiveTab]     = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages]   = useState(1);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState(null);
  const [isAdmin, setIsAdmin]         = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("http://localhost:10000/api/auth/me", { credentials: "include" });
        if (res.ok) {
          const user = await res.json();
          setIsAdmin(user.role === "ADMIN");
        }
      } catch {
        setIsAdmin(false);
      }
    };
    fetchMe();
  }, []);

  useEffect(() => {
    if (isDetail) return;
    const loadNotices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const category = activeTab === "전체" ? "" : activeTab;
        const data = await fetchNoticesAPI({ category, page: currentPage, size: ITEMS_PER_PAGE });
        setNotices(data.notices);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadNotices();
  }, [activeTab, currentPage, isDetail]);

  const handleTabChange   = (tab) => { setActiveTab(tab); setCurrentPage(1); };
  const handleWriteClick  = () => { navigate("/customservice/notice/write"); window.scrollTo(0, 0); };
  const handleNoticeClick = (notice) => navigate(`/customservice/notice/${notice.id}`);

  if (isDetail) {
    return (
      <>
        <PageHeroCard
          badge="고객지원"
          title="공지사항"
          sub="이음 서비스의 새로운 소식과 업데이트를 확인하세요."
          iconSrc="/assets/image/customService/noticeIcon.svg"
        />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <PageHeroCard
        badge="고객지원"
        title="공지사항"
        sub="이음 서비스의 새로운 소식과 업데이트를 확인하세요."
        iconSrc="/assets/image/customService/noticeIcon.svg"
      />
      <CustomServiceNoticeListComponent
        notices={notices}
        tabs={TABS}
        activeTab={activeTab}
        currentPage={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        error={error}
        onTabChange={handleTabChange}
        onPageChange={setCurrentPage}
        onNoticeClick={handleNoticeClick}
        onWriteClick={handleWriteClick}
        isAdmin={isAdmin}
      />
    </>
  );
};

export default CustomServiceNoticeListContainer;