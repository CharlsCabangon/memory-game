import { useState, useEffect, useMemo, useCallback } from 'react';
import { shuffle } from '@/utils/shuffle';
import { FLIP_TIME } from '@/lib/constants';

export function useGameState() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('idle');
  const [isFlipping, setIsFlipping] = useState(false);

  const levelScore = useMemo(
    () => cards.filter((c) => c.isClicked).length,
    [cards]
  );

  const initializeCards = useCallback((pokemons) => {
    if (!pokemons?.length) return;
    setCards(pokemons.map((p) => ({ ...p, isClicked: false })));
    setGameStatus('playing');
  }, []);

  const handleCardClick = useCallback(
    (card) => {
      if (gameStatus !== 'playing' || isFlipping) return;

      if (card.isClicked) {
        setGameStatus('gameover');
        return;
      }

      setIsFlipping(true);

      setCards((prevCards) =>
        prevCards.map((c) => (c.id === card.id ? { ...c, isClicked: true } : c))
      );

      setScore((s) => s + 1);

      setTimeout(() => {
        setCards((prevCards) => {
          const shuffled = shuffle([...prevCards]);
          if (shuffled.every((c) => c.isClicked)) {
            setGameStatus('win');
          }
          return shuffled;
        });
        setIsFlipping(false);
      }, FLIP_TIME / 2); // half the flip time so cards shuffle while flipped
    },
    [cards, gameStatus, isFlipping]
  );

  const resetGame = useCallback((keepScore = false) => {
    setCards([]);
    setIsFlipping(false);
    if (!keepScore) setScore(0);
    setGameStatus('idle');
  }, []);

  return {
    cards,
    score,
    gameStatus,
    isFlipping,
    levelScore,
    initializeCards,
    handleCardClick,
    resetGame,
  };
}
