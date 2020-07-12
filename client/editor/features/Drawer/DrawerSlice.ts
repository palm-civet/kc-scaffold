import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TreeManager } from '../Tree/TreeManager'
import { treeData } from '../Tree/treeManager.mock'

const tree = new TreeManager(treeData);
console.log(tree.outputNode())

const initialState = {
  loading: false,
  treeNode: tree
}

const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {

  }
})

// export const {
//   addTreeNode
// } = drawer.actions

export default drawer.reducer
