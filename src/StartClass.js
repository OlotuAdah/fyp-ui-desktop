import { useState } from 'react';
import { Modal, Select, Typography } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import StudentsRecognized from './StudentsRecognized';

const StartClass = ({ openClass, setOpenClass }) => {
  const [showStudents, setShowStudents] = useState(false);

  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);

    //value selected ...
    //call backend api to start attendance on pi
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  function takeAttendance() {
    setOpenClass(false);
    // NB: you can acess variable val which is value(course) selected by user
    setShowStudents(true);
  }

  return (
    <div style={{ position: 'relative' }}>
      <Modal
        title={
          <Typography style={{ color: '#1890ff' }}>Start Class</Typography>
        }
        width={300}
        visible={openClass}
        style={{ position: 'absolute', top: 50, left: 300 }}
        maskClosable={false}
        onOk={() => takeAttendance()}
        onCancel={() => setOpenClass(false)}
        okText='Take Attendance'
        cancelText='cancel'
        closeIcon={<CloseCircleTwoTone />}
      >
        <Select
          showSearch
          size='large'
          style={{ width: 200, height: 'auto', color: '#1890ff' }}
          placeholder='Select a Course'
          loading={true}
          optionFilterProp='children'
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option className='option' value='jack1'>
            Jack1
          </Option>
          <Option className='option' value='lucy1'>
            Lucy1
          </Option>
          <Option className='option' value='tom1'>
            Tom1
          </Option>

          <Option className='option' value='jack2'>
            Jack2
          </Option>
          <Option className='option' value='lucy2'>
            Lucy2
          </Option>
          <Option className='option' value='tom2'>
            Tom2
          </Option>

          <Option className='option' value='jack3'>
            Jack3
          </Option>
          <Option className='option' value='lucy3'>
            Lucy3
          </Option>
          <Option className='option' value='tom3'>
            Tom3
          </Option>
        </Select>
      </Modal>
      <StudentsRecognized
        showStudents={showStudents}
        setShowStudents={setShowStudents}
      />
    </div>
  );
};

export default StartClass;
