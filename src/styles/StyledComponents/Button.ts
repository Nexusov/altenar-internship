import styled, { css } from "styled-components";
import { colors, padding } from "styles/Variables";

interface StyledButtonProps {
  size: 'small' | 'large';
  disabled?: boolean;
}

export const StyledButton = styled.a<StyledButtonProps>`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${padding.button};
  width: ${props => props.size === 'large' ? '100%' : 'auto'};
  margin-bottom: 107px;
  background: ${colors.primary};
  color: ${colors.buttonFontColor};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background: ${colors.buttonColorHover};
  }

  ${props => props.disabled && css`
    background: ${colors.disabledButtonBG};
    color: ${colors.disabledButtonText};
    cursor: not-allowed;
    pointer-events: none;

    svg path {
      fill: rgb(166,166,166);
    }
  `}
`

export const StyledButtonIcon = styled.div`
  width: 24px;
  height: 24px;
`