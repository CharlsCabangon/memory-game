import Tilt from 'react-parallax-tilt';
import clsx from 'clsx';

import { capitalizeText } from '@/utils/capitalizeText';

export default function Card({ card, onClick }) {
  return (
    <Tilt glareEnable={true} glarePosition="all" glareBorderRadius="0.25rem">
      <article
        onClick={() => onClick(card)}
        tabIndex={0}
        aria-disabled={card.isClicked}
        className={clsx(
          'flex flex-col items-center cursor-pointer',
          'h-[210px] pt-8 pb-4 px-4',
          'rounded-sm ring-1 ring-blue-gray drop-shadow-blue-gray drop-shadow-2xl shadow-prussian-blue-muted/45 shadow-lg',
          'bg-linear-to-b from-[rgba(148,173,199,0.3)] to-[rgba(117,153,198,0.2)]'
        )}
      >
        <img src={card.image} alt={card.name} className="w-24 mb-6" />
        <h2 className="text-base font-medium text-white text-center">
          {capitalizeText(card.name)}
        </h2>
      </article>
    </Tilt>
  );
}
