import React, { useState, useEffect } from "react";
import NotificationDropdown from "./NotificationDropdown";

const NotificationDropdownContainer = ({ onClose, onCountChange }) => {
  const [activeTab, setActiveTab]         = useState("모두");
  const [notifications, setNotifications] = useState([]);

  // ── 알림 목록 조회 ──────────────────────────────────
  const fetchNotifications = async () => {
  try {
    const res  = await fetch("http://localhost:10000/api/notifications", { credentials: "include" });
    const data = await res.json();
    console.log("알림 데이터:", data);           // ← 추가
    const unread = data.filter(n => n.notificationIsRead === 0);
    console.log("안읽은 알림:", unread);          // ← 추가
    setNotifications(unread);
    onCountChange?.(unread.length);
  } catch {}
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // ── 전체 읽음 처리 ──────────────────────────────────
  const handleReadAll = async () => {
  try {
    await fetch("http://localhost:10000/api/notifications/read-all", {
      method: "PATCH",
      credentials: "include",
    });
    setNotifications([]);   // ← 목록 비우기
    onCountChange?.(0);
  } catch {}
  };

  // ── 개별 읽음 처리 ──────────────────────────────────
  const handleReadOne = async (id) => {
    try {
      await fetch(`http://localhost:10000/api/notifications/${id}/read`, {
        method: "PATCH",
        credentials: "include",
      });
      setNotifications((prev) =>
        prev.filter((n) => n.id !== id)
      );
      onCountChange?.((prev) => Math.max(0, prev - 1));
    } catch {}
  };

  // ── 탭 필터링 ────────────────────────────────────────
  const filtered = notifications.filter((n) => {
    if (activeTab === "모두") return true;
    if (activeTab === "교육") return ["LEARNING", "NOTICE"].includes(n.notificationType);
    if (activeTab === "커뮤니티") return ["COMMUNITY_REPLY", "COMMUNITY_LIKE"].includes(n.notificationType);
    return true;
  });

  return (
    <NotificationDropdown
      notifications={notifications}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onClose={onClose}
      onReadAll={handleReadAll}
      onReadOne={handleReadOne}
    />
  );
};

export default NotificationDropdownContainer;