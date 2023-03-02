import React from 'react';
import { Button, Carousel, Col, Descriptions, List, Row, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckOutlined, HomeOutlined } from '@ant-design/icons';
//import MainLayout from '../../components/MainLayout';
import { getSingleRoom } from '../../../selectors/roomsSelectors.js'
import { ROOM_TYPE_LABEL } from '../../../constants/rooms';
//import './SingleRoomPage.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {getRooms} from './../../../store/actions/roomsActions'
import { getRoomsSuccess } from './../../../store/actions/roomsActions';

const propTypes = {};

const SingleRoomPage = () => {
  // const { search } = useLocation();
  // const room = useSelector((state) => getSingleRoom(state, search.substr(1)));

//const { id } = useParams();
const dispatch = useDispatch();

const rooms = useSelector(state => state.rooms);
const [currentRoom, setCurrentRoom] = useState({})
  
const {roomId} = useParams(); 

console.log("room",roomId);

useEffect(() => {
 dispatch(getRoomsSuccess());
 
  },[]); 


useEffect(() => {

rooms.forEach(room => {
  if(room.id === roomId ) setCurrentRoom(room);
  console.log("price",currentRoom);
});
},[rooms]);

  return (
    
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Button type="link">
            <Link to="/">
              <HomeOutlined />
              &nbsp;
              Back Home
            </Link>
          </Button>
        </Col>
        <Col span={12}>
          <Carousel>
            {/* {currentRoom.gallery.map((imageUrl) =>  */}
            <img key={currentRoom.imageUrl} src={currentRoom.imageUrl} alt={currentRoom.type} className="slider-image" />
            {/* )} */}
          </Carousel>
        </Col>
        <Col span={12}>
          <Row justify="space-between">
            <Col>
              <Typography.Title level={2} underline>{`Room ${currentRoom.number}`}</Typography.Title>
            </Col>
            <Col>
              <Button type="primary" className="room-button" disabled={currentRoom.isCheckedIn}>Check In</Button>
              <Button type="primary" className="room-button" disabled={!currentRoom.isCheckedIn}>Check Out</Button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Descriptions
                labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
                column={1}
              >
                <Descriptions.Item label="Type">{ROOM_TYPE_LABEL[currentRoom.type]}</Descriptions.Item>
                <Descriptions.Item label="Occupancy">{currentRoom.occupancy}</Descriptions.Item>
                <Descriptions.Item label="Price">{`${currentRoom.price}$`}</Descriptions.Item>
                <Descriptions.Item label="Quest">{currentRoom.guest}</Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={12}>
              <Descriptions
                layout="vertical"
                labelStyle={{ fontWeight: 'bold' }}
              >
                <Descriptions.Item label="Features">
                  <List
                    size="small"
                    dataSource={currentRoom.features}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckOutlined />
                        &nbsp;
                        {item}
                      </List.Item>
                    )}
                  />
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Descriptions labelStyle={{ fontWeight: 'bold' }} column={2}>
            <Descriptions.Item label="Description">{currentRoom.description}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    
  );
};

SingleRoomPage.propTypes = propTypes;

export default SingleRoomPage;
