import Card from '../Card/Card';

export default function Gameboard({ cards, onCardClick }) {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </>
  );
}
