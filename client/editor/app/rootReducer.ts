import { combineReducers } from '@reduxjs/toolkit'

import treeReducer from '@editor/features/Tree/TreeSlice'
import drawerReducer from '@editor/features/Drawer/DrawerSlice'

const rootReducer = combineReducers({
  tree: treeReducer,
  drawer: drawerReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
