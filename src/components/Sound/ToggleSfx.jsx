import { useSoundEffects } from '@/hooks/sound/useSoundEffects';

import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/solid';

export default function ToggleSfx() {
  const { mutedSfx, toggleMuteSfx } = useSoundEffects();

  return (
    <button
      onClick={toggleMuteSfx}
      className="p-3 bg-white-muted/15 rounded-full ring-1 ring-blue-gray shadow-lg backdrop-blur-xs cursor-pointer transition-all duration-100 ease-out hover:bg-white/30 active:bg-white/60 active:scale-95"
    >
      {mutedSfx ? (
        <VolumeOffIcon className="h-5 w-5" />
      ) : (
        <VolumeUpIcon className="h-5 w-5" />
      )}
    </button>
  );
}
