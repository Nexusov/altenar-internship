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
        type="color" 
        id="colorPicker" 
        defaultValue="#9197A3" 
        onChange={handleColorChange} 
      />
      <StyledColorPickerLabel htmlFor="colorPicker">Выберите цвет</StyledColorPickerLabel>
    </StyledColorPicker>
  );
}

export default ColorPicker;