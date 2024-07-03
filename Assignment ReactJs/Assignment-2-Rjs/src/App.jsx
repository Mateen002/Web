// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero'
import Services from '../components/Services'

function App() {
  return(
    <>
    <div className='Container'>
      <header className="header">
    <NavBar/>
    <Hero/>
    </header>
    
      <Services/>
      </div>

    </>
  ) 
}
export default App
