import InputsContainer from "components/Input/InputsContainer";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import { InputTypes } from "styles/StyledComponents/Input";
import FormHeader from "components/FormHeader/FormHeader";
import { StyledFormTitle } from "styles/StyledComponents/Title";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import { usePhone } from "components/Phone/PhoneContext";

const AboutForm = () => {

  const { setPhoneDescription, setPhoneTitle } = usePhone();
  
  return (
    <>
      <FormHeader>
        <StyledFormTitle className="text-wrapper__item form-title">Расскажите о подборке</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation} className="text-wrapper_item text--navigation">Желательно сделать это кратко и ёмко</StyledText>
      </FormHeader>
      <InputsContainer>
        <Input placeholder="Дискриптор" type={InputTypes.Text} name="descriptor" id="descriptor" maxLength={30} />
        <Input placeholder="Название" type={InputTypes.PhoneText} name="name" id="name" maxLength={50} onChange={(e) => setPhoneTitle(e.target.value)} />
        <Textarea placeholder="Описание" name="description" id="description" onChange={(e) => setPhoneDescription(e.target.value)}></Textarea>
      </InputsContainer>
    </>
  )
}

export default AboutForm;