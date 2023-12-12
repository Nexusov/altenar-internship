import FormHeader from "components/FormHeader/FormHeader";
import Switcher from "components/Switcher/Switcher";
import SwitcherContainer from "components/Switcher/SwitcherContainer";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import { StyledFormTitle } from "styles/StyledComponents/Title";

const SwitcherForm = () => {
  return (
    <>
      <FormHeader>
        <StyledFormTitle className="text-wrapper__item form-title">Проверьте читабельность</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation} className="text-wrapper_item text--navigation">Выберите цвет интерфейса, который будет <br />
          контрастнее смотреться на выбранном ранее фоне
        </StyledText>
      </FormHeader>
      <SwitcherContainer />
    </>
  )
}

export default SwitcherForm;
