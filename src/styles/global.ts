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
  span {
    color: ${(props) => props.theme.colors['base-span']};
  }
  ::-webkit-scrollbar {
width: 10px;
height: 10px;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
height: 10px;
background-color: transparent;
}
::-webkit-scrollbar-track-piece  {
background-color: #eeeeee;
-webkit-border-radius: 16px;
}
::-webkit-scrollbar-thumb:vertical {
height: 10px;
background-color: #666;
border: 1px solid #eee;
-webkit-border-radius: 16px;
}
`
