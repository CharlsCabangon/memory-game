import { PrimaryBtn } from '../Buttons/Buttons';

import './Modals.css';

export default function GameOverModal({ onQuit }) {
  return (
    <div className="dialog__backdrop">
      <dialog open className="dialog dialog-gameover">
        <h1>Game Over</h1>
        <div className="dialog__btn-wrapper">
          <PrimaryBtn name="Quit" onClick={onQuit} />
        </div>
      </dialog>
    </div>
  );
}
