import { StyledPostPublishInfoContainer, StyledPostStatusesContainer, StyledPostPublishInfoTextContainer } from '../../styles/StyledComponents/Post';
import StatusIcon from 'components/Icons/StatusIcon/StatusIcon';
import { StyledText, TextStyleTypes } from '../../styles/StyledComponents/Text';
import { StyledTime } from 'styles/StyledComponents/Date';

const PostPublishInfo = ({ author, date, status }) => {
  return (
    <StyledPostPublishInfoContainer>
      <StyledPostStatusesContainer>
        <StatusIcon status={status}/>
      </StyledPostStatusesContainer>
      <StyledPostPublishInfoTextContainer>
        <StyledText type={TextStyleTypes.Primary}>{author}</StyledText>
        <StyledTime dateTime={date}>{date}</StyledTime>
      </StyledPostPublishInfoTextContainer>
    </StyledPostPublishInfoContainer>
  )
}

export default PostPublishInfo;