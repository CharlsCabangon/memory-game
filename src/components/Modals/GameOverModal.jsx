import clsx from 'clsx';

import { PrimaryBtn } from '../Buttons/Buttons';

export default function GameOverModal({ onQuit }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <dialog
        open
        className={clsx(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'flex flex-col items-center justify-center gap-12',
          'w-[25vw] min-h-[30vh] pt-8 pb-6 px-8',
          'font-nunito text-white text-center',
          'bg-white-muted/15 rounded-lg ring-1 ring-blue-gray shadow-lg backdrop-blur-xs'
        )}
      >
        <h1>Game Over</h1>
        <PrimaryBtn name="Quit" onClick={onQuit} />
      </dialog>
    </div>
  );
}
