import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/cart'

const store = legacy_createStore( // Inititierar en store
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/**
 * Store - Sparar vårt state
 * Reducer - Som uppdaterar vårt state
 * Action - Som säger vad vi ska uppdatera
 * Dispatch - Som triggar en action
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }> { /** Gör Redux store tillgänglig för React-applikationen */ }
      <App />
    </Provider>
  </React.StrictMode>,
)
