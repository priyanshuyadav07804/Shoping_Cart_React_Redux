import React from 'react'
import "../App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../feature/cart/cartSlice";
import FrontItem from './FrontItem';


const ShowItem = () => {
    const {items} = useSelector((store)=>store.cart)
    console.log(items)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <h1>Our Items</h1>
        <div className="row">
          
          {items.map((item) => (
            <FrontItem key={item.id} item = {item}/>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default ShowItem
