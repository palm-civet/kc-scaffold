import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TreeManager } from '../Tree/TreeManager'
// import { treeData } from '../Tree/treeManager.mock'

// const tree = new TreeManager(treeData);

const initialState = {
  loading: false,

  root: {
    name: 'div',
    children: []
  }
}

const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    initTreeManager() {
      new TreeManager(treeData)
    },
    addTreeNode (state, action: PayloadAction<{node, target}>) {
      // add node to target
      const { node, target } = action.payload
      const treeNode = state.root.children.find(item => item.key === target)
      if (treeNode) treeNode.children.push(node)
    }
  }
})

// export const {
//   addTreeNode
// } = drawer.actions

export default drawer.reducer
