import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Pretendard Variable", apple-system, sans-serif;
    line-height: 1.6;
  }
`;

export default GlobalStyle;
