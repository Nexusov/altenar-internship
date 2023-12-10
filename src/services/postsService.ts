import httpsService from "./httpService";

interface IDeletePost {
  (postId: string): Promise<void>
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