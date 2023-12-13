import { StyledSwitcherContainer } from "styles/StyledComponents/Switcher";
import Switcher from "./Switcher";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const SwitcherContainer = () => {
  return (
    <StyledSwitcherContainer>
      <StyledText type={TextStyleTypes.SwitcherDark}>Темный</StyledText>
        <Switcher/>
      <StyledText type={TextStyleTypes.SwitcherLight}>Светлый</StyledText>
    </StyledSwitcherContainer>
  )
}

export default SwitcherContainer;