import React, { useState } from 'react';
import {
    DashboardOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Header from '@/components/Header';
import Account from '../../components/Account'
import Orders from '../../components/Orders'


const Profile = () => {
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
                            label: 'My Account Details',
                            
                        },
                        {
                            key: '2',
                            icon: <UploadOutlined />,
                            label: 'My Orders',
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

                    {tabId == 1 ? <Account/> : null}
                    {tabId == 2 ? <Orders/> : null}
    
                </Content>
            </Layout>
        </Layout>
        <Header/>
        </>
    )
}

export default Profile;