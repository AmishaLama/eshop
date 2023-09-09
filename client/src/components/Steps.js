import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { PayCircleOutlined, FileDoneOutlined, SolutionOutlined } from '@ant-design/icons';
import Billing from './Billing'
import Payment from'./Payment'
import Confirm from './Confirm';

const steps = [
  {
    title: 'Billing Information',
    content: <Billing/>,
    icon: <SolutionOutlined />,
  },
  {
    title: 'Payment Method',
    content:  <Payment/>,
    icon: <PayCircleOutlined />,
  },
  {
    title: 'Confirm Order',
    content: <Confirm/>,
    icon: <FileDoneOutlined />,

  },
];
const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}

      </div>
    </>
  );
};
export default App;