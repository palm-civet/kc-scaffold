import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@editor/app/rootReducer'
import { Dropper } from '../Components/Dropper'
import { useTreeManager } from '@editor/features/Tree/TreeManager'
import { cloneDeep } from 'lodash'
import { useDrag, useDrop } from 'react-dnd'
import * as GlobalComponent from '@editor/antd'
import * as SchemaComponent from '@editor/antd/schema'

const Drawer: React.FC = () => {
  const treeManager = useTreeManager()
  const [treeList, setTreeList] = useState(treeManager.outputNode())
  const dropEvent = (node) => {
    if (node.isUpdate) {
      return
    }
    const topId = treeList.id
    const name = node.componentName
    const component = SchemaComponent[name]
    treeManager.insertNode(topId, component)
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

    const draggerProps = {
      type: 'dragger',
      componentName: name,
      categroy: currentNode.type,
      id: currentNode.id,
      index: key,
      key: key
    }
    return (
      <CurrentComponent {...draggerProps}>{children}</CurrentComponent>
    )
  }

  return (
      <Dropper dropEvent={dropEvent}>
        {renderFun(treeList)}
      </Dropper>
  )
}

export default Drawer
