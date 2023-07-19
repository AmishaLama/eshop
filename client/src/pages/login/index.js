import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'

const LoginSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Login = () => (
  <div className='login-box'>
    <div className='login-form'>
    <h1>LOGIN</h1>
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
       
            <div className='input-box'>
            <Field name="userName" placeholder="Username"/>
         
            {errors.userName && touched.userName ? (
              <div>{errors.userName}</div>
            ) : null} <br/>
            </div>
          {/* <Field name="email" type="email" placeholder="email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
          <div className='input-box'>
            <Field name="password" placeholder="Password"/>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null} <br/>
            </div>
         <input type='checkbox'/>Remember Me
         <p> <Link href="#">Forgot password?</Link></p>
          <br/>
          <button type="submit">Login</button>
          <br />
          {/* </div> */}
          <p>Don't have an account? <Link href="/register">Register Instead</Link></p>
         
        </Form>
      )}
    </Formik>
   </div>
  </div>
);


export default Login;
