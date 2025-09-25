import { PrimaryBtn } from '../Buttons/Buttons';
import { LEVELS } from '@/utils/levels';

import './Modals.css';

export default function LevelSelectModal({ onSelect }) {
  return (
    <div className="dialog__backdrop">
      <dialog open className="dialog dialog-level-select">
        <h2>Choose Difficulty</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const level = e.target.level.value;
            onSelect(level);
          }}
        >
          {Object.entries(LEVELS).map(([key, val]) => (
            <label key={key}>
              <input type="radio" name="level" value={key} required />
              {val.level}
            </label>
          ))}
          <div className="dialog__btn-wrapper">
            <PrimaryBtn name="Start" type="submit" />
          </div>
        </form>
      </dialog>
    </div>
  );
}
