import { createGlobalStyle } from 'styled-components';
import { ResetStyles } from './Reset';
import { colors } from './Variables';

const GlobalStyles = createGlobalStyle`

  ${ResetStyles}

  * {
    font-family: 'Roboto', sans-serif;

    transition-property: background-color, fill, border, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  a {
    text-decoration: none;
    color: ${colors.textPrimary};
  }

  input::placeholder, textarea::placeholder {
    color: ${colors.placeholderColor};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; 
    letter-spacing: 0.15px;
  }

  input, textarea {
    resize: none;
    margin-bottom: 16px;
    height: 56px;
    border-radius: 4px;
    border: 1px solid ${colors.inputBorderColor};
    padding: 0 12px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; 
    letter-spacing: 0.15px;

    &#link {
      padding-left: 45px;

      &::placeholder {
        padding: 0;
      }
    }

    &:focus {
      outline: none;
      border: 2px solid ${colors.primary};
    }
  }
`;

export default GlobalStyles;