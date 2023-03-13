import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { checkOutRoom } from './../store/actions/roomsActions';



const CheckOutButton = ({ room }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleModalOk = async () => {
    setIsLoading(true);
    await dispatch(checkOutRoom(room.id));
    setIsModalOpen(false);
    setIsLoading(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" disabled={!room.isCheckedIn} onClick={handleClick}>
        Check Out
      </Button>
      <Modal
        open={isModalOpen}
        title="Check Out"
        okText="Confirm"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        confirmLoading={isLoading}
        closable
      >
        <p>{`Do you confirm the check-out Room ${room.number}?`}</p>
      </Modal>
    </>
  );
};


export default CheckOutButton;
