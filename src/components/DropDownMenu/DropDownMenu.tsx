import { useState } from 'react';
import ActionIcon from 'components/Icons/ActionIcon/ActionIcon';
import { StyledDropDownContainer, StyledDropdownMenuLabel, StyledDropDownItem } from '../../styles/StyledComponents/DropDown';

interface IDropDownMenu {
  handleDelete: () => void 
}

const DropDownMenu: React.FC<IDropDownMenu> = ({ handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledDropdownMenuLabel onClick={toggleDropdown}>
        <ActionIcon active={isOpen} />
      </StyledDropdownMenuLabel>
      {isOpen && (
        <StyledDropDownContainer>
          <StyledDropDownItem>Опубликовать</StyledDropDownItem>
          <StyledDropDownItem onClick={handleDelete}>Удалить</StyledDropDownItem>
        </StyledDropDownContainer>
      )}
    </>
  );
};

export default DropDownMenu;
