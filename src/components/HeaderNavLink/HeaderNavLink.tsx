import NavArrowIcon from "components/Icons/NavArrowIcon/NavArrowIcon";
import { Link } from "react-router-dom";
import { StyledFixedHeaderNavLink } from "styles/StyledComponents/FixedNavHeader";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

interface IHeaderNavLinkProps {
  src: string,
  children?: React.ReactNode;
}

const HeaderNavLink: React.FC<IHeaderNavLinkProps> = ({ src }) => {
  return (
    <StyledFixedHeaderNavLink to={src}>
      <NavArrowIcon />
      <StyledText type={TextStyleTypes.Navigation} >Вернуться к списку</StyledText>
    </StyledFixedHeaderNavLink>
  )
}

export default HeaderNavLink;