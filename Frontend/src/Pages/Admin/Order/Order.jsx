import React, { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../../context/StoreContext'
import {toast} from "react-toastify"
import axios from 'axios'
import { assets } from '../../../assets/AdminAssets/assets'
import Sidebar from '../../../Components/Sidebar/Sidebar'
const Order = () => {
 const {url}=useContext(StoreContext)

 const [orders,setOrders]=useState([])
 const fetchAllOrders=async ()=>{
  const response=await axios.get(url+'/api/order/list')
  if (response.data.success){
    setOrders(response.data.data)
    console.log(response.data.data)

  }
  else {
    toast.error("Error")
    
  }

 }

const statusHandler=async (event,orderId)=>{
  const response=await axios.post(url+"/api/order/status",{
    orderId,
    status:event.target.value
  })
  if (response.data.success){
    await fetchAllOrders();
  }

}
 useEffect(()=>{
  fetchAllOrders();
 },[])


  return (
    <div className='order-contain'>
      <Sidebar/>
    <div className='order add'>
      <h1>Order Page</h1>
      <div className="order-list">
        {
          orders.map((order,index)=>(
            <div key={index}className="order-item">
                     <img src={assets.parcel} alt="" />
                     <div>
                      <p className='order-item-gift'>
                        {
                          order.items.map((item)=>{
                            if (index===order.items.length-1){
                              return item.name+ " x " + item.quantity

                            }
                            else {
                              return item.name + " x " + item.quantity + ","
                            }
                          })
                        }
                      </p>
                      <p className='order-item-name'>
                        {
                          order.address.firstName + " " + order.address.lastName
                        
                        }
                      </p>
                      <div className='order-item-address'>
                       <p>{order.address.street }</p> 
                       <p>
                       {
                           order.address.city + " " + order.address.state + " " + order.address.zipcode
                        
                        }
                       </p>
                      </div>
                      <p className='order-item-phone'>
                        {
                          order.address.phone
                        }
                      </p>
                     </div>
                     <p>Items:{order.items.length}</p>
                     <p>${order.amount}</p>
                     <select onChange={(event)=>{statusHandler(event,order._id)}} value={order.status}>
                        <option value="Gift is being readied">Gift is being readied</option>
                        <option value="Out For Delivery">Out For Delivery</option>
                        <option value="Delivered">Delivered</option>
                     </select>

            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Order