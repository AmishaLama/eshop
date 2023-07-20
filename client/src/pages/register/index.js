import React from "react";
import Header from '../../components/Header'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from 'next/link'

const Register =()=>{
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    phoneNumber: Yup.string()
          .min(2, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Required'),
    password: Yup.string()
          .min(5, 'Password Too Short!')
          .required('Required'),
    confirmpassword: Yup.string()
          .min(5, 'Password Too Short!')
          .required('Required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          email: Yup.string().email('Invalid email').required('Required'),

//   password: Yup.string()
//     .min(8, "Password must have atleast 8 characters")
//     .max(14, "Password must not exceed 14 characters")
//     .required("Please enter the password")
//     .matches(/[0-9]/, getCharacterValidationError("number"))
//     .matches(/[a-z]/, getCharacterValidationError("lowercase alphabet"))
//     .matches(/[A-Z]/, getCharacterValidationError("uppercase alphabet")),
//   confirmpass: Yup.string()
//     .required("Please re-type your password")
    // .oneOf([ref("password")], "Passwords does not match")
});

const handleRegister=async(values)=>{
  const{confirmpassword,...formFields}=values
    const requestOptions={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formFields)
    };
    await fetch('http://localhost:4000/register',requestOptions)
}

return(
<>
  <Header/><section></section>
<div className='register-box'> 
<div className="register-form">
  <h2>Register</h2>
  <Formik
   initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      address:'',
      phoneNumber: '',
      password:'',
      confirmpassword:''
   }}
   validationSchema={RegisterSchema}
   onSubmit={values => {
    handleRegister(values)

      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="input-box">
          {/* <div className="credentials"> */}
          <Field name="firstName" placeholder="FirstName" />
          <br />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          </div>
          
          <div className="input-box">
          <Field name="lastName" placeholder="LastName" /> <br />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          </div>

        <div className="input-box">
          <Field name="email" type="email" placeholder="Email" />
          <br />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div className="input-box">
          <Field name="address" placeholder="Address" /> <br />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          </div>

          <div className="input-box">
              <Field name="phoneNumber" type="text" placeholder="Phone Number"/><br/>
             {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
             </div>

             <div className="input-box">
          <Field name="password" placeholder="Password" />
          <br />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          </div>
          <div className="input-box">
          <Field name="confirmpass" placeholder="Confirm Password" /> <br />
          {errors.confirmpass && touched.confirmpass ? (
            <div>{errors.confirmpass}</div>
          ) : null}
          </div>
          <br />
          {/* </div>
          <div className="btn"> */}
          <button type="submit">Register</button>
          <br />
          {/* </div> */}
          <p>Already have an account? <Link href ="/login">Login </Link></p>
         
        </Form>
      )}
    </Formik>
  </div>
  </div>
  </>
);
}

export default Register;
