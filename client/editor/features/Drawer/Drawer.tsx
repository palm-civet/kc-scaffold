import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@editor/app/rootReducer'
import { Dropper } from '../Components/Dropper'
import { Box } from '../Components/TestBox'
import { TreeManager } from '../Tree/TreeManager'
import { GlobalComponent } from '../Components/Components'
import { cloneDeep } from 'lodash'

const data = {
  name: 'span',
  children: [],
  props: { // 组件支持的属性
		className: {
    	type: "string", // 属性类型
      default: "myClass", // 默认值
      desc: "属性描述"
    },
  },
  childrenType: [
    "all"
  ],// 支持的子元素类型
}

const treeManager = new TreeManager(data)

const Drawer: React.FC = () => {
  const [treeList, setTreeList] = useState(treeManager.outputNode())
  console.log("treeList",treeList)

  useEffect(() => {

  }, [])


  const dropEvent = (node) => {
    const topId = treeList.id
    const name = node.componentName
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
    setTreeList(treeManager.outputNode())
  }
  // 渲染
  const renderFun = (currentNode, key = 0) => {
    console.log("renderFun", key)
    if(!currentNode) {
      return null
    }
      const children = currentNode.children
      const name = currentNode.name
      const props = { ...currentNode.props, key: key }
      const CurrentComponent = GlobalComponent[name] || name
      return React.createElement(
        CurrentComponent,
        props,
        children?.length ? children.map((element, key) => {
          if (typeof element === 'string') {
            return element
          }
          else {
            return renderFun(element, key)
          }
        }) : null
      )
  }

  return (
      <Dropper dropEvent={dropEvent}>
        {renderFun(treeList)}
      </Dropper>
  )
}

export default Drawer
