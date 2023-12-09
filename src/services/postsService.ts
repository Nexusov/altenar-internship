import httpsService from "./httpService";

export const fetchPosts = async () => {
  try {
    const response = await httpsService.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

