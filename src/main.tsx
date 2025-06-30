import App from './App.tsx'
import { GlobalStyles } from './styled/' 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppThemeProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyles />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)