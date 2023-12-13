import { StyledPostControlsContainer, StyledPostControlsItem } from '../../styles/StyledComponents/Post';
import LinkIcon from 'components/Icons/LinkIcon/LinkIcon';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

const Controls = ({ handleDelete, onPublish, status }) => {
  return (
    <StyledPostControlsContainer>
      <StyledPostControlsItem>
        <LinkIcon />
      </StyledPostControlsItem>
      <StyledPostControlsItem>
        <DropDownMenu handleDelete={handleDelete} onPublish={onPublish} status={status} />
      </StyledPostControlsItem>
    </StyledPostControlsContainer>
  )
}

export default Controls;