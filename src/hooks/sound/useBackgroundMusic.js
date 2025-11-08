import { useState, useEffect, useCallback } from 'react';

import useSound from 'use-sound';
import bgmTrack from '@/assets/sound/bgm.mp3';

import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/lib/keys';

export function useBackgroundMusic() {
  const [mutedBgm, setMutedBgm] = useState(() =>
    storage.get(STORAGE_KEYS.BGM_MUTED, false)
  );

  // unused
  const [volumeBgm, setVolumeBgm] = useState(() =>
    storage.get(STORAGE_KEYS.BGM_VOLUME, 0.3)
  );

  const [play, { stop, pause, sound }] = useSound(bgmTrack, {
    loop: true,
    volume: volumeBgm,
    soundEnabled: !mutedBgm,
  });

  useEffect(() => {
    if (!mutedBgm) play();
    return () => stop();
  }, [mutedBgm, play, stop]);

  const toggleMuteBgm = useCallback(() => {
    const next = !mutedBgm;
    setMutedBgm(next);
    storage.set(STORAGE_KEYS.BGM_MUTED, next);
    next ? pause() : play();
  }, [mutedBgm, play, pause]);

  // unused
  const changeVolumeBgm = useCallback(
    (v) => {
      const val = Math.min(1, Math.max(0, v));
      setVolumeBgm(val);
      storage.set(STORAGE_KEYS.BGM_VOLUME, val);
      sound?.volumeBgm(val);
    },
    [sound]
  );

  return { mutedBgm, volumeBgm, toggleMuteBgm, changeVolumeBgm };
}
