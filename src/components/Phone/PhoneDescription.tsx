import { StyledPhoneDescription } from "styles/StyledComponents/Phone"
import { StyledPhoneText, StyledPhoneTitle, StyledText, TextStyleTypes } from "styles/StyledComponents/Text"
import { usePhone } from "./PhoneContext";
import { DEFAULT_DESCRIPTION, DEFAULT_POST_TITLE } from "utils/transformData";

const PhoneDescription = () => {
  const { isToggled, color, phoneTitle, phoneDescription } = usePhone();
  
  return (
    <StyledPhoneDescription color={color}>
      <StyledPhoneTitle isToggled={isToggled}>{phoneTitle || DEFAULT_POST_TITLE}</StyledPhoneTitle>
      <StyledPhoneText isToggled={isToggled}>{phoneDescription || DEFAULT_DESCRIPTION}</StyledPhoneText>
    </StyledPhoneDescription>
  );
}

export default PhoneDescription;