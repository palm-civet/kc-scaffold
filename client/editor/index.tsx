import React from 'react'
import { Provider } from 'react-redux'

import App from './app/App'
import store from './app/store'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Editor: React.FC = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  )
}

export default Editor
