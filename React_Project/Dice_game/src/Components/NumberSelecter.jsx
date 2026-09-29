import React, { useState } from 'react'

const NumberSelecter = ({selectedNumber, setSelectedNumber}) => {
   
    const arr = [1,2,3,4,5,6]
//  console.log(selectedNumber)
  return (
    <div>
    <div className='w-[522px] h-[100px] flex justify-center items-center gap-5 text-lg font-bold  '>
          {
            arr.map((value,i)=> (
            <Box key={i} 
            onClick={()=> setSelectedNumber(value)} 
            isSelected = {value === selectedNumber}
            > 
            {value} 
            </Box>
            ))
          }

    </div>
    <div className='flex justify-end p-2'>
      <p className='text-xl font-bold'  >Select Number</p>
    </div>
   </div>
  )
}

 function Box({children, onClick, isSelected}){
     return(
     <div className= {` size-[72px] border-2 border-black flex items-center justify-center cursor-pointer ${isSelected ? "bg-black text-white"  : "bg-white text-black" } `} onClick={onClick} >{children}</div>
     )
}

export default NumberSelecter