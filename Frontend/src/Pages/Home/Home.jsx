import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import GiftDisplay from '../../Components/GiftDisplay/GiftDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

function Home() {

 const [category,setCategory]=useState("All")



  return (
    <div >
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <GiftDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home