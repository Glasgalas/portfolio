import { createGlobalStyle } from 'styled-components';
import Lato from '../fonts/Lato-Regular.ttf';
import Sunflower from '../fonts/Sunflower-Medium.ttf';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Lato';
  src: url(${Lato}) format('ttf'),
       
}

@font-face {
  font-family: 'Sunflower';
  src: url(${Sunflower}) format('ttf');
}
`;

export default FontStyles;
