import { PostStatuses } from "components/Posts/Post";
import { transformDateFormat } from "./transformDateFormat";

export interface IPost {
  id: string;
  status: PostStatuses;
  image: string;
  title: string;
  author: string;
  date: string;
}

export const DEFAULT_IMAGE_URL: string = '/assets/img/image12.jpg';
export const DEFAULT_NAME: string = 'NO NAME';
export const DEFAULT_DESCRIPTION: string = 'The useful properties of onions are versatile. It is a powerful antimicrobial that effectively fights internal and external infection. Onions have antiviral, antibacterial, anthelmintic, antifungal, disinfectant properties. In case of colds, it is not only consumed internally, but also left indoors in cut form to disinfect the air.'
export const DEFAULT_POST_TITLE = 'Onion'

export const transformPost = (post: IPost) => {
  return {
    id: post.id,
    status: post.status || PostStatuses.Warning,
    image: post.image || DEFAULT_IMAGE_URL,
    title: post.title || DEFAULT_NAME,
    author: post.author || DEFAULT_NAME,
    date: transformDateFormat(post.date)
  }
}
