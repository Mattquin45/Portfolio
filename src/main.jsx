import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './nav_bar/NavBar.jsx'
import './nav_bar/nav.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <NavBar />
    <App />
  </StrictMode>,
)
