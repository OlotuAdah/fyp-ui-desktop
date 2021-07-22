// import { useState } from 'react';
import { Badge, Modal, Typography, Avatar, Tooltip, List } from 'antd';
import { CloseCircleTwoTone, UserOutlined } from '@ant-design/icons';
import { extractFirstLetter } from './utils/HelperFunctions';
import { randomColor } from './utils/HelperFunctions';

const StudentsRecognized = ({ showStudents, setShowStudents }) => {
  return (
    <div style={{ position: 'relative', width: 50 }}>
      <Modal
        width={350}
        title={
          <Typography style={{ color: '#1890ff', position: 'relative' }}>
            Students and their sentiments &nbsp; &nbsp;{' '}
            <Avatar
              className='noDot'
              style={{ backgroundColor: '#1890ff', color: '#fff' }}
              icon={<UserOutlined style={{ fontSize: 20 }} />}
            />
            <Badge dot color='green' className='dot'></Badge>
          </Typography>
        }
        visible={showStudents}
        style={{ position: 'absolute', top: 10, right: 10 }}
        bodyStyle={{
          color: '#1890ff',

          minHeight: '80vh',
        }}
        maskClosable={false}
        onOk={() => setShowStudents(false)}
        onCancel={() => setShowStudents(false)}
        okText='Okay'
        cancelText='cancel'
        closeIcon={
          <Tooltip placement='bottomLeft' title={<span>Close Window</span>}>
            <CloseCircleTwoTone className='user' />
          </Tooltip>
        }
      >
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: '#' + randomColor(),
                    }}
                  >
                    {extractFirstLetter(item.title)}
                  </Avatar>
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        ,
      </Modal>
    </div>
  );
};

export default StudentsRecognized;

const data = [
  {
    title: 'Adah',
    description: 'Happy',
  },
  {
    title: 'Ejeh',
    description: 'Happy',
  },
  {
    title: 'Blessed',
    description: 'Happy',
  },
  {
    title: 'Busayo',
    description: 'Expecting',
  },
  {
    title: 'Sarah',
    description: 'Blushing',
  },
  {
    title: 'Musti',
    description: 'Happy',
  },
  {
    title: 'Senator ',
    description: 'Smile',
  },
];
