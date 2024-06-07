import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url='http://localhost:4000';
  const[list,setList]=useState([]);

  const fetchList=async ()=>{
    const response=await axios.get(`${url}/api/gift/list`);
  //  console.log(response.data)
    if (response.data.success){
      setList(response.data.data)
    }
    else {
      toast.error('error')
    }

  }

const removegift =async (id)=>{
  const response=await axios.post(`${url}/api/gift/remove`,{id:id});
  if (response.data.success){
    toast.success(response.data.message)
     await fetchList()
  }
  else {
    toast.error(response.data.message)
  }

}


useEffect(()=>{
  fetchList()
},[])



  return (
    <div className='list-add-flex-col'>
      <p>All Gifts List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index)=>{
               return(
                <div key={index} className='list-table-format'>
                  <img src={`${url}/images/`+item.image} alt=''/>
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <p onClick={()=>removegift(item._id)} className='cursor'>x</p>
                </div>
               )
          })
        }
      </div>
    </div>
  )
}

export default List