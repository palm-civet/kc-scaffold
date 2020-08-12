import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@editor/app/rootReducer'
import { Dropper } from '../Components/Dropper'
import { Box } from '../Components/TestBox'
import { TreeManager } from '../Tree/TreeManager'
import { cloneDeep } from 'lodash'
import { useDrag, useDrop } from 'react-dnd'
import { Dragger } from '../Components/Dragger'
import * as GlobalComponent from '@editor/antd'

const treeManager = new TreeManager( {
  name: 'Layout',
  type: 'Layout',
  children: [],
  props: { 
  }
})

const Drawer: React.FC = () => {
  const [treeList, setTreeList] = useState(treeManager.outputNode())

  const dropEvent = (node) => {
    const topId = treeList.id
    const name = node.componentName
    if (node.isAdd) {
      const component = {
        name: name,
        type: name,
        props: [],
        categroy: "Mate", // 组件类型
        childrenType: [
          "all"
        ],// 支持的子元素类型
      }
      treeManager.insertNode(topId, component)
    } else {

    }

    setTreeList(treeManager.outputNode())
  }

  // 渲染
  const renderFun = (currentNode, key = 0) => {
    if(!currentNode) {
      return null
    }
      const name = currentNode.name
      const props = { ...currentNode.props, key: key }
      const CurrentComponent = GlobalComponent[name] || name
      const children = currentNode.children?.length ? currentNode.children.map((element, key) => {
        if (typeof element === 'string') {
          return element
        }
        else {
          return renderFun(element, key)
        }
      }) : null;

      const DraggerProps = {
        acceptItem: {
          type: 'dragger',
          componentName: name,
        },
        id: currentNode.id,
        index: key,
        key: key,
        isAdd: false
      }
      return (
        <Dragger {...DraggerProps}>
          {
            React.createElement(
            CurrentComponent,
            props,
            children
          )
        }
        </Dragger>
      )
  }

  return (

      <Dropper dropEvent={dropEvent}>
        {renderFun(treeList)}
      </Dropper>
  )
}

export default Drawer
