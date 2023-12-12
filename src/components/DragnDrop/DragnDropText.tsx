import { StyledDragnDropTextContainer } from "styles/StyledComponents/DragnDrop";
import { StyledDragnDropLabel } from '../../styles/StyledComponents/DragnDrop';
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const DragnDropText = () => {
  return (
    <StyledDragnDropTextContainer>
      <StyledDragnDropLabel htmlFor="fileInput" className="drag-drop__label text--primary">
        Перетащите файл или <StyledText type={TextStyleTypes.Hyperlink} as="span" className="text--hyperlink">загрузите с компьютера</StyledText>
      </StyledDragnDropLabel>
      <StyledText type={TextStyleTypes.Secondary} className="drap-drop__file-info text--secondary">Соотношение 1:1. Минимальный размер 1242х1242 px</StyledText>
    </StyledDragnDropTextContainer>
  )
}

export default DragnDropText;