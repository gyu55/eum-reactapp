import React, { useState, useEffect } from 'react';
import theme from '../../../styles/theme';

const TEMP_PROFILES = [
  '/assets/image/main/dummyUserProFileImg1.svg',
  '/assets/image/main/dummyUserProFileImg2.svg',
  '/assets/image/main/dummyUserProFileImg3.svg',
];

const FloatingProfile = ({ profile, onRemove }) => {
  return (
    <div
      onAnimationEnd={onRemove}
      style={{
        position: 'absolute',
        left: `${profile.x}%`,
        bottom: `${profile.y}%`,
        animation: `floatUp ${profile.duration}s ease-in forwards`,
        zIndex: 0,
      }}
    >
      <img
        src={profile.src}
        alt="profile"
        style={{
          width: `${profile.size}px`,
          height: `${profile.size}px`,
          borderRadius: '12px',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

const getRandomX = () => {
  return Math.random() < 0.5
    ? Math.random() * 30  
    : 70 + Math.random() * 20; 
};

const FloatingProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatUp {
        0%   { transform: translateY(0); opacity: 1; }
        80%  { opacity: 1; }
        100% { transform: translateY(-400px); opacity: 0; }
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
        duration: Math.random() * 1 + 3
      };
      setProfiles(prev => [...prev, newProfile]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const removeProfile = (id) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {profiles.map(profile => (
        <FloatingProfile
          key={profile.id}
          profile={profile}
          onRemove={() => removeProfile(profile.id)}
        />
      ))}
    </div>
  );
};

export default FloatingProfiles;
