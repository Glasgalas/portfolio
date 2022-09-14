import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
  }

  *::before,
  *::after {
    
  }

  body {
    padding: 40px 75px 24px 75px;
    background-color: ${baseTheme.colors.bg};
    color:${baseTheme.colors.font};
    font-family:'Lato', sans-serif;
    font-weight:400;
    font-size:16px;
    /* scroll-behavior: smooth; */
  }

ul {
  list-style:none;
}
`;
