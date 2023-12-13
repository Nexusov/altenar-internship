import { useState } from "react";
import Controls from "components/Controls/Controls";
import PostPreview from "./PostPreview";
import PostPublishInfo from "./PostPublishInfo";

import { StyledPost } from "styles/StyledComponents/Post";
import { IPost } from "utils/transformData";
import { updatePostStatus } from "services/postsService";

export enum PostStatuses {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export interface IPostProps extends IPost {
  handleDelete: () => void
}

const Post: React.FC<IPostProps> = ({ id, image, author, title, date, handleDelete, status: initialStatus }) => {
  const [status, setStatus] = useState(initialStatus); 

  const handlePublish = async () => {
    try {
      await updatePostStatus(id, PostStatuses.Success);
      setStatus(PostStatuses.Success);
    } catch (error) {
      console.error("Error while updating post status:", error);
    }
  }

  return (
    <StyledPost className="posts__item post">
      <PostPreview image={image} author={author} title={title} />
      <PostPublishInfo author={author} date={date} status={status}/>
      <Controls handleDelete={handleDelete} onPublish={handlePublish} status={status}/>
    </StyledPost>
  )
}

export default Post