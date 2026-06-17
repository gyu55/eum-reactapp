import { useState, useEffect } from 'react';

export const chatFloatBus = {
  dispatch: (profileImg, nickname) => {
    window.dispatchEvent(
      new CustomEvent('chatFloat', { detail: { profileImg, nickname } })
    );
  }
};

export function useChatFloatStore() {
  const [floats, setFloats] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      const { profileImg, nickname } = e.detail;
      const id = Date.now() + Math.random();

      setFloats(prev => [...prev, { id, profileImg, nickname }]);
      setTimeout(() => {
        setFloats(prev => prev.filter(f => f.id !== id));
      }, 3500);
    };

    window.addEventListener('chatFloat', handler);
    return () => window.removeEventListener('chatFloat', handler);
  }, []);

  return floats;
}