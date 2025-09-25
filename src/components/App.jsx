import { useState, useEffect } from 'react';

import Header from '@/components/Header/Header';
import Gameboard from '@/components/Gameboard/Gameboard';
import LevelSelectModal from '@/components/Modals/LevelSelectModal';
import WinModal from '@/components/Modals/WinModal';
import GameOverModal from '@/components/Modals/GameOverModal';

import fetchPokemons from '@/services/pokeService';
import { shuffle } from '@/utils/shuffle';
import { LEVELS } from '@/utils/levels';
import { getHighScore, setHighScore } from '@/utils/storage';

import '@/styles/index.css';
import '@/styles/App.css';

export default function App() {
  const [level, setLevel] = useState(null);
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScoreState] = useState(() => getHighScore());
  const [gameStatus, setGameStatus] = useState('idle');

  const levelScore = cards.filter((c) => c.isClicked).length;

  useEffect(() => {
    if (!level) return;

    async function loadPokemons() {
      const count = LEVELS[level].count;
      const pokemons = await fetchPokemons(count);

      setCards(pokemons.map((p) => ({ ...p, isClicked: false })));
      setGameStatus('playing');
    }

    if (gameStatus === 'idle' || gameStatus === 'progress') {
      loadPokemons();
    }
  }, [level, gameStatus]);

  useEffect(() => {
    if (score > highScore) {
      setHighScoreState(score);
      setHighScore(score);
    }
  }, [score, highScore]);

  function handleCardClick(card) {
    if (gameStatus !== 'playing') return;

    if (card.isClicked) {
      setGameStatus('gameover');
      return;
    }

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isClicked: true } : c
    );
    setCards(shuffle(updatedCards));

    const newScore = score + 1;
    setScore(newScore);

    if (updatedCards.every((c) => c.isClicked)) {
      setGameStatus('win');
    }
  }

  function handleReset(nextLevel = 'EASY', keepScore = false) {
    setLevel(nextLevel);
    if (!keepScore) setScore(0);
    setGameStatus('idle');
  }

  function handleKeepPlaying() {
    const nextLevel = getNextLevel(level);
    handleReset(nextLevel, true);
  }

  function handleLevelSelect(selectedLevel) {
    setLevel(selectedLevel);
    setShowLevelSelect(false);
    setScore(0);
    setGameStatus('idle');
  }

  function handleQuit() {
    setShowLevelSelect(true);
    setLevel(null);
    setCards([]);
    setGameStatus('idle');
  }

  function getNextLevel(currentLevel) {
    const levelsOrder = ['EASY', 'MEDIUM', 'HARD'];
    const index = levelsOrder.indexOf(currentLevel);
    if (index < levelsOrder.length - 1) {
      return levelsOrder[index + 1];
    }
    return currentLevel;
  }

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        levelScore={levelScore}
        level={level}
      />
      <main>
        {showLevelSelect && <LevelSelectModal onSelect={handleLevelSelect} />}
        {!showLevelSelect && (
          <>
            <Gameboard cards={cards} onCardClick={handleCardClick} />
            {gameStatus === 'gameover' && <GameOverModal onQuit={handleQuit} />}
            {gameStatus === 'win' && (
              <WinModal
                onKeepPlaying={handleKeepPlaying}
                onQuit={handleQuit}
                level={level}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
