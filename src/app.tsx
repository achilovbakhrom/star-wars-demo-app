import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import store from './config/store'
import theme from './config/theme'
import Routes from './route'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
