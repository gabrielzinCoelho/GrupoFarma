import { ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
