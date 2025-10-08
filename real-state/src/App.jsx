import React from 'react'
import Header from './Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer,} from 'react-toastify';
import Footer from './components/Footer'




const App = () => {
  return (
    <>
   <ToastContainer/>      { /* for tostify notification  on form submition*/}
    <Header/>
    <About/>
    <Projects/>
    <Testimonails/>
    <Contact/>
    <Footer/>
   

    
    
    </>
  )
}

export default App  