import { useState, useEffect } from 'react';

import Header from '@/components/Header/Header';
import Gameboard from '@/components/Gameboard/Gameboard';
import Card from '@/components/Card/Card';

import fetchPokemons from '@/services/pokeService';
import { shuffle } from '@/utils/shuffle';
import { LEVELS } from '@/utils/levels';

import '@/styles/index.css';
import '@/styles/App.css';

export default function App() {
  const [level, setLevel] = useState('EASY')
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('idle');

  useEffect(() => {
    async function loadPokemons() {
      const count = LEVELS[level].count;
      const pokemons = await fetchPokemons(count);

      setCards(pokemons.map(p => ({ ...p, isClicked: false })));
      setScore(0);
      setGameStatus('playing')
    }
    loadPokemons();
  }, [level]);

  function handleCardClick(card) {
    if (gameStatus !== 'playing') return;

    if (card.isClicked) {
      setGameStatus('gameover');
    }

    const updatedCards = cards.map(c =>
      c.id === card.id ? { ...c, isClicked: true } : c
    );
    setCards(shuffle(updatedCards));

    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highScore) setHighScore(newScore);

    if (updatedCards.every(c => c.isClicked)) {
      setGameStatus('win');
    }
  }

  function resetGame() {
    setGameStatus('idle');
    // Triggers useEffect to reload cards
    setLevel(level);
  }

  function handleRestart() {
    resetGame();
  }

  function handleLevelChange(newLevel) {
    setLevel(newLevel);
    setGameStatus('idle');
  }

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        onReset={resetGame}
        level={level}
        onLevelChange={handleLevelChange}
        />
      <Gameboard cards={cards} onCardClick={handleCardClick}/>
    </>
  )
}
