import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Tree, Skeleton, Button } from 'antd'
import { RootState } from '@editor/app/rootReducer'
import { addTreeNode } from './TreeSlice'

let treeCount = 1

const TreeList: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, root } = useSelector(
    (state: RootState) => state.tree
  )
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  const insertNode = () => {
    dispatch(addTreeNode({ 
      target: '0-0', 
      node: {
        title: 'leaf',
        key: `0-0-${++treeCount}`
      }
    }))
  }

  return (
    <>
      <Button type='primary' onClick={insertNode}>插入子节点</Button>
      {
        loading ?
          <Skeleton /> :
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={root}
          />
      }
    </>
  )
}

export default TreeList
