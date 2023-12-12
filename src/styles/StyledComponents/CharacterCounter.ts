import styled from "styled-components";
import { colors } from "styles/Variables";

export const StyledCharCounter = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: -8px 0 0 -30px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: ${colors.placeholderColor};
`;
