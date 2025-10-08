import React from 'react'
import Navbar from './components/Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className="min-h-screen w-full mb-4 bg-cover bg-center flex items-center overflow-hidden bg-[url('/header_img.png')]"  id= 'Header'>

      <Navbar/>

      <motion.div
       initial = {{opacity:0, y:100}}
       transition = {{duration: 1.5}}
       whileInView = {{opacity:1, y:0}}
       viewport = {{once: true}}
       
      className='container  text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl max-w-3xl sm:text-6xl md:text-[82px] font-semibold pt-20 inline-block '>Explore homes that fits your dreams
        </h2>
       <div className='space-x-5 mt-16'>

           <a href="#Projects" className='border border-white rounded px-8 py-3 '>Projects</a>
           <a href="#Contact" className=' bg-blue-500 rounded px-8 py-3' >Contact Us</a>

       </div>
      </motion.div>
    </div>
  )
}

export default Header