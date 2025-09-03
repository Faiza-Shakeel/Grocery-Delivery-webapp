import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
 
 
function App() {
 
const isSeller = useLocation().pathname.includes('seller')
  return (
    <>
    {isSeller ? null :   <NavBar/> }
  
        <div className={`${isSeller? "" : "px-6  md:px-16 lg:px-24"}  `}>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    </>
  )
}

export default App
