import { StyledPostControlsContainer, StyledPostControlsItem } from '../../styles/StyledComponents/Post';
import LinkIcon from 'components/Icons/LinkIcon/LinkIcon';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

const Controls = ( {handleDelete} ) => {
  return (
    <StyledPostControlsContainer className="post__controls controls">
      <StyledPostControlsItem className="controls__item controls__item--link">
        <LinkIcon />
      </StyledPostControlsItem>
      <StyledPostControlsItem className="controls__item controls__item--navigation">
        <DropDownMenu handleDelete={handleDelete}/>
      </StyledPostControlsItem>
    </StyledPostControlsContainer>
  )
}

export default Controls;