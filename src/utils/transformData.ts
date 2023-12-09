import { transformDateFormat } from "./transformDateFormat";

export interface IPost {
  id: string;
  image: string;
  name: string;
  author: string;
  date: string;
}

const DEFAULT_IMAGE_URL: string = 'src/assets/img/image12.jpg';

export const transformPost = (post: IPost) => {
  return {
    id: crypto.randomUUID(),
    image: post.image || DEFAULT_IMAGE_URL,
    name: post.name,
    author: post.author,
    date: transformDateFormat(post.date)
  };
};


