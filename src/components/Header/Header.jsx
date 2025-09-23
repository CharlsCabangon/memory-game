import { LEVELS } from '@/utils/levels';

export default function Header({
  score,
  highScore,
  onReset,
  level,
  onLevelChange,
}) {
  return (
    <header>
      <h1>Memory Game</h1>
      <div className="header__score-wrapper">
        <span>Score: {score}</span>
        <span>High Score: {highScore}</span>
      </div>
      <div className="header__level-wrapper">
        <label htmlFor="gameLevel">Level</label>
        <select
          value={level}
          id="gameLevel"
          onChange={(e) => onLevelChange(e.target.value)}
        >
          {Object.entries(LEVELS).map(([key, val]) => (
            <option key={key} value={key}>
              {val.level}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onReset}>Reset</button>
    </header>
  );
}
