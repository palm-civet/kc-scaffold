import React, {useRef, useEffect, useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useTreeManager } from '@editor/features/Tree/TreeManager'
import { containable, ComponentTypes } from '@editor/antd/helper'

export type WrapperOptions = {
  name: string
}

export interface IWrapperProps {
  name: string
  categroy: ComponentTypes,
  id?: string
}

export interface IDragItem {
  name: string
  categroy: ComponentTypes,
  type: string,
  id?: string
}

export function withWrapper (Component, options: WrapperOptions): React.FC {

  const Wrapper: React.FC<IWrapperProps> = props => {
    const treeManager = useTreeManager()
    const [element, setElement] = useState<HTMLElement>()

    useEffect(() => {
      const dom = document.getElementById(props.id)
      setElement(dom)
      drag(drop(dom))
    }, [])
    const [{}, drag, preview] = useDrag({
      item: {
        type: 'dragger', // item type
        isUpdate: true,
        ...props
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

    const [{ canDrop }, drop] = useDrop({
      accept: 'dragger', // item type
      options: {},
      drop: (item: any, monitor: any) => {

      },
      hover: (item: IDragItem, monitor: any) => {
        // TODO: 添加元素，交换顺序
        const { categroy, name } = props;
        const dragId = item.id
        const hoverId = props.id
        if (dragId === hoverId) {
          return
        }
        const hoverBoundingRect = element?.getBoundingClientRect()
        const hoverBoxHeight = hoverBoundingRect.bottom - hoverBoundingRect.top
        const hoverBoxWidth = hoverBoundingRect.right - hoverBoundingRect.left
        const clientOffset = monitor.getClientOffset()
        const getInitialClientOffset = monitor.getInitialClientOffset()

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const hoverClientY = clientOffset.y - hoverBoundingRect.top


        console.log(clientOffset, getInitialClientOffset)
        moveComponent(dragId, hoverId)


        console.log("hoverBoundingRect", hoverBoundingRect)

      },
      canDrop: (item: IDragItem) =>{
        const { categroy, name } = props;
        return containable({ categroy , name }, { categroy: item.categroy , name: item.name })
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
      }),
    })

    const moveComponent = (dragId, hoverId) => {
      console.log(treeManager)
      treeManager.findNode(dragId)
    }

    return <Component id={props.id} >{props.children}</Component>
    // props.categroy === ComponentTypes.Output || props.categroy === ComponentTypes.Meta ? (
    //   <div ref={ref} className="drag" style={{ border: '1px solid red', display: 'inline-block' }} >
    //     <Component ref={refv} id={props.id}  />
    //   </div>
    //   ) : (
    //     <Component id={props.id} style={{position: 'relative'}}>
    //       <div ref={ref} className="drag" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 11, border: '1px solid red' }} ></div>
    //       {props.children}
    //     </Component>
    //   )
  }
  return Wrapper
}
