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
  <h1>OUR PRODUCTS</h1>
  <div>
      {
        products.length>0 ? (
          <div className='product-container'>
            
            {products.map((item)=>{
              return <div className='card'>
              <Image src={'http://localhost:4000/product-img/'+ item._id} alt="picture" width={230} height={230}/><br/>
             <div className='product-name'>
              {item.productName}
              </div>
              <div className='price'>
              {item.productPrice}
              </div>
              <br/>
              <button className='cart'onClick={()=>dispatch(addToCart(item._id))} trigger="click">
                ADD TO CART
              </button>
              </div>  
            })}
            </div>
        ): "loading"
      }
     
    </div>
    </>
  )
}
    