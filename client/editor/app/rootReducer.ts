import { combineReducers } from '@reduxjs/toolkit'

import treeReducer from '@editor/features/Tree/TreeSlice'

const rootReducer = combineReducers({
  tree: treeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
