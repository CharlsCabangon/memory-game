import { LEVELS } from '@/utils/levels';
import pokemonLogo from '@/assets/icons/pokemon-logo.svg';

import './Header.css';

export default function Header({ score, highScore, levelScore, level }) {
  const levelCount = LEVELS[level]?.count || 0;

  return (
    <header>
      <img src={pokemonLogo} alt="Pokémon logo" className="header__logo" />
      <div className="header__score">Score: {score}</div>
      <div className="header__highscore">High Score: {highScore}</div>
      <div className="header__progress">
        {levelScore} / {levelCount}
      </div>
    </header>
  );
}
