import { LEVELS } from '@/utils/levels';

export default function LevelSelectModal({ onSelect }) {
  return (
    <dialog open>
      <h2>Choose Difficulty</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const level = e.target.level.value;
          onSelect(level);
        }}
      >
        {Object.entries(LEVELS).map(([key, val]) => (
          <label key={key} style={{ display: 'block', margin: '8px 0' }}>
            <input type="radio" name="level" value={key} required />
            {val.level}
          </label>
        ))}
        <button type="submit">Start Game</button>
      </form>
    </dialog>
  );
}
