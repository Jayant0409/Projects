import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import Role_Dice from './Role_Dice'


const Game_page = () => {
       const [score, setScore] = useState()
       const [selectedNumber, setSelectedNumber] = useState()
       const [currentDice, setCurrentDice] = useState(1);


          const generateRandomNumber = ()=>{
          const random = Math.floor(Math.random() * 6) + 1   // 1–6
          console.log(random)
          return random
       }
          if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
            }
            else{
              setScore((prev) => prev - 2)
            }


       const roleDice = () => {

        const randomNumber = generateRandomNumber()
       setCurrentDice((e) => randomNumber )
       }

  return (
  <div>
 
    <div className=' bg-blue-300 mt-16 m-auto flex items-center justify-between w-[1280px] h-[151px]'>
          <TotalScore/>
          <NumberSelecter selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber}/>
          
      </div>
      <Role_Dice currentDice = {currentDice} roleDice = {roleDice} />
      

 </div>
  )
}

export default Game_page