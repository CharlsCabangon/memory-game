import { useState, useEffect } from 'react';

import Header from '@/components/Header/Header';
import Gameboard from '@/components/Gameboard/Gameboard';
import GameOverModal from './Modals/GameOverModal';
import WinModal from './Modals/WinModal';

import fetchPokemons from '@/services/pokeService';
import { shuffle } from '@/utils/shuffle';
import { LEVELS } from '@/utils/levels';
import { getHighScore, setHighScore } from '@/utils/storage';

import '@/styles/index.css';
import '@/styles/App.css';

export default function App() {
  const [level, setLevel] = useState('EASY');
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScoreState] = useState(() => getHighScore());
  const [gameStatus, setGameStatus] = useState('idle');

  function getNextLevel(currentLevel) {
    const levelsOrder = ['EASY', 'MEDIUM', 'HARD'];
    const idx = levelsOrder.indexOf(currentLevel);
    if (idx < levelsOrder.length - 1) {
      return levelsOrder[idx + 1];
    }
    return currentLevel;
  }

  useEffect(() => {
    async function loadPokemons() {
      const count = LEVELS[level].count;
      const pokemons = await fetchPokemons(count);

      setCards(pokemons.map((p) => ({ ...p, isClicked: false })));
      setScore(0);
      setGameStatus('playing');
    }

    if (gameStatus === 'idle' || gameStatus === 'progress') {
      loadPokemons();
    }
  }, [level, gameStatus]);

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
    if (newScore > highScore) {
      setHighScoreState(newScore);
      setHighScore(newScore);
    }
    if (updatedCards.every((c) => c.isClicked)) {
      setGameStatus('win');
    }
  }

  function resetGame(nextLevel = level) {
    setLevel(nextLevel);
    setScore(0);
    setGameStatus('idle');
  }

  function handleRestart() {
    resetGame();
  }

  function handleLevelChange(newLevel) {
    setLevel(newLevel);
    setGameStatus('idle');
  }

  useEffect(() => {
    if (gameStatus === 'win') {
      const nextLevel = getNextLevel(level);
      if (nextLevel !== level) {
        setTimeout(() => {
          setLevel(nextLevel);
          setGameStatus('progress'); // triggers useEffect to load next level
        }, 1500); // Optional: short delay before next level
      }
    }
  }, [level, gameStatus]);

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        onReset={resetGame}
        level={level}
        onLevelChange={handleLevelChange}
      />
      <Gameboard cards={cards} onCardClick={handleCardClick} />
      {gameStatus === 'gameover' && <GameOverModal onRestart={handleRestart} />}
      {gameStatus === 'win' && <WinModal onRestart={handleRestart} />}
    </>
  );
}
