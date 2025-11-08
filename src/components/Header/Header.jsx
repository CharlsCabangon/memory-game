import PropTypes from 'prop-types';

import { LEVELS } from '@/lib/levels';
import pokemonLogo from '@/assets/icons/pokemon-logo.svg';
import ToggleBgm from '../Sound/ToggleBgm';

export default function Header({ score, highScore, levelScore, level }) {
  const levelCount = LEVELS[level]?.count || 0;

  return (
    <header className="relative w-full h-48 p-8 mb-8 font-nunito text-xl text-vivid-yellow font-bold flex flex-col items-center gap-6">
      <img src={pokemonLogo} alt="Pokémon logo" className="w-80" />
      <div>Score: {score}</div>
      <div className="text-base text-white">
        {levelScore} / {levelCount}
      </div>
      <div className="absolute right-14 flex items-center gap-8">
        <div>High Score: {highScore}</div>
        <ToggleBgm />
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.string.isRequired,
  highScore: PropTypes.string.isRequired,
  levelScore: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
