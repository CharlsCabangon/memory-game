import useSound from 'use-sound';
import buttonClickSound from '@/assets/sound/button-click.mp3';
import cardClickSound from '@/assets/sound/card-click.mp3';
import bumpSound from '@/assets/sound/bump.mp3';

export function useSoundEffects() {
  const [playButtonClick] = useSound(buttonClickSound);

  const [playCardClick] = useSound(cardClickSound);

  const [playBump] = useSound(bumpSound);

  return {
    playButtonClick,
    playCardClick,
    playBump,
  };
}
