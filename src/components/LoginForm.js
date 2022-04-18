import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
const LoginForm=()=>{
    const [value,setvalue]=useState(false);
    const onFinish = (values) => {
        console.log("Adi");
        
      };
    if(value)
    <Redirect to='/' />

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
      <div className='container124'>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={()=>{setvalue(true)}} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default LoginForm;