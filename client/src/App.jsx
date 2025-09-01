import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/> 
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    </>
  )
}

export default App
