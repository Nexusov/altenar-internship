import Link from "components/Link/Link";
import SocialList from "components/SocialList/SocialList";

import { StyledHeader, StyledHeaderContent, StyledHeaderSocial, StyledHeaderTextContainer } from "styles/StyledComponents/Header";
import { StyledSubTitle } from "styles/StyledComponents/Subtitle";
import { StyledTitle } from "styles/StyledComponents/Title";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledHeaderSocial>
          <StyledHeaderTextContainer>
            <StyledTitle>Социальные сети</StyledTitle>
            <StyledSubTitle>Делитесь постами из соцсетей</StyledSubTitle>
          </StyledHeaderTextContainer>
          <SocialList />
        </StyledHeaderSocial>
        <Link src="creation" text="Добавить" />
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header;