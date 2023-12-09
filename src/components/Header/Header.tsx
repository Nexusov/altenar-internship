import Button from "components/Button/Button";
import SocialList from "components/SocialList/SocialList";
import { StyledHeader, StyledHeaderContent, StyledHeaderSocial, StyledHeaderTextContainer } from "styles/StyledComponents/Header";
import { StyledSubTitle } from "styles/StyledComponents/Subtitle";
import { StyledTitle } from "styles/StyledComponents/Title";

const Header = () => {
  return (
    <StyledHeader className="header">
      <StyledHeaderContent className="header__content">
        <StyledHeaderSocial className="header__social">
          <StyledHeaderTextContainer className="header__text">
            <StyledTitle className="header__title title">Социальные сети</StyledTitle>
            <StyledSubTitle className="header__subtitle subtitle">Делитесь постами из соцсетей</StyledSubTitle>
          </StyledHeaderTextContainer>
          <SocialList />
        </StyledHeaderSocial>
        <Button size="small" type="link" href="../pages/creation.html" text="Добавить" />
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header;