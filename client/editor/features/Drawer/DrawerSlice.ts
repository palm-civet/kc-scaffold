import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TreeManager } from '../Tree/TreeManager'
// import { treeData } from '../Tree/treeManager.mock'

// const tree = new TreeManager(treeData);

const initialState = {
  loading: false,
  treeNode: null,
  root: {
    name: 'div',
    children: []
  }
}

const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    initTreeManager(state) {
      console.log(state.root)
      state.treeNode = new TreeManager(state.root)
    },
    addTreeNode (state, action: PayloadAction<{node, target}>) {
      // add node to target
      const { node, target } = action.payload
      const treeNode = state.root.children.find(item => item.key === target)
      if (treeNode) treeNode.children.push(node)
    }
  }
})

export const {
  addTreeNode,
  initTreeManager
} = drawer.actions

export default drawer.reducer
