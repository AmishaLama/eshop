import Header from '@/components/Header'
import { addToCart,removeFromCart,decreaseFromCart,clearCart } from '@/redux/reducerSlice/products'
import {ClearOutlined,CarryOutOutlined,ShoppingOutlined,ShopOutlined} from '@ant-design/icons';
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
          <p>Your Cart is currently empty.</p>
          <div className='start-shopping'>
            <Link href= '/'>Start Shopping <ShopOutlined /></Link>
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
                <Image src={'http://localhost:4000/product-img/' + item._id} alt="F" width={400} height={200} />
              <div>
                  <h3>{item.productName}</h3>
                  <p>{item.productDescription}</p>
                  <button onClick={()=>dispatch(removeFromCart(item))}> Remove</button>
                </div>
              </div>  
              <div className="cart-product-price">Rs. {item.productPrice}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => dispatch(decreaseFromCart(item))}>
                      -
                    </button>
                    <div className="count">{item.quantity}</div>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                  Rs. {item.productPrice * item.quantity}
                  </div>
                </div>    
            )
            )}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={()=>dispatch(clearCart())}>
              Clear Cart <ClearOutlined />
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>SUBTOTAL ({cartList.reduce((a, c) => a + c.quantity, 0)}{' '} items)</span>
                <p className='amount'>Rs.  {cartList.reduce((total, cartItem) => total + cartItem.quantity * cartItem.productPrice, 0)}</p>
              </div>
              <p>Shipping Charge is calculated at checkout.</p>
              <Link href ="/checkout">          
                <button>Check out <CarryOutOutlined /></button>
              </Link>


            </div>
          </div>
          <div className="continue-shopping">
                <Link href ="/">          
                  <span>Continue Shopping <ShoppingOutlined /></span>
                </Link>
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