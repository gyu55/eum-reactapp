import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import * as S from "./style.js";
import { TEMP_PROFILES } from "./constants";
import { getRandomX } from "./utils";

const FloatingProfile = React.memo(({ profile, onRemove }) => (
  <S.FloatingItem
    $x={profile.x}
    $y={profile.y}
    $duration={profile.duration}
    onAnimationEnd={onRemove}
  >
    <S.ProfileImg src={profile.src} alt="profile" $size={profile.size} />
  </S.FloatingItem>
));

const FloatingProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatUp {
        0%   { transform: translateY(0); opacity: 1; }
        80%  { opacity: 1; }
        100% { transform: translateY(-250px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 1;
      setProfiles((prev) => {
        if (prev.length >= 6) return prev;
        const newProfiles = Array.from({ length: count }, () => ({
          id:       Date.now() + Math.random(),
          src:      TEMP_PROFILES[Math.floor(Math.random() * TEMP_PROFILES.length)],
          x:        getRandomX(),
          y:        Math.random() * 50,
          size:     40,
          duration: Math.random() * 1 + 3,
        }));
        return [...prev, ...newProfiles];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const removeProfile = useCallback((id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return createPortal(
    <S.FloatingWrap>
      {profiles.map((profile) => (
        <FloatingProfile
          key={profile.id}
          profile={profile}
          onRemove={() => removeProfile(profile.id)}
        />
      ))}
    </S.FloatingWrap>,
    document.body
  );
};

export default FloatingProfiles;