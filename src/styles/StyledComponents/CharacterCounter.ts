import styled from "styled-components";
import { colors } from "styles/Variables";

export const StyledCharCounter = styled.span<{isError: boolean}>`
  position: absolute;
  top: 50%;
/*   transform: translateY(-50%); */
  transform: ${props => props.isError ? 'translateY(-10px)' : null};
  margin: -8px 0 0 -30px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: ${colors.placeholderColor};
`;
