import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/cartSlice';

const FrontItem = ({item}) => {
    const dispatch = useDispatch();
  return (
    
         <div className="single-item">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
                <div className='desc'>{item.desc}</div>
                <span>
                  Price : Rs. {item.price}
                  <del className="cut">Rs. {item.amount}</del>
                </span>
                <button className="btn" onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
            </div>
      
    
  )
}

export default FrontItem
