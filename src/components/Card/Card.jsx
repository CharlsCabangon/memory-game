export default function Card({ card, onClick }) {
  return (
    <div
      className="poke-card__container"
      onClick={() => onClick(card)}
      tabIndex={0}
      aria-disabled={card.isClicked}
    >
      <img src={card.image} alt={card.name} className="poke-card__name" />
      <h2 className="poke-card__name">{card.name}</h2>
    </div>
  );
}
