import React from 'react';
import { useEffect, useState } from 'react';
import { getPoke } from './services/fetch-utils';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeQuery, setPokeQuery] = useState([]);

  async function fetchPokemon() {
    const data = await getPoke(pokeQuery);
    setPokemon(data.results);
  }
  useEffect(() => {
    fetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    await fetchPokemon();
    setPokeQuery('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokeQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {
          pokemon.map((poke, i) => <div key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </div>
    </div>
  );
}
