export default function GameOverModal({ onQuit }) {
  return (
    <dialog open>
      <h1>Game Over</h1>
      <button onClick={onQuit}>Quit</button>
    </dialog>
  );
}
