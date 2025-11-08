import { useBackgroundMusic } from '@/hooks/sound/useBackgroundMusic';

import { MdMusicNote, MdMusicOff } from 'react-icons/md';

export default function ToggleBgm() {
  const { mutedBgm, toggleMuteBgm } = useBackgroundMusic();

  return (
    <button
      onClick={toggleMuteBgm}
      className="p-3 bg-white-muted/15 text-white rounded-full ring-1 ring-blue-gray shadow- shadow-md backdrop-blur-xs cursor-pointer transition-all duration-100 ease-out hover:bg-white/30 active:bg-white/60 active:scale-95"
    >
      {mutedBgm ? (
        <MdMusicOff className="h-5 w-5" />
      ) : (
        <MdMusicNote className="h-5 w-5" />
      )}
    </button>
  );
}
