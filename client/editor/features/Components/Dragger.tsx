import React, {useRef} from 'react'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '5px 10px',
  marginBottom: '5px',
  backgroundColor: 'white',
  width: '20px',
}

interface DraggerProps {
  id: string,
  index: number,
  acceptItem: AcceptItem,
  moveCard: (item: any) => void

}

interface AcceptItem {
  type: string
}
/**
 * useDrag 返回一个数组，
 * 数组第一项是个对象，对象值包含了从collect函数中返回的对象，如果没有定义collect函数，则这个参数是空对象
 * 数组的第二项是拖动对象connector函数，必须关联到拖动节点
 * 数组的第三项是拖动预览的connector函数，可以附加到拖动预览
 * 参数：item,用于标识当前拖动元素，drop与drap之间的唯一标识，此处最好不要使用太复杂的引用对象
 * item.type 必须是字符串或者symbol类型
 */
export const Dragger: React.FC<DraggerProps> = ({ id, acceptItem, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null)
  // drag
  const [{ isDragging, opacity }, drag, preview] = useDrag({
    item: {...acceptItem, id, index},
    previewOptions: {},
    options: {},
    begin: (monitor: any) => { // Fired when a drag operation begins

    },
    end: (monitor: any) => { // When the dragging stops, endis called
      console.log(monitor.didDrop())
    },
    // canDrag: (monitor: any) => {  // specify whether the dragging is currently allowed, 不需要指定是忽略此属性即可
    //   return true
    // },
    // isDragging: (monitor: any) => { //正在拖动的元素，可以重写此方法

    // },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.4 : 1,
      canDrag: monitor.canDrag()
    }),
  })

  // drop
  const [,drop] = useDrop({
    accept: acceptItem.type,
    hover: () => {

    }
  })

  drag(drop(ref))

  return (
    <div ref={preview} style={{ ...style, opacity }}>
      <div ref={ref}>
      </div>
    </div>
  )
};
