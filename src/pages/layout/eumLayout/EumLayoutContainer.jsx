import { useState, useEffect } from "react";
import useAuthStore from "../../../store/authStore.js";
import EumLayout from "./EumLayout";

const EumLayoutContainer = () => {
  const [notifCount, setNotifCount]             = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const user               = useAuthStore((state) => state.user);          // 추가
  const setAuthUser        = useAuthStore((state) => state.setUser);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  useEffect(() => {
  fetch("http://localhost:10000/private/api/users/me", { credentials: "include" })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (data?.success) {
        setAuthUser(data.data);
        setIsAuthenticated(true);
      } else {
        setAuthUser(null);
        setIsAuthenticated(false);
      }
    })
    .catch(() => {
      setAuthUser(null);
      setIsAuthenticated(false);
    });
}, []);

  // ── 종 알림 백엔드 연동 시 아래 주석 해제 ─────────────────────
  // useEffect(() => {
  //   if (!user) return;
  //   const fetchNotifCount = async () => {
  //     try {
  //       const res  = await fetch("http://localhost:10000/api/notifications/unread", { credentials: "include" });
  //       const data = await res.json();
  //       setNotifCount(data.count);
  //     } catch {}
  //   };
  //   fetchNotifCount();
  // }, [user]);
  // ──────────────────────────────────────────────────────────────

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:10000/api/auth/logout", { method: "POST", credentials: "include" });
    } catch {}
    setAuthUser(null);
    setIsAuthenticated(false);
    window.location.href = "/";
    window.scrollTo(0, 0);
  };

  return (
    <EumLayout
      user={user}                // store에서 직접 가져온 user 사용
      notifCount={notifCount}
      showNotification={showNotification}
      onNotifToggle={() => setShowNotification((prev) => !prev)}
      onNotifCountChange={setNotifCount}
      onLogout={handleLogout}
    />
  );
};

export default EumLayoutContainer;