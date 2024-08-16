import React from "react";
import "./GiftDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import GiftItem from "../GiftItem/GiftItem";

const GiftDisplay = ({category}) => {
  const { gift_list } = useContext(StoreContext);

  return (
  <div className="food-display" id='food-display'> 
    <h2>Top Gifts near you</h2>
    <div className="food-display-list">

        {gift_list.map((item,index)=>{
            if (category==="All"|| category===item.category){
                return <GiftItem key={index} id={item._id} name={item.name} 
                description={item.description} price={item.price} image={item.image} />
     
            }
                   })}
        </div>


  </div>
  ); 
};
export default GiftDisplay;
