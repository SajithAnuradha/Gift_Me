import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { useState } from 'react'
import Searchbar from './Components/Searchbar/Searchbar'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  const [role,setRole]=useState('admin')
  const [showLogin,setShowLogin]=useState(false)
  const [showSearch,setSearch]=useState(false)
  return (
    
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {showSearch & role==='user'?<Searchbar setSearch={setSearch}/>:<></>}
    <div className='app'  >
      <Navbar  setShowLogin={setShowLogin} setSearch={setSearch} role={role} />
      <Routes>
       <Route path='/' element={<Home/>}></Route>
      {
        role==='user'?<Route path='/cart' element={<Cart/>}></Route>:<Route path='/dashboard' element={<Dashboard/>}></Route>
      }
       
       <Route path='/order' element={<Placeorder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App