import styled, { css } from "styled-components";
import { colors } from "styles/Variables";

interface StyledTextProps {
  type: 'primary' | 'secondary' | 'navigation' | 'hyperlink' | 'button' | 'switcher-light' | 'switcher-dark';
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

export const StyledText = styled(BaseTextStyles)<StyledTextProps>`
  ${props => props.type === 'primary' && primaryStyle}
  ${props => props.type === 'secondary' && secondaryStyle}
  ${props => props.type === 'navigation' && navigationStyle}
  ${props => props.type === 'hyperlink' && hyperlinkStyle}
  ${props => props.type === 'button' && buttonTextStyle}
  ${props => props.type === 'switcher-dark' && switcherDarkStyle}
  ${props => props.type === 'switcher-light' && switcherLightStyle}
`;