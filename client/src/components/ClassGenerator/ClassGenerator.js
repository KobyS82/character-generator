import React from 'react'
import { useState } from 'react';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

const ClassGenerator = () => {
   const characterClass = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard','Artificer'];
   let randomValue = characterClass[Math.floor(Math.random() * characterClass.length)];
   let position = characterClass.indexOf(randomValue);
   let [stat, setStat] = useState(0);
   
   //console.log(randomValue);
   //console.log(position);
   //console.log('jw');

  return (
  <div className="columns-7 flex flex-row w-full justify-space-between border-black">
      <div className="w-40 h-[100px] bg-black rounded my-6">
      <p className="text-white bg-transparent font-semibold py-2 px-4 rounded text-center text-[20px]">Classssssssssssss</p>
         <div className="h-20 w-40 rounded-full bg-black border border-white flex justify-center items-center">
            <p className="text-white text-center self-center text-[30px]">
            {stat}</p>
         </div>
         <div className="mb-20 pb-3">
            <button className="absolute flex items-center justify-center mx-[48px] hover:text-gray-500 hover:rounded transform transition-all duration-300 hover:scale-110 pb-[25px]"
            onClick={() => setStat(characterClass[Math.floor(Math.random() * characterClass.length)])}>
               
            <FaDiceOne size={64} />
            </button>
         </div>
      </div>   
   </div>
   // <div>ClassGenerator</div>
    

  )
}

export default ClassGenerator