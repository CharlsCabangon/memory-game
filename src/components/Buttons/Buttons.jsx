export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-white min-w-20 py-2 px-4 text-prussian-blue text-sm font-bold border-none rounded-4xl cursor-pointer hover:bg-white-muted"
    >
      {name}
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-none min-w-20 py-2 px-4 text-white text-sm font-bold border-2 border-white rounded-4xl cursor-pointer hover:bg-white-muted"
    >
      {name}
    </button>
  );
}
