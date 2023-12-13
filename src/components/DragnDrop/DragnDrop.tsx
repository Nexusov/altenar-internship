import CloseIcon from "components/Icons/CloseIcon/CloseIcon";
import FileIcon from "components/Icons/FileIcon/FileIcon";
import { DragnDropStatuses, StyledDragnDrop } from "styles/StyledComponents/DragnDrop";
import DragnDropText from "./DragnDropText";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import Image, { ImageTypes } from "components/Image/Image";
import useFileUploader from "hooks/useFileUploader";

const DragnDrop = () => {

  const {
    status,
    handleReset,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInputChange,
    fileInputRef,
    imageUrl
  } = useFileUploader()

  return (
    <StyledDragnDrop
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      status={status}
    >
      {
        (status === DragnDropStatuses.Loading || status === DragnDropStatuses.Uploaded) 
          && <CloseIcon onClick={handleReset} /> 
      }
      {
        (status === DragnDropStatuses.Loading || status === DragnDropStatuses.Uploaded) 
          ? <Image type={ImageTypes.DragnDrop} alt="Uploaded Image" src={imageUrl} />
          : <FileIcon />
      }
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
      <DragnDropText />
      {status === DragnDropStatuses.Error && (
        <StyledText type={TextStyleTypes.SizeError}>
          Слишком маленький размер изображения
        </StyledText>
      )}
    </StyledDragnDrop>
  )
}

export default DragnDrop;