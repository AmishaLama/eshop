import React from 'react';
import Logo from '../../public/images/logo2.png'
import Image from 'next/image'
import { Avatar, Popover  } from 'antd';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Searchbar from '../components/Searchbar'
import { ClockCircleOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {Badge, Space } from 'antd';

export default function Header() {
  const {cartList}= useSelector(state=>state.products)
  const router =useRouter()
  const handleLogout =()=>{
    router.push('/profile')
  }
  const {isLoggedIn, userDetails} = useSelector(state=>state.users)
  const content = (
    <>
    <div className='pop'>
      <Link href="/dashboard">Dashboard</Link>
    </div>
    <div className='pop'>
      <Link href="/profile">Account Details</Link>
    </div>

    <div className='pop'>
      <p onClick={handleLogout}>Sign Out</p>
    </div>
    </>
  );
  return (
    <div className="body">
      <nav>
      <div className="logo"><Link href='/'><Image src={Logo} alt="Picture of the author"/></Link></div>
        {isLoggedIn ? (
          <div>
            <Searchbar/>
           <Popover placement="bottom" title ={userDetails.fullName} content={content} trigger="hover">
          <Avatar
            size="large"
            style={{
            backgroundColor: '#BFBFFF',
            color: '#5353e0',
            fontSize: '1.5rem',  
            left: '98%' }}
          >
          {userDetails.fullName[0]}
          </Avatar>
          </Popover>
          <Badge count={cartList.length} className='badge'>
          <ShoppingCartOutlined />
            </Badge>
          </div>
         
        ): 
        <ul>
          <Searchbar/>
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

