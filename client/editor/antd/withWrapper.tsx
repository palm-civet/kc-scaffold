import React, {useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useTreeManager } from '@editor/features/Tree/TreeManager'
import { containable, ComponentTypes } from '@editor/antd/helper'

export type WrapperOptions = {
  name: string
}

export interface IWrapperProps {
  name: string
  categroy: ComponentTypes
}

export interface IDragItem {
  name: string
  categroy: ComponentTypes,
  type: string
}

export function withWrapper (Component, options: WrapperOptions): React.FC {
  const Wrapper: React.FC<IWrapperProps> = props => {
    const treeManager = useTreeManager()
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
      drop: (item: any, monitor: any) => {

      },
      hover: (item: IDragItem, monitor: any) => {
        // TODO: 添加元素，交换顺序
        const { categroy, name } = props;

      },
      canDrop: (item: IDragItem) =>{
        const { categroy, name } = props;
        return containable({ categroy , name }, { categroy: item.categroy , name: item.name })
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
