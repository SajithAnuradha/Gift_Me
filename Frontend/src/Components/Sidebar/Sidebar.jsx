import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/UserAssets/assets'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar-menu'>
        
        <div className="logo">
        <Link to='/'>  <img src={assets.logo} alt=''/>
        </Link> 
        </div>
       

        <div className='menu-list'>
        <Link to='/admin/'>
            <a href='#' className='item'>
                <img src={assets.add_icon} alt=''/>
                <p>Dashboard</p>

            </a></Link>
            <Link to='/admin/add'>
            <a href='#' className='item'>
                <img src={assets.add_icon} alt=''/>
                <p>Add Items</p>

            </a></Link>
             <Link to='/admin/order'>   
            <a href='#' className='item'>
                <img src={assets.order_icon} alt=''/>
                <p>Order Items</p>

            </a>
            </Link>
            <Link to='/admin/list'>
            <a href='#' className='item'>
                <img src={assets.order_icon} alt=''/>
                <p> Gifts List</p>

            </a>
            </Link>

        </div>
        
        
    </div>
  )
}

export default Sidebar






