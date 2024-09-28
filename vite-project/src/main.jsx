import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>
);
