export async function getPoke(filter) {
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/pokemon?pokeQuery=${filter}`);

  const data = await rawData.json();
  return data;
    
}