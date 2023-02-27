import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//import { requestUserData } from '../redux/sagas/actions';
//import { USER_LOADER } from '../redux/sagas/UsersSaga/actions';

import './auth.css';
import { select } from 'redux-saga/effects'


const Auth = () => {

//   const userData = useSelector(store => 
//     store.userRed.users);
//   console.log('useerData',userData);
//   let us = userData.map(item => 
//   item = item.password
//   );
// console.log('us',us[0]);

const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(false);
  const storedPassword = useSelector(state => state.userRed.users);

// const handlePasswordChange = event => {
//     setPassword(event.target.value);
//     setMatch(storedPassword.includes(event.target.value));
//   };

const onFinish = (values) => {
console.log('Success:', values);
    setPassword(values);
    setMatch(storedPassword.includes(values));
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
      onChange={onFinish}
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
      <Button id='submit' type="primary" htmlType="submit">
        Submit
         {match ? <span>Passwords match</span> : <span>Passwords do not match</span>}
      </Button>
    </Form.Item>
  </Form>

  </div>
);

    }
export default Auth;