import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors, padding } from "styles/Variables";

export const BaseNavLinkStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${padding.button};
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
`

export const StyledNavLink = styled(Link)`
  ${BaseNavLinkStyles}
`;

export const StyledDisabledNavLink = styled.a`
  ${BaseNavLinkStyles}

  background: ${colors.disabledButtonBG};
  color: ${colors.disabledButtonText};
  cursor: not-allowed;

  &:hover {
    background: ${colors.disabledButtonBG};
  }

  svg path {
    fill: rgb(166,166,166);
  }
`

export const StyledPlusIcon = styled.div`
  width: 24px;
  height: 24px;
`