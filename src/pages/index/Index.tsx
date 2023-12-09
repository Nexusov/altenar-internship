import Header from "components/Header";
import { StyledTime } from "styles/StyledComponents/Date";
import { StyledDropDownContainer } from "styles/StyledComponents/DropDown";
import { StyledMain } from "styles/StyledComponents/Main";
import { StyledMainTableTitle, StyledMainTitlesContainer, StyledMainColumns  } from "styles/StyledComponents/Main";
import { StyledPost, StyledPostControlsContainer, StyledPostImgContainer, StyledPostPreview, StyledPostPublishInfoContainer, StyledPostPublishInfoTextContainer, StyledPostStatusContainer, StyledPostTextContainer} from "styles/StyledComponents/Post";
import { StyledPostsContainer} from "styles/StyledComponents/Posts";
import { StyledStatusSVG } from "styles/StyledComponents/StatusSVG";
import { StyledText } from "styles/StyledComponents/Text";

const Index = () => {
  return (
    <>
      <Header />

      <StyledMain className="main-content">
        <StyledMainColumns className="main-content__columns">
          <StyledMainTitlesContainer className="main-content__titles titles">
            <StyledMainTableTitle titleName="post" className="titles__item table-title--post-column text--primary">Пост</StyledMainTableTitle>
            <StyledMainTableTitle titleName="published" className="titles__item table-title--published-column text--primary">Опубликовано</StyledMainTableTitle>
            <StyledMainTableTitle titleName="link" className="titles__item table-title--link-column text--primary">Ссылка</StyledMainTableTitle>
          </StyledMainTitlesContainer>
          <StyledPostsContainer className="main-content__posts posts">
            <StyledPost className="posts__item post">
              <StyledPostPreview className="post__preview">
                <StyledPostImgContainer className="post__img-container">
                  <img src="../../assets/img/image12.jpg" alt="Post image" className="post__img" />
                </StyledPostImgContainer>
                <StyledPostTextContainer className="post__text-container">
                  <StyledText type="primary" className="post__name text text--primary">Onion</StyledText>
                  <StyledText type="secondary" className="post__author text text--secondary">@altenar</StyledText>
                </StyledPostTextContainer>
              </StyledPostPreview>
              <StyledPostPublishInfoContainer className="post__publish-info publish-info">
                <StyledPostStatusContainer className="publish-info__status-container status-container">
                  <StyledStatusSVG status="warning" className="status-container--warning" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.5" cy="4.5" r="4.5" />
                  </StyledStatusSVG>
                </StyledPostStatusContainer>
                <StyledPostPublishInfoTextContainer className="publish-info__text-container">
                  <StyledText type="primary" className="publish-info__author text--primary">altenar</StyledText>
                  <StyledTime dateTime="2022-02-25" className="publish-info__date text--secondary">25/02/2022</StyledTime>
                </StyledPostPublishInfoTextContainer>
              </StyledPostPublishInfoContainer>
              <StyledPostControlsContainer className="post__controls controls">
                <div className="controls__item controls__item--link">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#2196F3" fill-opacity="0.00" />
                    <g clip-path="url(#clip0_24_8196)">
                      <path
                        d="M15.9 24C15.9 22.29 17.29 20.9 19 20.9H23V19H19C16.24 19 14 21.24 14 24C14 26.76 16.24 29 19 29H23V27.1H19C17.29 27.1 15.9 25.71 15.9 24ZM20 25H28V23H20V25ZM29 19H25V20.9H29C30.71 20.9 32.1 22.29 32.1 24C32.1 25.71 30.71 27.1 29 27.1H25V29H29C31.76 29 34 26.76 34 24C34 21.24 31.76 19 29 19Z"
                        fill="#757575" />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_8196">
                        <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* TODO: Я ТУТ ХЗ */}
                
                <div className="controls__item controls__item--navigation">
                  <input className="dropdown-menu-toggle" type="checkbox" name="dropdown-menu" id="dropdown-menu-1" />
                  <label className="dropdown-menu-label" htmlFor="dropdown-menu-1">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#2196F3" fill-opacity="0.0" />
                      <g clip-path="url(#clip0_24_8197)">
                        <path
                          d="M24 20C25.1 20 26 19.1 26 18C26 16.9 25.1 16 24 16C22.9 16 22 16.9 22 18C22 19.1 22.9 20 24 20ZM24 22C22.9 22 22 22.9 22 24C22 25.1 22.9 26 24 26C25.1 26 26 25.1 26 24C26 22.9 25.1 22 24 22ZM24 28C22.9 28 22 28.9 22 30C22 31.1 22.9 32 24 32C25.1 32 26 31.1 26 30C26 28.9 25.1 28 24 28Z"
                          fill="#757575" />
                      </g>
                      <defs>
                        <clipPath id="clip0_24_8197">
                          <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <StyledDropDownContainer className="controls__dropdown dropdown">
                    <p className="dropdown__item text--primary">Опубликовать</p>
                    <p className="dropdown__item text--primary">Удалить</p>
                  </StyledDropDownContainer>
                </div>
              </StyledPostControlsContainer>
            </StyledPost>

          </StyledPostsContainer>
        </StyledMainColumns>
      </StyledMain>

  </>

  )
}

export default Index;