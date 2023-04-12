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
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Spells</h1>
        <br></br>
        <br></br>
        <h3 className='text-black'> Use this spells cheetsheet to gain the advantage </h3>
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

  /*This api is from Open5e (https://open5e.com/) */