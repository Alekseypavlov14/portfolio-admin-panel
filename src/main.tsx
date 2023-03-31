import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from '@app/query'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
)
