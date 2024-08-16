import React, { useEffect } from 'react'
import { assets } from '../../../../assets/AdminAssets/assets'
import './Features.css'
import axios from  'axios'

const Features = () => {


   const fetchCount=async ()=>{
    
      const gifts=await axios.get('http://localhost:4000/api/gift/count')
      const users=await axios.get('http://localhost:4000/api/user/count')
      const orders=await axios.get('http://localhost:4000/api/order/count')

     if (gifts.data.success & users.data.success & orders.data.success ){
        setData({
            ...data,
            total_gifts:gifts.data.count,
            total_customers:users.data.Count,
            total_orders:orders.data.count

        })

     }
     else {
        console.log('Error')

     }


   }


    const [data, setData] = React.useState(
    
                  {
    total_customers: 1000,
    total_orders: 1000,
    total_gifts: 2220
})

useEffect(()=>{
    fetchCount();
},[])





const features = [
    {
        title: "Total Customers",
        amount: data.total_customers,
        icon: assets.customer
    },
    {
        title: "Total Orders",
        amount: data.total_orders,
        icon: assets.checkout
    },
    {
        title: "Total gifts",
        amount: data.total_gifts,
        icon: assets.gift
    }
];



  return (
    <div className='feature-container'>
        {
            features.map((feature,index)=>{
                return(
                    <div className='feature' key={index}>
                         <div className='feature-title'>
                        <p>{feature.title}</ p>
                        </div>
                       
                        <div className='feature-cover'>
                        <img src={feature.icon} alt=''/>
                        </div>
                        <div className='feature-amount'>
                        <p>{feature.amount}</p>
                        </div>
                       
                        
                    </div>
                )
            })
        }

    </div>
  )
}

export default Features