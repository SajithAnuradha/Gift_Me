import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/UserAssets/assets'
import { Link,NavLink } from 'react-router-dom'

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






{/* <div className='sidebar-options'>
            <NavLink to='/admin/add' className="sidebar-option">
                <img src={assets.add_icon} alt=''/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/admin/list' className="sidebar-option">
                <img src={assets.order_icon} alt=''/>
                <p>List Items</p>
            </NavLink>
            <NavLink to='/admin/order' className="sidebar-option">
                <img src={assets.order_icon} alt=''/>
                <p>Orders</p>
            </NavLink>


        </div> */}