import { StyledButtonIcon } from "styles/StyledComponents/Button";
import { StyledHeader, StyledHeaderButton, StyledHeaderContent, StyledHeaderSocial, StyledHeaderSocialList, StyledHeaderSocialListItem, StyledHeaderTextContainer } from "styles/StyledComponents/Header";
import { StyledSubTitle } from "styles/StyledComponents/Subtitle";
import { StyledText } from "styles/StyledComponents/Text";
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
        <StyledHeaderSocialList className="header__social-list">
          <StyledHeaderSocialListItem active className="header__social-list__item header__social-list__item--active">instagram</StyledHeaderSocialListItem>
          <StyledHeaderSocialListItem className="header__social-list__item">vkontakte</StyledHeaderSocialListItem>
        </StyledHeaderSocialList>
      </StyledHeaderSocial>
      <StyledHeaderButton size={"small"} className="header__button btn btn--small" href="../pages/creation.html">
          <StyledButtonIcon className="btn_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <g id="filled/content/add-circle-outline" clip-path="url(#clip0_1909_307)">
                <path id="Vector"
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1909_307">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </StyledButtonIcon>
          <StyledText type={"button"} className="btn__text">Добавить</StyledText>
      </StyledHeaderButton>
    </StyledHeaderContent>
  </StyledHeader>
  )
}

export default Header;