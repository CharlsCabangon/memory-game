import { generateUniqueRandomIds } from '@/utils/generateId';

async function fetchPokemon(id, signal) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const msg = `Failed to fetch pokemon ${id}: ${res.status} ${res.statusText} ${text}`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites?.other?.['official-artwork']?.front_default ??
      data.sprites?.front_default ??
      null,
  };
}

export async function fetchPokemons(count, { signal } = {}) {
  const ids = generateUniqueRandomIds(count);
  const promises = ids.map((id) => fetchPokemon(id, signal));
  const pokemons = await Promise.all(promises);

  return pokemons;
}
