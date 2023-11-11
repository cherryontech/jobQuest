import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage } from './pages/LandingPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* this needs to be updated to set up routing in App.jsx */}
    <LandingPage />
  </React.StrictMode>,
)
