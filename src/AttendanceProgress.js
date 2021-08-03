// import React, { useState } from 'react';
import { Steps, Modal, Typography } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import { useData } from './context/DataProvider';

const { Step } = Steps;

function AttendanceProgress() {
  //const [progressOpen, setProgressOpen] = useState(true);
  const { progressOpen, setProgressOpen } = useData();

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Modal
        title={
          <Typography style={{ color: '#1890ff' }}>
            Attendance In Progress
          </Typography>
        }
        onCancel={() => setProgressOpen(false)}
        visible={progressOpen}
        style={{ position: 'absolute', top: 420, left: 20, width: '100%' }}
        maskClosable={false}
        footer={null}
        closeIcon={<CloseCircleTwoTone />}
      >
        <Steps style={{ width: '100%' }}>
          <Step status='finish' title='Login' icon={<UserOutlined />} />
          <Step
            status='finish'
            title='Verification'
            icon={<SolutionOutlined />}
          />
          <Step
            status='process'
            title='Attendance'
            icon={<LoadingOutlined />}
          />
          <Step status='wait' title='Done' icon={<CheckCircleOutlined />} />
        </Steps>
      </Modal>
    </div>
  );
}

export default AttendanceProgress;
