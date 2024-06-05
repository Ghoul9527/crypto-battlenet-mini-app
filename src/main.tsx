import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.tsx'
import './index.css'

import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
