async function fetchPokemon(id) {
  const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await promise.json();

  return {
    id: data.id,
    name: data.name,
    // image: data.sprites.front_default,
    image: data.sprites.other['official-artwork'].front_default,
  };
}

export default async function fetchPokemons(count) {
  const promises = [];

  for (let i = 1; i <= count; i++) {
    const randomId = Math.floor(Math.random() * 898) + 1;
    promises.push(fetchPokemon(randomId));
  }

  const pokemons = await Promise.all(promises);

  return pokemons;
}
