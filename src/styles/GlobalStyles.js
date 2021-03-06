import { createGlobalStyle } from 'styled-components';

const primaryText = 'black';
export const primaryColor = '#C18D47';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  &::-webkit-scrollbar{
      width: 0.5rem;
    };
    &::-webkit-scrollbar-thumb{
      background-color: $primaryColor;
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
}

body {
  background: #F9FCFB;
  line-height: 2rem;
  letter-spacing: .1rem;
  overflow-x: hidden;
  color: ${primaryText};
  font-family: 'Prata', serif;
  font-size: 1.2rem;
  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }
}

a{
  text-decoration: none;
}

button{
  font-family: 'Prata', serif;
  font-weight: bold;
  font-size: 2.5rem;
  padding: 1rem 2rem;
  border: ${primaryColor};
  background: transparent;
  color: ${primaryColor};
  transition: all 0.5s ease;
  margin-bottom: 8rem;
  border-radius: 10px;
  &:hover{
    background: ${primaryColor};
    color: white;
  }
}
a{
  color: black;
}
.hidden{
  overflow: hidden;
}`;

export default GlobalStyle;