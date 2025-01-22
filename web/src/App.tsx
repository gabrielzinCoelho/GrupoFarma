import { ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'
//import { Login } from './pages/Login'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <Login /> */}
      <Sidebar/>
    </ThemeProvider>
  )
}

export default App
