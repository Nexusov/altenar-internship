import Post from "./Post";
import { deletePost, fetchPosts } from "services/postsService";
import { useState, useEffect, useTransition } from 'react';
import { IPost, transformPost } from "utils/transformData";

import { StyledPostsContainer } from "styles/StyledComponents/Posts";
import Loader from "components/Loader/Loader";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      const fetchedPosts = await fetchPosts()
      const transformedPosts = fetchedPosts.map(transformPost)
      setPosts(transformedPosts)
      setIsLoading(false)
    }

    loadPosts()
  }, [])

  const handleDelete = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <StyledPostsContainer>
      {isLoading && <Loader />}
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          status={post.status}
          image={post.image}
          author={post.author}
          title={post.title}
          date={post.date}
          handleDelete={() => handleDelete(post.id)}
      />
      ))}
    </StyledPostsContainer>
  )
}

export default Posts