import { StyledText } from "styles/StyledComponents/Text"
import { StyledButton} from '../../styles/StyledComponents/Button';

export interface ButtonProps {
  text: string,
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, disabled }) => {
  return (
    <StyledButton disabled={disabled}>
      <StyledText type={"button"}>{text}</StyledText>
    </StyledButton>
  )
}

export default Button;
