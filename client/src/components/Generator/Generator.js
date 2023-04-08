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

<div className="columns-7 flex flex-row w-full justify-space-between border-black">

  <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceOne size={64} />
    </button>
    </div>

    <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat1}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat1(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceTwo size={64} />
    </button>
    </div>

    <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat2}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat2(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceThree size={64} />
    </button>
    </div>

    <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat3}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat3(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceFour size={64} />
    </button>
    </div>

    <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat4}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat4(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceFive size={64} />
    </button>
    </div>

    <div className="w-40 h-[100px] bg-black rounded my-6">
    <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center">Strength</p>
      <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
        <p className="text-white text-center self-center">
        {stat5}</p>
      </div>
      <button className="absolute flex items-center justify-center mx-[48px]"
      onClick={() => setStat5(Math.floor(Math.random() * 16) + 3)}>
    <FaDiceSix size={64} />
    </button>
    </div>


</div>

  );
};

export default Generator;