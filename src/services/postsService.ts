import { PostStatuses } from "components/Posts/Post";
import httpsService from "./httpService";

interface IDeletePost {
  (postId: string): Promise<void>
}

interface IUpdatePostStatus {
  (postId: string, status: PostStatuses): Promise<void>
}

export const fetchPosts = async () => {
  try {
    const response = await httpsService.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export const deletePost: IDeletePost = async (postId) => {
  try {
    await httpsService.delete(`/posts/${postId}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error; 
  }
}

export const updatePostStatus: IUpdatePostStatus = async (postId, status) => {
  try {
    await httpsService.patch(`/posts/${postId}`, { status });
  } catch (error) {
    console.error("Error updating post status:", error);
    throw error;
  }
}