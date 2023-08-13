import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
 cartList:[]
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 
// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, actions){
     const existingCartState= [...state.cartList]
     existingCartState.push(actions.payload)
     return{
        ...state,
        cartList: existingCartState
     }
    },
  }
});

export const {addToCart} = productsSlice.actions;
export default productsSlice.reducer;