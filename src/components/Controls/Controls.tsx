import { StyledPostControlsContainer, StyledPostControlsItem } from '../../styles/StyledComponents/Post';
import LinkIcon from 'components/Icons/LinkIcon/LinkIcon';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

const Controls = ({ handleDelete, onPublish, status }) => {
  return (
    <StyledPostControlsContainer className="post__controls controls">
      <StyledPostControlsItem className="controls__item controls__item--link">
        <LinkIcon />
      </StyledPostControlsItem>
      <StyledPostControlsItem className="controls__item controls__item--navigation">
        <DropDownMenu handleDelete={handleDelete} onPublish={onPublish} status={status} />
      </StyledPostControlsItem>
    </StyledPostControlsContainer>
  )
}

export default Controls;