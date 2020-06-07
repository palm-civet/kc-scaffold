import 'es6-promise/auto'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
import loadable from '@loadable/component'

import { Skeleton } from 'antd'

import 'normalize.css'

const Platform = loadable(() => import('@platform/index'), {
  fallback: <Skeleton />
})

const Editor = loadable(() => import('@editor/index'), {
  fallback: <Skeleton />
})

const App = () => (
  <HashRouter>
    <Switch>
      <Route path='/platform'><Platform /></Route>
      <Route path='/editor'><Editor /></Route>
    </Switch>
  </HashRouter>
)

const render =  () =>
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

window.addEventListener('load', render)
render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(['./platform/index', './editor/index'], render)
}
