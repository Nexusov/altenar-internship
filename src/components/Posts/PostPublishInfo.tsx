import { StyledPostPublishInfoContainer, StyledPostStatusesContainer, StyledPostPublishInfoTextContainer } from '../../styles/StyledComponents/Post';
import StatusIcon from 'components/Icons/StatusIcon/StatusIcon';
import { StyledText, TextStyleTypes } from '../../styles/StyledComponents/Text';
import { StyledTime } from 'styles/StyledComponents/Date';

const PostPublishInfo = ({ author, date, status }) => {
  return (
    <StyledPostPublishInfoContainer className="post__publish-info publish-info">
      <StyledPostStatusesContainer className="publish-info__status-container status-container">
        <StatusIcon status={status}/>
      </StyledPostStatusesContainer>
      <StyledPostPublishInfoTextContainer className="publish-info__text-container">
        <StyledText type={TextStyleTypes.Primary} className="publish-info__author text--primary">{author}</StyledText>
        <StyledTime dateTime={date} className="publish-info__date text--secondary">{date}</StyledTime>
      </StyledPostPublishInfoTextContainer>
    </StyledPostPublishInfoContainer>
  )
}

export default PostPublishInfo;