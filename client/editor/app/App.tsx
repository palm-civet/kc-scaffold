import React from 'react'

import { Layout } from 'antd'

import Toolbar from '@editor/features/Toolbar/Toolbar'
import Components from '@editor/features/Components/Components'
import Tree from '@editor/features/Tree/Tree'
import Drawer from '@editor/features/Drawer/Drawer'

import styles from './App.module.css'

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout className={styles.app}>
      <Header><Toolbar /></Header>
      <Layout>
        <Sider theme="dark"><Components /></Sider>
        <Content><Drawer /></Content>
        <Sider theme="dark"><Tree /></Sider>
      </Layout>
    </Layout>
  )
}

export default App
