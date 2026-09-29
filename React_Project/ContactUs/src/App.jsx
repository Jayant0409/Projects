import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Contactus from './components/Contactus'
import Button from './components/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function App() {
   
  return (
    <>
    <div>
     <Navbar/>
     <Contactus/>
     <div>
     <div className='flex ml-20 gap-10' >
     <Button text="Via Support Chat" icon = {<MdOutlineMessage />}/>
     <Button text="Via Call " icon = {<IoIosCall />}/>
     </div>
     <Button text="Via Email form" icon = {<MdOutlineMessage />}/>
     </div>
    </div>
     
    </>
  )
}

export default App
