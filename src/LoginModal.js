// import { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, Typography } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';

const LoginModal = ({ loginOpen, setLoginOpen }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        okText='log in'
        cancelText='cancel'
        closeIcon={<CloseCircleTwoTone />}
      >
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginModal;
