import React from 'react';
import { getYelp } from './services/fetch-utils';
import { useState } from 'react';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);

  async function fetchYelp() {
    const data = await getYelp(yelpQuery);
    setBusinesses(data.businesses);
  }
  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchYelp();
    setYelpQuery('');
  }
  return (
    <div>
      <form onSubmit={handleYelpSubmit}>
        <input onChange={e => setYelpQuery(e.target.value)}></input>
        <button>Search</button>
      </form>
      <div>
        {
          businesses.map((business, i) => <div key={business.name + i}>
            <p>{business.name}</p>
            <img src={business.image_url}></img>
          </div>)
        }
      </div>
    </div>
  );
}
