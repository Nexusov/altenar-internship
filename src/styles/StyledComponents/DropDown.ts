import styled from "styled-components";
import { primaryStyle } from "./Text";
import { colors } from "styles/Variables";

interface StyledSVGProps {
  active: boolean
}

export const StyledDropDownContainer = styled.div`
  width: 134px;
  z-index: 100;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 8px 0;
  margin-top: 7px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px 0 rgba(0, 0, 0, 0.20);
`

export const StyledDropDownItem = styled.p`
  ${primaryStyle}

  padding: 9px 0 7px 16px;
  
  &:hover {
    background: ${colors.dropDownItemHover}
  }
`

export const StyledDropdownMenuLabel = styled.label.attrs({ htmlFor: 'dropdown-menu' })`
  cursor: pointer;
`;

export const StyledSvg = styled.svg<StyledSVGProps>`
  path {
    fill: ${props => props.active ? colors.primary : '#757575'}
  }

  rect {
    fill-opacity: ${props => props.active ? '0.24' : '0'};

    &:hover {
      fill-opacity: ${props => props.active ? '0.24' : '0.04'};
    }
  }
`;

