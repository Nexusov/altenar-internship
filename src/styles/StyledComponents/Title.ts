import styled, { css } from "styled-components";
import { colors } from "styles/Variables";

export const BaseTitleStyles = css`
  font-size: 36px;
  font-weight: 400;
  line-height: 32.016px;
  color: ${colors.textPrimary};
`

export const StyledTitle = styled.h1`
  ${BaseTitleStyles}
`

export const StyledFormTitle = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
`