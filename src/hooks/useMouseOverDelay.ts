import { useEffect, useRef } from 'react';

export function useMouseOverDelay(onComplete: () => void, delay = 2000) {
  const timerRef = useRef<any>();

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    const timer = setTimeout(() => {
      timerRef.current = 0;
      onComplete();
    }, delay);
    timerRef.current = timer;
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    timerRef.current = 0;
  };

  return { handleMouseEnter, handleMouseLeave };
}
