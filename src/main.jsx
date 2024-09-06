import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestByClass2 from './components/TestByCLass2/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestByClass2/>
  </StrictMode>,
)
