
import { StyledHeaderButton } from "styles/StyledComponents/Header"
import { StyledText } from "styles/StyledComponents/Text"
import { StyledButtonProps } from '../../styles/StyledComponents/Button';
import ButtonIcon from "components/Icons/ButtonIcon/ButtonIcon";
import styled from "styled-components";

const ButtonWrapper = styled(StyledHeaderButton).attrs<StyledButtonProps>(({ type }) => ({
  as: type === 'button' ? 'button' : 'a'
}))``;

const Button: React.FC<StyledButtonProps> = ({ size, type, disabled, href, text }) => {
  return (
    <ButtonWrapper size={size} type={type} disabled={disabled} href={href} text={text}>
      {size === "small" && <ButtonIcon />}
      <StyledText type={"button"}>{text}</StyledText>
    </ButtonWrapper> 
  );
}

export default Button