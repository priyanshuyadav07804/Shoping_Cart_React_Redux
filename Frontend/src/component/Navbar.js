import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { total } = useSelector((store) => store.cart);
    const navigate = useNavigate()
  return (
    <>
      <nav>
        <p onClick={()=>navigate('/')}>Shoping Cart</p>
      </nav>
      <div className="icon">
        <FontAwesomeIcon onClick={()=>navigate('/cart-item')} icon={faShoppingCart} size="lg" />
        <div>{total}</div>
      </div>
    </>
  );
};

export default Navbar;
