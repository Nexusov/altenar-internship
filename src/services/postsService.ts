import { PostStatuses } from "components/Posts/Post";
import httpsService from "./httpService";

interface IDeletePost {
  (postId: string): Promise<void>
}

interface ICreatePostRequset {
  postTitle: string,
  postDescription: string,
  postColor: string,
  isDark: boolean,
  shopName: string,
  shopLink: string,
  postAuthor: string,
  postDate: string,
  postStatus: string,
  postImgURL: string
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

export const createPost = async (data: ICreatePostRequset) => {
  try {
    await httpsService.post(`/posts/`, {
      id: crypto.randomUUID,
      title: data.postTitle,
      description: data.postDescription,
      color: data.postColor,
      isDark: data.isDark,
      shopName: data.shopName,
      shopLink: data.shopLink,
      author: data.postAuthor,
      date: data.postDate,
      status: data.postStatus,
      image: data.postImgURL
    });
  } catch (error) {
    console.error("Error creating post:", error);
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