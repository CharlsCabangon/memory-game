import { useEffect } from 'react';

import Header from '@/components/Header/Header';
import Gameboard from '@/components/Gameboard/Gameboard';
import LevelSelectModal from '@/components/Modals/LevelSelectModal';
import WinModal from '@/components/Modals/WinModal';
import GameOverModal from '@/components/Modals/GameOverModal';

import { usePokemons, usePrefetchPokemons } from '@/hooks/usePokemons';
import { useGameState } from '@/hooks/useGameState';
import { useHighScore } from '@/hooks/useHighScore';
import { useLevelManagement } from '@/hooks/useLevelManagement';
import { LEVELS } from '@/lib/levels';

export default function App() {
  const {
    currentLevel,
    showLevelSelect,
    levelConfig,
    hasNextLevel,
    selectLevel,
    showLevelSelection,
    moveToNextLevel,
    getNextLevel,
  } = useLevelManagement();

  const {
    cards,
    score,
    gameStatus,
    levelScore,
    initializeCards,
    handleCardClick,
    resetGame,
  } = useGameState();

  const highScore = useHighScore(score);

  const { data: pokemons } = usePokemons(levelConfig?.count ?? 0, {
    enabled: !!currentLevel,
  });

  const prefetchPokemons = usePrefetchPokemons();

  useEffect(() => {
    if (!pokemons) return;

    initializeCards(pokemons);

    if (hasNextLevel) {
      const nextLevel = getNextLevel(currentLevel);
      const nextCount = LEVELS[nextLevel]?.count;
      if (nextCount) {
        prefetchPokemons(nextCount);
      }
    }
  }, [
    pokemons,
    initializeCards,
    hasNextLevel,
    currentLevel,
    getNextLevel,
    prefetchPokemons,
  ]);

  function handleLevelSelect(level) {
    selectLevel(level);
    resetGame(false);
  }

  function handleKeepPlaying() {
    moveToNextLevel();
    resetGame(true);
  }

  function handleRestart() {
    resetGame(false);
  }

  function handleQuit() {
    showLevelSelection();
    resetGame(false);
  }

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        levelScore={levelScore}
        level={currentLevel}
      />
      <main className="w-full flex justify-center mt-20">
        {showLevelSelect && <LevelSelectModal onSelect={handleLevelSelect} />}
        {!showLevelSelect && (
          <>
            <Gameboard cards={cards} onCardClick={handleCardClick} />
            {gameStatus === 'gameover' && (
              <GameOverModal onRestart={handleRestart} onQuit={handleQuit} />
            )}
            {gameStatus === 'win' && (
              <WinModal
                onKeepPlaying={handleKeepPlaying}
                onQuit={handleQuit}
                level={currentLevel}
                hasNextLevel={hasNextLevel}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
