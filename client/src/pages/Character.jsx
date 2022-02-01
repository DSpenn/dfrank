import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_CHARACTERS } from '../utils/queries';

function CharacterSearch() {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS);
  const characters = data?.characters || [];


  useEffect(() => {
    if (characters) {
      setFoundChar(characters)
    }
  }, [characters])

  const [name, setName] = useState('');

  const [foundChar, setFoundChar] = useState(characters);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = characters.filter((character) => {
        return character.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundChar(results);
    } else {
      setFoundChar(characters);
    }
    console.log(foundChar);
    setName(keyword);
  };

  return (
    loading ? (
      <div>Loading...</div>
    ) : (
      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Filter"
        />
        <div className="character-list" style={{ width: '95%', height: '95%', margin: 'auto', padding: '16px', }}>
          {foundChar && foundChar.length > 0 ? (
            foundChar.map((character) => (
              <Link key={character.name} to={`/character/${character.name}`}>
                <li>{character.name}</li></Link>
            ))
          ) : (
            <h1>No results found</h1>
          )}
        </div>
      </div>
    ));
}

export default CharacterSearch;