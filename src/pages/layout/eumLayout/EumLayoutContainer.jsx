import { useState, useEffect, useRef } from "react";
import useAuthStore from "../../../store/authStore.js";
import EumLayout from "./EumLayout";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const EumLayoutContainer = () => {
  const [notifCount, setNotifCount]             = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const stompClient                             = useRef(null);

  const user               = useAuthStore((state) => state.user);
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

  // ── 안읽은 알림 수 조회 ──────────────────────────────
  useEffect(() => {
    if (!user) return;
    const fetchNotifCount = async () => {
      try {
        const res = await fetch("http://localhost:10000/api/notifications/unread", { credentials: "include" });
        const data = await res.json();
        setNotifCount(data);  // 숫자 직접 반환
      } catch {}
    };
    fetchNotifCount();
  }, [user]);

  // ── WebSocket 실시간 알림 연결 ───────────────────────
  useEffect(() => {
    if (!user) return;

    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:10000/ws/notification"),
      onConnect: () => {
        client.subscribe(`/user/${user.id}/queue/notifications`, (msg) => {
          const notification = JSON.parse(msg.body);
          console.log("실시간 알림 수신:", notification);
          setNotifCount((prev) => prev + 1);  // 알림 수 증가
        });
      },
      onDisconnect: () => console.log("WebSocket 연결 해제"),
    });

    client.activate();
    stompClient.current = client;

    return () => client.deactivate();  // 언마운트 시 연결 해제
  }, [user]);
  // ───────────────────────────────────────────────────

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:10000/api/auth/logout", { method: "POST", credentials: "include" });
    } catch {}
    stompClient.current?.deactivate();  // 로그아웃 시 WebSocket 해제
    setAuthUser(null);
    setIsAuthenticated(false);
    window.location.href = "/";
    window.scrollTo(0, 0);
  };

  return (
    <EumLayout
      user={user}
      notifCount={notifCount}
      showNotification={showNotification}
      onNotifToggle={() => setShowNotification((prev) => !prev)}
      onNotifCountChange={setNotifCount}
      onLogout={handleLogout}
    />
  );
};

export default EumLayoutContainer;