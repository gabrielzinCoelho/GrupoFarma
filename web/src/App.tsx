import { ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'
import { Login } from './pages/Login'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}

export default App
