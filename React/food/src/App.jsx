import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Card from './components/card/card'
import Restrocard from './components/card/restrocard'

function App() {



  return (
    <>
     <div>
       <Navbar/>
     <div style={{
        // border : "2px solid red",
        marginTop:"0",
        backgroundColor: "LightGray",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap : "wrap",
        gap: "1rem",
        // marginTop : "1rem"
     }}>
     <Restrocard/>
     </div>
     </div>
    </>
  )
}

export default App
