  import React, { useState, useEffect } from 'react';

  function Spells() {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
      fetch('https://api.open5e.com/spells')
      .then(response => response.json())
      .then(data => setSpells(data.results))
      .catch(error => console.error(error));
    }, []);

    return (
      <div className='text-gray-500 py-4 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Spells</h1>
        <h3 className='text-black'>Use this spells cheetsheet in your battles. Be smart and fight well! </h3>
        <br></br>
        <ul>
          {spells.map(spell => (
            <li key={spell.slig} className='text-black mb-2'>{spell.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Spells