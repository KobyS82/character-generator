import React from 'react'
import { useState } from 'react';
import { FaDiceD20 } from "react-icons/fa";

const RaceGenerator = () => {
  const characterClass = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
  let [stat, setStat] = useState(0);

 return (
<div className="py-[50px] flex flex-row w-full justify-center">
     <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
     <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Race</p>
        <div className="h-20 w-40 rounded-full bg-purple-400 border-white flex justify-center items-center">
           <p className="text-white text-center self-center text-[30px]">
           {stat}</p>
        </div>
        <div className="mb-20 py-[2px]">
           <button className="absolute flex items-center justify-center mx-[48px] hover:text-purple-400 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
           onClick={() => setStat(characterClass[Math.floor(Math.random() * characterClass.length)])}>
           <FaDiceD20 size={64} />
           </button>
        </div>
     </div>
</div>
 )
}

export default RaceGenerator