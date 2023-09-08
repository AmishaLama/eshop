import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cartList: [],
  cartTotalQuantity:0,
  cartTotalAmount:0,
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name.
// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartList.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartList.push({ ...newItem, quantity: 1 });
      }
      return state;
    },

    removeFromCart(state, action){
      let initialCart=[...state.cartList];
      const deleteItem = action.payload;
      initialCart = initialCart.filter((item) => item._id !== deleteItem._id);
      return {
        ...state,
        cartList: initialCart,
      };
    },

    decreaseFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartList.find((item) => item._id === newItem._id);
      if (existingItem.quantity>1) {
        existingItem.quantity -= 1;
      } else if (existingItem.quantity=== 1) {
          const nextCartItems = state.cartList.filter(
            (item) => item._id !== newItem._id
          );
          state.cartList = nextCartItems;
      }
      return state;
    },

    clearCart(state, action) {
      state.cartList = [];
    },
  },
});

export const { addToCart, removeFromCart,decreaseFromCart,clearCart } = productsSlice.actions;
export default productsSlice.reducer;
