import Post from "./Post";
import { deletePost, fetchPosts } from "services/postsService";
import { useState, useEffect } from 'react';
import { IPost, transformPost } from "utils/transformData";

import { StyledPostsContainer } from "styles/StyledComponents/Posts";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      const transformedPosts = fetchedPosts.map(transformPost);
      setPosts(transformedPosts);
    };

    loadPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <StyledPostsContainer className="main-content__posts posts">
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          status={post.status}
          image={post.image}
          author={post.author}
          name={post.name}
          date={post.date}
          handleDelete={() => handleDelete(post.id)}
      />
      ))}
    </StyledPostsContainer>
  )
}

export default Posts