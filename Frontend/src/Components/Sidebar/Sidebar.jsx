import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/AdminAssets/assets'
import { Link,NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
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


        </div>
        
    </div>
  )
}

export default Sidebar