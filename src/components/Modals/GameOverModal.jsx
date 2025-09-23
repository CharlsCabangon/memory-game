export default function GameOverModal({ onRestart }) {
  return (
    <dialog open>
      <h1>Game Over</h1>
      <button onClick={onRestart}>Restart</button>
    </dialog>
  );
}
