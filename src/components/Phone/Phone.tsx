import { StyledPhone, StyledPhoneImage } from "styles/StyledComponents/Phone";
import PhoneBar from "./PhoneBar";
import Image, { ImageTypes } from "components/Image/Image";
import PhoneDescription from "./PhoneDescription";

const Phone = () => {
  return (
    <StyledPhone className="preview__phone phone">
      <PhoneBar />
      <StyledPhoneImage className="phone__image-container image-container">
        <Image type={ImageTypes.Preview} src="/assets/img/image12.jpg" alt="Post image" />
      </StyledPhoneImage>
      <PhoneDescription />
    </StyledPhone>
  )
}

export default Phone;