import React from 'react';
import {useEffect, useState} from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

const Generator = () => {

  let [stat, setStat] = useState(0);
  let [stat1, setStat1] = useState(0);
  let [stat2, setStat2] = useState(0);
  let [stat3, setStat3] = useState(0);
  let [stat4, setStat4] = useState(0);
  let [stat5, setStat5] = useState(0);

return (

<div className="columns-6 flex flex-row w-full justify-between border-black justify-around">

  <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Strength</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat}</p>
      </div>
      <div className="mb-20">
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceOne size={64} />
    </button>
    </div>
    </div>

    <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Dexterity</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat1}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat1(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceTwo size={64} />
    </button>
    </div>

    <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Constitution</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat2}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat2(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceThree size={64} />
    </button>
    </div>

    <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Intelligence</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat3}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat3(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceFour size={64} />
    </button>
    </div>

    <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Wisdom</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat4}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat4(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceFive size={64} />
    </button>
    </div>

    <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Charisma</p>
      <div className="h-20 w-40 rounded-full bg-green-300 flex justify-center items-center">
        <p className="text-white text-center self-center text-[30px]">
        {stat5}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px] hover:text-green-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
      onClick={() => setStat5(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceSix size={64} />
    </button>
    </div>


</div>

  );
};

export default Generator;