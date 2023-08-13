import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Header from '@/components/Header';

const {Sider, Content } = Layout;
const Admin = () => {
    const handleAddProducts = (values) => {
        fetch('http://localhost:4000/products',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })

    }

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
    <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="sidebar" />

                <Menu

                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Add Product',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Product Category',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Product Stock',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 585,
                        background: colorBgContainer,
                    }}
                >
                    <div className='add-product'>
                    <h1>Add product</h1>
                    <Formik
                        initialValues={{
                            productName: '',
                            category: '',
                            productPrice: '',
                            productDescription: ''
                        }}
                        onSubmit={values => {
                            handleAddProducts(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='form'>
                                    <Field placeholder="Product Name" name="productName" />
                                    {errors.productName && touched.productName ? (
                                        <div>{errors.productName}</div>
                                    ) : null}<br />
                                </div>
                                <div className='form'>
                                    <Field placeholder="Product Category" name="category" />
                                    {errors.category && touched.category ? (
                                        <div>{errors.category}</div>
                                    ) : null}<br />
                                </div>
                                <div className='form'>
                                    <Field placeholder="Product Price" name="productPrice" />
                                    {errors.productPrice && touched.productPrice ? <div>{errors.productPrice}</div> : null}<br />
                                </div>
                                <div className='form'>
                                    <Field type="textarea" placeholder="Product Description" name="productDescription" />
                                    {errors.productDescription && touched.productDescription ? <div>{errors.productDescription}</div> : null}<br />
                                    <button type="submit" className='btn'>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    </div>
                </Content>
            </Layout>
        </Layout>
        <Header/>
        </>
    )
}

export default Admin;