  import {configureStore} from '@reduxjs/toolkit'
  import { combineReducers } from 'redux';
  import logger from 'redux-logger'
  import users from '../reducerSlice/users'
  import { persistReducer, persistStore } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    storage,
  }
  //setting up my combinereducer
  const reducer = combineReducers({
      users,
  })

  const persistedReducer = persistReducer(persistConfig, reducer)

  export const store = configureStore({
      reducer:persistedReducer,
      devTools: true,
      middleware:[logger]
  })
  
  export const persistor = persistStore(store)