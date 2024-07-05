// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import NavBar from "../components/NavBar"
import Hero from '../components/Hero'
import Services from '../components/Services'
import Offers from '../components/Offers'
import Portfolio from '../components/Portfolio'


function App() {
  return(
    <>
    <div className='Container'>
      <header className="header">
    <NavBar/>
    <Hero 
    heroPintro="Introduction to"
    heroH1heading="CREATIVE METEOR"
    contentP="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad nihil quis illum modi itaque tempora! Suscipit reprehenderit officia nemo porro ipsum? Atque, repellat."
    heroBtn="DISCOVER MORE"
    />
    </header>

      <Services/>
     <Offers/>
<Portfolio/>
      </div>

    </>
  ) 
}
export default App
