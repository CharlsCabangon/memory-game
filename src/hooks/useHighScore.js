import { useState, useEffect } from 'react';

import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/lib/keys';

export function useHighScore(currentScore) {
  const [highScore, setHighScore] = useState(() =>
    storage.get(STORAGE_KEYS.HIGH_SCORE, 0)
  );

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      storage.set(STORAGE_KEYS.HIGH_SCORE, currentScore);
    }
  }, [currentScore, highScore]);

  return highScore;
}
