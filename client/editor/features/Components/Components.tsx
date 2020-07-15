import React from 'react'
import { Space } from "antd";
import { Box } from '../Components/TestBox'

const style: React.CSSProperties = {
  backgroundColor: 'white',
  height: '100%'
}

const Components: React.FC = () => {
  return (
    <div style={style}>
      <div>component list</div>
      <Space direction="vertical">
        <Box/>
      </Space>
    </div>

  )
}

export default Components
