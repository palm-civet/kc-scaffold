import React from 'react'
import { Provider } from 'react-redux'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import App from './app/App'
import store from './app/store'
import { managerContext, manager } from './features/Tree/TreeManager'

const Editor: React.FC = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <managerContext.Provider value={manager}>
          <App />
        </managerContext.Provider>
      </DndProvider>
    </Provider>
  )
}

export default Editor
