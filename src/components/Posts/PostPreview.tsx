import Image from "components/Image/Image";
import { StyledPostImgContainer, StyledPostPreview } from "styles/StyledComponents/Post";
import { StyledPostTextContainer } from '../../styles/StyledComponents/Post';
import { StyledText } from "styles/StyledComponents/Text";

const PostPreview = ( {image, name, author} ) => {
  return (
    <StyledPostPreview className="post__preview">
      <StyledPostImgContainer className="post__img-container">
        <Image src={image} alt="Post image" />
      </StyledPostImgContainer>
      <StyledPostTextContainer className="post__text-container">
        <StyledText type="primary" className="post__name text text--primary">{name}</StyledText>
        <StyledText type="secondary" className="post__author text text--secondary">@{author}</StyledText>
      </StyledPostTextContainer>
    </StyledPostPreview>
  )
}

export default PostPreview;