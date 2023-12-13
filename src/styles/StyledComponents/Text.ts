import styled, { css } from "styled-components";
import { colors } from "styles/Variables";

export enum TextStyleTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Navigation = 'navigation',
  Hyperlink = 'hyperlink',
  Button = 'button',
  Error = 'error',
  SwitcherLight = 'switcher-light',
  SwitcherDark = 'switcher-dark',
  SizeError = 'size-error',
}

interface StyledTextProps {
  type: TextStyleTypes,
  isToggled?: boolean;
}

export const BaseTextStyles = styled.p`
  font-weight: 400;
  font-style: normal;
`
export const primaryStyle = css`
  font-size: 14px;
  color: ${colors.textPrimary};
  line-height: 20px;
  letter-spacing: 0.15px;
`;

export const secondaryStyle = css`
  font-size: 12px;
  color: ${colors.textSecondary};
  line-height: normal;
  letter-spacing: 0.4px;
`;

export const errorStyle = css`
  color: ${colors.inputErrorMsg};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  letter-spacing: 0.4px;
`;

export const navigationStyle = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${colors.textNavigation};
`;

export const hyperlinkStyle = css`
  color: ${colors.primary};
  cursor: pointer;
`;

export const buttonTextStyle = css`
  font-size: 15px;
  font-weight: 500;
  line-height: 26px; 
  letter-spacing: 0.3px;
`;

export const switcherBaseStyle = css`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;

export const switcherDarkStyle = css`
  ${switcherBaseStyle}
  color: ${colors.textPrimary};
`;

export const switcherLightStyle = css`
  ${switcherBaseStyle}
  color: ${colors.textSecondary};
`;

export const StyledPhoneTitle = styled.p<{isToggled: boolean}>`
  color: ${props => props.isToggled ? "white" : colors.textPrimary};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.15px;
  overflow-wrap: anywhere;
`;

export const StyledPhoneText = styled.p<{isToggled: boolean}>`
  color: ${props => props.isToggled ? "white" : colors.textPrimary};
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.15px;
  overflow-wrap: anywhere;
`

export const sizeError = css`
  padding: 4px 8px;
  align-items: center;
  display: flex;
  position: absolute;
  bottom: -23px;
  border-radius: 4px;
  color: #621B16;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  background: #FEECEB;
`;

export const StyledText = styled(BaseTextStyles)<StyledTextProps>`
  ${props => props.type === TextStyleTypes.Primary && primaryStyle}
  ${props => props.type === TextStyleTypes.Secondary && secondaryStyle}
  ${props => props.type === TextStyleTypes.Error && errorStyle}
  ${props => props.type === TextStyleTypes.Hyperlink && hyperlinkStyle}
  ${props => props.type === TextStyleTypes.SizeError && sizeError}
  ${props => props.type === TextStyleTypes.Navigation && navigationStyle}
  ${props => props.type === TextStyleTypes.Button && buttonTextStyle}
  ${props => props.type === TextStyleTypes.SwitcherDark && switcherDarkStyle}
  ${props => props.type === TextStyleTypes.SwitcherLight && switcherLightStyle}
`;