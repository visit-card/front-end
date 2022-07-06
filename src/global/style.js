import { createGlobalStyle } from 'styled-components'

const SCROLLBAR_SIZE = 10;

const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${(props) => props.theme.background};
  }
  
  ::-webkit-scrollbar {
      height: ${ SCROLLBAR_SIZE }px;
      width: ${ SCROLLBAR_SIZE }px;
      background-color: ${(props) => props.theme.scrollbar.background};
  }
    
  ::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background: #888888;
  }
`

export {
    GlobalStyle,
    SCROLLBAR_SIZE
}