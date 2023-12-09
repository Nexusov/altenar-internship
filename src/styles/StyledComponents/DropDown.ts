import styled from "styled-components";
import { primaryStyle } from "./Text";
import { colors } from "styles/Variables";

export const StyledDropDownContainer = styled.div`
  display: none;
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

export const StyledDropdownMenuToggle = styled.input.attrs({ type: 'checkbox', id: 'dropdown-menu' })`
  display: none;

  &:checked ~ ${StyledDropDownContainer} {
    display: block;
  }

  &:checked + ${StyledDropdownMenuLabel} svg rect {
    fill-opacity: 0.24;
  }

  &:checked + ${StyledDropdownMenuLabel} svg path {
    fill: ${colors.primary};
  }
`;