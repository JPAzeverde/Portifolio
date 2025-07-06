import App from './App.tsx'
import { GlobalStyles } from './styled/' 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppThemeProvider, LanguageProvider  } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        <App />
      </LanguageProvider>
    </AppThemeProvider>
  </React.StrictMode>
)