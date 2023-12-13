import FormHeader from "components/FormHeader/FormHeader";
import SwitcherContainer from "components/Switcher/SwitcherContainer";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import { StyledFormTitle } from "styles/StyledComponents/Title";

const SwitcherForm = () => {
  return (
    <>
      <FormHeader>
        <StyledFormTitle>Проверьте читабельность</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation}>Выберите цвет интерфейса, который будет <br />
          контрастнее смотреться на выбранном ранее фоне
        </StyledText>
      </FormHeader>
      <SwitcherContainer />
    </>
  )
}

export default SwitcherForm;
