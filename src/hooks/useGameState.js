import { useState, useEffect, useMemo, useCallback } from 'react';
import { shuffle } from '@/utils/shuffle';

export function useGameState() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('idle');

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
      if (gameStatus !== 'playing') return;

      const cardId = typeof card === 'object' && card !== null ? card.id : card;

      setCards((prevCards) => {
        const target = prevCards.find((c) => c.id === cardId);
        if (!target) {
          return prevCards;
        }

        if (target.isClicked) {
          setGameStatus('gameover');
          return prevCards;
        }

        const updated = prevCards.map((c) =>
          c.id === cardId ? { ...c, isClicked: true } : c
        );

        setScore((s) => s + 1);

        return shuffle(updated);
      });
    },
    [gameStatus]
  );

  useEffect(() => {
    if (
      gameStatus === 'playing' &&
      cards.length > 0 &&
      cards.every((c) => c.isClicked)
    ) {
      setGameStatus('win');
    }
  }, [cards, gameStatus]);

  const resetGame = useCallback((keepScore = false) => {
    setCards([]);
    if (!keepScore) setScore(0);
    setGameStatus('idle');
  }, []);

  return {
    cards,
    score,
    gameStatus,
    levelScore,
    initializeCards,
    handleCardClick,
    resetGame,
  };
}
