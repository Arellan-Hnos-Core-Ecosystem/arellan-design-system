import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@arellan-hnos-core-ecosystem/ui'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultScheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>
)
