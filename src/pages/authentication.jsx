import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import './auth.css';
import { UserAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';




const Auth = () => {

const [password, setPassword] = useState('');

const [email, setEmail] = useState('');

const [error, setError] = useState('');

const navigate = useNavigate();

const {signIn} = UserAuth();

const [messageApi, contextHolder] = message.useMessage();
  

const info = () => {
    messageApi.info('Неверное имя пользователя или пароль');
  };




const handleSubmit = async (e) => {
     e.preventDefault();
    setError('')
   
    try{
      await signIn(email, password)
      navigate('/roomstablepages')
  //  isUser();      
      
    }catch(e){
      
       setError(e.message)
       console.log(e.message);
       console.log(error);
       info();
      }
  }
 
const onFinish = (values) => {
console.log('Success:', values);
    setPassword(values);
    
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

return (

<div className='card-auth'>
      <Form
     
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
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
      onChange={(e) => setEmail(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your username!: user1@gmail.com',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your password!Password: password1',
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
    {contextHolder}
      <Button id='submit' type="primary" htmlType="submit"  onClick={handleSubmit}>
        Submit
         
      </Button>
    </Form.Item>
  </Form>

  </div>
);

    }
export default Auth;