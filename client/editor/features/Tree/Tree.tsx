import React, { useEffect } from 'react'

import { Tree, Card } from 'antd'
import { useTreeManager } from './TreeManager'


const TreeList: React.FC = () => {
  const treeManager = useTreeManager()
  const [treeList, removeDeps] = treeManager.observableTreeList()
  useEffect(() => removeDeps, [])

  return (
    <Card title="组件树" bordered={false}>
      <Tree
        treeData={[treeList]}
      />
    </Card>
  )
}

export default TreeList
