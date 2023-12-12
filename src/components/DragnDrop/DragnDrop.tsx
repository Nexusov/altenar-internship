import CloseIcon from "components/Icons/CloseIcon/CloseIcon";
import FileIcon from "components/Icons/FileIcon/FileIcon";
import { DragnDropStatuses, StyledDragnDrop } from "styles/StyledComponents/DragnDrop";
import DragnDropText from "./DragnDropText";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const DragnDrop = () => {
  return (
    <StyledDragnDrop className="form-block__drag-drop drag-drop">
      <CloseIcon />
      <FileIcon />
      <input type="file" id="fileInput" className="drag-drop__input" accept="image/*" />
      <DragnDropText />
      <StyledText type={TextStyleTypes.SizeError}>
        Слишком маленький размер изображения
      </StyledText>
    </StyledDragnDrop>
  )
}

export default DragnDrop;