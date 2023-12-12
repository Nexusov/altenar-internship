import { StyledSwitcher } from "styles/StyledComponents/Switcher";
import { useState } from 'react';
import { usePhone } from "../Phone/PhoneContext";

const Switcher = () => {
  const { isToggled, toggleSwitch } = usePhone();

  return (
    <StyledSwitcher className="switcher-container__item switcher">
      <input type="checkbox" checked={isToggled} onChange={toggleSwitch}/>
      <span></span>
    </StyledSwitcher>
  )
}

export default Switcher;