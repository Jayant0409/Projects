import React from 'react'
import '../App.css'

const Start_game = ({toggle}) => {

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='bg-blue-200 w-[1182px] h-[522px] flex justify-center items-center'>

     
        <div className='w-[649px] h-[522px] '>
            <img src="./images/Dices.png" alt="" />
        </div>
        <div>
        <div className='text-[92px] font-bold '>DICE GAME</div>
        <div className='flex justify-end'>
         <button type="button" onClick={toggle} className=' bg-black text-white cursor-pointer text-base hover:bg-white hover:text-black hover:border-2 transition-colors duration-200 ease-in px-[18px] py-[10px] w-[220px] h-[44px] rounded-xl'>Play Now</button>
        </div>
           </div>
      
 </div>
         </div>

  )
}

export default Start_game