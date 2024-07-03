import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Box from "../components/Box"
function App() {
  return(
  <div className="Container">
    <Box 
    month="March" 
    year="2021" 
    day="12"
    prod="New TV"
    price="$ 799.49"
    />
    <Box 
    month="March" 
    year="2021" 
    day="28"
    prod="Car Insurance"
    price="$ 294.67"
    />
    <Box 
    month="June" 
    year="2021" 
    day="12"
    prod="New Desk (Wooden)"
    price="$ 450"
    />

  </div>
  )
}
 
export default App