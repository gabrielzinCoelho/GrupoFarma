import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['slate-800']};
  }

  body {
    background-color: ${props => props.theme['slate-300']};
    color: ${props => props.theme['slate-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;
  }

`