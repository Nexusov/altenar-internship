import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text"
import { StyledButton } from '../../styles/StyledComponents/Button';
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <StyledButton {...props} type="submit">
      <StyledText type={TextStyleTypes.Button}>{text}</StyledText>
    </StyledButton>
  )
}

export default Button;
