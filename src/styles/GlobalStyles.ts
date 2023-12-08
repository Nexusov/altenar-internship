import { createGlobalStyle } from 'styled-components';
import { ResetStyles } from './Reset';

const GlobalStyles = createGlobalStyle`

${ResetStyles}

* {
  font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyles;