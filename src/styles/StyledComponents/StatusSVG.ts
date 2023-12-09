import styled from "styled-components";
import { colors } from '../Variables';

interface StyledSVGStatusProps {
  status: 'success' | 'warning' | 'error'
}

export const StyledStatusSVG = styled.svg<StyledSVGStatusProps>`
  fill: ${props => {
    switch (props.status) {
      case 'success':
        return colors.statusSuccess;
      case 'warning':
        return colors.statusWarning;
      case 'error':
        return colors.statusError;
      default:
        return colors.statusError;
    }
  }};
`;
