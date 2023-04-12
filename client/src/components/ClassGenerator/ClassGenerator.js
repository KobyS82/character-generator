import React from 'react'
import { useState } from 'react';
import { FaDice } from "react-icons/fa";

const ClassGenerator = () => {
   const characterClass = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard','Artificer'];
   let [stat, setStat] = useState(0);

  return (
<div className="py-[50px] flex flex-row w-full justify-center">
      <div className="w-40 h-[90px] bg-gray-800 rounded my-6">
      <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Class</p>
         <div className="h-20 w-40 rounded-full bg-orange-300 border-white flex justify-center items-center">
            <p className="text-white text-center self-center text-[30px]">
            {stat}</p>
         </div>
         <div className="mb-20 py-[2px]">
            <button className="absolute flex items-center justify-center mx-[48px] hover:text-orange-300 hover:rounded text-gray-800 transform transition-all duration-300 hover:scale-110"
            onClick={() => setStat(characterClass[Math.floor(Math.random() * characterClass.length)])}>
            <FaDice size={64} />
            </button>
         </div>
      </div>
</div>
  )
}

export default ClassGenerator