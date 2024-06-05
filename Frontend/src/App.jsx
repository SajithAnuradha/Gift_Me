import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { useState } from 'react'

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'  >
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/order' element={<Placeorder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App