import Card from '../Card/Card';

import './Gameboard.css';

export default function Gameboard({ cards, onCardClick }) {
  return (
    <div className="gameboard__container">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
}
