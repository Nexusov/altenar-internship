import styled from "styled-components";
import { colors } from "styles/Variables";

export enum InputTypes {
  Button = "button",
  Checkbox = "checkbox",
  Color = "color",
  Date = "date",
  DatetimeLocal = "datetime-local",
  Email = "email",
  File = "file",
  Hidden = "hidden",
  Image = "image",
  Month = "month",
  Number = "number",
  Password = "password",
  Radio = "radio",
  Range = "range",
  Reset = "reset",
  Search = "search",
  Submit = "submit",
  Tel = "tel",
  Text = "text",
  Time = "time",
  Url = "url",
  Week = "week",
}

export interface StyledInputProps {
  type: InputTypes,
  isError: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  border-color: ${props => props.isError ? `${colors.inputErrorBorder}` : `${colors.inputBorderColor}`};

  &:focus {
    border: ${props => props.isError ? `2px solid ${colors.inputErrorBorder}` : `2px solid${colors.inputBorderColor}`};
  }
`

export const StyledInputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    margin-top: 4px;
  }
`;
