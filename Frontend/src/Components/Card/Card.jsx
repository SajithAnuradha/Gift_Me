import React from 'react'
import './Card.css'
import Contentheader from '../../Pages/Admin/Dashboard/Contentheader/Contentheader'
import Features from '../../Pages/Admin/Dashboard/Features/Features'
import Add from '../../Pages/Admin/Add/Add'
import Order from '../../Pages/Admin/Order/Order'
import List from '../../Pages/Admin/List/List'


function Card() {
  return (
    <div className='card'>
       <Contentheader/>
       <Features/>
       
    </div>
  )
}

export default Card