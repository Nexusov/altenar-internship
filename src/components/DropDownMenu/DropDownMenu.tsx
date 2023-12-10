import { useState } from 'react';
import ActionIcon from 'components/Icons/ActionIcon/ActionIcon';
import { StyledDropDownContainer, StyledDropdownMenuLabel, StyledDropDownItem } from '../../styles/StyledComponents/DropDown';
import { PostStatuses } from 'components/Posts/Post';

interface IDropDownMenu {
  handleDelete: () => void
  onPublish: () => void
  status: string
}

const DropDownMenu: React.FC<IDropDownMenu> = ({ handleDelete, onPublish, status }) => {
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
          {status !== PostStatuses.Success && (
            <StyledDropDownItem onClick={onPublish}>Опубликовать</StyledDropDownItem>
          )}
          <StyledDropDownItem onClick={handleDelete}>Удалить</StyledDropDownItem>
        </StyledDropDownContainer>
      )}
    </>
  );
};

export default DropDownMenu;
