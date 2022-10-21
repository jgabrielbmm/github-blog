import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${props => props.theme['bgray-900']};
    color: ${props => props.theme['bgray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea,button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`