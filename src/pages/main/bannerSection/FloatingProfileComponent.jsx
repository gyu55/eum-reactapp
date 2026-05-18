import React, { useState, useEffect } from "react";
import * as S from "./style.js";

const TEMP_PROFILES = [
  "/assets/image/main/dummyUserProFileImg1.svg",
  "/assets/image/main/dummyUserProFileImg2.svg",
  "/assets/image/main/dummyUserProFileImg3.svg",
  "/assets/image/main/dummyUserProFileImg4.svg",
  "/assets/image/main/dummyUserProFileImg5.svg",
  "/assets/image/main/dummyUserProFileImg6.svg",
  "/assets/image/main/dummyUserProFileImg7.svg",
];

const FloatingProfile = ({ profile, onRemove }) => (
  <S.FloatingItem
    $x={profile.x}
    $y={profile.y}
    $duration={profile.duration}
    onAnimationEnd={onRemove}
  >
    <S.ProfileImg src={profile.src} alt="profile" $size={profile.size} />
  </S.FloatingItem>
);

const getRandomX = () =>
  Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 20;

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
      const newProfile = {
        id: Date.now(),
        src: TEMP_PROFILES[Math.floor(Math.random() * TEMP_PROFILES.length)],
        x: getRandomX(),
        y: Math.random() * 50,
        size: 40,
        duration: Math.random() * 1 + 3,
      };
      setProfiles((prev) => [...prev, newProfile]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const removeProfile = (id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <S.FloatingWrap>
      {profiles.map((profile) => (
        <FloatingProfile
          key={profile.id}
          profile={profile}
          onRemove={() => removeProfile(profile.id)}
        />
      ))}
    </S.FloatingWrap>
  );
};

export default FloatingProfiles;
