import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import {ShoppingCartOutlined} from '@ant-design/icons';
export default function index() {
  // const {fullName}= useSelector(state=>state.users) checking if redux is being used or not
  const [products,setProducts]= useState([])
  const fetchProducts= async()=> {
   const res= await fetch('http://localhost:4000/products')
    const {data} =await res.json()
    setProducts(data)
  }
  useEffect(() => {
    fetchProducts()
  },[])
  return (
    <>
  <Header/>
  <div>
      {
        products.length>0 ? (
          <div>
            {products.map((item)=>{
              return <div className='card'>
              {item.productImage}
              {/* <Image src={'http://localhost:4000/product-img/'+ item._id} alt="picture" width={50} height={60}/> */}
              Name:{item.productName}<br/>
              Price:{item.productPrice}<br/>
              Category:{item.category}<br/>
              Description:{item.productDescription}<br/>
              <ShoppingCartOutlined />
              </div>
              
            })}
            </div>
        ): "loading"
      }
     
    </div>
    </>
  )
}
    