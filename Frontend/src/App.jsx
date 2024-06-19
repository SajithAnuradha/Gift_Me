import React, { useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/User/Cart/Cart'
import Placeorder from './Pages/User/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { useState } from 'react'
import Searchbar from './Components/Searchbar/Searchbar'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import Add from './Pages/Admin/Add/Add'
import List from './Pages/Admin/List/List'
import Order from './Pages/Admin/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/User/Verify/Verify'
import Myorders from './Pages/User/Myorders/Myorders'
import { Outlet } from 'react-router-dom'
import { StoreContext } from './context/StoreContext'


function App() {
  const {role,setRole}=useContext(StoreContext)
 
  const [showLogin,setShowLogin]=useState(false)
  const [showSearch,setSearch]=useState(false)
  return (
    
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    {showSearch & role==='user'?<Searchbar setSearch={setSearch}/>:<></>}
    <Navbar  setShowLogin={setShowLogin} setSearch={setSearch}/>
    <div className='app'  >
      <Outlet/>
      
     
      {/* <Routes  >
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Placeorder/>}></Route>
       
       
      
               <Route path='/admin'element={<Dashboard/>}>  </Route> 
               <Route path='/admin/add' element={<Add/>}></Route>
               <Route path='/admin/list' element={<List/>}></Route>
               <Route path='/admin/order' element={<Order/>}></Route>
        
               <Route path='/verify' element={<Verify/>}></Route>
               <Route path='/myorders' element={<Myorders/>}></Route>


        </Routes> */}
       
    </div>
    <Footer/>
    </>
  )
}

export default App