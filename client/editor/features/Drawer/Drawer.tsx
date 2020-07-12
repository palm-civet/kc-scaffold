import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@editor/app/rootReducer'
import { Dropper } from '../Components/Dropper'
import { Box } from '../Components/TestBox'

const Drawer: React.FC = () => {
  const { loading, treeNode } = useSelector(
    (state: RootState) => state.drawer
  )

  const TreeDom: React.FC = () => {
     return treeNode.renderTree()
   }

  return (
    <div>
      <Box/>
      <Dropper>
        <TreeDom/>
      </Dropper>
    </div>
  )
}

export default Drawer
