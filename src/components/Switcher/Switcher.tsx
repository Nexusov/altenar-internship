import { StyledSwitcher } from "styles/StyledComponents/Switcher";
import { usePhone } from "../Phone/PhoneContext";

const Switcher = () => {
  const { isToggled, toggleSwitch } = usePhone();

  return (
    <StyledSwitcher>
      <input type="checkbox" checked={isToggled} onChange={toggleSwitch}/>
      <span></span>
    </StyledSwitcher>
  )
}

export default Switcher;