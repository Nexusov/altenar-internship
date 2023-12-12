import { StyledSwitcher } from "styles/StyledComponents/Switcher";
import { useState } from 'react';

const Switcher = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <StyledSwitcher className="switcher-container__item switcher">
      <input type="checkbox" onChange={handleToggle}/>
      <span></span>
    </StyledSwitcher>
  )
}

export default Switcher;