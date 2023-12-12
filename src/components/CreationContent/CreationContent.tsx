import { StyledCreationContentContainer } from "styles/StyledComponents/CreationForm";
import AboutForm from "./AboutForm";
import Divider from "components/Divider/Divider";
import FileUploadForm from "./FileUploadForm";
import ColorPickerForm from "./ColorPickerForm";
import SwitcherForm from "./SwitcherForm";
import ShopLinkForm from "./ShopLinkForm";
import CreationFooter from "./CreationFooter";

const CreationContent = () => {
  return (
    <StyledCreationContentContainer className="add-form__content form-content">
      <AboutForm />
      <Divider />
      <FileUploadForm />
      <ColorPickerForm />
      <Divider />
      <SwitcherForm />
      <Divider />
      <ShopLinkForm />
      <CreationFooter />
    </StyledCreationContentContainer>
  )
}


export default CreationContent;