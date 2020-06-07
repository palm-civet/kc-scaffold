import React from 'react'

import Toolbar from '@editor/features/Toolbar/Toolbar'
import Components from '@editor/features/Components/Components'
import Tree from '@editor/features/Tree/Tree'
import Drawer from '@editor/features/Drawer/Drawer'

import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.toolbar}>
        <Toolbar />
      </div>
      <div className={styles.components}>
        <Components />
      </div>
      <div className={styles.tree}>
        <Tree />
      </div>
      <div className={styles.drawer}>
        <Drawer />
      </div>
    </div>
  )
}

export default App
