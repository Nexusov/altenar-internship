import Post from "./Post";
import { fetchPosts } from "services/postsService";
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

  return (
    <StyledPostsContainer className="main-content__posts posts">
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          image={post.image}
          author={post.author}
          name={post.name}
          date={post.date}
      />
      ))}
    </StyledPostsContainer>
  )
}

export default Posts