import React from 'react'
import './Searchbar.css'
import { assets } from '../../assets/UserAssets/assets'

function Searchbar({setSearch}) {
  return (
    <div className='Search'>
     Search bar
     <img onClick={()=>setSearch(false)}src={assets.cross_icon} alt=''/>
    </div>
  )
}

export default Searchbar