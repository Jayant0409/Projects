import React, { useState } from 'react'


const Role_Dice = ({currentDice, roleDice}) => {
    

    //    const generateRandomNumber = ()=>{
    //        console.log(Math.floor((Math.random()*6) + 1 ))
    //        return Math.floor((Math.random()*6) +1 )
    //    }

    //    const Role_Dice = () => {
    //     const randomNumber = generateRandomNumber()
    //    setCurrentDice((e) => randomNumber )
    //    }

  return (
    
         <div className='flex flex-col items-center gap-3 mt-2'>
          <div className='w-44 flex flex-col justify-center items-center'  >
            <img src={`./images/Dices/dice_${currentDice}.png`} onClick={roleDice}  alt="Dice_img" />
          </div>
            <h1>Click on Dice to Roll</h1>

          <div className='flex flex-col items-center gap-2'>
             <button type="button" className=' bg-white text-black border-2 border-black cursor-pointer text-base transition-colors duration-200 ease-in px-[18px] py-[10px] w-[200px]  rounded-xl'>Reset Score</button>

             <button type="button" className=' bg-black text-white cursor-pointer text-base hover:bg-slate-700 transition-colors duration-200 ease-in px-[18px] py-[10px] w-[200px]  rounded-xl'>Show Rules</button>
          </div>
</div>
    
  )
}

export default Role_Dice