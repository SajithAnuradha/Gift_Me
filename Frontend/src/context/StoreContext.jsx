import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems]=useState({});
     const url='http://localhost:4000';
     const [token,setToken]=useState("")
     const [gift_list,setGiftList]=useState([])
     const [role,setRole]=useState("")
     
     const fetchGiftList=async ()=>{
      const response=await axios.get(url+"/api/gift/list")
      if (response.data.success){
        setGiftList(response.data.data)
      }
      else {
        console.log(response.data.message)
      }  }




    const fetchRole=async (token)=>{
    
      if (token){

        console.log("fetch role")
      const response=await axios.post(url+"/api/role/find",{},{headers:{token}})
      if (response.data.success ){
        setRole(response.data.data)
        
        console.log(response.data.data)

      }
      
      }
      else {
        setRole("user")
      }
     }



    const loadCartData=async(token)=>{
      const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
      // console.log(response.data.cartData)
    
        setCartItems(response.data.cartData)
      
      
    }


    const addToCart=async (itemId)=>{
        if (!cartItems[itemId]){
            setCartItems ((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token){
         const response= await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
          toast.success(response.data.message)

        }
}






const removecart= async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

        if (token){
           const response=await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
           toast.success(response.data.message)
        }
  
  
      }


    


   const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems){
      if (cartItems[item]>0){
        let itemInfo=gift_list.find((product)=>product._id===item)
        totalAmount+=itemInfo.price*cartItems[item];
      }
   
    }
    return totalAmount;
   }

  useEffect(()=>{
    
    async function loadData (){
    console.log("load data")
      await fetchGiftList()
      if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        fetchRole(localStorage.getItem("token"))
       if (role==='user'){
        await loadCartData(localStorage.getItem("token"))
       }
       
      }
    }


    loadData();
  },[])



   const contextValue = {
    gift_list,cartItems,setCartItems,addToCart,removecart,getTotalCartAmount,url,
    setToken,token,role,setRole
    };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
