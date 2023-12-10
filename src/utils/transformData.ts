import { PostStatuses } from "components/Posts/Post";
import { transformDateFormat } from "./transformDateFormat";

export interface IPost {
  id: string;
  status: PostStatuses;
  image: string;
  name: string;
  author: string;
  date: string;
}

const DEFAULT_IMAGE_URL: string = '/assets/img/image12.jpg';
const DEFAULT_NAME: string = 'NO NAME';

export const transformPost = (post: IPost) => {
  return {
    id: post.id,
    status: post.status || PostStatuses.Warning,
    image: post.image || DEFAULT_IMAGE_URL,
    name: post.name || DEFAULT_NAME,
    author: post.author || DEFAULT_NAME,
    date: transformDateFormat(post.date)
  }
}

/* Письмо для Саши:

  Хотел тут id чере crypto.randomUUID() делать, 
  но тогда они отличались бы от id в json :( 

  id: crypto.randomUUID() RIP
*/