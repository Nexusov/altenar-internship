import Button from "components/Button/Button";
import { StyledFooter } from "styles/StyledComponents/Footer";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const CreationFooter = () => {
  return (
    <StyledFooter className="form-block__create-container create-container">
      <Button text="Добавить" />
      <StyledText type={TextStyleTypes.Secondary} className="create-container__text text--secondary">Подборка не будет опубликована. Вы сможете добавить <br />
        продукты и внести правки</StyledText>
    </StyledFooter>
  )
}

export default CreationFooter;