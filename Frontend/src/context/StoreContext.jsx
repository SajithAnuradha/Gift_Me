import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems]=useState({});


    const addToCart=(itemId)=>{
        if (!cartItems[itemId]){
            setCartItems ((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
   



   

         
    }
    const removecart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  
  
      }


    const contextValue = {
    food_list,cartItems,setCartItems,addToCart,removecart
    };


//  useEffect (()=>{
//     console.log(cartItems)
//  },[cartItems])



  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
