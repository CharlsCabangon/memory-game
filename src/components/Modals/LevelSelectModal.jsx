import PropTypes from 'prop-types';

import clsx from 'clsx';
import { PrimaryBtn } from '../Buttons/Buttons';
import { LEVELS } from '@/lib/levels';

export default function LevelSelectModal({ onSelect }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <dialog
        open
        className={clsx(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'flex flex-col items-center justify-center gap-4',
          'w-[25vw] min-h-[30vh] pt-8 pb-6 px-8',
          'font-nunito text-white text-center',
          'bg-white-muted/15 rounded-lg ring-1 ring-blue-gray shadow-lg backdrop-blur-xs'
        )}
      >
        <h2 className="text-white text-center">Choose Difficulty</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const level = e.target.level.value;
            onSelect(level);
          }}
        >
          {Object.entries(LEVELS).map(([key, val]) => (
            <label key={key} className="text-white text-center flex gap-4 mb-2">
              <input
                type="radio"
                name="level"
                value={key}
                className="accent-vivid-yellow"
                required
              />
              {val.level}
            </label>
          ))}
          <div className="flex justify-center mt-8">
            <PrimaryBtn name="Start" type="submit" />
          </div>
        </form>
      </dialog>
    </div>
  );
}

LevelSelectModal.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
