import { PrimaryBtn, SecondaryBtn } from '../Buttons/Buttons';

import './Modals.css';

export default function WinModal({ onKeepPlaying, onQuit, level }) {
  return (
    <div className="dialog__backdrop">
      <dialog open className="dialog dialog-win">
        <h1>You Won!</h1>
        <p>
          {level === 'HARD'
            ? 'You mastered the hardest level! Keep playing to challenge yourself further.'
            : 'Would you like to keep playing at the next level or restart?'}
        </p>
        <div className="dialog__btn-wrapper">
          <SecondaryBtn name="Quit" onClick={onQuit} />
          <PrimaryBtn name="Continue" onClick={onKeepPlaying} />
        </div>
      </dialog>
    </div>
  );
}
