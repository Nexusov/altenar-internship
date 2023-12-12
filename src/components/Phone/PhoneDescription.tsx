import { StyledPhoneDescription } from "styles/StyledComponents/Phone"
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text"

const PhoneDescription = () => {
  return (
    <StyledPhoneDescription className="phone__description-container description-container">
      <StyledText type={TextStyleTypes.PhoneTitle}>Onion</StyledText>
      <StyledText type={TextStyleTypes.Primary}>
        The useful properties of onions
        are versatile. It is a powerful antimicrobial that effectively fights internal and
        external infection. Onions have antiviral, antibacterial, anthelmintic, antifungal,
        disinfectant properties. In case of colds, it is not only consumed internally, but
        also left indoors in cut form to disinfect the air. </StyledText>
    </StyledPhoneDescription>
  )
}

export default PhoneDescription;