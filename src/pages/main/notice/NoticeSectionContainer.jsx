import React, { useState, useEffect } from "react";
import NoticeSectionComponent from "./NoticeSectionComponent";

const NoticeSectionContainer = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://localhost:10000/api/notice?offset=0&size=4", {
          credentials: "include",
        });
        const data = await res.json();
        setNotices(data.notices || []);
      } catch {}
    };
    fetchNotices();
  }, []);

  return <NoticeSectionComponent notices={notices} />;
};

export default NoticeSectionContainer;