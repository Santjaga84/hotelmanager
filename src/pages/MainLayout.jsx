import React from 'react'
import { Card, List, Carousel } from 'antd';

const contentStyle = {
   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  
];


const MainLayout = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
  
  <div>
<Carousel afterChange={onChange}>
      <div>
        <h4 style={contentStyle}>
<List
    grid={{
      gutter: 0,
      column: 5,
      row: 10,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        
      </List.Item>
      
    )}
    
  />
        </h4>
      </div>
      <div>
        <h3 style={contentStyle}>
          <List
    grid={{
      gutter: 12,
      column: 5,
      row: 10,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        <Card >Card content</Card>
        
      </List.Item>
      
    )}
    
  />
        </h3>
      </div>
      
    </Carousel>
  </div>
  );
  };

export default MainLayout
