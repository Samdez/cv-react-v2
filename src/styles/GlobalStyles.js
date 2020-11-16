import { createGlobalStyle } from 'styled-components';

const primaryText = 'black';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #F9FCFB;
  line-height: 1.2rem;
  letter-spacing: .1rem;
  overflow-x: hidden;
  color: ${primaryText};
  font-family: 'Prata', serif;
  font-size: 1.2rem;
}`

export default GlobalStyle;