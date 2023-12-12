import { StyledCreationTitle, StyledMainCreationHeader } from "styles/StyledComponents/CreationForm";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const MainCreationHeader = () => {
  return (
    <StyledMainCreationHeader className="add-form__description description ">
      <StyledCreationTitle className="description__title title">Создайте подборку</StyledCreationTitle>
      <StyledText type={TextStyleTypes.Navigation} className="description__text text--navigation">Перед началом ознакомьтесь с <StyledText as="span" type={TextStyleTypes.Hyperlink}>гайдлайнами</StyledText>, где <br />
        вы найдете примеры правильного оформления
      </StyledText>
    </StyledMainCreationHeader>
  )
}

export default MainCreationHeader;
