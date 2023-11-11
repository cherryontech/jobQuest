import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage } from './pages/LandingPage'
import { RoadmapPage } from './pages/RoadmapPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoadmapPage />
  </React.StrictMode>,
)
