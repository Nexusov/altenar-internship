import { useState } from 'react';
import ActionIcon from 'components/Icons/ActionIcon/ActionIcon';
import { StyledDropDownContainer, StyledDropdownMenuLabel, StyledDropdownMenuToggle, StyledDropDownItem } from '../../styles/StyledComponents/DropDown';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledDropdownMenuLabel className="dropdown-menu-label" onClick={toggleDropdown}>
        <ActionIcon />
      </StyledDropdownMenuLabel>
      {isOpen && (
        <StyledDropDownContainer className="controls__dropdown dropdown">
          <StyledDropDownItem className="dropdown__item text--primary" onClick={toggleDropdown}>Опубликовать</StyledDropDownItem>
          <StyledDropDownItem className="dropdown__item text--primary" onClick={toggleDropdown}>Удалить</StyledDropDownItem>
        </StyledDropDownContainer>
      )}
    </>
  );
};

export default DropDownMenu;
