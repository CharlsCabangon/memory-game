export default function WinModal({ onKeepPlaying, onQuit, level }) {
  return (
    <dialog open>
      <h1>You Won!</h1>
      <p>
        {level === 'HARD'
          ? 'You mastered the hardest level! Keep playing to challenge yourself further.'
          : 'Would you like to keep playing at the next level or restart?'}
      </p>
      <div>
        <button onClick={onKeepPlaying}>Keep Playing</button>
        <button onClick={onQuit}>Quit</button>
      </div>
    </dialog>
  );
}
