import { useState, useCallback } from 'react';
import { LEVELS } from '@/lib/levels';

const LEVEL_ORDER = ['EASY', 'MEDIUM', 'HARD'];

export function useLevelManagement() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [showLevelSelect, setShowLevelSelect] = useState(true);

  const getNextLevel = useCallback((level) => {
    const index = LEVEL_ORDER.indexOf(level);
    return index < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[index + 1] : level;
  }, []);

  const selectLevel = useCallback((level) => {
    setCurrentLevel(level);
    setShowLevelSelect(false);
  }, []);

  const showLevelSelection = useCallback(() => {
    setShowLevelSelect(true);
    setCurrentLevel(null);
  }, []);

  const moveToNextLevel = useCallback(() => {
    if (!currentLevel) return null;
    const next = getNextLevel(currentLevel);
    setCurrentLevel(next);
    return next;
  }, [currentLevel, getNextLevel]);

  const levelConfig = currentLevel ? LEVELS[currentLevel] : null;
  const hasNextLevel =
    currentLevel && getNextLevel(currentLevel) !== currentLevel;

  return {
    currentLevel,
    showLevelSelect,
    getNextLevel,
    selectLevel,
    showLevelSelection,
    moveToNextLevel,
    levelConfig,
    hasNextLevel,
  };
}
