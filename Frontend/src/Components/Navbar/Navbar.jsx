import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/UserAssets/assets'
import { Link } from "react-router-dom";
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin,setSearch,role}) {

   const [menu,setMenu]=useState("home");
   const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
   console.log(token)

    return (
        <div className='navbar'>
         <Link to='/'>
         <img src={assets.logo} alt="" className="logo" /></Link>   
            <ul className="navbar-menu">
              < Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</Link>
              <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>Menu</a>
              <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active":""}>Mobile-app</a>
              <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":""}>Contact Us</a>
             </ul>
             <div className="navbar-right">
                
                <img onClick={()=>setSearch(true)} src={assets.search_icon} alt="" className="search-icon" />
                <div className="navbar-search-icon">
               { role ==='user'?<Link to='/cart'>    <img  src={assets.basket_icon} alt="" className="basket-icon" />
                </Link>:<Link to='/admin'>    <img  src={assets.dashboard_icon} alt="" className="dashboard-icon" />
                </Link>}
                    {
                        getTotalCartAmount()? <div className='dot'></div>:<></>
                    }
                    
                </div>
                {!token?  <button onClick={()=>setShowLogin(true)}>
                        sign in
                </button>:<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt=''/>
                    <ul className='nav-profile-dropdown'>
                        <li> <img src={assets.bag_icon} alt=''/>
                        <p>Orders</p></li>
                        <hr/>
                        <li><img src={assets.logout_icon} alt=''/>
                        <p>Logout</p></li>

                    </ul>
                    
                    
                    </div>}
              
             </div>
        </div>
    )
}

export default Navbar