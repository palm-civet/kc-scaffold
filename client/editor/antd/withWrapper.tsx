import React, {useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd'

export type WrapperOptions = {
  name: string
}

export function withWrapper (Component, options: WrapperOptions): React.FC {
  const Wrapper: React.FC = props => {
    const ref = useRef(null)

    const [collectedProps, drag, preview] = useDrag({
      item: {
        type: '', // item type
      },
      previewOptions: {},
      options: {},
      begin: (monitor: any) => {

      },
      end: (item, monitor: any) => {

      },
      canDrag: (monitor: any) => {
        return true
      },
      isDragging: (monitor: any) => {
        return true
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
        canDrag: monitor.canDrag()
      }),
    })

    const [collectedDropProps, drop] = useDrop({
      accept: '', // item type
      options: {},
      drop: (item, monitor) => {

      },
      hover: (item, monitor) => {

      },
      canDrop: () =>{
        return true
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    })

    drag(drop(ref))

    return <Component ref={ref} {...props} />
  }
  return Wrapper
}
