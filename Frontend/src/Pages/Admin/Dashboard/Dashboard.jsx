import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import './Dashboard.css'


import {  Outlet } from 'react-router-dom'
import Card from '../../../Components/Card/Card'
import { assets } from '../../../assets/AdminAssets/assets'
import Profile from '../../../Components/Profile/Profile'


function Dashboard() {
  return (
    <div className='dashboard'>
    <Sidebar/>
    <div className='dashboard--content'>
      <Card/>
      <Profile/>

    </div>
  </div>
  )
}

export default Dashboard