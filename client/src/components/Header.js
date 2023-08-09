import React from 'react';
import Logo from '../../public/images/logo2.png'
import Image from 'next/image'
import { Avatar, Popover  } from 'antd';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Searchbar from '../components/Searchbar'

export default function Header() {
  const router =useRouter()
  const handleLogout =()=>{
    router.push('/profile')
  }
  const {isLoggedIn, userDetails} = useSelector(state=>state.users)
  const content = (
    <div>

      <Link href="/profile">Profile</Link>
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
  return (
    <div className="body">
      <nav>
      <div className="logo"><Link href='/'><Image src={Logo} alt="Picture of the author"/></Link></div>
        {isLoggedIn ? (
          <div>
            <Searchbar/>
           <Popover placement="bottom" title={userDetails.fullName} content={content} trigger="click">
          <Avatar
            size="large"
            style={{
            backgroundColor: '#fde3cf',
            color: '#f56a00',
            marginTop:'17px',
            fontSize: '1.5rem',
            marginRight: '200px',
            left: '99%' }}
          >
          {userDetails.fullName[0]}
          </Avatar>
          </Popover>
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

