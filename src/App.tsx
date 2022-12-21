import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RoutesApp } from './Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RoutesApp></RoutesApp>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
