import { ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'
//import { Login } from './pages/Login'
import { CriarProduto } from './pages/CriarProduto'



function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <Login /> */}
      <CriarProduto/>

    </ThemeProvider>
  )
}

export default App
