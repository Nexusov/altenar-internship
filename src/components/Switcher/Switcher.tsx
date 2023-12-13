import { usePhone } from "components/Phone/PhoneContext";
import { StyledSwitcher } from "styles/StyledComponents/Switcher";

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