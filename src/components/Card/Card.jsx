import './Card.css';
import { capitalizeWords } from '@/utils/stringUtils';

export default function Card({ card, onClick }) {

  function uppercase(str) {
    str.indexAt

    return 
  }

  return (
    <div
      className="poke-card__container"
      onClick={() => onClick(card)}
      tabIndex={0}
      aria-disabled={card.isClicked}
    >
      <img src={card.image} alt={card.name} className="poke-card__sprite" />
      <h2 className="poke-card__name">{capitalizeWords(card.name)}</h2>
    </div>
  );
}
