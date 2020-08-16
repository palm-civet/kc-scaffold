import React, {useRef, useEffect, useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useTreeManager } from '@editor/features/Tree/TreeManager'
import { containable, ComponentTypes } from '@editor/antd/helper'
import * as SchemaComponent from '@editor/antd/schema'

export type WrapperOptions = {
  name: string
}

export interface IWrapperProps {
  name: string
  categroy: ComponentTypes,
  id?: string,
  componentName: string,
  moveComponent: (hoverId, currentId) => {}
}

export interface IDragItem {
  name: string
  categroy: ComponentTypes,
  type: string,
  id?: string,
  componentName: string
}

export function withWrapper (Component, options: WrapperOptions): React.FC {

  const Wrapper: React.FC<IWrapperProps> = props => {
    const treeManager = useTreeManager()
    const [element, setElement] = useState<HTMLElement>()

    useEffect(() => {
      let currentDom = document.querySelector('.drag-'+props.id) as HTMLElement
      if (currentDom) {
        currentDom = currentDom[0] ? currentDom[0] : currentDom
      }
      setElement(currentDom)
      drag(drop(currentDom))
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
        // if(!dragId) {
        //   const name = item.componentName
        //   const component = SchemaComponent[name]
        //   insertComponent(component, hoverId)
        // }
      },
      hover: (item: IDragItem, monitor: any) => {

        // TODO: 添加元素，交换顺序
        const { categroy, name } = props;
        const dragId = item.id
        const hoverId = props.id
        if (dragId === hoverId || !monitor.isOver({ shallow: true })) {
          return
        }
        const hoverBoundingRect = element?.getBoundingClientRect() //当前hover元素信息
        const clientOffset = monitor.getClientOffset() // 鼠标拖拽移动的当前位置
        // const getInitialClientOffset = monitor.getInitialClientOffset()  // 鼠标拖拽的初始位置
        // const getInitialSourceClientOffset = monitor.getInitialSourceClientOffset()  // 拖拽元素DOM位置
        // const mouseX = clientOffset.x
        // const mouseY = clientOffset.y

        const hoverOverX = hoverBoundingRect.x + hoverBoundingRect.width;
        const hoverOverY = hoverBoundingRect.y + hoverBoundingRect.height;

        if(!dragId) {
          console.log(item)
          const name = item.componentName
          const component = SchemaComponent[name]
          insertComponent(component, hoverId)
          
        } else if (dragId) {
          insertComponent(dragId, hoverId)
        }
        console.log(clientOffset.y, hoverOverY)
        // 拖拽移动x,y坐标大于hover元素坐标DOM位置+自身高宽时，交换
        if (clientOffset.y >= hoverOverY - 20) {
          swapComponent(dragId, hoverId)
        }

        // 拖拽移动x,y坐标进入到容器组件时，移动到内部
        if(dragId && canDrop) {
          console.log('canDrop')
          moveComponent(dragId, hoverId)
        }

      },
      canDrop: (item: IDragItem) =>{
        const { categroy, componentName } = props;
        return containable({ categroy , name: componentName }, { categroy: item.categroy , name: item.componentName })
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
      }),
    })

    const swapComponent = (dragId, hoverId) => {
      const dragNode = treeManager.findNode(dragId)
      const hoverNode = treeManager.findNode(hoverId)
      const parentNodeChildren = treeManager.findNode(dragNode.parent).children
      const dragIndex = parentNodeChildren.indexOf(dragNode)
      const hoverIndex = parentNodeChildren.indexOf(hoverNode)
      parentNodeChildren.splice(dragIndex, 1)
      parentNodeChildren.splice(hoverIndex, 0, dragNode)
      props.moveComponent(dragId, hoverId)
    }

    const moveComponent = (dragId, hoverId) => {
      const dragNode = treeManager.findNode(dragId)
      const hoverNode = treeManager.findNode(hoverId)
      const parentNodeChildren = treeManager.findNode(dragNode.parent).children
      const dragIndex = parentNodeChildren.indexOf(dragNode)
      const hoverIndex = parentNodeChildren.indexOf(hoverNode)
      parentNodeChildren.splice(dragIndex, 1)
      hoverNode.children?.splice(hoverIndex, 0, dragNode)
      props.moveComponent(dragId, hoverId)
    }

    const insertComponent = (dragNode, hoverId) => {
      let parentNodeChildren = null
      const hoverNode = treeManager.findNode(hoverId)
      if (!canDrop) {
        parentNodeChildren = treeManager.findNode(hoverId.parent).children
        const hoverIndex = parentNodeChildren.indexOf(hoverNode)
        treeManager.insertNode(hoverNode.parent, dragNode, hoverIndex)
        parentNodeChildren.children?.splice(hoverIndex, 0, dragNode)
      } else {
        treeManager.insertNode(hoverId, dragNode)
      }
      console.log("insertComponent")
      props.moveComponent(hoverId, hoverId)
    }

    return <Component className={`drag-${props.id}`}>{props.children}</Component>
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
