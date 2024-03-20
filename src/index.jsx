import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import Store from './shared/application/redux/store/store.js';
import App from './app.jsx';
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
