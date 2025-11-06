import { LEVELS } from '@/lib/levels';
import pokemonLogo from '@/assets/icons/pokemon-logo.svg';

export default function Header({ score, highScore, levelScore, level }) {
  const levelCount = LEVELS[level]?.count || 0;

  return (
    <header className="relative w-full h-48 p-8 mb-8 font-nunito text-xl text-vivid-yellow font-bold flex flex-col items-center gap-6">
      <img src={pokemonLogo} alt="Pokémon logo" className="w-80" />
      <div>Score: {score}</div>
      <div className="absolute right-14">High Score: {highScore}</div>
      <div className="text-base">
        {levelScore} / {levelCount}
      </div>
    </header>
  );
}
