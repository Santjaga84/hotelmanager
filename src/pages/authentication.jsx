import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useState, useEffect,useMemo } from 'react';
import './auth.css';
import { UserAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logIn } from '../store/actions/usersActions';
import { getIsAuthorized } from '../selectors/usersSelectors';
import { getAccountsState } from '../selectors/usersSelectors';



const Auth = () => {

const dispatch = useDispatch();
const [password, setPassword] = useState('');

const [email, setEmail] = useState('');

const [error, setError] = useState('');

const navigate = useNavigate();

const {signIn} = UserAuth();

const [messageApi, contextHolder] = message.useMessage();
  

const info = () => {
    messageApi.info('Неверное имя пользователя или пароль');
  };

const accounts = useSelector(getAccountsState);
  const isAuthorized = useSelector(getIsAuthorized);
  

  const [form] = Form.useForm();
  

  const isEmptyAccounts = useMemo(() => {
    if (!accounts) return true;

    return !Object.keys(accounts).length;
  }, [accounts]);

  const onFinish = (values) => {
    dispatch(logIn(values));
    form.resetFields();
  };

  useEffect(() => {
    if (isAuthorized) navigate('/');
  }, [isAuthorized]);


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
 

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

return (

<div className='card-auth'>
      <Form
     form={form}
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
          message: 'Please input your username!',
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