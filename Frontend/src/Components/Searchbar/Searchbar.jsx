import React from 'react'
import './Searchbar.css'
import { assets } from '../../assets/assets'

function Searchbar({setSearch}) {
  return (
    <div className='Search'>
     Search
     <img onClick={()=>setSearch(false)}src={assets.cross_icon} alt=''/>
    </div>
  )
}

export default Searchbar