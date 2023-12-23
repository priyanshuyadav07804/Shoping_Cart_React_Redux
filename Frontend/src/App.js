import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import CartItem from "./component/CartItem";
import ShowItem from "./component/ShowItem";

function App() {
  
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ShowItem/>}>
        </Route>
        <Route path="/cart-item/" element={<CartItem/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
