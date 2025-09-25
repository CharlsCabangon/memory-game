import './Buttons.css';

export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button className="primary-btn" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  return (
    <button className="secondary-btn" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
