import React from 'react'
import { assets } from '../../../../assets/AdminAssets/assets'
import './Features.css'
const Features = () => {
const data = {
    total_customers: 1000,
    total_orders: 1000,
    total_gifts: 2220
};

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