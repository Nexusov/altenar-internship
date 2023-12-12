import DragnDrop from "components/DragnDrop/DragnDrop";
import FormHeader from "components/FormHeader/FormHeader";
import { StyledFormTitle } from "styles/StyledComponents/Title";

const FileUploadForm = () => {
  return (
    <>
      <FormHeader>
        <StyledFormTitle className="text-wrapper__item form-title">Загрузите обложку</StyledFormTitle>
      </FormHeader>
      <DragnDrop />
    </>
  )
}

export default FileUploadForm;