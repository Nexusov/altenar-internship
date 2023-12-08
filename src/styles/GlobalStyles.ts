import { createGlobalStyle } from 'styled-components';
import { ResetStyles } from './Reset';

const GlobalStyles = createGlobalStyle`

${ResetStyles}

* {
  font-family: 'Roboto', sans-serif;

  transition-property: background-color, fill, border, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
}
`;

export default GlobalStyles;