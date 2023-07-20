import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import Header from '../../components/Header'

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
  <>
  <Header/><section></section>
  <div className='login-box'>
  
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
          <div className='remember-forgot'> 
          <label><input type='checkbox'/>Remember Me</label>
          <a><Link href="#">Forgot password?</Link></a>
         </div>
          <br/>
          <button type="submit" className="btn">Login</button>
          <br />
          <div className='register-link'>
          <p>Don't have an account? <Link href="/register">Register Instead</Link></p>
         </div>
        </Form>
      )}
    </Formik>
   </div>
 
  </>
);


export default Login;
