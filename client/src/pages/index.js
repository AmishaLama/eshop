import React from 'react';
import Login from './login';
import Header from '../components/Header';
import { useSelector } from 'react-redux';


export default function index() {
  // const {fullName}= useSelector(state=>state.users) checking if redux is being used or not
  return (
    <>
  <Header/>
    <div className='body'>
      {/* <h1>Hi {fullName}</h1> */}
    </div>
    </>
   
  )
}
    