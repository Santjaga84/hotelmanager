import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';
import { checkInRoom } from './../store/actions/roomsActions';
import { ROOM_OCCUPANCY_LIST, ROOMS_TYPES } from './../constants/rooms';
import { showNotification } from './../store/actions/notificationsActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from './../constants/notifications';
import  currentRoom  from './../pages/context/SingleRoomPages/SingleRoomPage';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const CheckInButton = ({ room }) => {

  const dispatch = useDispatch();
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [form] = Form.useForm();
  const disabledDate = (current) => current && current < moment().endOf('day');


  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleModalOk = async () => {
    if(room.id){
    setIsLoading(true);

    try {
      const values = await form.validateFields();
      //form.resetFields();
      dispatch(checkInRoom(room.id, values));
      setIsModalOpen(false);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      dispatch(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.FORM_VALIDATION_ERROR));
    }
    }
  };
  const handleModalCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" disabled={room.isCheckedIn} onClick={handleClick}>
        Check In
      </Button>
      <Modal
        open={isModalOpen}
        title="Check In"
        okText="Check In"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        confirmLoading={isLoading}
        closable
      >
        <Form form={form} layout="vertical" name="check_in_form">
          <Form.Item
            name="guest"
            label="Please, enter the guest's name:"
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Input placeholder="Guest's Name" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="checkOutDate"
            label="Please, enter the approximate date of guest checkout:"
          >
            <DatePicker disabledDate={disabledDate} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

// CheckInButton.propTypes = propTypes;

export default CheckInButton;
