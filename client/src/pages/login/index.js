import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import Header from '../../components/Header'
import { useRouter } from 'next/navigation';
import { setUserDetails } from '@/redux/reducerSlice/users';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

const Login = () => {
  const router = useRouter()
  const [msg, contextHolder] = message.useMessage();
  const dispatch = useDispatch()
  const handleLogin = async (values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };
    const res = await fetch('http://localhost:4000/login', requestOptions)
    const data = await res.json()
    if (data && res.status == 200&& data.success) {

      dispatch(setUserDetails(data))
      router.push('/')
      setTimeout(() => {
        msg.info(data.msg);
      }, 2000);
    } else {
      msg.info(JSON.stringify(res.statusText + ": ERROR"));
    }
  }
  const LoginSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required'),
  });

return(
  <>
  {contextHolder}
  <Header/><section></section>
  <div className='login-box'>
    <h1>LOGIN</h1>
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        handleLogin(values);

        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='input-box'>
            <Field name="userName" placeholder="Username"/>
            {errors.userName && touched.userName ? <div>{errors.userName}</div> : null} <br/>
          </div>

          <div className='input-box'>
            <Field name="password" placeholder="Password"/> 
            {errors.password && touched.password ? <div>{errors.password}</div> : null} <br/>
          </div>

          <div className='remember-forgot'> 
            <label><input type='checkbox'/>Remember Me</label>
            <Link href="#">Forgot password?</Link>
          </div><br/>

          <button type="submit" className="btn">Login</button> <br />
          
        </Form>
      )}
    </Formik>
        <div className='register-link'>
          Don't have an account? <Link href="/register">Register Instead</Link>
        </div>
   </div>
  </>
)}


export default Login;
