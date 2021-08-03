import React, { useState } from 'react';

import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Carousel,
  Avatar,
  Badge,
  Rate,
  Tooltip,
  Typography,
} from 'antd';
import {
  // DesktopOutlined,
  SketchOutlined,
  CloseCircleTwoTone,
  MinusCircleTwoTone,
  //DownloadOutlined,
  //FileOutlined,
  SafetyOutlined,
  ScanOutlined,
  //TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import adah from '../src/images/adah.png';
import eje from '../src/images/eje.jpg';
import face8 from '../src/images/face8.jpg';
import face6 from '../src/images/face6.jpg';
import face4 from '../src/images/face4.jpg';
import supervisor from '../src/images/supervisor.jpg';
import face9 from '../src/images/face9.jpg';
import face10 from '../src/images/face10.jpg';
import fut1 from '../src/images/fut1.png';
//import fut2 from '../src/images/fut2.jpg';
import fut4 from '../src/images/fut4.jpeg';
import DrawerForm from './Drawer';
import LoginModal from './LoginModal';
import StartClass from './StartClass';

import { useData } from './context/DataProvider';

const { Header, Content, Footer, Sider } = Layout;
//const { SubMenu } = Menu;

const HomePage = () => {
  const { login } = useData();
  const [collapsed, setCollapsed] = useState(true);
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  //const [login, setLogin] = useState(false);

  const [openClass, setOpenClass] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          id='components-layout-demo-side'
        >
          <div className='logo'>
            <Button
              type='primary'
              size='small'
              onClick={() => setLoginOpen(!loginOpen)}
              ghost
              style={{ marginRight: '65px' }}
              icon={!collapsed ? <UserOutlined /> : null}
            >
              log in
            </Button>
          </div>
          <Menu theme='dark' mode='inline'>
            <Menu.Item key={1}>
              <Button
                type='text'
                size='small'
                style={{ color: '#a5a5a4', marginLeft: '0px' }}
                icon={<SafetyOutlined />}
              >
                start class
              </Button>
            </Menu.Item>

            <Menu.Item key={2}>
              <Button
                type='text'
                size='small'
                style={{ color: '#a5a5a4', marginLeft: '0px' }}
                icon={<SketchOutlined />}
              >
                Train
              </Button>
            </Menu.Item>
            {/* <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu> */}
            <Menu.Item key={3}>
              <Button
                type='text'
                size='small'
                style={{ color: '#a5a5a4', marginLeft: '0px' }}
                icon={<ScanOutlined />}
              >
                Emotion
              </Button>
            </Menu.Item>
            {/* <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu> */}
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-layout-background'
            style={{
              position: 'relative',
              padding: 0,
              paddingLeft: '20px',
              backgroundColor: '#001529',
            }}
          >
            <div style={{ fontSize: collapsed ? 'medium' : 'small' }}>
              <Typography className='title'>
                AI-Powered Attendance Management System & Sentiment Analysis
              </Typography>
            </div>

            <div className='user-avater'>
              <Avatar
                style={{ backgroundColor: '#1890ff', color: '#fff' }}
                icon={<UserOutlined />}
              />
              <Badge dot className='dot2' color='green' />
            </div>
            {/* <Tooltip placement='bottomLeft' title={<span>minimize app</span>}>
              <MinusCircleTwoTone className='minimize' id='min-btn' />
            </Tooltip>
            <Tooltip placement='bottomLeft' title={<span>close app</span>}>
              <CloseCircleTwoTone className='close' id='close-btn' />
            </Tooltip> */}
          </Header>
          <Content style={{ margin: '0 16px', position: 'relative' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>
                {login ? ' ' : 'adaholotu@gmail.com'}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360, height: '480px' }}
            >
              <Carousel autoplay className='carousel'>
                <div>
                  <img src={face10} alt='face10' />
                </div>
                <div>
                  <img src={eje} alt='face3' />
                </div>
                <div>
                  <img src={supervisor} alt='face4' />
                </div>
                <div>
                  <img src={fut4} alt='fut4' />
                </div>
                <div>
                  <img src={face6} alt='face6' />
                </div>

                <div>
                  <img src={supervisor} alt='face7' />
                </div>
                <div>
                  <img src={face8} alt='face8' />
                </div>
                <div>
                  <img src={face9} alt='face9' />
                </div>
                <div>
                  <img src={adah} alt='face10' />
                </div>
                <div>
                  <img src={fut1} alt='fut1' />
                </div>
              </Carousel>
            </div>

            <Button
              type='primary'
              shape='round'
              onClick={() => setOpenClass(!openClass)}
              icon={<SafetyOutlined />}
              size='large'
              style={{ position: 'absolute', bottom: '10px', right: '10px' }}
            >
              Start Class
            </Button>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#1890ff' }}>
            FUT MX ©2021 Created by Adah & Ejeh
            <br />
            <Rate allowHalf defaultValue={4.5} />
          </Footer>
        </Layout>
      </Layout>
      <DrawerForm
        drawerVisibility={drawerVisibility}
        setDrawerVisibility={setDrawerVisibility}
      />
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <StartClass openClass={openClass} setOpenClass={setOpenClass} />
    </React.Fragment>
  );
};

export default HomePage;
