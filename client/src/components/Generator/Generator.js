import React from 'react';
import {useEffect, useState} from 'react'

const Generator = () => {

  let [stat, setStat] = useState(0);
  let [stat1, setStat1] = useState(0);
  let [stat2, setStat2] = useState(0);
  let [stat3, setStat3] = useState(0);
  let [stat4, setStat4] = useState(0);
  let [stat5, setStat5] = useState(0);


return (

<div className="columns-6 flex flex-row w-full justify-space-between">

    <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-4"
      onClick={() => setStat(Math.floor(Math.random() * 16) + 3)}>
      Strength
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat}</p>
        </div>
      </div>

      <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-4"
      onClick={() => setStat1(Math.floor(Math.random() * 16) + 3)}>
      Dexterity
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat1}</p>
        </div>
      </div>

      <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-2"
      onClick={() => setStat2(Math.floor(Math.random() * 16) + 3)}>
      Constitution
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat2}</p>
        </div>
      </div>

      <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-3"
      onClick={() => setStat3(Math.floor(Math.random() * 16) + 3)}>
      Intelligence
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat3}</p>
        </div>
      </div>

      <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-5"
      onClick={() => setStat4(Math.floor(Math.random() * 16) + 3)}>
      Wisdom
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat4}</p>
        </div>
      </div>

      <div className="w-40 h-20 bg-black rounded my-6">
      <button class="text-white bg-transparent font-semibold py-2 px-4 hover:border-transparent rounded text-center mx-4"
      onClick={() => setStat5(Math.floor(Math.random() * 16) + 3)}>
      Charisma
      </button>
        <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
          <p className="text-white text-center self-center">
          {stat5}</p>
        </div>
      </div>
   
</div>

  );
};

export default Generator;