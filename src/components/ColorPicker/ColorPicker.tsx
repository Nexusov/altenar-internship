import { usePhone } from "components/Phone/PhoneContext";
import { StyledColorPicker, StyledColorPickerCircle, StyledColorPickerLabel } from "styles/StyledComponents/Colorpicker";


const ColorPicker = () => {
  const { setColor } = usePhone();
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <StyledColorPicker>
      <StyledColorPickerCircle 
        className="colorpicker__circle" 
        type="color" 
        id="colorPicker" 
        defaultValue="#9197A3" 
        onChange={handleColorChange} 
      />
      <StyledColorPickerLabel className="colorpicker__label" htmlFor="colorPicker">Выберите цвет</StyledColorPickerLabel>
    </StyledColorPicker>
  );
}

export default ColorPicker;