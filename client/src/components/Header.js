import React from 'react';
import Logo from '../../public/images/logo2.png'
import Image from 'next/image'
import { Avatar, Space } from 'antd';
import { useSelector } from 'react-redux';

export default function Header() {
  const {isLoggedIn}= useSelector(state=>state.users)
  return (
    <div className="body">
      {/* {JSON.stringify(userDetails)} */}
      <nav>
      <div className="logo"><a href='/'><Image src={Logo} alt="Picture of the author"/></a></div>
        {isLoggedIn ? (
          <Avatar
            size="large"
            style={{
            backgroundColor: '#fde3cf',
            color: '#f56a00',
            marginTop:'33px',
            fontSize: '1.5rem',
            marginRight: '200px',
            left: '90%'         }}
          >
          U
          </Avatar>
        ): 
        <ul>
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/register">SIGNUP</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/feedback">FEEDBACK</a></li>
        </ul>
}
      </nav>
    </div>
  );
}

