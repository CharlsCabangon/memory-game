import { LEVELS } from '@/utils/levels';
import pokemonLogo from '@/assets/icons/pokemon-logo.svg';

import './Header.css';

export default function Header({
  score,
  highScore,
  levelScore,
  level,
  onLevelChange,
}) {
  return (
    <header>
      <img src={pokemonLogo} alt="Pokémon logo" className="header__logo" />
      <div className="header__score-wrapper">
        <div className="header__score">
          Score: {score}
        </div>
        <div className="header__highscore">
          High Score: {highScore}
        </div>
      </div>

      <div className="header__level-wrapper">
        <label htmlFor="gameLevel">
          Level
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
        </label>
      </div>
      
      <div className="header__progress-wrapper">
        {levelScore} / {LEVELS[level].count}
      </div>
    </header>
  );
}
