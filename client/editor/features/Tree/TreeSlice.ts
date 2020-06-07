import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { treeData } from './tree.mock'

interface TreeNode {
  title: string | JSX.Element
  key: string
  disabled?: boolean
  disableCheckbox?: boolean
  children?: TreeNode[]
}

interface TreeState {
  loading: boolean
  root: TreeNode[]
}

const initialState: TreeState = {
  loading: false,
  root: [treeData]
}

const tree = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    addTreeNode (state, action: PayloadAction<{node: TreeNode, target: string}>) {
      // add node to target
      const { node, target } = action.payload
      const treeNode = state.root.find(item => item.key === target)
      if (treeNode) treeNode.children.push(node)
    }
  }
})

export const {
  addTreeNode
} = tree.actions

export default tree.reducer
