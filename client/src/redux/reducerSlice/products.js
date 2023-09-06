import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cartList: [],
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name.
// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, actions) {
      const existingCartState = [...state.cartList];
      // const newItem= actions.payload
      // const existingItem= state.cartList.find(
      //   item=>item._id===newItem._id
      //   )
      //   if(existingItem){
      //     existingItem.quantity += 1
      //   } else{
      existingCartState.push(actions.payload);

      //   }
      return {
        ...state,
        cartList: existingCartState,
      };
    },
    removeFromCart(state, action) {
      let initialCart = [...state.cartList];

      const deleteItem = action.payload;
      initialCart = initialCart.filter((item) => item._id !== deleteItem._id);
      // const initialCart=[...state.cartList];
      // const deleteItem=actions.payload;
      // initialCart.filter((item)=>item._id!==deleteItem._id)
      return {
        ...state,
        cartList: initialCart,
      };
    },
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
