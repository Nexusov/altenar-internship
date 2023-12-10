import styled from "styled-components";
import { colors } from '../Variables';
import { IPost } from "utils/transformData";

export interface StyledSVGStatusProps {
  status: IPost['status'];
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
