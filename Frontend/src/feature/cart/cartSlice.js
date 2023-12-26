import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  total: 0,
  cartItems: [],
};

export const getItems = createAsyncThunk("cart/getItems", async () => {
  const { data } = await axios.get("https://shoping-cart-react-redux-backend.vercel.app/items");
  return data.items;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.cartItems.findIndex((item) => item.id === payload.id) === -1) {
        state.total += 1;
        state.cartItems.push(payload);
      } else {
        alert("This item is already in your cart!");
      }
    },
    
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      state.total -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
