import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/navbar'
import Data from './Quotes/list'

function App() {

  return (
    <>
     <Navbar/>
     <Data/>
    </>
  )
}

export default App
