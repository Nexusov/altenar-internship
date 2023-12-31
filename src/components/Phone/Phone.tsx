import { StyledPhone, StyledPhoneImage } from "styles/StyledComponents/Phone";
import PhoneBar from "./PhoneBar";
import Image, { ImageTypes } from "components/Image/Image";
import PhoneDescription from "./PhoneDescription";
import { usePhone } from "./PhoneContext";

const Phone = () => {

  const { imageUrl } = usePhone();

  return (
    <StyledPhone>
      <PhoneBar />
      <StyledPhoneImage>
        <Image type={ImageTypes.Preview} src={imageUrl} alt="Post image" />
      </StyledPhoneImage>
      <PhoneDescription />
    </StyledPhone>
  )
}

export default Phone;