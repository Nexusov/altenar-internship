import Image, { ImageTypes } from "components/Image/Image";
import { StyledPostImgContainer, StyledPostPreview } from "styles/StyledComponents/Post";
import { StyledPostTextContainer } from '../../styles/StyledComponents/Post';
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";

const PostPreview = ({ image, title, author }) => {
  return (
    <StyledPostPreview className="post__preview">
      <StyledPostImgContainer className="post__img-container">
        <Image type={ImageTypes.Post} src={image} alt="Post image" />
      </StyledPostImgContainer>
      <StyledPostTextContainer className="post__text-container">
        <StyledText type={TextStyleTypes.Primary} className="post__name text text--primary">{title}</StyledText>
        <StyledText type={TextStyleTypes.Secondary} className="post__author text text--secondary">@{author}</StyledText>
      </StyledPostTextContainer>
    </StyledPostPreview>
  )
}

export default PostPreview;