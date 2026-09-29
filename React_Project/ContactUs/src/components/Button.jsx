import React from 'react'


const colorvariant ={
      black: "bg-black text-white",
      white: "bg-white text-black"
 }

const Button = (props) => {
     const variant = props.variant     

  return (
    <div className="flex justify-start">
    
        <button className= {`p-3 gap-2 flex items-center justify-center border h-[40px] rounded ${colorvariant[variant]}`}> {props.icon} {props.text}</button>

    </div>
  )
}

export default Button