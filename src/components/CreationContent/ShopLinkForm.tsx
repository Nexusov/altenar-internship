import FormHeader from "components/FormHeader/FormHeader";
import Input from "components/Input/Input";
import InputsContainer from "components/Input/InputsContainer";
import { usePhone } from "components/Phone/PhoneContext";
import { InputTypes } from "styles/StyledComponents/Input";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import { StyledFormTitle } from "styles/StyledComponents/Title";

const ShopLinkForm = () => {

  const { setShopName, setShopURL } = usePhone();

  return (
    <>
      <FormHeader>
        <StyledFormTitle>Оставьте ссылку</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation}>Лучше всего ссылаться на каталог вашего магазина или <br />
          промо-страницу</StyledText>
      </FormHeader>
      <InputsContainer>
        <Input placeholder="Название" type={InputTypes.Text} name="shopName" id="shopName" maxLength={30} onChange={(e) => setShopName(e.target.value)}/>
        <Input placeholder="Ссылка" type={InputTypes.Url} name="link" id="link" maxLength={50} onChange={(e) => setShopURL(e.target.value)}/>
      </InputsContainer>
    </>
  )
}

export default ShopLinkForm;