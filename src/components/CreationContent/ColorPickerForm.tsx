import FormHeader from "components/FormHeader/FormHeader";
import { StyledFormTitle } from "styles/StyledComponents/Title";
import { StyledText, TextStyleTypes } from 'styles/StyledComponents/Text';
import { StyledColorPicker, StyledColorPickerCircle, StyledColorPickerLabel } from "styles/StyledComponents/Colorpicker";

const ColorPickerForm = () => {
  return (
    <>
      <FormHeader>
        <StyledFormTitle className="text-wrapper__item form-title">Выберите цвет</StyledFormTitle>
        <StyledText type={TextStyleTypes.Navigation} className="text-wrapper_item text--navigation">
          Лучше всего подойдет цвет преобладающий на обложке
        </StyledText>
      </FormHeader>
      <StyledColorPicker>
        <StyledColorPickerCircle className="colorpicker__circle" type="color" id="colorPicker" defaultValue="#9197A3" />
        <StyledColorPickerLabel className="colorpicker__label" htmlFor="colorPicker">Выберите цвет</StyledColorPickerLabel>
      </StyledColorPicker>
    </>
  )
}


export default ColorPickerForm;