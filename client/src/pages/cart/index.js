import Header from '@/components/Header'
import { addToCart,removeFromCart } from '@/redux/reducerSlice/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useDispatch, useSelector, useState, useEffect } from 'react-redux'

const Cart =()=> {
  const {cartList} = useSelector(state => state.products)
  const dispatch=useDispatch()
  
  return (
    <>
    <Header/>
    <div className='cart-container'>
      <h1>SHOPPING CART</h1>
      {cartList.length===0 ?(
        <div className='cart-empty'>
          <p>Empty Cart</p>
          <div className='start-shopping'>
            <Link href= '/'>Start Shopping </Link>
          </div>
        </div>
      ) :(
        <div>
          <div className='titles'>
            <h3 className='product-titles'>Products</h3>
            <h3 className='price'>Price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Total</h3>
          </div>
          <div className='cart-items'>
            
            {cartList.map(item=>(
              <div className="cart-item">
              <div className="cart-product">
                <Image src={'http://localhost:4000/product-img/' + item._id} alt="F" width={200} height={200} />
              <div>
                  <h3>{item.productName}</h3>
                  <p>{item.productDescription}</p>
                  <button onClick={()=>dispatch(removeFromCart(item))}> Remove</button>
                </div>
              </div>  
              <div className="cart-product-price">${item.productPrice}</div>
                  <div className="cart-product-quantity">
                    {/* <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button> */}
                    <div className="count">{item.quantity}</div>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${item.productPrice * item.quantity}
                  </div>
                </div>    
            )

            )}
          </div>
        </div>
      )}

    </div>

    </>
  )
}

export default Cart


// return (
//   <>
//     <div className='card1'>
//       <Image class="w-full h-full object-cover"
//         src={'http://localhost:4000/product-img/' + item._id}
//         alt="F" width={200} height={200}
//       />
//       <h1>{item.productName}</h1>
//       <p>{item.productDescription}</p>
//       <h2>Unit Price:Rs.{item.productPrice}</h2>
//       <h3> Quantity:{item.quantity}</h3>
//       <button onClick={()=>dispatch(removeFromCart(item))}> Remove</button>
//     </div>
//   </>
// )