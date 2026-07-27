import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // ⭕️ react-dom/client 로 변경!
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

