import { StyledSwitcherContainer } from "styles/StyledComponents/Switcher";
import Switcher from "./Switcher";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const SwitcherContainer = () => {
  return (
    <StyledSwitcherContainer className="form-block__switcher-container switcher-container">
      <StyledText type={TextStyleTypes.SwitcherDark} className="switcher-container__item text--switcher-dark ">Темный</StyledText>
        <Switcher/>
      <StyledText type={TextStyleTypes.SwitcherLight} className="switcher-container__item text--switcher-light">Светлый</StyledText>
    </StyledSwitcherContainer>
  )
}

export default SwitcherContainer;