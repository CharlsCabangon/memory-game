const HIGH_SCORE_KEY = 'memoryGameHighScore';

export function getHighScore() {
  const saved = localStorage.getItem(HIGH_SCORE_KEY);
  return saved ? Number(saved) : 0;
}

export function setHighScore(score) {
  localStorage.setItem(HIGH_SCORE_KEY, score);
}
