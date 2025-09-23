export default function WinModal({ onRestart }) {
  return (
    <dialog open>
      <h1>You Won!</h1>
      <button onClick={onRestart}>Restart</button>
    </dialog>
  );
}
