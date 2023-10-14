import React from 'react'
import { Card, ConfigProvider } from "antd";
const Competencie = (props) => {
    const { img, title, desc } = props;
    const { Meta } = Card;
  return (
    <ConfigProvider theme={{ token: {
        colorText: "#ffffff",
        colorTextDescription: "#ffffff"
      } }}>
        <Card
          className="bg-gray-700"
          hoverable
          style={{ width: 240 }}
          cover={
            <img
             className='object-cover'
              alt="example"
              src={img}
              style={{height: "200px"}}
            />
          }
        >
          <Meta
            style={{ color: !"white" }}
            title={title}
            description={desc}
          />
        </Card>
      </ConfigProvider>
  )
}

export default Competencie