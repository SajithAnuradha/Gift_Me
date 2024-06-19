import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'

import {  Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <>
      
      <Sidebar />
      <div className='App'>
        <Outlet/>

      </div>
      

      
     
     
      
       
     
    </>
  )
}

export default Dashboard