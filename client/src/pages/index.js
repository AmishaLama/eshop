import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '@/redux/reducerSlice/products';
import Image from 'next/image'
import {ShoppingCartOutlined} from '@ant-design/icons';


export default function index() {
  // const {fullName}= useSelector(state=>state.users) checking if redux is being used or not
  const {cartList}= useSelector(state=>state.products)

  const dispatch= useDispatch()
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
            <h1>OUR PRODUCTS</h1>
            {products.map((item)=>{
              return <div className='card'>
              <Image src={'http://localhost:4000/product-img/'+ item._id} alt="picture" width={230} height={280}/><br/>
             <div className='product-details'>
              Name:{item.productName}<br/>
              Price:{item.productPrice}<br/>
              {/* Category:{item.category}<br/>
              Description:{item.productDescription}<br/> */}
              <ShoppingCartOutlined className='badge'onClick={()=>dispatch(addToCart(item._id))} />
              </div>
              </div>
              
            })}
            </div>
        ): "loading"
      }
     
    </div>
    </>
  )
}
    