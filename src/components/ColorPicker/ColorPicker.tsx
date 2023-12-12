import { StyledColorPicker, StyledColorPickerCircle, StyledColorPickerLabel } from "styles/StyledComponents/Colorpicker";

const ColorPicker = () => {
  return (
    <StyledColorPicker>
      <StyledColorPickerCircle className="colorpicker__circle" type="color" id="colorPicker" defaultValue="#9197A3" />
      <StyledColorPickerLabel className="colorpicker__label" htmlFor="colorPicker">Выберите цвет</StyledColorPickerLabel>
    </StyledColorPicker>
  )
}

export default ColorPicker;