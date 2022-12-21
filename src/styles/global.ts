import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: ${(props) => props.theme.fonts.regular};
  }
  body {
    background: ${(props) => props.theme.colors['base-input']};
    -webkit-font-smoothing: antialiased;
    button {
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
  i {
    font-size: 1rem;
  }
`
