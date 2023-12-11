import styled, { css } from "styled-components";
import { colors, padding } from "styles/Variables";

export interface StyledButton {
  disabled?: boolean
}

export const BaseButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${padding.button};
  background: ${colors.primary};
  color: ${colors.buttonFontColor};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background: ${colors.buttonColorHover};
  }
`

export const StyledButton = styled.button<StyledButton>`
  ${BaseButtonStyles};
  width: '100%';

  ${props => props.disabled && css`
    background: ${colors.disabledButtonBG};
    color: ${colors.disabledButtonText};
    cursor: not-allowed;
    pointer-events: none;

    svg path {
      fill: rgb(166,166,166);
    }
  `}
`;
