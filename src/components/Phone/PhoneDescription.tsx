import { StyledPhoneDescription } from "styles/StyledComponents/Phone"
import { StyledPhoneText, StyledPhoneTitle, StyledText, TextStyleTypes } from "styles/StyledComponents/Text"
import { usePhone } from "./PhoneContext";

const PhoneDescription = () => {
  const { isToggled, color } = usePhone();
  
  return (
    <StyledPhoneDescription color={color} className="phone__description-container description-container">
      <StyledPhoneTitle isToggled={isToggled}>Onion</StyledPhoneTitle>
      <StyledPhoneText isToggled={isToggled}>
        The useful properties of onions
        are versatile. It is a powerful antimicrobial that effectively fights internal and
        external infection. Onions have antiviral, antibacterial, anthelmintic, antifungal,
        disinfectant properties. In case of colds, it is not only consumed internally, but
        also left indoors in cut form to disinfect the air.
      </StyledPhoneText>
    </StyledPhoneDescription>
  );
}

export default PhoneDescription;