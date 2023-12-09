import { StyledPostPublishInfoContainer, StyledPostStatusContainer, StyledPostPublishInfoTextContainer } from '../../styles/StyledComponents/Post';
import StatusIcon from 'components/Icons/StatusIcon/StatusIcon';
import { StyledText } from '../../styles/StyledComponents/Text';
import { StyledTime } from 'styles/StyledComponents/Date';

const PostPublishInfo = ( {author, date} ) => {
  return (
    <StyledPostPublishInfoContainer className="post__publish-info publish-info">
      <StyledPostStatusContainer className="publish-info__status-container status-container">
        <StatusIcon />
      </StyledPostStatusContainer>
      <StyledPostPublishInfoTextContainer className="publish-info__text-container">
        <StyledText type="primary" className="publish-info__author text--primary">{author}</StyledText>
        <StyledTime dateTime="2022-02-25" className="publish-info__date text--secondary">{date}</StyledTime>
      </StyledPostPublishInfoTextContainer>
    </StyledPostPublishInfoContainer>
  )
}

export default PostPublishInfo;