import FormHeader from "components/FormHeader/FormHeader";
import { StyledFormTitle } from "styles/StyledComponents/Title";
import { StyledText, TextStyleTypes } from 'styles/StyledComponents/Text';
import { StyledColorPicker, StyledColorPickerCircle, StyledColorPickerLabel } from "styles/StyledComponents/Colorpicker";
import ColorPicker from "components/ColorPicker/ColorPicker";

const ColorPickerForm = () => {
  return (
    <>
      <FormHeader>
        <StyledFormTitle>Выберите цвет</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation}>
          Лучше всего подойдет цвет преобладающий на обложке
        </StyledText>
      </FormHeader>
      <ColorPicker />
    </>
  )
}


export default ColorPickerForm;