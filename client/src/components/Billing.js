import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BillingForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber:'',
    address: '',
    city: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('First Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='billing'>
    <h1>Billing Information</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        {({ errors, touched }) =>(
            <Form>
                <div className='form'>
                    <Field placeholder="Full Name" name="fullName" />
                        {errors.fullName && touched.fullName ? (
                        <div>{errors.fullName}</div>
                        ) : null}<br />
                    </div>
                    <div className='form'>
                    <Field placeholder=" E-mail" name="email" />
                        {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                        ) : null}<br />
                    </div>
                    <div className='form'>
                    <Field placeholder="Phone Number" name="phoneNumber" />
                        {errors.phoneNumber && touched.phoneNumber ? (
                        <div>{errors.phoneNumber}</div>
                        ) : null}<br />
                    </div>
                    <div className='form'>
                    <Field placeholder="Address" name="address" />
                        {errors.address && touched.address ? (
                        <div>{errors.address}</div>
                        ) : null}<br />
                    </div>
                    <div className='form'>
                    <Field placeholder="City" name="city" />
                        {errors.city && touched.city ? (
                        <div>{errors.city}</div>
                        ) : null}<br />
                    </div>
                <div>
                <button type="submit" className='btn'>Submit</button>
                </div>
            </Form>
        )}
    </Formik>
    </div>
  );
};

export default BillingForm;
