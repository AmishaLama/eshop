import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



const SignupSchema = Yup.object().shape({
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

export const Register = () => (
  <div>
    <h1 align="center">CREATE AN ACCOUNT</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
        confirmpass: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {/* <div className="credentials"> */}
          <Field name="firstName" placeholder="FirstName" />
          <br />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" placeholder="LastName" /> <br />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Email" />
          <br />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="address" placeholder="Address" /> <br />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          <Field name="password" placeholder="Password" />
          <br />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Field name="confirmpass" placeholder="Confirm Password" /> <br />
          {errors.confirmpass && touched.confirmpass ? (
            <div>{errors.confirmpass}</div>
          ) : null}
          <br />
          {/* </div>
          <div className="btn"> */}
          <button type="submit">Submit</button>
          <br />
          {/* </div> */}
          <p>Already have an account? <a href="{port}">Sign in</a></p>
         
        </Form>
      )}
    </Formik>
  </div>
);

export default Register;
