import { useState, useEffect } from 'react';
import {
  getHighScore,
  setHighScore as persistHighScore,
} from '@/utils/storage';

export function useHighScore(currentScore) {
  const [highScore, setHighScore] = useState(() => getHighScore());

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      persistHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  return highScore;
}
