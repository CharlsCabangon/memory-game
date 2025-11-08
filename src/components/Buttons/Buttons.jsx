import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSoundEffects } from '@/hooks/sound/useSoundEffects';

export function PrimaryBtn({ name, type = 'button', onClick }) {
  const { playButtonClick } = useSoundEffects();

  const handleClick = useCallback(
    (e) => {
      playButtonClick?.();
      onClick?.(e);
    },
    [playButtonClick, onClick]
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      className="bg-white min-w-20 py-2 px-4 text-prussian-blue text-sm font-bold border-none rounded-4xl cursor-pointer transition-transform duration-100 ease-out hover:bg-white-muted active:scale-90 active:bg-white active:text-prussian-blue/50"
    >
      {name}
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  const { playButtonClick } = useSoundEffects();

  const handleClick = useCallback(
    (e) => {
      playButtonClick?.();
      onClick?.(e);
    },
    [playButtonClick, onClick]
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      className="bg-none min-w-20 py-2 px-4 text-white text-sm font-bold border-2 border-white rounded-4xl cursor-pointer transition-all duration-100 ease-out hover:bg-white-muted/50 active:scale-90 active:hover:bg-white-muted"
    >
      {name}
    </button>
  );
}

PrimaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

SecondaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};
