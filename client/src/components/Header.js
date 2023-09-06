import React, { useState } from 'react';
import Logo from '../../public/images/logo2.png'
import Image from 'next/image'
import { Avatar, Popover, Badge  } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { handleLogout } from '@/redux/reducerSlice/users';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Searchbar from '../components/Searchbar'

export default function Header() {
  const router =useRouter()
  const dispatch = useDispatch()
  const handleUserLogout =()=>{
    dispatch(handleLogout())
    }
  const isLoginPage = router.pathname === '/login';
  const isRegisterPage = router.pathname === '/register';
  const {cartList}= useSelector(state=>state.products)

  const {isLoggedIn,userDetails} = useSelector(state=>state.users)
  const content = (
    <>
    <div className='pop'>
      <Link href="/profile">Account Details</Link>
    </div>
    <div className='pop'>
      <Link href="/profile">My Orders</Link>
    </div>
    <div className='pop'>
      <p onClick={handleUserLogout}>Logout</p>
    </div>
    </>
  );
  return (
    <div className="body">
      <nav className={`navbar ${isLoginPage ? 'login-navbar' : ''} ${isRegisterPage ? 'register-navbar' : ''}`}>
      <div className="logo"><Link href='/'><Image src={Logo} alt="Picture of the author"/></Link></div>
      <Searchbar/>
        {isLoggedIn ? (
          <div>
            <ul>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/contact">CONTACTUS</Link></li>

            </ul>
            <Link href="/cart">
              <Badge  className='badge'>
                <ShoppingCartOutlined/>
              </Badge>
            </Link>
           
           <Popover placement="bottom" title ={userDetails.fullName} content={content} trigger="click">
          <Avatar
            size="large"
            style={{
            backgroundColor: 'lavender',
            color: '#5353e0',
            fontSize: '1.5rem',  
            left: '98%',
            cursor:'pointer',
            fontWeight:'600' }}
          >
          {userDetails.fullName[0]}
          </Avatar>
          </Popover>
          </div>
         
        ): 
        <ul>
          
          <li><Link href="/login">LOGIN</Link></li>
          <li><Link href="/register">SIGNUP</Link></li>
          {/* <li><Link href="/about">ABOUT</Link></li> */}
          {/* <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/feedback">FEEDBACK</Link></li> */}
         
        </ul>
}
      </nav>
    </div>
  );
}

