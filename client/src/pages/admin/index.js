import React, { useState } from 'react';
import {
    DashboardOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Header from '@/components/Header';
import AddProducts from '../../components/AddProducts';
import Users from '../../components/Users'
import Products from '../../components/Products'
import AdminDashboard from '../../components/AdminDashboard'

const Admin = () => {
    const { Content } = Layout;
    const {Sider} = Layout;
    const [tabId, setTabId] = useState(1)
    const onChange = (key) => {
        setTabId(key.key);
    }

    return (
    <>
        <Layout>
            <Sider className='sidebar'>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={onChange}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Users',
                            
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Products',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Add Products ',
                        },
                        {
                            key: '4',
                            icon: <DashboardOutlined />,
                            label: 'Admin Dashboard',
                        },
                    
                    ]}
                    style={{
                        backgroundColor:'rgba(132, 132, 243, 0.7)'
                                                   }}
                />
            </Sider>
            <Layout>
            <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >

                    {tabId == 1 ? <Users/> : null}
                    {tabId == 2 ? <Products/> : null}
                    {tabId == 3 ? <AddProducts/> : null}
                    {tabId == 4 ? <AdminDashboard/> : null}

                </Content>
            </Layout>
        </Layout>
        <Header/>
        </>
    )
}

export default Admin;