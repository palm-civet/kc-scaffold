import React from 'react'
import { Provider } from 'react-redux'

import App from './app/App'
import store from './app/store'

const Editor: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Editor
