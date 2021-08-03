import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  notification,
  Spin,
} from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import axios from 'axios';
import { useData } from './context/DataProvider';
//const fs = require('fs');
import { createLog } from './utils/HelperFunctions';

const LoginModal = ({ loginOpen, setLoginOpen }) => {
  const [loading, setLoading] = useState(false);
  let { email, setMail, setLogin, courses, setCourses } = useData();

  const onFinish = async (values) => {
    //console.log('Success:', values);
    setLoading(true); // start to display spinner
    const inputEmail = values.username;
    const inputPassword = values.password;
    await axios
      .post(`https://amsys-student.herokuapp.com/auth/users/login`, {
        email: inputEmail,
        password: inputPassword,
      })
      .then((res) => {
        console.log(res.data);
        email = res.data.data.authCredentials.email;
        courses = res.data.data.authCredentials.registeredCourses;
        if (courses.length === 1) setCourses(courses[0]);
        console.log(
          `${courses.length} course(s) found: ${JSON.stringify(
            courses[0].code
          )}`
        );
        setMail(email);
        setLogin(true);
        setLoginOpen(false);
        successNotification();
        createLog(email);
      })
      .catch((err) => {
        errNotification();
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function errNotification() {
    notification.error({
      message: 'Invalid login',
      description: 'Error Login ... Try again! ',
      placement: 'topLeft',
    });
  }

  function successNotification() {
    notification.success({
      message: 'Login Successful',
      description: 'You can now start a class!',
      placement: 'topLeft',
    });
  }

  return (
    <div style={{ position: 'relative' }}>
      <Modal
        title={
          <Typography style={{ color: '#1890ff' }}>Sign In Form</Typography>
        }
        width={400}
        visible={loginOpen}
        style={{ position: 'absolute', top: 10, right: 10 }}
        maskClosable={false}
        onOk={() => setLoginOpen(false)}
        onCancel={() => setLoginOpen(false)}
        okText='ok'
        cancelText='cancel'
        footer={null}
        closeIcon={<CloseCircleTwoTone />}
      >
        {loading && (
          <div
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              paddingLeft: '50%',
              marginBottom: 15,
            }}
          >
            <Spin size='large' spinning={true} />
          </div>
        )}
        {/* <Spin size='large' spinning={true} tip='Please wait..' /> */}
        <Form
          name='basic'
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
        >
          <Form.Item
            label='Username'
            name='username'
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
            label='Password'
            name='password'
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
            name='remember'
            valuePropName='checked'
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
            <Button type='primary' htmlType='submit'>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginModal;
