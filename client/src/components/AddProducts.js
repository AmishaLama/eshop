import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const AddProducts=()=>{
    const [file, setFile] = useState(null)
    const handleAddProducts = (values) => {
      const data = new FormData()
      Object.entries(values).forEach((item)=>{
          data.append(item[0], item[1])
          })
          data.append('products',file)
          
        fetch('http://localhost:4000/products',
            {
                method: 'POST',
                body:data
            })

    }
return (
    <div className='add-product'>
    <h1>Add product</h1>
    <Formik
        initialValues={{
            productName: '',
            category: '',
            productPrice: '',
            productDescription: ''
        }}
        onSubmit={values => {
            handleAddProducts(values)
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <div className='form'>
                    <Field placeholder="Product Name" name="productName" />
                    {errors.productName && touched.productName ? (
                        <div>{errors.productName}</div>
                    ) : null}<br />
                </div>
                <div className='form'>
                    <Field className='category 'component ='select' placeholder="Product Category" name="category" >
                        <option value="">Please Select the category</option>
                        <option value="soft">Carbonated Soft Drinks</option>
                        <option value="juice">Juice Drinks</option>
                        <option value="milk">Flavoured Milk</option>
                        <option value="energy">Energy Drinks</option>
                        <option value="whisky">Whisky</option>
                        <option value="rum">Rum</option>
                        <option value="wine">Wine</option>
                        <option value="beer">Beer</option>
                    </Field>                   
                    {errors.category && touched.category ? (
                        <div>{errors.category}</div>
                    ) : null}<br />
                </div>
                <div className='form'>
                    <Field placeholder="Product Price" name="productPrice" />
                    {errors.productPrice && touched.productPrice ? <div>{errors.productPrice}</div> : null}<br />
                </div>
                <div className='form'>
                    <Field type="textarea" placeholder="Product Description" name="productDescription" />
                    {errors.productDescription && touched.productDescription ? <div>{errors.productDescription}</div> : null}<br />
               </div>
                <div className='form'>
                  <input type='file' onChange={(e)=> setFile(e.target.files[0])}/>
                </div>
                    <button type="submit" className='btn' onClick={()=>alert("Product Successfully Added")}>Submit</button>
              

            </Form>
        )}
    </Formik>
    </div>
         )
}

export default AddProducts
