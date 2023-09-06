import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token:'',
  userDetails:{},
  isLoggedIn: false

 
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 
// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserDetails(state, actions){
      const {token, userDetails}= actions.payload
      return{
        ...state,
        token,
        userDetails,
        isLoggedIn: true
      }
    },
    handleLogout(state, actions) {
      state= initialState
      return state
    },
  },
});

export const {setUserDetails,handleLogout} = userSlice.actions;
export default userSlice.reducer;