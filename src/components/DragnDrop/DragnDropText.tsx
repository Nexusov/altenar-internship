import { StyledDragnDropTextContainer } from "styles/StyledComponents/DragnDrop";
import { StyledDragnDropLabel } from '../../styles/StyledComponents/DragnDrop';
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const DragnDropText = () => {
  return (
    <StyledDragnDropTextContainer>
      <StyledDragnDropLabel htmlFor="fileInput">
        Перетащите файл или <StyledText type={TextStyleTypes.Hyperlink} as="span">загрузите с компьютера</StyledText>
      </StyledDragnDropLabel>
      <StyledText type={TextStyleTypes.Secondary}>Соотношение 1:1. Минимальный размер 1242х1242 px</StyledText>
    </StyledDragnDropTextContainer>
  )
}

export default DragnDropText;