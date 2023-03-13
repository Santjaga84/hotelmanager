import React from 'react';
import { List, Button, Carousel, Col, Descriptions, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  CheckOutlined, HomeOutlined } from '@ant-design/icons';
import { ROOM_TYPE_LABEL } from '../../../constants/rooms';
import './SingleRoomPage.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {getRooms} from './../../../store/actions/roomsActions'
import CheckInButton from './../../../Buttons/CheckInButton';
import CheckOutButton from './../../../Buttons/CheckOutButton';

//CheckOutlined

const SingleRoomPage = () => {
 
const dispatch = useDispatch();

const rooms = useSelector(state => state.rooms);
const [currentRoom, setCurrentRoom] = useState({})
  
const {roomId} = useParams(); 



useEffect(() => {
 dispatch(getRooms());
 },[]); 


useEffect(() => {

rooms.forEach(room => {
  if(room.id === roomId ) setCurrentRoom(room);
});
},[rooms]);


const featuresArray = [];
for (let key in currentRoom.features) {
  featuresArray.push(currentRoom.features[key]);
}


return (
    
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Button type="link">
            <Link to="/roomstablepages">
              <HomeOutlined />
              &nbsp;
              Back Home
            </Link>
          </Button>
        </Col>
        <Col span={12}>
          <Carousel>
           {currentRoom.gallery ? Object.keys(currentRoom.gallery).map((key)=><img key={currentRoom.gallery[key]} src={currentRoom.gallery[key]} alt={currentRoom.type} className="slider-image" /> ):''}
          </Carousel>
        </Col>
        <Col span={12}>
          <Row justify="space-between">
            <Col>
              <Typography.Title level={2} underline>{`Room ${currentRoom.number}`}</Typography.Title>
            </Col>
            <Col>
              {/* <Button type="primary" className="room-button" disabled={currentRoom.isCheckedIn}>Check In</Button> */}
                  <CheckInButton room={
                    {
                     id:roomId,
                     isCheckedIn:currentRoom.isCheckedIn,
                     guest:currentRoom.guest,
                    
                  }} /> 
                 <CheckOutButton room={
                  {
                    id:roomId,
                    guest:currentRoom.guest,
                    isCheckedIn:currentRoom.isCheckedIn,
                   
                  }
                 } />   
              {/* <Button type="primary" className="room-button" disabled={!currentRoom.isCheckedIn}>Check Out</Button> */}
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
                <Descriptions.Item label="Guest">{currentRoom.guest}</Descriptions.Item>
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
                    dataSource={featuresArray}
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

//SingleRoomPage.propTypes = propTypes;

export default SingleRoomPage;
