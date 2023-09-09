import React from 'react';
import Header from '../../components/Header';
import Steps from '../../components/Steps'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { setUserDetails } from '@/redux/reducerSlice/users';
import { useDispatch } from 'react-redux';

const Register = () => {

  return (
    <>
      <Header/> 
      <div >
        <h1>CHECKOUT</h1>
        <Steps/>    

      </div>
    </>
  );
};

export default Register;
