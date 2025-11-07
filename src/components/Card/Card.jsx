import { useState, useEffect } from 'react';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { capitalizeText } from '@/utils/capitalizeText';
import cardBackImage from '@/assets/images/pokemon-card-back.webp';

export default function Card({ card, onClick, isFlipping }) {
  const [interactable, setInteractable] = useState(false);

  useEffect(() => {
    setInteractable(true);
  }, []);

  const handleClick = () => {
    if (interactable && !isFlipping) {
      onClick(card);
    }
  };

  return (
    <div className="w-[150px] h-[210px] [perspective:1000px]">
      <Tilt
        glareEnable={!isFlipping}
        glarePosition="all"
        glareBorderRadius="0.25rem"
        tiltEnable={!isFlipping && interactable}
        className={clsx(
          'w-full h-full',
          (!interactable || isFlipping) && 'pointer-events-none'
        )}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          animate={{
            rotateY: isFlipping ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          {/* front */}
          <div
            className={clsx('absolute inset-0', '[backface-visibility:hidden]')}
          >
            <button
              onClick={handleClick}
              disabled={!interactable || isFlipping}
              className={clsx(
                'w-full h-full flex flex-col items-center justify-center',
                'pt-8 pb-4 px-4 border-0 cursor-pointer',
                'rounded-sm ring-1 ring-blue-gray',
                'drop-shadow-2xl shadow-lg shadow-prussian-blue-muted/45',
                'bg-gradient-to-b from-[rgba(148,173,199,0.3)] to-[rgba(117,153,198,0.2)]',
                'transition-transform duration-200',
                'focus:outline-none focus-visible:outline focus-visible:outline-2',
                'focus-visible:outline-blue-gray focus-visible:outline-offset-2',
                'active:scale-95 disabled:cursor-not-allowed'
              )}
              aria-label={`${capitalizeText(card.name)} card${
                card.isClicked ? ' (already clicked)' : ''
              }`}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-24 h-24 object-contain mb-4 select-none pointer-events-none"
                draggable="false"
              />
              <p className="text-base font-medium text-white text-center leading-tight max-w-full truncate px-2">
                {capitalizeText(card.name)}
              </p>
            </button>
          </div>

          {/* back */}
          <div
            className={clsx(
              'absolute inset-0',
              '[backface-visibility:hidden]',
              '[transform:rotateY(180deg)]'
            )}
          >
            <img
              src={cardBackImage}
              alt="Pokemon card back"
              className="w-full h-full object-cover rounded-sm select-none pointer-events-none"
              draggable="false"
            />
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
