import Card from '../Card/Card';

export default function Gameboard({ cards, onCardClick }) {
  return (
    <div className="w-[80vw] grid [grid-template-columns:repeat(auto-fit,_150px)] justify-center gap-8 p-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
}
