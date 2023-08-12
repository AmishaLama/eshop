import React from 'react'
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'

const Admin = () => {
    const handleAddProducts = (values) => {
        fetch('http://localhost:5000/products',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
          }
return (
  <div>
    <Header/>
    <SideBar/>
  </div>
)
}

export default Admin