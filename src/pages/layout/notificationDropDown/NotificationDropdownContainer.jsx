import React, { useState, useEffect } from "react";
import { DUMMY_NOTIFICATIONS } from "./constants";
import NotificationDropdown from "./NotificationDropdown";

const NotificationDropdownContainer = ({ onClose, onCountChange }) => {
  const [activeTab, setActiveTab]       = useState("모두");
  const [notifications, setNotifications] = useState(DUMMY_NOTIFICATIONS);

  useEffect(() => {
    onCountChange?.(notifications.length);
  }, [notifications, onCountChange]);

  // ── 백엔드 연동 시 아래 주석 해제 ────────────────────────────
  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     try {
  //       const res  = await fetch("http://localhost:10000/api/notifications", { credentials: "include" });
  //       const data = await res.json();
  //       setNotifications(data);
  //     } catch {}
  //   };
  //   fetchNotifications();
  // }, []);
  // ─────────────────────────────────────────────────────────────

  const handleReadAll = () => {
    setNotifications([]);
    // ── 백엔드 연동 시 아래 주석 해제 ──────────────────────────
    // await fetch("http://localhost:10000/api/notifications/read-all", {
    //   method: "PUT", credentials: "include",
    // });
    // ───────────────────────────────────────────────────────────
  };

  const handleReadOne = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    // ── 백엔드 연동 시 아래 주석 해제 ──────────────────────────
    // await fetch(`http://localhost:10000/api/notifications/${id}/read`, {
    //   method: "PUT", credentials: "include",
    // });
    // ───────────────────────────────────────────────────────────
  };

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