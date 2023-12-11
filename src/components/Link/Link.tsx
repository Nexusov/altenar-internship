import PlusIcon from "components/Icons/ButtonIcon/ButtonIcon";

import { StyledText } from "styles/StyledComponents/Text"
import { StyledDisabledNavLink, StyledNavLink } from "styles/StyledComponents/Link";

export interface LinkProps {
  text: string,
  src: string
  disabled?: boolean;
}

const Link: React.FC<LinkProps> = ({ src, text, disabled}) => {
  return (
    disabled ? (
      <StyledDisabledNavLink>
        <PlusIcon />
        <StyledText type={"button"}>{text}</StyledText>
      </StyledDisabledNavLink>
    )  : (
      <StyledNavLink to={src}>
        <PlusIcon />
        <StyledText type={"button"}>{text}</StyledText>
      </StyledNavLink>
    )
  )
}

export default Link;
