import { motion } from 'framer-motion';
import Card from '../Card/Card';

export default function Gameboard({ cards, onCardClick, isFlipping }) {
  return (
    <motion.div
      layout
      className="w-[80vw] flex flex-wrap justify-center gap-8 p-4"
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          layout // each card animates to new position
          transition={{
            layout: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <Card card={card} onClick={onCardClick} isFlipping={isFlipping} />
        </motion.div>
      ))}
    </motion.div>
  );
}
