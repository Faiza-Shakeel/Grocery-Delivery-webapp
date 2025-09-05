import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
 import { Toaster } from 'react-hot-toast'
 import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
 
function App() {
 const {showUserLogin}=useAppContext()
const isSeller = useLocation().pathname.includes('seller')
  return (
    <>
    {isSeller ? null :   <NavBar/> }
{showUserLogin ? <Login/> : null}
  <Toaster/>
        <div className={`${isSeller? "" : "px-6  md:px-16 lg:px-24"}  `}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Products' element={<AllProducts/>}/>
            </Routes>
        </div>
        {!isSeller && <Footer className='mt-24'/>}
    </>
  )
}

export default App
