import Image, { ImageTypes } from "components/Image/Image";
import { StyledPostImgContainer, StyledPostPreview } from "styles/StyledComponents/Post";
import { StyledPostTextContainer } from '../../styles/StyledComponents/Post';
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const PostPreview = ({ image, title, author }) => {
  return (
    <StyledPostPreview>
      <StyledPostImgContainer>
        <Image type={ImageTypes.Post} src={image} alt="Post image" />
      </StyledPostImgContainer>
      <StyledPostTextContainer>
        <StyledText type={TextStyleTypes.Primary}>{title}</StyledText>
        <StyledText type={TextStyleTypes.Secondary}>@{author}</StyledText>
      </StyledPostTextContainer>
    </StyledPostPreview>
  )
}

export default PostPreview;