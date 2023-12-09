import Controls from "components/Controls/Controls";
import PostPreview from "./PostPreview";
import PostPublishInfo from "./PostPublishInfo";

import { StyledPost } from "styles/StyledComponents/Post";

const Post = ({ id, image, author, name, date }) => {
  return (
    <StyledPost className="posts__item post">
      <PostPreview image={image} author={author} name={name} />
      <PostPublishInfo author={author} date={date} />
      <Controls />
    </StyledPost>
  )
}

export default Post