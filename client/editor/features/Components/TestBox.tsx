import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
  display: 'inline-block',
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export const Box: React.FC = () => {
  const [, drag] = useDrag({ item: { type: 'dragger' } })
  return (
    <div ref={drag} style={style}>
      Drag me
    </div>
  )
}
