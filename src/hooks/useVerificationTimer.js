import { useState, useEffect, useRef } from "react";

const useVerificationTimer = (seconds = 180) => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    setTimer(seconds);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };

  const format = () => {
    const m = Math.floor(timer / 60);
    const s = timer % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return { isRunning: timer > 0, start, reset, format };
};

export default useVerificationTimer;
