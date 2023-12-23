import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../feature/cart/cartSlice";

const CartItem = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        { cartItems.length === 0 ? <h1>Nothing To Show</h1>:<h1>You Have Selected</h1>}
        <div className="column">
          {cartItems.map((item) => (
            <div className="cart-single-item" key={item.id}>
              <div className="cart-img">
                <img src={item.img} alt="" />
              </div>

              <div className="cart-desc">
                <p>{item.title}</p>
                <div>{item.desc}</div>
                <span>
                  Price : Rs. {item.price}{" "}
                  <del className="cut">Rs. {item.amount}</del>
                </span>
              </div>
              <button className="cart-btn" onClick={()=>dispatch(removeFromCart(item.id))} >REMOVE</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItem;
