import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const App = () => (
  // <Space direction="vertical">
    <Search
      placeholder="Search products"
      allowClear
      onSearch={onSearch}
      className='searchb'
    />
    
  // </Space>
);
export default App