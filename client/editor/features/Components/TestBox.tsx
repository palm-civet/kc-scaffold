import React from 'react'
import { useDrag } from 'react-dnd'
import { Button, DatePicker, version } from "antd";

const style: React.CSSProperties = {
  display: 'inline-block',
  border: '1px dashed gray',
  padding: '5px',
  backgroundColor: 'white',
  cursor: 'move',
}

export const Box: React.FC = () => {
  const [, drag] = useDrag({ item: { type: 'dragger' } })
  return (
    <div ref={drag} style={style}>
      <Button type="primary" style={{ marginLeft: 8 }}>
        Drag Primary Button
      </Button>
    </div>
  )
}
